import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentContent } from "@/lib/doc";

// generate meta tags for the content page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { contentId } = resolvedParams;
  const documentContent = await getDocumentContent(contentId);
  return {
    title: documentContent.title,
  };
}

const ContentPage = async ({ params }) => {
  const resolvedParams = await params;
  const { contentId } = resolvedParams;
  return <ContentDisplay id={contentId} />;
};

export default ContentPage;
