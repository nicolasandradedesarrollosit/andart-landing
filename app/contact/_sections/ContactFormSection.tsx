"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { m, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { User, Mail, Send, Loader2 } from "lucide-react";
import { IconInput } from "@/shared/components/forms/IconInput";
import { IconSelect } from "@/shared/components/forms/IconSelect";
import { FormError } from "@/shared/components/forms/FormError";
import { contactSchema, type ContactFormData } from "@/features/contact/data/contact-schema";
import { projectClassifications } from "@/features/contact/data/project-classifications";

export function ContactFormSection() {
  const { t } = useTranslation("contact");
  const [sending, setSending] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { classification: "prototyping" },
  });

  const classificationOptions = projectClassifications.map((c) => ({
    value: c.value,
    label: t(c.labelKey),
  }));

  const resolveError = (key?: string) => (key ? t(key) : undefined);

  const onSubmit = async (data: ContactFormData) => {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      toast.success(t("form.success"));
      reset();
    } catch {
      toast.error(t("form.error"));
    } finally {
      setSending(false);
    }
  };

  return (
    <m.div
      className="contact-form-card w-full"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="section-label mb-6">{t("form.section_label")}</p>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <IconInput
          icon={User}
          label={t("form.name_label")}
          placeholder={t("form.name_placeholder")}
          error={resolveError(errors.name?.message)}
          {...register("name")}
        />
        <IconInput
          icon={Mail}
          label={t("form.email_label")}
          type="email"
          placeholder={t("form.email_placeholder")}
          error={resolveError(errors.email?.message)}
          {...register("email")}
        />
        <Controller
          name="classification"
          control={control}
          render={({ field }) => (
            <IconSelect
              label={t("form.classification_label")}
              options={classificationOptions}
              error={resolveError(errors.classification?.message)}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <div className="space-y-1">
          <label className="form-label">{t("form.message_label")}</label>
          <textarea
            className={`form-input min-h-[120px] resize-none ${errors.message ? "form-input-error" : ""}`}
            placeholder={t("form.message_placeholder")}
            {...register("message")}
          />
          <FormError message={resolveError(errors.message?.message)} />
        </div>
        <button type="submit" disabled={sending} className="btn-primary w-full">
          {sending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {t("form.submit")}
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </m.div>
  );
}
