import httpStatus from "http-status";
import { VideoCreator } from "../../../../Contexts/Mooc/Videos/application/VideoCreator";
import { Controller } from "./Controller";
import { Logger } from "../../../../Contexts/Shared/domain/Logger";

export class VideoPutController implements Controller {
  constructor(private videoCreator: VideoCreator, private logger : Logger) {}

    async run(req: any, res: any): Promise<void> {
      const {id, name, duration} = req.body
      this.logger.info(`id : ${id} name : ${name} duration : ${duration}`)
      const content = req.file;
      await this.videoCreator.run(id, name, duration, content)
      res.status(httpStatus.CREATED).send()
    }
}