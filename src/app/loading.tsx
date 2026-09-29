export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      
      <div className="h-9 w-48 animate-pulse rounded bg-gray-800" />
      <div className="mt-2 h-4 w-64 animate-pulse rounded bg-gray-800" />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-800 bg-[#11141a]"
          >
            
            <div className="h-48 w-full animate-pulse bg-gray-800" />

            <div className="p-4">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-800" />
              <div className="mt-3 h-5 w-40 animate-pulse rounded bg-gray-800" />
              <div className="mt-2 h-3 w-28 animate-pulse rounded bg-gray-800" />
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}