import CompanionForm from "@/components/CompanionForm";
import { newCompanionPermissions } from "@/lib/actions/companion.action";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
    return null;
  }

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="w-full md:w-2/3 lg:w-1/3 mx-auto flex items-center justify-center min-h-screen">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1 className="text-2xl font-bold">Companion Builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit flex flex-col items-center text-center gap-4">
          <Image
            src="/images/limit.svg"
            alt="Upgrade to unlock more companions"
            width={360}
            height={230}
          />
          <div className="cta-badge">Upgrade your plan</div>
          <h1 className="text-xl font-semibold">You’ve Reached Your Limit</h1>
          <p className="text-sm text-gray-600">
            You’ve reached your companion limit. Upgrade to create more
            companions and unlock premium features.
          </p>
          <Link
            href="/subscription"
            className="btn-primary w-full justify-center"
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
