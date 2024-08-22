import { CashBalance } from "../CashBalanceLogo";
import { Input } from "../ui/input";

export const SetupCashBalance = () => {
  return (
    <div className="w-[384px] flex flex-col gap-7 mt-[141px]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <CashBalance />
        <h1 className="text-2xl">Set up your cash Balance</h1>
      </div>
      <div className="flex flex-col gap-4">
        <Input palceholder="Email" />
        <p className="text-[12px] text-slate-600">
          How much cash do you have in your wallet?
        </p>
      </div>
    </div>
  );
};
