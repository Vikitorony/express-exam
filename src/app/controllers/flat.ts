import { Flat } from "../models/flat";
import { database } from "../../lib/database";
import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
  const flats: Array<Flat> = await database('flats').select();
  res.json(flats);
}