import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateLead } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Building2, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export const Contact = () => {
  const { toast } = useToast();
  const createLead = useCreateLead();
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t.validation.name),
        email: z.string().email(t.validation.email),
        phone: z.string().optional(),
        company: z.string().optional(),
        message: z.string().min(10, t.validation.message),
      }),
    [t]
  );

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
            title: t.toastSuccessTitle,
            description: t.toastSuccessDescription,
          });
          form.reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: t.toastErrorTitle,
            description: t.toastErrorDescription,
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
            <h2 className="text-sm font-bold tracking-wider text-brand-teal uppercase mb-3">{t.eyebrow}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              {t.title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {t.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="mt-1 bg-brand-navy/5 p-3 text-brand-navy">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t.hqLabel}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t.hqName}<br />
                    Office# 2A, 1st Floor, Al Farsi Building &ndash; Grand Central<br />
                    PO Box-210, PC-320, Barka, Sultanate of Oman
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="mt-1 bg-brand-navy/5 p-3 text-brand-navy">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t.phoneLabel}</h4>
                  <p className="text-slate-600 leading-relaxed" dir="ltr">
                    +968 9292-9191<br />
                    <span className="text-sm text-slate-500" dir={lang === "ar" ? "rtl" : "ltr"}>{t.phoneOwner}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="mt-1 bg-brand-navy/5 p-3 text-brand-navy">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t.emailLabel}</h4>
                  <p className="text-slate-600 leading-relaxed" dir="ltr">
                    sales@allakuniversal.com<br />
                    <span className="text-sm text-slate-500">www.allakuniversal.com</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="mt-1 bg-brand-navy/5 p-3 text-brand-navy">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t.registrationLabel}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t.crLabel}: 1469708<br />
                    {t.vatinLabel}: OM1100327696
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 border border-slate-200 relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.formTitle}</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">{t.fields.name}</FormLabel>
                        <FormControl>
                          <Input className="rounded-none border-slate-300 focus-visible:ring-brand-navy bg-white" placeholder={t.fields.namePlaceholder} {...field} />
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
                        <FormLabel className="text-slate-700 font-semibold">{t.fields.email}</FormLabel>
                        <FormControl>
                          <Input className="rounded-none border-slate-300 focus-visible:ring-brand-navy bg-white" placeholder={t.fields.emailPlaceholder} type="email" {...field} />
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
                        <FormLabel className="text-slate-700 font-semibold">{t.fields.phone}</FormLabel>
                        <FormControl>
                          <Input className="rounded-none border-slate-300 focus-visible:ring-brand-navy bg-white" placeholder={t.fields.phonePlaceholder} {...field} />
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
                        <FormLabel className="text-slate-700 font-semibold">{t.fields.company}</FormLabel>
                        <FormControl>
                          <Input className="rounded-none border-slate-300 focus-visible:ring-brand-navy bg-white" placeholder={t.fields.companyPlaceholder} {...field} />
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
                      <FormLabel className="text-slate-700 font-semibold">{t.fields.message}</FormLabel>
                      <FormControl>
                        <Textarea
                          className="rounded-none border-slate-300 focus-visible:ring-brand-navy min-h-[120px] bg-white resize-none"
                          placeholder={t.fields.messagePlaceholder}
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
                      <Loader2 className="me-2 h-4 w-4 animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    t.submit
                  )}
                </Button>

                <p className="text-xs text-slate-500 text-center mt-4">
                  {t.disclaimer}
                </p>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
};
