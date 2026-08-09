'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section id="contact" className="pb-40 container">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-bold text-3xl md:text-4xl text-balance">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
          Have a question or want to work together? We'd love to hear from you.
          Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="lg:items-stretch gap-6 grid lg:grid-cols-2">
        {/* Contact Form */}
        <Card className="px-4 py-8">
          <CardHeader>
            <CardTitle className="text-lg text-balance">
              Send us a Message
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name-aB3x9">First name</Label>
                <Input id="first-name-aB3x9" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name-cD4y8">Last name</Label>
                <Input id="last-name-cD4y8" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-eF5z7">Email</Label>
              <Input
                id="email-eF5z7"
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject-gH6w6">Subject</Label>
              <Input id="subject-gH6w6" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message-iJ7v5">Message</Label>
              <Textarea
                id="message-iJ7v5"
                placeholder="Tell us more about your project..."
                className="min-h-30"
              />
            </div>
            <Button size="lg" className="w-full cursor-pointer">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information & Additional Info */}
        <div className="flex flex-col space-y-6 h-full">
          {/* Contact Information */}
          <Card className="gap-3 px-4 py-8">
            <CardHeader>
              <CardTitle className="text-lg text-balance">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex justify-center items-center bg-primary/10 rounded-full size-8">
                  <Mail className="size-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Email</h4>
                  <p className="text-muted-foreground text-xs">
                    contact@katriyam.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex justify-center items-center bg-primary/10 rounded-full size-8">
                  <Phone className="size-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Phone</h4>
                  <p className="text-muted-foreground text-xs">
                    (+82) 10-2180-1070
                  </p>
                  <p className="text-muted-foreground text-xs">
                    (+880) 1750050511
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex justify-center items-center bg-primary/10 mt-0.5 rounded-full size-8">
                  <MapPin className="size-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Office</h4>
                  <p className="text-muted-foreground text-xs">
                    Agrabad Commercial Area,
                    <br />
                    Chattogram, Bangladesh.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="gap-3 px-4 py-8">
            <CardHeader>
              <CardTitle className="text-lg text-balance">
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Open 24/7</p>
              <p className="text-muted-foreground text-sm">
                Available 24 Hours a Day, 7 Days a Week
              </p>
            </CardContent>
          </Card>

          {/* Alternative Contact */}
          <Card className="gap-3 px-4 py-8">
            <CardHeader>
              <CardTitle className="text-lg text-balance">
                Prefer to Call?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-muted-foreground text-sm">
                Speak directly with our team for immediate assistance.
              </p>
              <Link
                href="tel:+821021801070"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'w-full cursor-pointer text-primary border-primary hover:bg-primary/10 hover:text-primary',
                )}
              >
                <Phone className="me-2 size-4" />
                Schedule a Call
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
