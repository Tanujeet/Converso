import { getAllCompanions } from "@/lib/actions/companion.action";

const CompanionLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return <div>page</div>;
};

export default CompanionLibrary;
