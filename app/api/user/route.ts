import db from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { signUpSchema } from "@/lib/types";
import { error } from "console";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { username, email, password } = body;
    //Server side validation
    const vaildationResponse = signUpSchema.safeParse(body);
    if (!vaildationResponse.success) {
      console.log(vaildationResponse.error.issues);
      let errormessage = "";
      vaildationResponse.error.issues.forEach((issue) => {
        errormessage += `${issue.path[0]}: ${issue.message}.`;
      });
      return {
        error: errormessage,
      };
    }

    //Check if user exists by email
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email.toUpperCase() },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }

    //Check if user exists by username
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "Username is taken" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    //Create New User
    const newUser = await db.user.create({
      data: {
        username,
        email: email.toUpperCase(),
        password: hashedPassword,
      },
    });
    const { password: newPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
