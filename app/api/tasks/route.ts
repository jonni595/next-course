import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    tasks: [
      { id: 1, title: "Task 1", description: "Description 1" },
      { id: 2, title: "Task 2", description: "Description 2" },
      { id: 3, title: "Task 3", description: "Description 3" },
    ],
  });
}
