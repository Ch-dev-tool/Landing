import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Cpu, ExternalLink, PackageCheck } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform Overhaul',
    customer: 'TechGear Inc.',
    description:
      'Redesigned and optimized the entire e-commerce platform, resulting in a 40% increase in conversion rates and improved user experience.',
    link: '',
    image: '/assets/eCommPlatforme.jpg',
    services: ['Custom Software Development', 'UI/UX Design', 'Agile', 'Scrum'],
    stack: ['React', 'Node.js', 'MongoDB', 'AWS', 'Git & Github']
  },
  {
    title: 'Idmaj.io',
    customer: 'ServicePro Solutions',
    description: `Idmaaj is a SaaS platform connecting Moroccan students, 
                parents, and teachers for effective remedial education. 
                Built with a microservices architecture`,
    link: '',
    image: '/assets/idmaj.jpg',
    services: ['CI/CD', 'Custom Software Development', 'TDD', 'Agile', 'Scrum'],
    stack: [
      'NodeJs',
      'TypeScript',
      'Docker',
      'Prisma',
      'NestJs',
      'MongoDb',
      'Git & Github',
      'React',
      'Tailwindcss',
      'ShadcnUi'
    ]
  },
  {
    title: 'BizzBoss.io',
    customer: 'IndustrialTech Corp',
    description: `
        Developed a SaaS platform using React TypeScript, Shadcn UI, 
        and a microservices architecture 
        (Express TypeScript, PostgreSQL, Prisma ORM). 
        This solution empowers Moroccan SMBs by streamlining operations, 
        enhancing efficiency, and providing secure authentication (PassageAuth).
    `,
    link: '',
    image: '/assets/bizzBoss.jpg',
    services: [
      'Cloud Migration',
      'Team Augmentation',
      'TDD',
      'CI/CD',
      'Custom Software Development',
      'Agile',
      'Scrum'
    ],
    stack: [
      'PassajeAuth',
      'NodeJS',
      'TyeScript',
      'ExpressJS',
      'PostgreSql',
      'Docker',
      'ReactJs',
      'vite',
      'Tailwindcss',
      'ShadcnUi',
      'Prisma',
      'Git & Github'
    ]
  }
]

export default function ProjectsGallery () {
  return (
    <section className='py-20 bg-[#1e2836] text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
            <h2
          className='tracking-tight mb-12
                    text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight'
        >
          Our <span className='text-[#fca700]'>Success</span> Stories
        </h2>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[5%]'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='flex flex-col bg-[#2d3748] text-white border-none shadow-none
            '
            >
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={500}
                className='w-full h-80 object-cover rounded-t-lg'
              />
              <CardHeader>
                <CardTitle className='text-xl text-white'>
                  {project.title}
                </CardTitle>
                <CardDescription className='text-sm text-[#fca700]'>
                  {project.customer}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex-grow'>
                <p className='text-gray-50 mb-4'>{project.description}</p>
                <div className='mb-4 space-y-3'>
                  <h4 className='font-semibold mb-2 text-gray-400 flex justify-start space-x-3'>
                    <PackageCheck className='h-6 w-6 space-x-2' />
                    Services Provided:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.services.map((service, i) => (
                      <Badge key={i} variant='secondary'>
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className=' mb-4 space-y-3'>
                  <h4 className='font-semibold mb-2 text-gray-400 flex justify-start'>
                    <Cpu className='w-6 h-6 space-x-2' />
                    Tech Stack:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.stack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant='outline'
                        className='text-[#fca700] border-[#fca700]'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <div className='p-6 pt-0 mt-auto mb-4 space-y-3'>
                <Button asChild className='w-full'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Project <ExternalLink className='ml-2 h-4 w-4' />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
