import { AnaliticSection } from "@/common/components/analitics-section";
import { CounterSection } from "@/common/components/counters";
import { InfoCard } from "@/common/components/info-card";
import { QuestionSection } from "@/common/components/question-section";
import { ReferenceSection } from "@/common/components/reference-section";
import { TitleSection } from "@/common/components/tittle-section";
import { ToolsSection } from "@/common/components/tools";
import { Button } from "@/common/components/ui/button";
import { Card, CardContent } from "@/common/components/ui/card";

export const InfoComponent = () => {
  return (
    <div>

      <div className="flex flex-col w-full p-10 gap-[5rem]">
        <InfoCard/>

        <ToolsSection/>
        
        <CounterSection/>

        <AnaliticSection/>

        <ReferenceSection/>

      </div>

      <Card className="w-full rounded-none bg-zinc-50 border-0">

        <CardContent className="space-y-4">
          <TitleSection
             title="No long-term contracts. No catches."
             description="Start your 30-day free trial today."
          />


          <div className="flex flex-row gap-4 items-center justify-center">
            <Button variant={"outline"}>Learn more</Button>
            <Button>Get started</Button>
          </div>


        </CardContent>

      </Card>

    <div className="pt-10">
      <QuestionSection />
    </div>


    </div>
  )
};
