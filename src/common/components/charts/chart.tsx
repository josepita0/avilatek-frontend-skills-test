import dynamic from "next/dynamic";

const ChartDays = dynamic(() => import("../charts/days/chart-days"), {
  ssr: false,
});

const ChartUsers = dynamic(
  () => import("../charts/active-users/chart-active-users"),
  {
    ssr: false,
  }
);

export const ChartsComponent = () => {
  return (
    <div>
      <ChartDays />
      <ChartUsers />
    </div>
  );
};
