import Editor from '@/components/Editor';
import { getUserDbId } from '@/utils/auth';
import prisma from '@/utils/db';

const getEntry = async (id: string) => {
  const userId = await getUserDbId();

  return prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        id: id,
        userId: userId,
      },
    },
  });
};

const EntryPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const entry = await getEntry(params.id);

  if (!entry) {
    return <div>Entry not found</div>;
  }

  const analysisData = [
    {
      name: 'Summary',
      value: '',
    },
    {
      name: 'Subject',
      value: '',
    },
    {
      name: 'Mood',
      value: '',
    },
    {
      name: 'Negative',
      value: false,
    },
  ];

  return (
    <div className="h-full bg-gray-50 grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>
      <div className="border-l border-black/10">
        <div className="bg-blue-300 px-6 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul className="divide-y divide-black/10">
            {analysisData.map((data) => (
              <li
                className="flex items-center justify-between px-2 py-4"
                key={data.name}>
                <span className="text-xl font-semibold">{data.name}</span>
                <span>{data.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
