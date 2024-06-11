import { getUserDbId } from '@/utils/auth';
import prisma from '@/utils/db';
import { NextResponse } from 'next/server';

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const userId = await getUserDbId();

  const { content } = await request.json();

  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        id: params.id,
        userId: userId,
      },
    },
    data: {
      content: content,
    },
  });

  return new NextResponse(
    JSON.stringify({
      data: updatedEntry,
    }),
    {
      status: 200,
    },
  );
};
