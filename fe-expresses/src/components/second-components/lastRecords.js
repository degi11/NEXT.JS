import { HouseLogo } from "../HouseLogo";

export const LastRecords = ({ cost }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full border-b border-gray-300">
        <h3 className="py-4 px-6">Last Records</h3>
      </div>
      <div className="w-full flex items-center border-t border-gray-300 px-[24px]  py-5">
        <div className="w-full flex gap-4">
          <HouseLogo />
          <div>
            <p>Leading & Renting</p>
            <p className="text-[12px]">3 hours ago</p>
          </div>
        </div>
        <p>{cost}</p>
      </div>
    </div>
  );
};

export const RecordsTimeSection = ({ cost }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center px-[24px]  py-5 border-solid border-[1px] border-gray-300 rounded-[12px] bg-white">
        <div className="w-full flex gap-4 ">
          <HouseLogo />
          <div>
            <p>Leading & Renting</p>
            <p className="text-[12px]">3 hours ago</p>
          </div>
        </div>
        <p>{cost}$</p>
      </div>
    </div>
  );
};
