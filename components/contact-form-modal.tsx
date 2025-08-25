"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Mail } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

type ContactFormData = z.infer<typeof formSchema>

interface ContactFormModalProps {
  children: React.ReactNode
}

export function ContactFormModal({ children }: ContactFormModalProps) {
  const [open, setOpen] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const { isSubmitting, errors } = form.formState

  const onSubmit = async (values: ContactFormData) => {
    try {
      setSubmitStatus('idle')
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus('success')
      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      })

      form.reset()
      setTimeout(() => {
        setOpen(false)
        setSubmitStatus('idle')
      }, 1500)
    } catch (error) {
      setSubmitStatus('error')
      toast.error("Error", {
        description: "Failed to send message. Please try again.",
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="typography-h2">Get in Touch</DialogTitle>
          <DialogDescription className="text-xl text-secondary-foreground">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" aria-describedby="form-description">
            <div id="form-description" className="sr-only">
              Contact form with required fields: name, email, subject, and message. All fields are required.
            </div>
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono-technical" htmlFor="name">Name *</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      id="name"
                      placeholder="Enter your full name"
                      disabled={isSubmitting} 
                      className="font-mono-technical"
                      aria-describedby="name-error"
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage id="name-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono-technical" htmlFor="email">Email *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      {...field} 
                      id="email"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting} 
                      className="font-mono-technical"
                      aria-describedby="email-error"
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage id="email-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono-technical" htmlFor="subject">Subject *</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      id="subject"
                      placeholder="What would you like to discuss?"
                      disabled={isSubmitting} 
                      className="font-mono-technical"
                      aria-describedby="subject-error"
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage id="subject-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono-technical" htmlFor="message">Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      rows={4} 
                      {...field} 
                      id="message"
                      placeholder="Tell me about your project, opportunity, or just say hello! I'm always interested in hearing about new ideas and collaborations."
                      disabled={isSubmitting} 
                      className="font-mono-technical"
                      aria-describedby="message-error"
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage id="message-error" />
                </FormItem>
              )}
            />

            {submitStatus !== 'idle' && (
              <Alert 
                variant={submitStatus === 'success' ? 'default' : 'destructive'} 
                role="alert"
                className={`animate-in slide-in-from-top-2 duration-300 ${
                  submitStatus === 'success' ? 'border-green-200 bg-green-50 dark:bg-green-950/20' : ''
                }`}
              >
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {submitStatus === 'success' 
                    ? "Your message has been sent successfully! I'll get back to you soon."
                    : "Failed to send message. Please check your connection and try again."
                  }
                </AlertDescription>
              </Alert>
            )}

            <div className="flex justify-end gap-2">
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="font-mono-technical btn-interactive"
                aria-describedby="submit-status"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </Button>
              <div id="submit-status" className="sr-only">
                {isSubmitting ? "Form is being submitted. Please wait." : "Click to submit the contact form."}
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}