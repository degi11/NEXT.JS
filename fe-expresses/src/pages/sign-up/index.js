import { GeldLogoIcon } from "@/components/GeldLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex  items-center justify-center">
        <div className="w-[384px] h-[426px] flex flex-col items-center justify-center gap-10">
          <GeldLogoIcon />
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl">Create Geld account</h1>
            <p>Sign up below to create your Wallet accounts</p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Re-password" />
            <Button className="bg-blue-700">Sign up</Button>
          </div>
          <div className="flex gap-2">
            <p>Don't have account?</p>
            <Link href="/sign-in" className="text-blue-700">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-700" />
    </div>
  );
}
