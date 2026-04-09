import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDashboardStats } from "@/app/service/dashboardAPI";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "@/app/service/authService";

export const useAdminDashboard = () => {
    const router = useRouter();

    // 1. Fetch Session
    const sessionQuery = useQuery({
        queryKey: ["session"],
        queryFn: getSession,
        retry: false,
    });

    // 2. Automated Redirect if Unauthorized
    useEffect(() => {
        if (sessionQuery.isFetched && !sessionQuery.data?.success) {
            router.push("/page/login");
        }
    }, [sessionQuery.isFetched, sessionQuery.data, router]);

    // 3. Fetch Dashboard Stats (only if session is successful)
    const statsQuery = useQuery({
        queryKey: ["dashboardStats"],
        queryFn: async () => {
            const response = await getDashboardStats();
            return response.data ?? null;
        },
        enabled: !!sessionQuery.data?.success,
    });

    return {
        session: sessionQuery.data?.data ?? null,
        stats: statsQuery.data,
        loading: sessionQuery.isLoading || statsQuery.isLoading,
        refresh: () => {
            sessionQuery.refetch();
            statsQuery.refetch();
        }
    };
};
