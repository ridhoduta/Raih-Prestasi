Database Schema Updates (schema.prisma)
Semester Enum: Added GANJIL and GENAP for clear period categorization.
AcademicScore: Added academicYear (String) and semester (Enum) to track and filter scores by period.
AcademicFile: Added academicYear and semester for global report uploads (visible to all students).
Achievement: Added a points field (Int) to track numerical achievement value.
2. API Architecture
The backend is centralized in src/app/api/admin/academic/route.ts using Prisma with the Accelerate extension.

GET:
Filters Student where achievements exist (some: {}).
Includes academicScores filtered by the selected academicYear and semester.
Only shows achievements with TERVERIFIKASI status.
POST:
Action saveScores: Performs an upsert for each subject. If a score for that subject/student/period exists, it updates; otherwise, it creates a new record.
Action saveAcademicFile: Saves the metadata (Supabase URL) of uploaded global reports.