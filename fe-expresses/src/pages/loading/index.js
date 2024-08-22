import { GeldLogoIcon } from "../../components/GeldLogo";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-[48px] ">
      <GeldLogoIcon />
      <div className="flex flex-col gap-4 items-center justify-center">
        <Loader2 className="h-7 w-7 animate-spin" />

        <p>Түр хүлээнэ үү...</p>
      </div>
    </div>
  );
}
