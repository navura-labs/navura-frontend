import { Shield } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-600" />

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Navura
          </h1>
        </div>

        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export { Header };
