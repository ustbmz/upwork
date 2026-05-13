export type ContactPayload = {
  name: string;
  email: string;
  body: string;
};

function isNonEmpty(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

/** Shared validation (previously mirrored the Route Handler). */
export function validateContactPayload(
  json: unknown,
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  const body = json as Partial<ContactPayload>;
  if (!isNonEmpty(body.name) || !isNonEmpty(body.email) || !isNonEmpty(body.body)) {
    return { ok: false, error: "Name, email, and message are required." };
  }
  const email = body.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  return {
    ok: true,
    data: { name: body.name.trim(), email, body: body.body.trim() },
  };
}

/** Demo submit without a server (static hosting / GitHub Pages). */
export function submitContactClientSide(
  json: unknown,
): { ok: true } | { ok: false; error: string } {
  const v = validateContactPayload(json);
  if (!v.ok) return v;
  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", v.data);
  }
  return { ok: true };
}
