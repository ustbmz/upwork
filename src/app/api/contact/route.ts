import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  body?: string;
};

function isNonEmpty(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

export async function POST(req: Request) {
  let json: Body;
  try {
    json = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  if (!isNonEmpty(json.name) || !isNonEmpty(json.email) || !isNonEmpty(json.body)) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const email = json.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // Demo: extend with Resend / Slack / CRM (see README).
  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", { name: json.name, email, body: json.body });
  }

  return NextResponse.json({ ok: true });
}
