import { InfoCard } from "@/common/components/info-card";
import { ToolsSection } from "@/common/components/tools";

export const InfoComponent = () => {
  return (
    <div className="flex flex-col w-full p-10 gap-8">
      <InfoCard/>

      <ToolsSection/>
    </div>
  )
};
