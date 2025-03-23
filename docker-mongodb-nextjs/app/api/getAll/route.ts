import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb-client";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("dictionary");
    const data = await db.collection("開発").find({}).toArray(); // Ensure this matches your collection name
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error); // Log the error for debugging
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
