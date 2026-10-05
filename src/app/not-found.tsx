import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-8 text-center shadow-lg">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-red-700">Not Found</h2>
        <p className="mt-3 text-red-500">Could not find requested resource</p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
