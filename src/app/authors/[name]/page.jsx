import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc";

const AuthorPage = async ({ params }) => {
  const resolvedParams = await params;
  const { name } = resolvedParams;

  const docs = await getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default AuthorPage;
