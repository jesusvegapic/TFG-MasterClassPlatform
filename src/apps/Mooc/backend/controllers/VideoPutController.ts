import { Request, Response } from "express";
import { Controller } from "./Controller";

export class VideoPutController implements Controller {
    async run(req: Request, res: Response): Promise<void> {
      throw new Error('Method not implemented. ');
    }
}