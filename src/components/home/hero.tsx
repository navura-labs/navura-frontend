import Link from "next/link";

import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-5xl font-bold text-gray-900 dark:text-white">
          Privacy-First HR Management
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
          Navura combines encrypted ERC20 payroll, NFT-based payslips, and a
          trustworthy job marketplace to make HR simple, secure, and transparent
          on the blockchain.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/marketplace">Explore Jobs</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export { Hero };
