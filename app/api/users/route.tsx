import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  //fetch users from DB

  return NextResponse.json([
    {
      id: 1,
      name: "Ranjith",
    },
    {
      id: 2,
      name: "Durga",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //validate
  //if invalid, return 400,
  //else, return data
  if (!body.name)
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
