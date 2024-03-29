import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();
  console.log(message);

  try {
    const data = await resend.emails.send({
      from: "Pedido libro Vacio <onboarding@resend.dev>",
      to: ["pascual.fernandez.calvo@gmail.com"],
      subject: "📚 Quiero un libro 📚",
      react: EmailTemplate({ name: name, email: email, message: message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
