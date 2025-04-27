import { BasicInfoSection, IBasicInfoSectionProps } from "../basic-info-section"
import { TitleSection } from "../tittle-section"

export const ToolsSection = () => {

  const toolsInfo: IBasicInfoSectionProps[] = [
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

          <TitleSection
            badge="Integrations"
            title="Get more value from your tools"
            description="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away."
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




