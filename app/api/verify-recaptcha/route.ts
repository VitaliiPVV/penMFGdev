import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    if (process.env.NODE_ENV === "development") {
      console.log("Development mode: Skipping reCAPTCHA verification");
      return NextResponse.json(
        { success: true, message: "reCAPTCHA verification skipped (development mode)" },
        { status: 200 }
      );
    }

    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA token is required" },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is not configured");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await fetch(verificationUrl, {
      method: "POST",
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json(
        { success: true, message: "reCAPTCHA verification successful" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "reCAPTCHA verification failed",
          errors: data["error-codes"],
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
