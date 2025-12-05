import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentContent } from "@/lib/doc";

// generate meta tags for the content page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { contentId, subContentId } = resolvedParams;
  const id = `${contentId}/${subContentId}`;
  const documentContent = await getDocumentContent(id);
  return {
    title: documentContent.title,
  };
}

const SubContentPage = async ({ params }) => {
  const resolvedParams = await params;
  const { contentId, subContentId } = resolvedParams;
  const id = `${contentId}/${subContentId}`;
  return <ContentDisplay id={id} />;
};

export default SubContentPage;
