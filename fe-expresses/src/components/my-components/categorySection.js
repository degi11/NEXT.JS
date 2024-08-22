import { PlusLogo } from "../PlusLogo";
import { CategoryCount } from "../second-components/cagtegoryCount";
import { Types } from "../second-components/types";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

export const CategorySection = () => {
  return (
    <div className="min-w-[282px] border-solid border-[1px] border-gray-200 bg-white rounded-[12px] mt-[32px]">
      <div className=" flex flex-col py-6 px-4 gap-6">
        <h1 className="text-2xl font-semibold">Records</h1>
        <Button className="bg-blue-600">
          <PlusLogo />
          Add
        </Button>
        <Input placeholder="Search" />
        <div className="flex flex-col gap-4">
          <p>Types</p>
          <Types text={"All"} />
          <Types text={"Income"} />
          <Types text={"Expence"} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between ">
            <p>Category</p>
            <p className="text-[#1F2937]">Clear</p>
          </div>
          <div>
            <CategoryCount />
            <Button className="flex gap-2 items-center bg-white ">
              <PlusLogo color={true} className="bg-blue-600" />
              <p className="text-black">Add category</p>
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <p>Amount Range</p>
            <div className="flex gap-4">
              <p className="border-solid border-[1px] border-gray-300 rounded-[8px] w-1/2 p-4">
                0
              </p>
              <p className="border-solid border-[1px] border-gray-300 rounded-[8px] w-1/2 p-4">
                100000
              </p>
            </div>

            <Slider
              className="bg-blue-600"
              defaultValue={[0]}
              max={100}
              step={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
