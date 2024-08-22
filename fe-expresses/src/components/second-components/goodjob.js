import { GoodJobLogo } from "../GoodJobLogo";

export const GoodJob = () => {
  return (
    <div className="w-[384px] flex flex-col gap-7 mt-[141px]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <GoodJobLogo />
        <h1 className="text-2xl">Good Job!</h1>
      </div>
      <p className="text-[12px] text-slate-600">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </p>
    </div>
  );
};
