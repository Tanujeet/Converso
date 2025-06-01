import CompanionList from "@/components/CompanionList";
import CompanionCard from "@/components/ui/CompanionCard";
import CTA from "@/components/ui/CTA";

const page = () => {
  return (
    <main>
      <h1>
        Popular Companions
        <section className="home-section">
          <CompanionCard />
          <CompanionCard />
          <CompanionCard />
        </section>
        <section className="home-section">
          <CompanionList />
          <CTA />
        </section>
      </h1>
    </main>
  );
};

export default page;
