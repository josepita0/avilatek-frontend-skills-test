"use client"

import Image from "next/image"
import { Card } from "../ui/card"

export const ReferenceSection = () => {
    return (
      <div className="p-10">
        <Card className="p-0 overflow-hidden">
          <section className="flex flex-row">
            <div className="w-1/2">
              <Image 
                src="/images/reference.jpg" 
                alt="reference" 
                width={500} 
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 bg-secondary p-8 flex flex-col justify-center text-white">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <h3 className="text-2xl font-medium mb-4">
                Love the simplicity of the service and the prompt customer support.
                We cant imagine working without it.
              </h3>
              <div className="mt-4">
                <p className="font-medium">― Renee Wells</p>
                <p className="text-sm opacity-80">Product Designer, Quotient</p>
              </div>
              <div className="flex mt-8 space-x-2">
                <span className="h-2 w-2 bg-white rounded-full opacity-90"></span>
                <span className="h-2 w-2 bg-white rounded-full opacity-50"></span>
                <span className="h-2 w-2 bg-white rounded-full opacity-50"></span>
              </div>
            </div>
          </section> 
        </Card>
      </div>
    )
}