import { AnaliticSection } from "@/common/components/analitics-section";
import { CounterSection } from "@/common/components/counters";
import { InfoCard } from "@/common/components/info-card";
import { ReferenceSection } from "@/common/components/reference-section";
import { ToolsSection } from "@/common/components/tools";

export const InfoComponent = () => {
  return (
    <div className="flex flex-col w-full p-10 gap-[5rem]">
      <InfoCard/>

      <ToolsSection/>
      
      <CounterSection/>

      <AnaliticSection/>

      <ReferenceSection/>

    </div>
  )
};
