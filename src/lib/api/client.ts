import { siteConfig } from "@/lib/config";

export class ApiClientError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ApiClientError";
  }
}

function resolveUrl(path: string): string {
  const base = siteConfig.apiBaseUrl;

  if (!base) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not configured");
  }

  return new URL(path, base.endsWith("/") ? base : `${base}/`).toString();
}

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(resolveUrl(path), {
    ...init,
    method: "GET",
    headers: {
      Accept: "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new ApiClientError(`GET ${path} failed`, response.status);
  }

  return (await response.json()) as T;
}
