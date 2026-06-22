import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 3001);
const mongoUri = process.env.MONGODB_URI;
const frontendOrigin = process.env.FRONTEND_ORIGIN;

if (!mongoUri) {
  throw new Error("MONGODB_URI is required. Set it in backend/.env before starting the server.");
}

app.use(express.json());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || !frontendOrigin || origin === frontendOrigin) {
        callback(null, true);
        return;
      }

      callback(new Error("CORS blocked this request."));
    },
  }),
);

const waitlistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const WaitlistEntry = mongoose.model("WaitlistEntry", waitlistSchema);
const ContactMessage = mongoose.model("ContactMessage", contactSchema);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function requireFields(payload, fields) {
  const missing = fields.filter((field) => !String(payload[field] ?? "").trim());
  return missing;
}

app.get("/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/api/waitlist", async (request, response) => {
  try {
    const { name, email, phone } = request.body ?? {};
    const missing = requireFields({ name, email, phone }, ["name", "email", "phone"]);

    if (missing.length > 0) {
      response.status(400).json({ message: `Missing fields: ${missing.join(", ")}` });
      return;
    }

    if (!isValidEmail(email)) {
      response.status(400).json({ message: "Please provide a valid email address." });
      return;
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const existingEntry = await WaitlistEntry.findOne({ email: normalizedEmail });

    if (existingEntry) {
      response.status(409).json({ message: "This email is already on the waitlist." });
      return;
    }

    const createdEntry = await WaitlistEntry.create({
      name: String(name).trim(),
      email: normalizedEmail,
      phone: String(phone).trim(),
    });

    response.status(201).json({
      message: "You have been added to the waitlist.",
      id: createdEntry._id,
    });
  } catch (error) {
    response.status(500).json({ message: "Failed to save waitlist entry." });
  }
});

app.post("/api/contact", async (request, response) => {
  try {
    const { name, email, subject, message } = request.body ?? {};
    const missing = requireFields({ name, email, subject, message }, ["name", "email", "subject", "message"]);

    if (missing.length > 0) {
      response.status(400).json({ message: `Missing fields: ${missing.join(", ")}` });
      return;
    }

    if (!isValidEmail(email)) {
      response.status(400).json({ message: "Please provide a valid email address." });
      return;
    }

    const createdMessage = await ContactMessage.create({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      subject: String(subject).trim(),
      message: String(message).trim(),
    });

    response.status(201).json({
      message: "Your message has been sent.",
      id: createdMessage._id,
    });
  } catch (error) {
    response.status(500).json({ message: "Failed to send contact message." });
  }
});

async function startServer() {
  await mongoose.connect(mongoUri);

  app.listen(port, () => {
    console.log(`Hivron API running on http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start backend:", error);
  process.exit(1);
});