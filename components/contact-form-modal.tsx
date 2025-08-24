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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono-technical">Name *</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isSubmitting} className="font-mono-technical" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono-technical">Email *</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} disabled={isSubmitting} className="font-mono-technical" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono-technical">Subject *</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isSubmitting} className="font-mono-technical" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono-technical">Message *</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} disabled={isSubmitting} className="font-mono-technical" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitStatus !== 'idle' && (
              <Alert variant={submitStatus === 'success' ? 'default' : 'destructive'}>
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
              <Button type="submit" disabled={isSubmitting} className="font-mono-technical">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}