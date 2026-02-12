"use client";

import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";
import Modal from "./Modal";

interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type?: "success" | "error" | "warning" | "info";
}

export default function AlertModal({ isOpen, onClose, title, message, type = "info" }: AlertModalProps) {
    const getIcon = () => {
        switch (type) {
            case "success":
                return <CheckCircle className="text-emerald-500" size={48} />;
            case "error":
                return <XCircle className="text-red-500" size={48} />;
            case "warning":
                return <AlertTriangle className="text-amber-500" size={48} />;
            default:
                return <Info className="text-blue-500" size={48} />;
        }
    };

    const getButtonColor = () => {
        switch (type) {
            case "success":
                return "bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500";
            case "error":
                return "bg-red-500 hover:bg-red-600 focus:ring-red-500";
            case "warning":
                return "bg-amber-500 hover:bg-amber-600 focus:ring-amber-500";
            default:
                return "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500";
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col items-center text-center space-y-4">
                {getIcon()}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 leading-relaxed">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className={`w-full py-2.5 px-4 rounded-xl text-white font-medium transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${getButtonColor()}`}
                >
                    OK
                </button>
            </div>
        </Modal>
    );
}
