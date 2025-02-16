// app/api/departments/route.js
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req) {
  try {
    const { title, image, description } = await req.json();

    const department = await db.departments.create({
      data: { title, image, description },
    });

    return NextResponse.json(department, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create department" },
      { status: 500 }
    );
  }
}
