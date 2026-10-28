"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // no key configured (e.g. fresh checkout): don't crash, let the client fall back to a mailto link
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: "Email service isn't set up yet.",
      noKey: true,
    };
  }

  let data;
  try {
    const resend = new Resend(apiKey);
    data = await resend.emails.send({
      from: "Contact Form <portfolio@resend.dev>",
      to: "singhnarukaarjun@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
