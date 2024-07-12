import { SignIn } from "@/components/sign-in";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <a className="bg-center"> home </a>
      <Link href="@/components/sign-in"></Link>
    </main>
    
  );
}
