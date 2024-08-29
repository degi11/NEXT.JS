import Image from "next/image";
import Large from "@/components/Large.png";
import { VisaCardDesign } from "../visaCardDesign";
import { GeldWhiteLogo } from "../GeldOnCashLogo";

export const Cash = ({ money }) => {
  return (
    <div className="w-1/3 h-[216px] flex bg-blue-600 rounded-[12px]">
      <div className="w-1/2 flex flex-col items-baseline p-[32px] gap-[66px]">
        <GeldWhiteLogo />
        <div>
          <p className="text-white">Cash</p>
          <p className="text-[24px] text-white">{money}</p>
        </div>
      </div>
      <div className="pt-[22px]">
        <VisaCardDesign />
      </div>
    </div>
  );
};
