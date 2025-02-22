// app/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <div
      className={`fixed inset-0 lg:relative lg:w-64 bg-indigo-600 text-white transition-all duration-300 ease-in-out z-50 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:block`}
    >
      {/* Sidebar content */}
      <div className="h-full p-4 space-y-6">
        <h2 className="text-2xl font-bold">My Sidebar</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/">
              <a className="block text-lg">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="block text-lg">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="block text-lg">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
