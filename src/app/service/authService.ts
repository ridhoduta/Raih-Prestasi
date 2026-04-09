import { apiClient } from "./apiClient";

const BASE_URL = "/api/auth/session";

export type Session = {
    id: string;
    name: string;
    email: string;
    role: string;
};

export async function getSession() {
    return apiClient.get<Session>(BASE_URL);
}