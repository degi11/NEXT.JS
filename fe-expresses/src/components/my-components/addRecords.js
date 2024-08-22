import { TabsComponents } from "../second-components/tabs";

export const AddRecords = () => {
  return (
    <div className="w-[792px] h-[512px] bg-white rounded-[12px]">
      <div className="w-full  border-b border-solid border-gray-300 px-[24px] py-[20px]">
        <h2>Add Records</h2>
      </div>
      <div>
        <div className="w-1/2 px-[24px] pb-[24px] pt-[20px] flex flex-col gap-[20px]">
          <TabsComponents className="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};
