import dynamic from "next/dynamic";

const ChartDays = dynamic(() => import("../charts/days/chart-days"), {
  ssr: false,
});

// const ChartUsers = dynamic(
//   () => import("../charts/active-users/chart-active-users"),
//   {
//     ssr: false,
//   }
// );

export const ChartsComponent = () => {
  return (

      <div className="w-[50rem]  relative flex items-center">
          <ChartDays />  
      </div>
  );
};
