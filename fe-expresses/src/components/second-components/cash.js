import Image from "next/image";
import Large from "@/components/Large.png";
import { VisaCardDesign } from "../visaCardDesign";

export const Cash = ({ money }) => {
  return (
    <div className="w-1/3 h-[216px] flex bg-blue-600 rounded-[12px]">
      <div>
        <div>
          <p>CASH</p>
          <p>{money}</p>
        </div>
      </div>
      <VisaCardDesign className=""></VisaCardDesign>
    </div>
  );
};
