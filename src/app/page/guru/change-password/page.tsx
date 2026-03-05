"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Lock, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ChangePasswordPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [message, setMessage] = useState({ type: "", text: "" });

    const passwordRules = [
        { id: 1, text: "Minimal 8 karakter", test: (pw: string) => pw.length >= 8 },
        { id: 2, text: "Mengandung huruf kapital (A-Z)", test: (pw: string) => /[A-Z]/.test(pw) },
        { id: 3, text: "Mengandung angka (0-9)", test: (pw: string) => /[0-9]/.test(pw) },
        { id: 4, text: "Mengandung karakter spesial (!@#$%^&*)", test: (pw: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pw) },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setMessage({ type: "", text: "" });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            setMessage({ type: "error", text: "Konfirmasi password baru tidak cocok!" });
            return;
        }

        // Cek rule password
        const failedRules = passwordRules.filter((rule) => !rule.test(formData.newPassword));
        if (failedRules.length > 0) {
            setMessage({ type: "error", text: "Password baru tidak memenuhi semua syarat!" });
            return;
        }

        setIsLoading(true);
        setMessage({ type: "", text: "" });

        try {
            const res = await fetch("/api/guru/change-password", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    oldPassword: formData.oldPassword,
                    newPassword: formData.newPassword,
                }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setMessage({ type: "success", text: "Password berhasil diubah!" });
                setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });
            } else {
                setMessage({ type: "error", text: data.message || "Gagal mengubah password" });
            }
        } catch (error) {
            setMessage({ type: "error", text: "Terjadi kesalahan pada server" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Ganti Password</h1>
                <p className="text-gray-500 mt-1">Perbarui password akun Anda untuk keamanan</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Kolom Form */}
                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">

                        {message.text && (
                            <div className={`p-4 rounded-xl flex items-start gap-3 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                                {message.type === 'success' ? <CheckCircle2 size={20} className="mt-0.5" /> : <AlertCircle size={20} className="mt-0.5" />}
                                <p className="font-medium text-sm">{message.text}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Lock size={16} className="text-gray-400" /> Password Lama
                                </label>
                                <input
                                    type="password"
                                    name="oldPassword"
                                    value={formData.oldPassword}
                                    onChange={handleInputChange}
                                    placeholder="Masukkan password saat ini"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                                    required
                                />
                            </div>

                            <div className="space-y-2 pt-2 border-t border-gray-50 mt-4">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Lock size={16} className="text-emerald-500" /> Password Baru
                                </label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    placeholder="Masukkan password baru"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Lock size={16} className="text-emerald-500" /> Konfirmasi Password Baru
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Ulangi password baru"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                                    required
                                />
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-8 py-2.5 rounded-xl font-medium transition-all shadow-sm"
                            >
                                {isLoading ? "Menyimpan..." : <><Save size={18} /> Simpan Password</>}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Kolom Aturan Password */}
                <div className="md:col-span-1">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-sm border border-emerald-100 p-6 sticky top-24">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                            <AlertCircle size={20} className="text-emerald-600" />
                            Aturan Password Lengkap
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Untuk menjaga keamanan akun Anda, pastikan password baru memenuhi kriteria berikut:
                        </p>
                        <ul className="space-y-3">
                            {passwordRules.map((rule) => {
                                const isMet = formData.newPassword.length > 0 && rule.test(formData.newPassword);
                                const isFailed = formData.newPassword.length > 0 && !rule.test(formData.newPassword);
                                return (
                                    <li key={rule.id} className="flex items-start gap-2 text-sm">
                                        {isMet ? (
                                            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                        ) : isFailed ? (
                                            <div className="w-4 h-4 rounded-full border-2 border-red-300 flex items-center justify-center shrink-0 mt-0.5 mt-0.5 ml-0.5" />
                                        ) : (
                                            <div className="w-4 h-4 rounded-full border-2 border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 mt-0.5 ml-0.5" />
                                        )}
                                        <span className={`${isMet ? 'text-emerald-700 font-medium' : isFailed ? 'text-red-500' : 'text-gray-600'}`}>
                                            {rule.text}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
