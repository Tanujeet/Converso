import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learn your way. </div>
      <h2 className="text-3xl font-bold">
        Build and personalize learning companion
      </h2>
      <p>
        Pick a name ,subject ,voice & personalty - and start learning through
        voice converstions that feel natural and fun
      </p>
      <img src="images/cta.svg" alt="cta" width={362} height={232} />
      <button className="btn-primary">
        <img src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companion/new">
          <p>Build a Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
