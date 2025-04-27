import { ChartsComponent } from "../charts/chart"
import { Button } from "../ui/button"
import { Card, CardContent, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const InfoCard = () => {
    return (  

          <div className="relative mb-4">

            <Card className="w-full bg-secondary relative pb-52">
    
                <CardContent className="flex flex-col gap-4 items-center">
    
                  <div className="flex flex-col items-center ">
                    <CardTitle className="text-[3.5rem] text-white m-0">
                      Grow your users.
                    </CardTitle>
                    <CardTitle className="text-[3.5rem] text-zinc-300">
                      Smarter.
                    </CardTitle>
                  </div>
    
                  <div className="w-1/2 flex flex-col items-center gap-6">
    
                      <Label className="text-zinc-300 text-center">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                      </Label>
    
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-row gap-4">
                          <Input
                            placeholder="Enter your email"
                            className="bg-zinc-300"
                          />
    
                          <Button>Get Started</Button>
                        </div>
                        
                        <Label className="text-zinc-300 text-xs">We care about your data in our<a href="#">privacy policy</a>.</Label>
    
                      </div>
    
                  </div>
                  
                </CardContent>
    
            </Card>
            <div className="absolute  right-9 -bottom-24 ">
              <ChartsComponent />
            </div>
          </div>
    )
}

