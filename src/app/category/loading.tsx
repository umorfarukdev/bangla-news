export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-red-50 px-4"
    >
      {/* Spinner: faint track + rotating red arc + pulsing core */}
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-4 border-red-100" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-600 motion-reduce:animate-none" />
        <div className="absolute inset-[26px] animate-pulse rounded-full bg-red-600 motion-reduce:animate-none" />
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold text-red-700">Loading</p>
        <p className="mt-1 text-sm text-red-500">This will only take a moment</p>
      </div>

      <span className="sr-only">Loading content, please wait</span>
    </div>
  );
}