import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc";

const TagPage = async ({ params }) => {
  const resolvedParams = await params;
  const { name } = resolvedParams;

  const docs = await getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default TagPage;
