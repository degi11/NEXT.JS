import { CurrencyIcon } from "../CurrencyLogo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Currency = () => {
  return (
    <div className="w-[384px] flex flex-col gap-7 mt-[141px]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <CurrencyIcon />
        <h1 className="text-2xl">Select base currency</h1>
      </div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mnt">MNT - Mongolian Tugrik </SelectItem>
          <SelectItem value="usd">USD - United States Dollar</SelectItem>
          <SelectItem value="yen">YEN - Japan Yen</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-[12px] text-slate-600">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p>
      </div>
    </div>
  );
};
