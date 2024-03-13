import { z } from "zod";
import { generate_nanoId } from "./utils.js";
const userTypes = ["Entrepreneur", "Mentor", "Organisation"];

export const mentorSchema = z.object({
  id: z.string().default(generate_nanoId(4, "MEN")),
  name: z.string(),
  domain: z.string(),
});

export const loginSchema = z.object({
  name: z.string(),
  z: z.string(),
  type: z.enum(userTypes).default("Mentor"),
});

export const EntrepreneurSchema = z.object({
  id: z.string().default(generate_nanoId(4, "ENT")),
  mentor_id: z.string(),
  name: z.string(),
  business: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
});

export const OrganisationSchema = z.object({
  id: z.string().default(generate_nanoId(4, "ORG")),
  name: z.string(),
});

export const InvestsSchema = z.object({
  inv_id: z.string().default(generate_nanoId(5, "INV")),
  ent_id: z.string(),
  ent_id: z.string(),
  amount: z.number(),
  date: z.string(),
});
