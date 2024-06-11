import { createUrl } from '@/utils/api';

export const createNewEntry = async () => {
  const res = await fetch(createUrl('/api/journal'), {
    method: 'POST',
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const updateEntry = async (id: string, content: string) => {
  const res = await fetch(createUrl(`/api/journal/${id}`), {
    method: 'PATCH',
    body: JSON.stringify({
      content: content,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
