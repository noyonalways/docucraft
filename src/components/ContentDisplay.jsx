import { getDocumentContent } from "@/lib/doc";
import parse from "html-react-parser";
import Link from "next/link";
import { notFound } from "next/navigation";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);

  if (!documentContent) {
    notFound();
  }

  const transformedContent = parse(documentContent.contentHtml, {
    replace: (domNode) => {
      if (domNode.name === "a") {
        const href = domNode.attribs.href;
        const children = domNode.children.map((child) => child.data || "");
        return <Link href={href}>{children}</Link>;
      }
      // if (domNode.name === "img") {
      //   const src = domNode.attribs.src;
      //   const alt = domNode.attribs.alt;
      //   return (
      //     <Image
      //       width={200}
      //       height={200}
      //       src={src}
      //       alt={alt}
      //       className="w-full rounded-xl"
      //     />
      //   );
      // }
    },
  });

  return (
    <article className="prose dark:prose-invert prose-a:text-emerald-600 prose-a:no-underline prose-a:hover:underline w-full lg:max-w-3xl">
      <h1>{documentContent.title}</h1>
      <div>
        <span>Published On: {documentContent.date}</span> by{" "}
        <Link href={`/authors/${documentContent.author}`}>
          {documentContent.author}
        </Link>{" "}
        under the{" "}
        <Link href={`/categories/${documentContent.category}`}>
          {documentContent.category}
        </Link>{" "}
        category.
      </div>
      <div>
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div className="prose-img:rounded">{transformedContent}</div>
    </article>
  );
};

export default ContentDisplay;
