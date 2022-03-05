import { Request, Response } from "express";
import httpStatus from "http-status";
import { VideoCreator } from "../../../../Contexts/Mooc/Videos/application/VideoCreator";
import { Controller } from "./Controller";

export class VideoPutController implements Controller {
  constructor(private videoCreator: VideoCreator) {}

    async run(req: Request, res: Response): Promise<void> {
      const {id, name, duration, url} = req.body;
      
      await this.videoCreator.run(id, name, duration, url);

      res.status(httpStatus.CREATED).send();
    }
}