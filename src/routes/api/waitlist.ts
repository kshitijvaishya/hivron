import { createFileRoute } from "@tanstack/react-router";
import { connectDB } from "../../lib/db";
import { WaitlistEntry } from "../../lib/models";

export const Route = createFileRoute("/api/waitlist")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, email, phone } = body || {};

          if (
            !String(name ?? "").trim() ||
            !String(email ?? "").trim() ||
            !String(phone ?? "").trim()
          ) {
            return new Response(
              JSON.stringify({ message: "Missing required fields: name, email, or phone." }),
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

          const normalizedEmail = String(email).trim().toLowerCase();
          const existingEntry = await WaitlistEntry.findOne({ email: normalizedEmail });

          if (existingEntry) {
            return new Response(
              JSON.stringify({ message: "This email is already on the waitlist." }),
              {
                status: 409,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          const createdEntry = await WaitlistEntry.create({
            name: String(name).trim(),
            email: normalizedEmail,
            phone: String(phone).trim(),
          });

          return new Response(
            JSON.stringify({
              message: "You have been added to the waitlist.",
              id: createdEntry._id,
            }),
            {
              status: 201,
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error) {
          console.error("Error saving waitlist entry:", error);
          return new Response(
            JSON.stringify({ message: "Internal server error. Failed to save waitlist entry." }),
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
