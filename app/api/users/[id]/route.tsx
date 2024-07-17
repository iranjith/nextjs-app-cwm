import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch data from DB
  //if data not found, return 404
  //else return actual data

  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  return NextResponse.json({
    id: 1,
    name: "Ranjith",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //validate the request body
  const body = await request.json();
  //if invalid, return 400 error
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({});
}
