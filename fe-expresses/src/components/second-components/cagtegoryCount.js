import { RightArrow } from "../RigtArrow";
import { ViewIconChanger } from "./viewIconChanger";

export const CategoryCount = () => {
  const Categories = [
    "Food & drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication, PC",
    "Financial expenses",
    "Invesments",
    "Income",
    "Others",
  ];

  return (
    <div className="flex flex-col gap-2">
      {Categories.map((e, i) => {
        return (
          <div className="flex justify-between">
            <div className="flex gap-2 items-center pl-3.5">
              <ViewIconChanger select={true} />
              <p>{e}</p>
            </div>
            <RightArrow />
          </div>
        );
      })}
    </div>
  );
};
