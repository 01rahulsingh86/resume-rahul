import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // In a real application, you would send this data to a server
    // Since this is for GitHub Pages, we'll simulate a success response
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-secondary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">Location</h4>
                  <p>Bellevue, WA USA</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-secondary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">Email</h4>
                  <p>rahulsingh.qadirector@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-secondary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">Phone</h4>
                  <p>(404) 435-7371</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <i className="fab fa-linkedin text-secondary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/rahuls01" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-secondary transition-colors"
                  >
                    linkedin.com/in/rahuls01
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Resume</h3>
              <a 
                href="/rahul-singh-resume.pdf" 
                download 
                className="inline-flex items-center px-6 py-3 bg-secondary text-primary rounded font-medium hover:bg-opacity-90 transition-all"
              >
                <i className="fas fa-download mr-2"></i> Download Resume
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
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
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email" 
                          type="email" 
                          {...field} 
                          className="px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
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
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Message subject" 
                          {...field} 
                          className="px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
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
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          rows={5} 
                          {...field} 
                          className="px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-secondary text-primary rounded font-medium hover:bg-opacity-90 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
