import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, business, message, created_at } = body

    const { data, error } = await supabase.from("consultation_requests").insert([
      {
        name,
        email,
        business_name: business,
        message,
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to submit consultation request" }, { status: 500 })
    }

    return NextResponse.json({ message: "Consultation request submitted successfully", data }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
