import { getSubjectColor } from "@/lib/utils";

const CompanionComponent = ({ name, subject, topic, title, duration,userImage,userName }:CompanionComponentProps) => {
  return (
    <section className="flex flex-col h-[70vh]">
      <section className="flex gap-8 max-sm:flex-col">
        <div className="companion-section">
          <div
            className="companion-avatar"
            style={{ backgroundColor: getSubjectColor(subject) }}
          ></div>
        </div>
      </section>
    </section>
  );
};

export default CompanionComponent;