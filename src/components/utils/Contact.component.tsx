import { useState } from 'react'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setFormStatus('sent')
  }

  return (
    <section className="py-20 bg-[#1e2836] text-white h-[820px]">
      <div className="container mx-auto px-4 mt-[10%] sm:px-6 lg:px-8 text-center">
        <h2 className="tracking-tight mb-12
                    text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        <span className="text-[#fca700]">G</span>et <span className="text-[#fca700]">i</span>n <span className="text-[#fca700]">T</span>ouch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <Card className='bg-[#2d3748] text-gray-100 border-none'>
            <CardHeader>
              <CardTitle className='text-xl'>Contact Us</CardTitle>
              <CardDescription className='text-sm text-[#fca700]'>
                Fill out the form and we'll get back to you as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 bg-[#2d3748] text-gray-100">
                <div>
                  <Input type="text" placeholder="Your Name" required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Textarea placeholder="Your Message" required />
                </div>
                <Button type="submit" className="w-full" disabled={formStatus !== 'idle'}>
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && 'Message Sent!'}
                  {formStatus === 'error' && 'Error. Try Again.'}
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className='bg-[#2d3748] text-gray-100 border-none'>
            <CardHeader>
              <CardTitle className='text-xl'>Contact Information</CardTitle>
              <CardDescription className='text-sm text-[#fca700]'>
                You can also reach us through these channels:
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#fca700]" />
                <span>SalahEddine1914@outlook.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#fca700]" />
                <span>(+212) 682-956759 </span>
              </div>
              {/* <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[#fca700]" />
                <span>123 Tech Street, San Francisco, CA 94105</span>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

