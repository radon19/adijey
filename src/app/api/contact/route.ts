// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // We added 'honeypot' to catch bots
    const { name, company, email, phone, message, honeypot } = body;

    // ── 1. Bot Protection (Honeypot) ──────────────────────────────────────────
    // If the hidden honeypot field is filled out, it's a bot. Silently drop it.
    if (honeypot) {
      return NextResponse.json(
        { message: "Enquiry submitted successfully." }, // Fake success!
        { status: 200 }
      );
    }

    // ── 2. Strict Type & Presence Validation ──────────────────────────────────
    if (
      !name || typeof name !== "string" ||
      !email || typeof email !== "string" ||
      !message || typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Valid name, email, and message are required." },
        { status: 400 }
      );
    }

    // Optional: Very basic email format check
    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // ── 3. Insert into Supabase ───────────────────────────────────────────────
    const { error } = await supabaseAdmin
      .from("enquiries")
      .insert([
        {
          name: name.trim(),
          // Safely handle optional fields
          company: typeof company === "string" ? company.trim() : null,
          email: email.trim().toLowerCase(),
          phone: typeof phone === "string" ? phone.trim() : null,
          message: message.trim(),
          submitted_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error("Supabase Insert Error:", error.message);
      return NextResponse.json(
        { error: "Failed to save enquiry. Please try again later." },
        { status: 500 }
      );
    }

    // ── 4. Return Success ─────────────────────────────────────────────────────
    return NextResponse.json(
      { message: "Enquiry submitted successfully." },
      { status: 200 }
    );

  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 } // Changed to 400 because JSON parsing errors land here
    );
  }
}