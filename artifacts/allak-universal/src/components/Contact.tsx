import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateLead } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Building2, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const Contact = () => {
  const { toast } = useToast();
  const createLead = useCreateLead();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createLead.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "Inquiry Submitted Successfully",
            description: "We have received your message and will be in touch shortly.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Submission Failed",
            description: "There was an error submitting your inquiry. Please try again.",
          });
        },
      }
    );
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-brand-teal uppercase mb-3">Initiate Contact</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Discuss Your Infrastructure Requirements
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              For tender inquiries, RFP submissions, or general consultation, please reach out to the Al Lak Universal LLC team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-brand-navy/5 p-3 text-brand-navy">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Corporate Headquarters</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Al Lak Universal LLC<br />
                    Office# 2A, 1st Floor, Al Farsi Building &ndash; Grand Central<br />
                    PO Box-210, PC-320, Barka, Sultanate of Oman
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-brand-navy/5 p-3 text-brand-navy">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Direct Line</h4>
                  <p className="text-slate-600 leading-relaxed">
                    +968 9292-9191<br />
                    <span className="text-sm text-slate-500">Hassan Al Farsi, Managing Director</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-brand-navy/5 p-3 text-brand-navy">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Electronic Mail</h4>
                  <p className="text-slate-600 leading-relaxed">
                    sales@allakuniversal.com<br />
                    <span className="text-sm text-slate-500">www.allakuniversal.com</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-brand-navy/5 p-3 text-brand-navy">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Company Registration</h4>
                  <p className="text-slate-600 leading-relaxed">
                    CR# 1469708<br />
                    VATIN: OM1100327696
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 border border-slate-200 relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Submit an Inquiry</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Full Name *</FormLabel>
                        <FormControl>
                          <Input className="rounded-none border-slate-300 focus-visible:ring-brand-navy bg-white" placeholder="John Doe" {...field} />
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
                        <FormLabel className="text-slate-700 font-semibold">Business Email *</FormLabel>
                        <FormControl>
                          <Input className="rounded-none border-slate-300 focus-visible:ring-brand-navy bg-white" placeholder="john@company.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Phone Number</FormLabel>
                        <FormControl>
                          <Input className="rounded-none border-slate-300 focus-visible:ring-brand-navy bg-white" placeholder="+968 ..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Organization / Agency</FormLabel>
                        <FormControl>
                          <Input className="rounded-none border-slate-300 focus-visible:ring-brand-navy bg-white" placeholder="Organization Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-semibold">Project Details / Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          className="rounded-none border-slate-300 focus-visible:ring-brand-navy min-h-[120px] bg-white resize-none" 
                          placeholder="Please provide details regarding your requirement or tender..." 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full rounded-none h-12 text-base font-semibold bg-primary hover:bg-primary/90"
                  disabled={createLead.isPending}
                >
                  {createLead.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  We aim to respond to all inquiries within 1 business day. Information submitted is kept strictly confidential.
                </p>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
};
