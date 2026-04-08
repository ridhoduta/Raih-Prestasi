import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createCompetition, uploadThumbnail } from "@/app/service/guruCompetitionsAPI";
import { Category, getCategories } from "@/app/service/categoriesAPI";
import { getLevels, Level } from "@/app/service/levelsAPI";

export const useCompetitionForm = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: "",
        thumbnail: "",
        isActive: true,
        startDate: "",
        endDate: "",
        levelId: "",
        categoryId: "",
        createdById: ""
    });

    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [formFields, setFormFields] = useState<{ label: string; fieldType: string; isRequired: boolean }[]>([
        { label: "Nama Lengkap", fieldType: "TEXT", isRequired: true },
        { label: "NISN", fieldType: "TEXT", isRequired: true },
    ]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [levels, setLevels] = useState<Level[]>([]);
    const [loading, setLoading] = useState(false);
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info"; shouldRedirect?: boolean }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info",
        shouldRedirect: false
    });

    const showAlert = (title: string, message: string, type: "success" | "error" | "info", shouldRedirect = false) => {
        setAlertState({ isOpen: true, title, message, type, shouldRedirect });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
        if (alertState.shouldRedirect) {
            router.push("/page/guru/competitions");
        }
    };

    async function fetchAllData() {
        setLoading(true);
        try {
            const [catRes, levelRes] = await Promise.all([
                getCategories(),
                getLevels(),
            ]);

            if (catRes.success && catRes.data) setCategories(catRes.data);
            if (levelRes.success && levelRes.data) setLevels(levelRes.data);
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAllData();
    }, []);

    const addField = () => {
        setFormFields([...formFields, { label: "", fieldType: "TEXT", isRequired: false }]);
    };

    const removeField = (index: number) => {
        setFormFields(formFields.filter((_, i) => i !== index));
    };

    const updateField = (index: number, updates: any) => {
        const newFields = [...formFields];
        newFields[index] = { ...newFields[index], ...updates };
        setFormFields(newFields);
    };

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setThumbnailFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setThumbnailPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeThumbnail = () => {
        setThumbnailFile(null);
        setThumbnailPreview(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.title || !formData.categoryId || !formData.levelId || !formData.startDate || !formData.endDate) {
            alert("Harap isi semua field yang wajib!");
            return;
        }

        if (formFields.some(f => !f.label)) {
            alert("Semua label field pendaftaran harus diisi!");
            return;
        }

        setLoading(true);

        try {
            let thumbnailUrl = formData.thumbnail;
            if (thumbnailFile) {
                const uploadRes = await uploadThumbnail(thumbnailFile);
                if (uploadRes.success && uploadRes.data) {
                    thumbnailUrl = uploadRes.data.url.publicUrl;
                } else {
                    throw new Error(uploadRes.message || "Gagal upload thumbnail");
                }
            }

            const payload = {
                title: formData.title,
                description: formData.description,
                thumbnail: thumbnailUrl,
                categoryId: formData.categoryId,
                levelId: formData.levelId,
                startDate: formData.startDate,
                endDate: formData.endDate,
                isActive: formData.isActive,
                formFields: formFields.map((f, idx) => ({ ...f, order: idx }))
            };

            const response = await createCompetition(payload as any);

            if (response.success) {
                showAlert("Berhasil", "Kompetisi berhasil dibuat.", "success", true);
            } else {
                showAlert("Gagal", "Gagal menambahkan kompetisi: " + response.message, "error");
            }
        } catch (error: any) {
            console.error("Failed to save competition", error);
            showAlert("Error", error.message || "Terjadi kesalahan sistem saat menyimpan kompetisi.", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        router.push("/page/guru/competitions");
    };

    return {
        formData,
        setFormData,
        thumbnailFile,
        thumbnailPreview,
        formFields,
        categories,
        levels,
        loading,
        alertState,
        handleThumbnailChange,
        removeThumbnail,
        addField,
        removeField,
        updateField,
        handleSubmit,
        handleCancel,
        closeAlert
    };
};
