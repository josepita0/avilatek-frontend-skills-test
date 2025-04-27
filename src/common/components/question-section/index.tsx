import { AccordionInfo,  } from "../accordion-info"
import { TitleSection } from "../tittle-section"



export const QuestionSection = () => {

    const accordions: {
      title: string,
      content: string
    }[] = [{
      title:"Is there a free trial available?",
      content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
    {
      title:"Can I change my plan later?",
      content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
    {
      title:"What is your cancellation policy?",
      content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
    {
      title:"Can other info be added to an invoice?",
      content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
    {
      title:"How does billing work?",
      content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
  
    {
      title:"How do I change my account email?",
      content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    }
  ]


    return (
      <div className="flex flex-col p-4 gap-8">
    
      <TitleSection
        title="Frequently asked questions"
        description="Everything you need to know about the product and billing."
      />

      <div className="px-22">
      <AccordionInfo
      accordions={accordions}
      
      />

      </div>



        </div>
    )
}





