# Frontend Architecture Rules

### Project Guideline -- Raih Prestasi

Dokumen ini berisi rule dasar untuk menjaga **struktur kode frontend
tetap rapi, scalable, dan performant** pada sistem seperti dashboard
admin atau sistem manajemen sekolah.

Tujuan utama:

-   Code mudah dibaca
-   Mudah di-maintain
-   Mudah dikembangkan
-   Performa tetap stabil saat data besar

------------------------------------------------------------------------

# 1. Prinsip Utama

Gunakan prinsip berikut:

    Page = Layout + Orchestrator
    Hook = Data + Logic
    Component = UI
    Service = API

Artinya:

-   **Page** hanya mengatur layout dan flow
-   **Hook** menangani data dan logic
-   **Component** hanya menampilkan UI
-   **Service** menangani komunikasi API

------------------------------------------------------------------------

# 2. Separation of Concerns

Jangan mencampur:

    UI + API + Logic + Data Processing

Semua dalam satu file.

Pisahkan menjadi:

    Page
    Hook
    Component
    Service

------------------------------------------------------------------------

# 3. Struktur Folder yang Direkomendasikan

Contoh struktur fitur **Students**
    admin/
    |
    |
      students/
      │
      ├── components/
      │   ├── StudentRow.tsx
      │   ├── StudentTable.tsx
      │   └── StudentSearch.tsx
      │
      ├── hooks/
      │   └── useStudents.ts
      │
      └── pages.tsx

Penjelasan:

  Folder       Fungsi
  ------------ -----------------
  components   UI component
  hooks        logic dan state
  pages        halaman utama

------------------------------------------------------------------------

# 4. Rule Page Component

Page hanya bertugas untuk:

-   Layout halaman
-   Menghubungkan hook dengan UI
-   Mengatur modal atau navigation

Contoh:

``` tsx
export default function StudentsPage(){

  const { students, loading } = useStudents()

  return (
    <StudentTable students={students} loading={loading}/>
  )

}
```

Page sebaiknya **tidak lebih dari ±100 baris kode**.

------------------------------------------------------------------------

# 5. Rule Custom Hooks

Semua logic data dipindahkan ke hook.

Contoh:

    useStudents.ts

``` tsx
export function useStudents(){

  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchStudents(){
    const res = await getStudents()
    setStudents(res.data)
  }

  useEffect(()=>{
    fetchStudents()
  },[])

  return {
    students,
    loading,
    fetchStudents
  }

}
```

Keuntungan:

-   reusable
-   lebih bersih
-   logic terpusat

------------------------------------------------------------------------

# 6. Rule Table Component

Jangan menulis tabel langsung di Page.

Struktur yang direkomendasikan:

    StudentsPage
       │
       └── StudentTable
              │
              └── StudentRow

------------------------------------------------------------------------

# 7. Rule Row Component

Row harus **sangat ringan**.

Hanya bertugas menampilkan data.

``` tsx
function StudentRow({ student }) {

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.nisn}</td>
      <td>{student.kelas}</td>
    </tr>
  )

}
```

------------------------------------------------------------------------

# 8. Gunakan Memo untuk Table Row

Jika data tabel besar gunakan:

``` tsx
export default memo(StudentRow)
```

Tujuannya mencegah **render ulang semua row** ketika parent render.

------------------------------------------------------------------------

# 9. Gunakan useMemo untuk Data Transform

Jangan melakukan filter langsung di render.

``` tsx
const filteredStudents = useMemo(()=>{
  return students.filter(student =>
    student.name.includes(searchTerm)
  )
},[students, searchTerm])
```

Keuntungan:

-   filter tidak dijalankan setiap render
-   performa lebih stabil

------------------------------------------------------------------------

# 10. Gunakan useCallback untuk Event Handler

Jika function dipassing ke child component.

``` tsx
const handleDelete = useCallback((id)=>{
   deleteStudent(id)
},[])
```

Ini mencegah **unnecessary re-render**.

------------------------------------------------------------------------

# 11. Smart Component vs Dumb Component

## Smart Component

Memiliki:

-   state
-   logic
-   API call

Biasanya:

    Page
    Hook

## Dumb Component

Hanya memiliki:

-   props
-   UI

Biasanya:

    Button
    Table
    Row
    Card
    Modal

------------------------------------------------------------------------

# 12. Reusable Table System ⭐

Untuk dashboard admin, tabel biasanya muncul di banyak halaman seperti:

-   Students
-   Teachers
-   Competitions
-   Achievements

Daripada membuat tabel baru setiap halaman, buat **Reusable Table
System**.

## Struktur

    components/
    └── table/
        ├── DataTable.tsx
        ├── TableHeader.tsx
        ├── TableRow.tsx
        └── TableEmpty.tsx

## Contoh DataTable

``` tsx
type Column = {
  header: string
  accessor: string
}

export function DataTable({ columns, data }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.accessor}>{col.header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map(col => (
              <td key={col.accessor}>
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
```

## Cara Menggunakan

Di halaman Students:

``` tsx
const columns = [
  { header: "Nama", accessor: "name" },
  { header: "NISN", accessor: "nisn" },
  { header: "Kelas", accessor: "kelas" }
]

<DataTable columns={columns} data={students} />
```

Keuntungan:

-   tabel bisa dipakai ulang
-   mengurangi duplicate code
-   konsisten di seluruh sistem
-   lebih cepat membuat halaman baru

------------------------------------------------------------------------

# 13. Optimasi untuk Data Besar

Jika tabel memiliki banyak data.

Gunakan:

### Pagination

    GET /students?page=1&limit=20

atau

### Virtualized Table

Library yang sering digunakan:

    react-window
    react-virtualized

Ini hanya merender row yang terlihat di layar.

------------------------------------------------------------------------

# 14. Batasan Ukuran File

Rekomendasi:

  Jenis File   Maksimal
  ------------ ----------------
  Page         100--150 baris
  Component    80--120 baris
  Hook         150 baris

Jika file terlalu panjang → pecah component.

------------------------------------------------------------------------

# 15. Clean Code Principles

Ikuti prinsip berikut:

    Small Component
    Single Responsibility
    Readable Code
    Reusable Logic

------------------------------------------------------------------------

# Final Rule

Selalu ingat:

    Page = Layout
    Hook = Logic
    Component = UI
    Service = API

Jika semua mengikuti rule ini, project akan tetap **rapi walaupun
semakin besar**.
