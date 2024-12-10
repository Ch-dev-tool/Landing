import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Code, Cpu, Users, Globe, PenToolIcon as CheckCircle } from 'lucide-react'

const services = [
    {
        icon: Code,
        title: "Custom Software Development",
        description: "Tailored software solutions to meet your specific business needs.",
        workflow: [
            "Requirements gathering and analysis",
            "Design and architecture planning",
            "Agile development process",
            "Rigorous testing and quality assurance",
            "Deployment and ongoing support"
        ]
    },
    {
        icon: Cpu,
        title: "AI Integration",
        description: "Incorporate cutting-edge AI technologies into your existing systems.",
        workflow: [
            "AI readiness assessment",
            "Data preparation and model selection",
            "AI model development and training",
            "Integration with existing systems",
            "Performance monitoring and optimization"
        ]
    },
    {
        icon: Users,
        title: "Team Augmentation",
        description: "Boost your development capacity with our skilled professionals.",
        workflow: [
            "Skill gap analysis",
            "Candidate selection and onboarding",
            "Seamless integration with your team",
            "Regular progress reporting",
            "Knowledge transfer and documentation"
        ]
    },
    {
        icon: Globe,
        title: "Cloud Migration",
        description: "Seamlessly move your applications and data to the cloud.",
        workflow: [
            "Cloud readiness assessment",
            "Migration strategy development",
            "Data migration and application refactoring",
            "Testing in cloud environment",
            "Go-live and post-migration support"
        ]
    }
]

export default function ServiceGallery() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <Tabs defaultValue={services[0].title} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                        {services.map((service) => (
                            <TabsTrigger key={service.title} value={service.title} className="text-sm md:text-base">
                                <service.icon className="h-5 w-5 mr-2" />
                                {service.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {services.map((service) => (
                        <TabsContent key={service.title} value={service.title}>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <service.icon className="h-6 w-6 mr-2 text-blue-500" />
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <h4 className="font-semibold mb-4">Our Workflow:</h4>
                                    <ol className="space-y-4">
                                        {service.workflow.map((step, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-3">
                                                    {index === service.workflow.length - 1 ? (
                                                        <CheckCircle className="h-5 w-5 text-blue-600" />
                                                    ) : (
                                                        <span className="text-blue-600 font-semibold">{index + 1}</span>
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

