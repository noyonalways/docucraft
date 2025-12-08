import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentContent } from "@/lib/doc";

// generate meta tags for the content page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { contentId, subContentId } = resolvedParams;
  const id = `${contentId}/${subContentId}`;
  try {
    const documentContent = await getDocumentContent(id);
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

const SubContentPage = async ({ params }) => {
  const resolvedParams = await params;
  const { contentId, subContentId } = resolvedParams;
  const id = `${contentId}/${subContentId}`;
  return <ContentDisplay id={id} />;
};

export default SubContentPage;
