// app/dashboard/layout.tsx  (or similar)
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar */}
      <div className="col-span-3 border-r-2  p-4">
        <h1 className="text-2xl font-bold mb-6 text-orange-700">Navigation</h1>

        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard/add-story"
            className="block px-4 py-2 rounded hover:bg-amber-700 transition"
          >
            Add Story
          </Link>

          <Link
            href="/dashboard/profile"
            className="block px-4 py-2 rounded hover:bg-amber-700 transition"
          >
            Profile
          </Link>

          <Link
            href="/dashboard/setting"
            className="block px-4 py-2 rounded hover:bg-amber-700 transition"
          >
            Setting
          </Link>
        </div>
      </div>

      {/* Main content */}
      <main className="col-span-9 bg-gray-50 p-6">{children}</main>
    </div>
  );
}
