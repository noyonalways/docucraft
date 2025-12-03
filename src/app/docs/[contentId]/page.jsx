import ContentDisplay from "@/components/ContentDisplay";

const ContentPage = async ({ params }) => {
  const resolvedParams = await params;
  const { contentId } = resolvedParams;
  return <ContentDisplay id={contentId} />;
};

export default ContentPage;
