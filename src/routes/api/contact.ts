import { createFileRoute } from "@tanstack/react-router";
import { connectDB } from "../../lib/db";
import { ContactMessage } from "../../lib/models";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, email, subject, message } = body || {};

          if (
            !String(name ?? "").trim() ||
            !String(email ?? "").trim() ||
            !String(subject ?? "").trim() ||
            !String(message ?? "").trim()
          ) {
            return new Response(
              JSON.stringify({
                message: "Missing required fields: name, email, subject, or message.",
              }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return new Response(
              JSON.stringify({ message: "Please provide a valid email address." }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          await connectDB();

          const createdMessage = await ContactMessage.create({
            name: String(name).trim(),
            email: String(email).trim().toLowerCase(),
            subject: String(subject).trim(),
            message: String(message).trim(),
          });

          return new Response(
            JSON.stringify({
              message: "Your message has been sent.",
              id: createdMessage._id,
            }),
            {
              status: 201,
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error) {
          console.error("Error saving contact message:", error);
          return new Response(
            JSON.stringify({ message: "Internal server error. Failed to send contact message." }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});
