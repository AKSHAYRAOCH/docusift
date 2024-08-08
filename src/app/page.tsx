import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <SignIn />
      <SignOut />

    </main>
  );
}
