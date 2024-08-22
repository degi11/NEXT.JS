import { Button } from "@/components/ui/button";
import { GeldLogoIcon } from "../../components/GeldLogo";
import { Currency } from "../../components/second-components/currency";
import { SetupCashBalance } from "@/components/second-components/setupCashBalance";
import { GoodJob } from "@/components/second-components/goodjob";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center mt-[40px] ">
      <div className="flex flex-col gap-[40px]">
        <GeldLogoIcon />
        <div className="flex ">
          <div className="w-[20px] h-[20px] flex rounded-full bg-blue-700 text-white items-center justify-center">
            1
          </div>
          <div className="w-[20px] h-[20px] flex rounded-full bg-blue-700 text-white items-center justify-center">
            2
          </div>
          <div className="w-[20px] h-[20px] flex rounded-full bg-blue-700 text-white items-center justify-center">
            3
          </div>
        </div>
      </div>
      {/* <SetupCashBalance /> */}
      <Currency />
      {/* <GoodJob /> */}
      <Button className="w-[384px] mt-[32px]">Confirm</Button>
    </div>
  );
}
