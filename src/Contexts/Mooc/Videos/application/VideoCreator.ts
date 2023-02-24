import { Video } from "../domain/Video";
import { VideoRepository } from "../domain/VideoRepository";
import { VideoUrlGenerator } from "../domain/VideoUrlGenerator";

export class VideoCreator {
    constructor(private repository: VideoRepository, private videoUrlGenerator : VideoUrlGenerator) {}

    async run(id: string, name: string, duration: string) {
        const videoUrl = await this.videoUrlGenerator.run(id, name);
        const video = new Video(id, name, duration, videoUrl);
        return this.repository.save(video);
    }
}