import { StartupName } from "../../shared/protoData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { PenToolIcon as CheckCircle } from 'lucide-react'
import { services } from "../../shared/services";


export default function ServiceGallery() {
    return (
        <section className="py-20  bg-[#1e2836] text-white h-[820px]" id="ServiceSection">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center">
                    <h2 className="tracking-tight mb-12
                    text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        <span className="text-[#fca700]">{StartupName}</span> Services</h2>
                </div>

                <Tabs defaultValue={services[0].title} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4  bg-[#2d3748] text-gray-100">
                        {services.map((service) => (
                            <TabsTrigger key={service.title} value={service.title} className="text-sm md:text-base">
                                <service.icon className="h-5 w-5 mr-2 text-[#fca700]" />
                                {service.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {services.map((service) => (
                        <TabsContent key={service.title} value={service.title} className=" bg-[#2d3748]">
                            <Card className=" bg-[#2d3748] text-gray-50 border-none mt-2">
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
                                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#1e2836] rounded-full mr-3">
                                                    {index === service.workflow.length - 1 ? (
                                                        <CheckCircle className="h-5 w-5 text-[#fca700]" />
                                                    ) : (
                                                        <span className="text-[#fca700] font-semibold">{index + 1}</span>
                                                    )}
                                                </span>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}

