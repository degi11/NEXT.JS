import { RecordsTimeSection } from "../second-components/lastRecords";
import { Checkbox } from "../ui/checkbox";

export const HistoryControl = ({ allCost }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col gap-6">
        <div className="flex justify-between w-full px-[24px] py-[12px] border-solid border-[1px] border-gray-300 rounded-[12px] bg-white">
          <div className="flex items-center gap-4 ">
            <Checkbox />
            <p>Select all</p>
          </div>
          <p>{allCost}</p>
        </div>
        <p>Today</p>
      </div>
      <RecordsTimeSection cost={-10000} />
    </div>
  );
};
