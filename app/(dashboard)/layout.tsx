import { UserButton } from '@clerk/nextjs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full flex">
      <aside className="row-span-full col-span-5 h-full w-[200px] border-r border-black/10">
        Mood
      </aside>
      <div className="flex-grow flex flex-col">
        <header className="h-[60px] border-b border-black/10 flex items-center px-4">
          <div className="ms-auto me-2">
            <UserButton />
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
