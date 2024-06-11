'use client';

import { updateEntry } from '@/utils/api/entry/entry';
import { JournalEntry } from '@prisma/client';
import { useEffect, useState } from 'react';

const Editor = ({ entry }: { entry: JournalEntry }) => {
  const [value, setValue] = useState(entry.content);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (value === entry.content) return;
    const timeout = setTimeout(async () => {
      setIsSaving(true);
      await updateEntry(entry.id, value);
      setIsSaving(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="h-full">
      {isSaving && <p>Saving...</p>}
      <textarea
        className="h-5/6 w-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;
