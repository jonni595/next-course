import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

interface Params {
  params: {
    id: number;
  };
}

interface CustomError extends Error {
  message: string;
}

export async function GET(request: Request, { params }: Params) {
  const { id } = await params;
  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(task);
}

export async function PUT(request: Request, { params }: Params) {
  const data = await request.json();
  const { id } = await params;

  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data,
  });
  return NextResponse.json(taskUpdated);
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(taskRemoved);
  } catch (error) {
    const customError = error as CustomError;
    return NextResponse.json({ error: customError.message });
  }
}
