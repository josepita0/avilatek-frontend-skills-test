import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export interface IAccordionInfoProps { 
  accordions: {
    title: string,
    content: string
  }[]
}


export const AccordionInfo = ({accordions}: IAccordionInfoProps) => {

  return (

    <Accordion type="single" collapsible>
      {
        accordions.map((accordion) => {

          return (
            <AccordionItem  key={accordion.title} value={accordion.title}>
              <AccordionTrigger className="font-bold">{accordion.title}</AccordionTrigger>
              <AccordionContent className="text-zinc-500">
                {accordion.content}
              </AccordionContent>
            </AccordionItem>

          )
        })
      }
    </Accordion>
  )
}
