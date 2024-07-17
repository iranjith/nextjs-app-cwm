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
