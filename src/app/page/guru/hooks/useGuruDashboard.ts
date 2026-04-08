import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getGuruDashboardStats, GuruDashboardStats } from "@/app/service/guruDashboardAPI";

export const useGuruDashboard = () => {
    const router = useRouter();
    const [session, setSession] = useState<any>(null);
    const [stats, setStats] = useState<GuruDashboardStats | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchDashboardData = async () => {
        setLoading(true);
        try {
            const [sessionRes, statsRes] = await Promise.all([
                fetch("/api/auth/session").then(res => res.json()),
                getGuruDashboardStats()
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
