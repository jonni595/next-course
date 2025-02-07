import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

type Params = {
  params: {
    id: number;
  };
};

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
    return NextResponse.json(error);
  }
}
