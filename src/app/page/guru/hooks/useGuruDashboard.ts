import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getGuruDashboardStats, GuruDashboardStats } from "@/app/service/guruDashboardAPI";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "@/app/service/authService";

export const useGuruDashboard = () => {
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
        queryKey: ["guruDashboardStats"],
        queryFn: async () => {
            const response = await getGuruDashboardStats();
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
