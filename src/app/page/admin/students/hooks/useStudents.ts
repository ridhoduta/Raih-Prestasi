import { useState, useEffect, useMemo } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getStudents, deleteStudent, Student, createStudentsBulk, updateStudent } from "@/app/service/studentsAPI";

const PAGE_LIMIT = 20;

export function useStudents() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState("");
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<"aktif" | "nonaktif" | "semua">("aktif");

    // Debounce searchTerm
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // TanStack Query for fetching students with infinite scroll support
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["students", debouncedSearch, statusFilter],
        queryFn: async ({ pageParam }: { pageParam: string | undefined }) => {
            const response = await getStudents({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
                cursor: pageParam,
                isActive: statusFilter === "aktif" ? true : statusFilter === "nonaktif" ? false : undefined,
            });
            return response;
        },
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    });

    // Flatten pages into a single students array
    const students = useMemo(() => {
        return data?.pages.flatMap((page) => page.data ?? []) ?? [];
    }, [data]);

    // Mutation for toggling student status
    const toggleStatusMutation = useMutation({
        mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) => updateStudent(id, { isActive }),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["students"] });
                setToggleConfirmState(prev => ({ ...prev, isOpen: false, id: null, name: "", isActive: true }));
                showAlert("Berhasil", "Status siswa berhasil diperbarui.", "success");
            } else {
                setToggleConfirmState(prev => ({ ...prev, isOpen: false }));
                showAlert("Gagal", "Gagal memperbarui status siswa: " + response.message, "error");
            }
        },
        onError: () => {
            setToggleConfirmState(prev => ({ ...prev, isOpen: false }));
            showAlert("Error", "Terjadi kesalahan saat memperbarui status.", "error");
        }
    });

    // Mutation for deleting a student
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteStudent(id),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["students"] });
                setConfirmState(prev => ({ ...prev, isOpen: false, id: null, name: "" }));
                showAlert("Dihapus", "Data siswa berhasil dihapus.", "success");
            } else {
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                showAlert("Gagal", "Gagal menghapus siswa: " + response.message, "error");
            }
        },
        onError: () => {
            setConfirmState(prev => ({ ...prev, isOpen: false }));
            showAlert("Error", "Terjadi kesalahan saat menghapus data.", "error");
        }
    });

    // Mutation for bulk importing students
    const importMutation = useMutation({
        mutationFn: (data: any[]) => createStudentsBulk(data),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["students"] });
                showAlert("Berhasil", response.message || "Data siswa berhasil diimport.", "success");
                setIsImportModalOpen(false);
            } else {
                showAlert("Peringatan", response.message || "Beberapa data mungkin gagal diimport.", "info");
            }
        },
        onError: () => {
            showAlert("Error", "Terjadi kesalahan saat import data.", "error");
        }
    });

    // Alert State
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info"
    });

    // Confirm Delete State
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; id: string | null; name: string; title: string; message: string }>({
        isOpen: false,
        id: null,
        name: "",
        title: "",
        message: ""
    });

    // Toggle Status State
    const [toggleConfirmState, setToggleConfirmState] = useState<{ isOpen: boolean; id: string | null; name: string; isActive: boolean }>({
        isOpen: false,
        id: null,
        name: "",
        isActive: true
    });

    const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
        setAlertState({ isOpen: true, title, message, type });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
    };

    const initiateDelete = (id: string, name: string) => {
        setConfirmState({
            isOpen: true,
            id,
            name,
            title: "Hapus Data Siswa",
            message: `Apakah Anda yakin ingin menghapus data siswa "${name}"? Tindakan ini tidak dapat dibatalkan.`
        });
    };

    const initiateToggleStatus = (id: string, name: string, currentStatus: boolean) => {
        setToggleConfirmState({
            isOpen: true,
            id,
            name,
            isActive: !currentStatus
        });
    };

    const handleConfirmToggleStatus = async () => {
        if (!toggleConfirmState.id) return;
        toggleStatusMutation.mutate({ id: toggleConfirmState.id, isActive: toggleConfirmState.isActive });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        deleteMutation.mutate(confirmState.id);
    };

    const handleImportSubmit = async (data: any[]) => {
        importMutation.mutate(data);
    };

    return {
        searchTerm,
        setSearchTerm,
        students,
        isLoading,
        isLoadingMore: isFetchingNextPage,
        nextCursor: hasNextPage,
        loadMore: fetchNextPage,
        statusFilter,
        setStatusFilter,
        isImportModalOpen,
        setIsImportModalOpen,
        isImporting: importMutation.isPending,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        toggleConfirmState,
        setToggleConfirmState,
        isDeleting: deleteMutation.isPending,
        isToggling: toggleStatusMutation.isPending,
        initiateDelete,
        initiateToggleStatus,
        handleConfirmDelete,
        handleConfirmToggleStatus,
        handleImportSubmit,
        isError,
    };
}
