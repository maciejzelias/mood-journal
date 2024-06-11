import { getUserDbId } from '@/utils/auth';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const POST = async () => {
  return getUserDbId()
    .then(async (userId) => {
      const entry = await prisma.journalEntry.create({
        data: {
          userId: userId,
          content: 'Write about your day!',
        },
      });
      revalidatePath('/journal');
      return new Response(
        JSON.stringify({
          data: entry,
        }),
        {
          status: 201,
        },
      );
    })
    .catch(() => {
      return new NextResponse('Unauthorized', {
        status: 403,
      });
    });
};
