import { Video } from "../domain/Video";
import { VideoRepository } from "../domain/VideoRepository";

export class VideoCreator {
    constructor(private repository: VideoRepository) {}

    async run(id: string, name: string, duration: string, url: string) {
        const video = new Video(id, name, duration, url);
        return this.repository.save(video);
    }
}