import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { GeldLogoIcon } from "../../components/GeldLogo";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const PhText = ["Email", "Password"];
  const router = useRouter();
  const ref = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = "http://localhost:8000";
    const [email, password] = ref.current;

    const response = await axios.post(baseUrl + "/api/signIn", {
      email: email.value,
      password: password.value,
    });
    if (response.data.success) {
      localStorage.setItem("user", JSON.stringify(response.data.user[0]));
      router.push("/dashboard");
    }
    console.log(response.data.success);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex  items-center justify-center">
        <div className="w-[384px] h-[426px] flex flex-col items-center justify-center gap-10">
          <GeldLogoIcon />
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl">Wellcome Back</h1>
            <p>Welcome back, Please enter your details</p>
          </div>
          <from className="w-full">
            <form
              className="flex flex-col gap-4 w-full "
              ref={ref}
              onSubmit={onSubmit}
            >
              {PhText.map((e, i) => {
                return <Input placeholder={e} />;
              })}
              <Button type="submit" className="bg-blue-600 rounded-[20px]">
                Log in
              </Button>
            </form>
          </from>

          <div className="flex gap-2">
            <p>Don't have account?</p>
            <Link href="/sign-up" className="text-blue-600">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-700" />
    </div>
  );
}
