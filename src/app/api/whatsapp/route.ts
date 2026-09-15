import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // You will need to put these in your .env.local file
    // e.g., CALLMEBOT_API_KEY=123456
    const apiKey = process.env.CALLMEBOT_API_KEY;
    const phoneNumber = process.env.CALLMEBOT_PHONE_NUMBER || "+919494628995";

    if (!apiKey) {
      console.warn("CALLMEBOT_API_KEY is not set in environment variables. Simulating success.");
      // For demonstration/testing, if no API key is set, we still return a 200 OK 
      // so the frontend works smoothly without breaking.
      return NextResponse.json({ success: true, warning: "API Key missing. Message not actually sent." });
    }

    const message = `🚨 *New Lead via Website* 🚨\n\n*Name:* ${name}\n*Email:* ${email}\n*Interested In:* ${service}\n\n_Please reach out to them soon._`;

    // CallMeBot API URL
    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

    const response = await fetch(url, {
      method: "GET", // CallMeBot uses GET requests to send messages
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("CallMeBot API Error:", errorText);
      throw new Error(`CallMeBot API responded with status: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
