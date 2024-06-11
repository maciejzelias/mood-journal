'use client';

import { createNewEntry } from '@/utils/api/entry/entry';
import { useRouter } from 'next/navigation';

const NewEntryCard = () => {
  const router = useRouter();
  const handleOnClick = async () => {
    const newEntry = await createNewEntry();
    router.push(`/journal/${newEntry.id}`);
    router.refresh();
  };
  return (
    <div className="rounded-lg bg-white" onClick={handleOnClick}>
      <div className="px-4 py-5 sm:p-6 cursor-pointer text-3xl font-medium">
        New Entry
      </div>
    </div>
  );
};

export default NewEntryCard;
