'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { services } from '../../shared/services'


export default function ServiceGallery() {
  const [selectedService, setSelectedService] = useState(services[0].title)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <Card className="bg-[#2d3748] text-gray-100">
      <CardHeader>
        <CardTitle className="flex items-center">
          <service.icon className="h-6 w-6 mr-2 text-[#fca700]" />
          {service.title}
        </CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-4">Our Workflow:</h4>
        <ol className="space-y-4">
          {service.workflow.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#fca700] rounded-full mr-3">
                <span className="text-[#1e2836] font-semibold">{index + 1}</span>
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )

  return (
    <section className="py-20 bg-[#1e2836] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="tracking-tight text-4xl 
        sm:text-5xl lg:text-6xl 
        my-7
        font-extrabold leading-tight">
            <span className='text-[#fca700]'>O</span>ur Service<span className='text-[#fca700]'>s</span>
        </h2>
        {isMobile ? (
          <div className="space-y-8">
            <Select onValueChange={setSelectedService} value={selectedService}>
              <SelectTrigger className="w-full bg-[#2d3748] text-gray-100">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-[#2d3748] text-gray-100">
                {services.map((service) => (
                  <SelectItem key={service.title} value={service.title}>
                    <div className="flex items-center">
                      <service.icon className="h-5 w-5 mr-2 text-[#fca700]" />
                      {service.title}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <ServiceCard service={services.find(s => s.title === selectedService)!} />
          </div>
        ) : (
          <Tabs defaultValue={services[0].title} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-[#2d3748] text-gray-100">
              {services.map((service) => (
                <TabsTrigger key={service.title} value={service.title} className="text-sm md:text-base flex items-center justify-center">
                  <service.icon className="h-5 w-5 mr-2 text-[#fca700]" />
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {services.map((service) => (
              <TabsContent key={service.title} value={service.title} className="mt-8">
                <ServiceCard service={service} />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  )
}
