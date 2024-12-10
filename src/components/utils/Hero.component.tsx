
import { Button } from "../ui/button"
import { ArrowRight, Zap, Shield, Smile } from 'lucide-react'
import { StartupName } from "../../shared/protoData"


export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 h-[800px]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Revolutionize Your Development Workflow
                        </h1>
                        <p className="text-xl text-gray-300">
                            {StartupName} empowers developers to build faster, smarter, and more efficiently.
                            Experience the future of coding with our AI-powered assistant.
                        </p>
                        <div className="flex space-x-4">
                            <Button size="lg">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="text-black" size="lg">
                                Learn More
                            </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-8">
                            {[
                                { icon: Zap, text: "10x Faster Development" },
                                { icon: Shield, text: "Enterprise-Grade Security" },
                                { icon: Smile, text: "Loved by 10k+ Developers" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <item.icon className="h-6 w-6 text-[#fca700]" />
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="/assets/roodmap.jpg"
                            alt="Ch_Dev_tool in action"
                            className="rounded-lg bg-cover text-[#120122]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}