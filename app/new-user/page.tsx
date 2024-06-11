import db from '@/utils/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const NewPage = async () => {
  const currUser = await currentUser();

  if (!currUser) {
    return <div>You must be logged in to view this page</div>;
  }

  const dbUser = await db.user.findUnique({
    where: {
      clerkId: currUser.id,
    },
  });

  if (!dbUser) {
    await db.user.create({
      data: {
        email: currUser.primaryEmailAddress?.emailAddress,
        clerkId: currUser.id,
      },
    });
  }

  redirect('/journal');
};

export default NewPage;
