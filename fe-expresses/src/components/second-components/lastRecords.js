import { HouseLogo } from "../HouseLogo";
import { Checkbox } from "../ui/checkbox";

export const LastRecords = ({ cost, categoryName }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center border-t border-gray-300 px-[24px]  py-5">
        <div className="w-full flex gap-4">
          <HouseLogo />
          <div>
            <p>{categoryName}</p>
            <p className="text-[12px]">3 hours ago</p>
          </div>
        </div>
        <p>-{cost}$</p>
      </div>
    </div>
  );
};

export const RecordsTimeSection = ({ cost, categoryName }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center px-[24px]  py-5 border-solid border-[1px] border-gray-300 rounded-[12px] bg-white">
        <div className="w-full flex gap-4 ">
          <div className="flex items-center gap-4">
            <Checkbox />
            <HouseLogo />
          </div>

          <div>
            <p>{categoryName}</p>
            <p className="text-[12px]">3 hours ago</p>
          </div>
        </div>
        <p>-{cost}$</p>
      </div>
    </div>
  );
};
