import { ZodError, z } from "zod";
import { NextFunction, Request, Response } from "express";

export function validadCreateUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const scheme = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(1),
  });


  try {
    const validated = scheme.parse(req.body);
    req.body = validated;
    return next();
  } catch (err) {
    if (err instanceof ZodError) return res.status(400).json(err.errors);

    return res.status(400).json({ message: "Unexpect error." });
  }
}
