import { z } from "zod";
// import { generate_nanoId } from "./utils.js";
const userTypes = ["Entrepreneur", "Mentor", "Organisation"];

export const mentorSchema = z.object({
  mentor_id: z.string(),
  mentor_name: z.string(),
  email: z.string(),
  phone: z.string,
  domain: z.string(),
});

export const loginSchema = z.object({
  name: z.string(),
  z: z.string(),
  type: z.enum(userTypes).default("Mentor"),
});

export const EntrepreneurSchema = z.object({
  ent_id: z.string(),
  mentor_id: z.string(),
  ent_name: z.string(),
  email: z.string(),
  phone: z.string(),
  business: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
});

export const OrganisationSchema = z.object({
  org_id: z.string(),
  org_name: z.string(),
  email: z.string(),
  phone: z.string(),
});

export const InvestsSchema = z.object({
  inv_id: z.string(),
  ent_id: z.string(),
  org_id: z.string(),
  amount: z.number(),
  date: z.string(),
});
