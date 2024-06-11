import { auth } from '@clerk/nextjs/server';
import prisma from './db';

export const getUserDbId = async () => {
  const { userId } = auth();
  if (!userId) {
    throw new Error('No user ID found');
  }
  const user =  await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
    select: {
      id: true,
    },
  });

  return user.id;
};
