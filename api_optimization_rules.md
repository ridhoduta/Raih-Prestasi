# API Optimization Rules

### Project: Raih Prestasi

Purpose: Guidelines for building scalable and high‑performance APIs
using Next.js, Prisma, and PostgreSQL.

------------------------------------------------------------------------

# 2. Database Query Optimization

## Rule 2 --- Always Use `select`

Never return unnecessary fields.

Bad:

prisma.student.findMany()

Good:

prisma.student.findMany({ select:{ id:true, nisn:true, name:true,
kelas:true, angkatan:true } })

Benefits: - smaller response size - faster network transfer - improved
security

------------------------------------------------------------------------

# 3. Pagination Strategy

## Rule 3 --- Avoid Offset Pagination

Bad:

GET /api/students?page=10&limit=10

Database query:

skip: (page-1) \* limit take: limit

Problem: Database must scan all previous rows.

------------------------------------------------------------------------

## Rule 4 --- Use Cursor Pagination

Recommended request:

GET /api/students?cursor=student_id&limit=10

Prisma implementation:

prisma.student.findMany({ take: limit, cursor: { id: cursor }, skip: 1,
orderBy: { id: "asc" } })

Advantages:

-   constant query speed
-   scalable for millions of rows

------------------------------------------------------------------------

# 4. Database Indexing

## Rule 5 --- Add Index for Searchable Fields

Example Prisma schema:

model Student { id String @id @default(uuid()) nisn String @unique name
String kelas String angkatan Int isActive Boolean @default(true)

@@index(\[name\]) @@index(\[kelas\]) }

Indexes improve performance for:

-   search
-   sorting
-   filtering

------------------------------------------------------------------------

# 5. API Response Format

Standardize responses:

{ success: true, data: {...}, message: "optional" }

Error example:

{ success: false, message: "Student not found" }

------------------------------------------------------------------------

# 6. Error Handling Rules

Always log server errors.

try { } catch(error){ console.error(error) }

Never expose raw database errors to client.

------------------------------------------------------------------------

# 7. Input Validation

Always validate request body before database operations.

Example:

if(!nisn \|\| !name){ return error }

------------------------------------------------------------------------

# 8. Prevent Duplicate Queries

When updating data:

if(nisn !== existing.nisn){ check duplicate }

------------------------------------------------------------------------

# 12. Performance Checklist

Before deploying API:

✔ Select only required fields\
✔ Use cursor pagination\
✔ Add database indexes\
✔ Validate inputs\
✔ Standardize response format\
✔ Log server errors\
✔ Avoid heavy logic in routes

------------------------------------------------------------------------

# Summary

Good API performance comes from:

1.  Efficient database queries
2.  Proper pagination strategy
3.  Clean architecture
4.  Controlled response size
5.  Database indexing

Following these rules will help the Raih Prestasi system scale
efficiently.
