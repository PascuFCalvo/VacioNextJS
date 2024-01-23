"use client";

import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { name, email } = req.body;
  console.log(name, email);
  try {
    const { data, error } = await resend.emails.send({
      from: "otro libro <onboarding@resend.dev>",
      to: ["pascual.fernandez.calvo@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name: name, email: email }),
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
