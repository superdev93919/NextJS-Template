import type { Cookie } from "./cookie.type";

export function serializeCookies(cookies: Cookie[]): string {
  return cookies.map(cookie => `${cookie.name}=${cookie.value}`).join("; ");
}

export function parseCookies(cookies: string): Cookie[] {
  if (!cookies) return [];

  return cookies.split(";").map(cookie => {
    const [rawName, rawValue] = cookie.split("=");

    const name = decodeURIComponent(rawName.trim());
    const value = decodeURIComponent(rawValue.trim());

    return { name, value };
  });
}