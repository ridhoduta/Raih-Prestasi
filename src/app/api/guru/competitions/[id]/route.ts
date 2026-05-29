import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { triggerPusher, CHANNELS, EVENTS } from "@/lib/pusher";

const competitionDetailSelect = {
  id: true,
  title: true,
  description: true,
  thumbnail: true,
  isActive: true,
  type: true,
  startDate: true,
  endDate: true,
  categoryId: true,
  levelId: true,
  createdBy: true,
  createdAt: true,
  category: {
    select: { id: true, name: true },
  },
  level: {
    select: { id: true, name: true },
  },
  CompetitionFormField: {
    select: {
      id: true,
      label: true,
      fieldType: true,
      isRequired: true,
      options: true,
      order: true,
      competitionId: true,
    },
    orderBy: { order: "asc" as const },
  },
};

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(req: Request, context: Context) {
  try {
    const { id } = await context.params;

    const competition = await prisma.competition.findUnique({
      where: { id },
      select: competitionDetailSelect,
    });

    if (!competition) {
      return NextResponse.json(
        { success: false, message: "Kompetisi tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: competition,
    });
  } catch (error) {
    console.error("GET /api/guru/competitions/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data kompetisi" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const {
      title,
      description,
      thumbnail,
      categoryId,
      levelId,
      type,
      startDate,
      endDate,
      isActive,
      formFields,
    } = body;

    // Fetch existing fields and registration count
    const [existingFields, registrationCount] = await Promise.all([
      prisma.competitionFormField.findMany({
        where: { competitionId: id },
        orderBy: { order: "asc" },
      }),
      prisma.competitionRegistration.count({
        where: { competitionId: id },
      }),
    ]);

    // Check if formFields array is modified
    const isFormFieldsUnchanged = () => {
      if (!formFields) return true;
      if (existingFields.length !== formFields.length) return false;
      return existingFields.every((ext : any, idx : any) => {
        const inc = formFields[idx];
        if (!inc) return false;

        const getCleanOptions = (opt: any) => {
          if (Array.isArray(opt)) return opt.map(s => String(s).trim()).filter(Boolean);
          if (typeof opt === "string") return opt.split(",").map(s => s.trim()).filter(Boolean);
          return [];
        };

        const extOptions = getCleanOptions(ext.options);
        const incOptions = getCleanOptions(inc.options);

        return (
          ext.label === inc.label &&
          ext.fieldType === inc.fieldType &&
          ext.isRequired === (inc.isRequired || false) &&
          JSON.stringify(extOptions) === JSON.stringify(incOptions)
        );
      });
    };

    const formUnchanged = isFormFieldsUnchanged();

    if (!formUnchanged && registrationCount > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Tidak dapat mengubah struktur formulir pendaftaran karena sudah ada siswa yang terdaftar pada kompetisi ini",
        },
        { status: 400 },
      );
    }

    const updateData: any = {
      title,
      description,
      thumbnail,
      categoryId,
      levelId,
      type,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      isActive,
    };

    if (!formUnchanged) {
      updateData.CompetitionFormField = {
        deleteMany: {},
        create:
          formFields?.map((f: any, idx: number) => ({
            label: f.label,
            fieldType: f.fieldType,
            isRequired: f.isRequired || false,
            options: typeof f.options === "string" 
              ? f.options.split(",").map((s: string) => s.trim()).filter((s: string) => s !== "") 
              : f.options,
            order: f.order || idx,
          })) || [],
      };
    }

    const competition = await prisma.competition.update({
      where: { id },
      data: updateData,
      select: competitionDetailSelect,
    });

    triggerPusher(CHANNELS.PRESTASI, EVENTS.KOMPETISI_UPDATE, {
      id: competition.id,
      title: competition.title,
      isActive: competition.isActive,
    });

    return NextResponse.json({
      success: true,
      message: "Kompetisi berhasil diperbarui",
      data: competition,
    });
  } catch (error) {
    console.error("PUT /api/guru/competitions/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal update kompetisi" },
      { status: 500 }
    );
  }
}

export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    // Delete all related records in correct order to avoid FK constraint violations
    await prisma.$transaction(async (tx: any) => {
      // 1. Delete RegistrationAnswers linked to this competition's form fields
      await tx.registrationAnswer.deleteMany({
        where: { field: { competitionId: id } },
      });

      // 2. Delete RegistrationAnswers linked to this competition's registrations
      await tx.registrationAnswer.deleteMany({
        where: { registration: { competitionId: id } },
      });

      // 3. Delete CompetitionRegistrations
      await tx.competitionRegistration.deleteMany({
        where: { competitionId: id },
      });

      // 4. Delete CompetitionFormFields
      await tx.competitionFormField.deleteMany({
        where: { competitionId: id },
      });

      // 5. Delete the Competition itself
      await tx.competition.delete({
        where: { id },
      });
    });

    triggerPusher(CHANNELS.PRESTASI, EVENTS.KOMPETISI_DELETE, { id });

    return NextResponse.json({
      success: true,
      message: "Kompetisi berhasil dihapus",
    });
  } catch (error) {
    console.error("DELETE /api/guru/competitions/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal menghapus kompetisi" },
      { status: 500 }
    );
  }
}
