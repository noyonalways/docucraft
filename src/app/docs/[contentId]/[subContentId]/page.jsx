import ContentDisplay from "@/components/ContentDisplay";

const SubContentPage = async ({ params }) => {
  const resolvedParams = await params;
  const { contentId, subContentId } = resolvedParams;
  const id = `${contentId}/${subContentId}`;
  return <ContentDisplay id={id} />;
};

export default SubContentPage;
