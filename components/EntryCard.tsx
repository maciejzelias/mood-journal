import { JournalEntry } from '@prisma/client';

const EntryCard = ({
  journal,
}: {
  journal: Pick<JournalEntry, 'content' | 'createdAt'>;
}) => {
  const date = new Date(journal.createdAt).toDateString();
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">summary</div>
      <div className="px-4 py-5">mood</div>
    </div>
  );
};

export default EntryCard;
