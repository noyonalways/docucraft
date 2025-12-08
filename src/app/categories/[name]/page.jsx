import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc";

const CategoriesPage = async ({ params }) => {
  const resolvedParams = await params;
  const { name } = resolvedParams;
  const docs = await getDocuments();
  const matchedDocs = getDocumentsByCategory(docs, name);
  return <ContentDisplay id={matchedDocs[0]?.id} />;
};

export default CategoriesPage;
