import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { CircleChart } from "../second-components/pieChart";
import { PieChartData } from "../second-components/pieChartData";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#84CC16",
  },
  mobile: {
    label: "Mobile",
    color: "#F97316",
  },
};

// let acc = 0 if(ttype === "exp") acc.expense += amount

export const Graphic = ({ date }) => {
  return (
    <div className="w-full flex gap-6">
      <div className="w-1/2 h-[284px] flex flex-col bg-white rounded-[12px]">
        <div className="w-full py-4 px-6 border-b-slate-500 ">
          <p>Income - Expense</p>
        </div>
        <div className="flex">
          <ChartContainer
            config={chartConfig}
            className="h-[224px] w-full py-[32px] pr-[32px]"
          >
            <BarChart accessibilityLayer data={chartData}>
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
      <div className="w-1/2 h-[284px] flex flex-col bg-white rounded-[12px]">
        <div className="w-full py-4 px-6 border-b-slate-500 flex justify-between">
          <p>Income - Expense</p>
          <p>{date}</p>
        </div>
        <div className="flex ">
          <CircleChart />
          <div className="flex flex-col gap-4 pt-[24px]">
            <PieChartData
              category={"food & drinks"}
              expense={"5,000,000"}
              porcent={"24,4%"}
            />
            <PieChartData
              category={"food & drinks"}
              expense={"5,000,000"}
              porcent={"24,4%"}
            />

            <PieChartData
              category={"food & drinks"}
              expense={"5,000,000"}
              porcent={"24,4%"}
            />

            <PieChartData
              category={"food & drinks"}
              expense={"5,000,000"}
              porcent={"24,4%"}
            />

            <PieChartData
              category={"food & drinks"}
              expense={"5,000,000"}
              porcent={"24,4%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
