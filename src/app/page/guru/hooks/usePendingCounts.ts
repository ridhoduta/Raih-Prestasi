import { useQuery } from "@tanstack/react-query";
import { getPendingCounts } from "@/app/service/guruStatsAPI";

export function usePendingCounts() {
    return useQuery({
        queryKey: ["guru", "pending-counts"],
        queryFn: async () => {
            const response = await getPendingCounts();
            if (response.success && response.data) {
                return response.data;
            }
            return {
                registrations: 0,
                submissions: 0,
                achievements: 0,
            };
        },
        // We can optionally set a refetchInterval here if we want periodic updates
        // refetchInterval: 30000, // 30 seconds
    });
}
