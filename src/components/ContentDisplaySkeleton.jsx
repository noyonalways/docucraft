const ContentDisplaySkeleton = () => (
  <>
    <article className="max-w-none animate-pulse">
      {/* Title skeleton */}
      <div className="h-10 bg-gray-200 dark:bg-zinc-800 rounded-md mb-4 w-3/4" />

      {/* Meta line skeleton */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-32" />
        <span className="text-gray-300 dark:text-gray-600">by</span>
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-24" />
        <span className="text-gray-300 dark:text-gray-600">under the</span>
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-20" />
        <span className="text-gray-300 dark:text-gray-600">category.</span>
      </div>

      {/* Tags skeleton */}
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded-full w-16" />
        <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded-full w-20" />
        <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded-full w-14" />
      </div>

      {/* Content skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-5/6" />
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-3/4" />
      </div>
    </article>
  </>
);

export default ContentDisplaySkeleton;
