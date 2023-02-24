import httpStatus from "http-status";
import { VideoCreator } from "../../../../Contexts/Mooc/Videos/application/VideoCreator";
import { Controller } from "./Controller";

export class VideoPostController implements Controller {
  constructor(private videoCreator: VideoCreator) {}

    async run(req: any, res: any): Promise<void> {
      const {id, name, duration} = req.body
      await this.videoCreator.run(id, name, duration)
      res.status(httpStatus.CREATED).send()
    }
}