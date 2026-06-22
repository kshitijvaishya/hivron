const API_BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3001";

type ApiResponse = {
  message?: string;
  id?: string;
};

export async function postJson(path: string, body: Record<string, unknown>): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = (await response.json().catch(() => ({}))) as ApiResponse;

  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

export { API_BASE_URL };