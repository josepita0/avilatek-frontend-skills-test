import { ArrowRight } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import Image from "next/image"

interface IToolInfoProps {
  title: string,
  description?:string,
  imageTool?:string
}


export const ToolsSection = () => {

  const toolsInfo: IToolInfoProps[] = [
    {
      title: "Notion integration",
      description: "Work faster and smarter by integrating directly with Notion, right in the app.",
      
    },
    {
      title: "Slack integration",
      description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    },
    {
      title: "Google Drive integration",
      description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    },

    {
      title: "Intercom integration",
      description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    },
    {
      title: "Jira integration",
      description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    },
    {
      title: "Dropbox integration",
      description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    }


  ]


    return (
        <div className="flex flex-col p-4 gap-16">

          <div className="flex flex-col gap-1 items-center">
            <Badge>Integrations</Badge>

            <div className="flex flex-col items-center gap-2">
              <Label className="text-2xl font-bold">
                Get more value from your tools
              </Label>
              
              <div className="w-1/2 text-center">
                <Label className="text-zinc-500">
                  Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.
                </Label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">

            {
              toolsInfo.map((tool)=> {
                return (
                  <ToolInfo
                    key={tool.title}
                    {...tool}
                  />
                )
              })
            }

          </div>
        </div>
    )
}



const ToolInfo = ({title, description, imageTool }: IToolInfoProps) => {

  return (

    <div className="flex flex-col gap-2 items-center">

      <Image src={imageTool || ''} alt={title} width={20} height={20}/>

      <Label className="text-base font-bold">
        {title}
      </Label>

        <Label className="text-zinc-500 text-sm text-center">
        {description }
        </Label>

      <Button variant={"link"} className="font-bold">View integration <ArrowRight /></Button>
    </div>

  )

}
