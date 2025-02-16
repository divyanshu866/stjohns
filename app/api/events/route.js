// app/api/events/route.js
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req) {
  try {
    const { title, category, description, image, date } = await req.json();

    // Create a new event using the provided data.
    // Make sure to convert the date string into a Date object.
    const event = await db.events.create({
      data: {
        title,
        category,
        description,
        image,
        date: new Date(date),
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
