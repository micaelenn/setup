// external modules
import { Request, Response, Router } from "express";

// internal modules
import { heartbeatService } from "./heartbeat.service";
import { setEndpoint } from '@/config/application'
import { tryCatch } from '@/utils/helpers/tryCatch'

export const heartbeat = Router();

// POST
heartbeat.post(setEndpoint('heartbeat'), tryCatch(
  async (req: Request, res: Response) => {
    res.status(200).send({ heartbeat: heartbeatService.heartbeat() });
  })
)

// GET
heartbeat.get(setEndpoint('heartbeat'), tryCatch(
  async (req: Request, res: Response) => {
    res.status(200).send({ heartbeat: heartbeatService.heartbeat() });
  })
);
