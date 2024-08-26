export const PieChartData = ({ category, expense, porcent }) => {
  return (
    <div className="flex items-center pl-2 gap-[20px] ">
      <div className="w-2 h-2 rounded-full bg-green-600" />
      <p className="w-[100px]">{category}</p>
      <p className="w-[80px]">{expense}</p>
      <p>{porcent}</p>
    </div>
  );
};
