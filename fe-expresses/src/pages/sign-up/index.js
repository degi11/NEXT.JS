import { GeldLogoIcon } from "@/components/GeldLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const PhText = ["Name", "Email", "Password", "Re-password"];

  const ref = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = "http://localhost:8000";
    const [name, email, password, rePassword] = ref.current;

    // if (password != rePassword) {
    //   console.log("Password not matched");
    //   return;
    // }

    const response = await axios.post(baseUrl + "/api/signUp", {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    console.log(response);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex  items-center justify-center">
        <div className="w-[384px] h-[426px] flex flex-col items-center justify-center gap-10">
          <GeldLogoIcon />
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl">Create Geld account</h1>
            <p>Sign up below to create your Wallet accounts</p>
          </div>
          <form
            className="w-full flex flex-col gap-4"
            ref={ref}
            onSubmit={onSubmit}
          >
            {PhText.map((e, i) => {
              return <Input placeholder={e} />;
            })}
            <Button type="submit" className="bg-blue-700">
              Sign up
            </Button>
          </form>
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
