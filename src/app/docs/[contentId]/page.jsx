import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentContent } from "@/lib/doc";

// generate meta tags for the content page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { contentId } = resolvedParams;
  try {
    const documentContent = await getDocumentContent(contentId);
    if (!documentContent) {
      return {
        title: "Document Not Found",
      };
    }
    return {
      title: documentContent.title,
    };
  } catch (error) {
    return {
      title: "Document Not Found",
    };
  }
}

const ContentPage = async ({ params }) => {
  const resolvedParams = await params;
  const { contentId } = resolvedParams;
  return <ContentDisplay id={contentId} />;
};

export default ContentPage;
