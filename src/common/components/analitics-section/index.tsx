import { BasicInfoSection, IBasicInfoSectionProps } from "../basic-info-section"
import { TitleSection } from "../tittle-section"

export const AnaliticSection = () => {

    const toolsInfo: IBasicInfoSectionProps[] = [
      {
        title: "Share team inboxes",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        linkTitle: 'Learn more'
      },
      {
        title: "Deliver instant answers",
        description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        linkTitle:"Learn more"
      },
      {
        title: "Manage your team with reports",
        description: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
        linkTitle:"Learn more"
      },
  
    
  
  
    ]

      return (
            <div className="flex flex-col p-4 gap-16">
    
              <TitleSection
                badge="Features"
                title="Cutting-edge features for advanced analytics"
                description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
              />
    
              <div className="grid grid-cols-3 gap-10">
    
                {
                  toolsInfo.map((tool)=> {
                    return (
                      <BasicInfoSection
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

