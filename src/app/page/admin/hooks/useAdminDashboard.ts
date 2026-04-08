import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDashboardStats, DashboardStats } from "@/app/service/dashboardAPI";

export const useAdminDashboard = () => {
    const router = useRouter();
    const [session, setSession] = useState<any>(null);
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchDashboardData = async () => {
        setLoading(true);
        try {
            const [sessionRes, statsRes] = await Promise.all([
                fetch("/api/auth/session").then(res => res.json()),
                getDashboardStats()
            ]);

            if (sessionRes.success) {
                setSession(sessionRes.data);
            } else {
                router.push("/page/login");
                return;
            }

            if (statsRes.success && statsRes.data) {
                setStats(statsRes.data);
            }
        } catch (error) {
            console.error("Dashboard data fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    return {
        session,
        stats,
        loading,
        refresh: fetchDashboardData
    };
};
