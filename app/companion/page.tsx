import CompanionCard from "@/components/ui/CompanionCard";
import { getAllCompanions } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

const CompanionLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className=" flex justify-center gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">Filters</div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionLibrary;
