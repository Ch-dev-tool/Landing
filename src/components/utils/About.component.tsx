import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
// import { Code, Cpu, Users, Globe } from 'lucide-react'
import { StartupName } from "../../shared/protoData"

import features from "../../shared/features"

export default function About() {
    return (
        <section className="py-20  bg-[#1e2836] text-white h-[810px]" id="AboutSection">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="tracking-tight
                    text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight
                    ">About <span className="text-[#fca700]">{StartupName}</span></h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        Empowering developers with cutting-edge AI technology to streamline workflows and boost productivity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-[#2d3748] shadow-md text-gray-100">
                            <CardHeader>
                                <feature.icon className="h-8 w-8 text-[#fca700] mb-2" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-100 opacity-85">{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-20">
                    <Card className="bg-[#2d3748] shadow-md text-gray-100">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">
                                <span className="text-[#fca700]">M</span>eet the <span className="text-[#fca700]">F</span>ounder</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-48 h-48 rounded-full overflow-hidden">
                                <img
                                    src="/assets/avatar.jpg"
                                    alt="Founder's portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-mono underline underline-offset-4 decoration-[#fca700] mb-2">Diouri Salah Eddine</h3>
                                <p className="text-gray-50 mb-4">
                                    With over a decade of experience in software development ,
                                    Diouri Salah Eddine  founded <span
                                        className="text-[#fca700] font-semibold ">{StartupName}</span> to revolutionize the way developers work. His vision
                                    is to create tools that not only increase productivity but also enhance the
                                    creativity and problem-solving abilities of developers worldwide.
                                </p>
                                <p className="text-gray-50">
                                    "I believe that by harnessing the power of softwares and AI, we can unlock new levels of
                                    efficiency and innovation in software development. <span
                                        className="text-[#fca700] font-semibold ">{StartupName}</span> is just the
                                    beginning of this exciting journey."
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

