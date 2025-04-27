import Image from "next/image"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"


export interface IBasicInfoSectionProps {
  title: string,
  description?:string,
  imageTool?:string
  linkTitle?:string
}


export const BasicInfoSection = ({title, description,imageTool, linkTitle}: IBasicInfoSectionProps) => {
    return (
      
      <div className="flex flex-col gap-2 items-center">
  
        <Image src={imageTool || ''} alt={title} width={20} height={20}/>
  
        <Label className="text-base font-bold">
          {title}
        </Label>
  
          <Label className="text-zinc-500 text-sm text-center">
          {description }
          </Label>
  
        <Button variant={"link"} className="font-bold">{linkTitle ?? 'View integration'} <ArrowRight /></Button>
      </div>
  
    )
}

