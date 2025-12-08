import { getDocuments } from "@/lib/doc";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Landing = async () => {
  const docs = await getDocuments();
  const getStartedDoc = docs.find((doc) => doc.parent === null);
  return (
    <article>
      <div className="relative">
        <div className="relative mx-auto px-4">
          <div className="mx-auto grid max-w-160 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
            <div className="flex flex-col lg:pb-6 lg:col-span-2 justify-center">
              <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-white sm:text-5xl sm:leading-14">
                DocsDB
              </h1>

              <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                DocsDB turns your Markdown files into beautiful, responsive HTML
                documentation—no build steps, no hassle. Write in Markdown,
                publish instantly, and give developers an elegant, interactive
                guide to discover, understand, and integrate your services
                faster than ever.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={`/docs/${getStartedDoc.id}`}
                  className="inline-flex justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
                >
                  <span>Get Started</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative lg:col-span-3">
              <Image
                src="/banner.png"
                alt="Banner"
                width="1600"
                height="1280"
                className="w-full relative z-20  aspect-853/682 max-w-[630px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Landing;
