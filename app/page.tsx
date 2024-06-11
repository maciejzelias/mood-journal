import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';

export default async function Home() {
  const { userId } = await auth();

  const href = userId ? '/journal' : '/sign-in';

  return (
    <div className="h-full flex justify-center items-center flex-col bg-black">
      <div className="text-white max-w-[600px]">
        <h1 className="text-6xl mb-4">The best journal app, period.</h1>
        <p className="text-2xl text-white/80 mb-4">
          This is the best app for tracking your mood through your life
        </p>
        <div>
          <Link
            href={href}
            className="bg-blue-500 px-4 py-2 rounded-lg text-xl">
            get started
          </Link>
        </div>
      </div>
    </div>
  );
}
