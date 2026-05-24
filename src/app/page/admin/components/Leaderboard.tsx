"use client";

import { Award } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

interface LeaderboardProps {
  leaderboard?: Array<{
    id: string;
    name: string;
    kelas: string;
    totalScore: number;
  }>;
}

export function Leaderboard({ leaderboard }: LeaderboardProps) {
  if (!leaderboard || leaderboard.length === 0) {
    return (
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Award size={20} className="text-amber-500" />
          Leaderboard Prestasi
        </h3>
        <p className="text-gray-500 text-sm text-center py-4">Belum ada data prestasi.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-full">
      <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Award size={20} className="text-amber-500" />
        Top 10 Leaderboard Prestasi
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart Section */}
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={leaderboard}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 12 }} 
                width={120} 
              />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ border: 'none', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="totalScore" radius={[0, 4, 4, 0]} barSize={20}>
                {leaderboard.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={
                    index === 0 ? "#f59e0b" : // amber-500
                    index === 1 ? "#94a3b8" : // slate-400
                    index === 2 ? "#fb923c" : // orange-400
                    "#10b981" // emerald-500
                  } />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* List Section */}
        <div className="space-y-4">
          {leaderboard.map((student, index) => (
            <div key={student.id} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                index === 0 ? "bg-amber-100 text-amber-700" :
                index === 1 ? "bg-gray-100 text-gray-700" :
                index === 2 ? "bg-orange-100 text-orange-700" :
                "bg-emerald-50 text-emerald-700"
              }`}>
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 truncate">{student.name}</h4>
                <p className="text-xs text-gray-500">{student.kelas}</p>
              </div>
              <div className="font-bold text-emerald-600">
                {student.totalScore} pts
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
