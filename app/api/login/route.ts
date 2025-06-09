// app/api/login/route.ts
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  // ⚠️ Replace this with your own authentication logic:
  const dummyUser = { email: "user@example.com", password: "password123" }

  if (email === dummyUser.email && password === dummyUser.password) {
    // Session handling can be done here:
    // - Set a cookie using NextResponse
    // - Or just send a success response
    return NextResponse.json({ message: "Login successful" }, { status: 200 })
  }

  return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
}
