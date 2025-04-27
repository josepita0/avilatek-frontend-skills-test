import { Badge } from "../ui/badge"
import { Label } from "../ui/label"

interface ITittleSectionProps {
  badge?:string,
  title:string,
  description?:string
}
export const TitleSection = ({title, badge, description}: ITittleSectionProps) => {
    return (
      <div className="flex flex-col gap-1 items-center">

        {
          badge && (
            <Badge>{badge}</Badge>
          )
        }

      <div className="flex flex-col items-center gap-2">
        <Label className="text-2xl font-bold">
          {
            title
          }
        </Label>
        
        {
          description && (
            <div className="w-1/2 text-center">
              <Label className="text-zinc-500">
                Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.
              </Label>
            </div>
          )
        }
      </div>
    </div>
    )
}

