import { TitleSection } from "../tittle-section"
import { Card, CardContent } from "../ui/card"
import CountUp from "react-countup";
import { Label } from "../ui/label";

interface ICountUpInfoProp {
  end:number,
  suffix:string 
  title: string
}

export const CounterSection = () => {

  const countUpInfo: ICountUpInfoProp[] = [
    {
      end: 400,
      suffix: "+",
      title: "Projects completed"
    },

    {
      end: 600,
      suffix: "%",
      title: "Return on investment"
    },
    {
      end: 10,
      suffix: "k",
      title: "Global downloads"
    },
  ] 

    return (
      <div className="flex flex-col p-4 gap-16">

          <TitleSection
            title="Unleash the full power of data"
            description="Everything you need to convert, engage, and retain more users."
          />

          <Card className="bg-zinc-50 border-0 p-12">

              <CardContent className="grid grid-cols-3 items-center justify-center">

                {
                  countUpInfo.map((count) => {

                    return (
                      <CountUpInfo key={count.title} {...count}/>
                    )
                  })
                }

                

              </CardContent>
            
          </Card>

      </div>
    )
}


const CountUpInfo = ({end, suffix, title}: ICountUpInfoProp) => {

  return (
    <div className="flex flex-col items-center">

      <CountUp
          end={end}
          className="text-5xl font-bold text-primary"
          suffix={suffix}
        />

        <Label className="text-sm font-bold">{title}</Label>
    </div>


  )
}

