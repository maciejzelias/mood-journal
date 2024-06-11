import EntryCard from '@/components/EntryCard';
import NewEntryCard from '@/components/NewEntryCard';
import { getUserDbId } from '@/utils/auth';
import db from '@/utils/db';
import Link from 'next/link';

const getJournals = async () => {
  return await db.journalEntry.findMany({
    where: {
      userId: await getUserDbId(),
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      content: true,
      createdAt: true,
    },
    take: 20,
  });
};

const JournalPage = async () => {
  const journals = await getJournals();
  return (
    <div className="bg-gray-100 flex-grow py-5 px-8">
      <h2 className="text-2xl mb-5">Journal</h2>
      <div className="grid grid-cols-3 gap-5">
        <NewEntryCard />
        {journals.map((journal) => (
          <Link key={journal.id} href={`journal/${journal.id}`}>
            <EntryCard journal={journal} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
