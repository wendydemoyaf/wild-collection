import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const webhook = process.env.ORDER_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ error: "Order destination not configured" }, { status: 503 });

  const orderId = `WILD-${Date.now().toString().slice(-8)}`;
  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderId, createdAt: new Date().toISOString(), ...body }),
  });
  if (!response.ok) return NextResponse.json({ error: "Could not save order" }, { status: 502 });
  return NextResponse.json({ orderId });
}
