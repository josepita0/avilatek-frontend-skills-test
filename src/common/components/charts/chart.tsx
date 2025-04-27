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
    <div className="relative">

      <div className="w-[50rem] h-96 relative">
          <ChartDays />  
      </div>
        {/* <div className="absolute w-full h-full bottom-0 -right-7 ">
            <ChartUsers />
        </div> */}
    </div>
  );
};
