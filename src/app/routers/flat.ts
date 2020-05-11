import { Router } from "express";
import * as flatController from "../controllers/flat";

export const router: Router = Router({ mergeParams: true });

router.get('/flat', flatController.index);