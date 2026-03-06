export function RecentActivity() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Aktivitas Terbaru</h3>
            <div className="space-y-4">
                {/* Note: In a real app, you'd fetch real activities here */}
                <p className="text-gray-500 text-sm">Belum ada aktivitas terbaru.</p>
            </div>
        </div>
    );
}
