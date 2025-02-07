import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const task = await prisma.task.findMany();

  return NextResponse.json(task);
}

export async function POST(request: Request) {
  const { title, description } = await request.json();
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newTask);
}
