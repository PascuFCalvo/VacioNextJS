import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email } = req.body;
  try {
    const data = await resend.emails.send({
      from: "otro libro <onboarding@resend.dev>",
      to: ["pascual.fernandez.calvo@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name: name, email: email }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
