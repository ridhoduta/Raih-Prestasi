interface Activity {
    id: string;
    title: string;
    description: string;
    time: string;
}

export function RecentActivity({ activities }: { activities?: Activity[] }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Aktivitas Terbaru</h3>
            <div className="space-y-4">
                {activities && activities.length > 0 ? (
                    activities.map((activity) => (
                        <div key={activity.id} className="pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                            <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                            <p className="text-xs text-gray-400 mt-1">
                                {new Date(activity.time).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'short',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">Belum ada aktivitas terbaru.</p>
                )}
            </div>
        </div>
    );
}

