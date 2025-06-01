import CompanionList from "@/components/ui/CompanionList";
import CompanionCard from "@/components/ui/CompanionCard";
import CTA from "@/components/ui/CTA";

const page = () => {
  return (
    <main>
      <h1>
        Popular Companions
        <section className="home-section">
          <CompanionCard
            id="123"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
            id="456"
            name="Countsy the Number Wizard"
            topic="Derivatives & Integrals"
            subject="Maths"
            duration={30}
            color="#e5d0ff"
          />
          <CompanionCard
            id="789"
            name="Verba the Vocabulary Builder"
            topic="English Literature"
            subject="Language"
            duration={30}
            color="#BDE7FF"
          />
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
