import type { Metadata } from 'next';
import Sidebar from '../components/fragments/Sidebar';

export const metadata: Metadata = {
  title: 'Noted Whatsab',
  description: 'Mulai catatan dari hal yang terkecil'
};

export default function NotedLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid grid-cols-custom-2 h-screen w-screen overflow-hidden">
      <Sidebar />
      <section className=" col-span-2 md:col-span-1">{children}</section>
    </div>
  );
}
