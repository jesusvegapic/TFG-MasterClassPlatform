import { serialize, deserialize} from "bson";
import fs from "fs";
import { Video } from "../domain/Video";
import { VideoRepository } from "../domain/VideoRepository";

export class FileVideoRepository implements VideoRepository {
    private FILE_PATH = `${__dirname}/videos`;

    async save(video: Video): Promise<void> {
        fs.promises.writeFile(this.filePath(video.id), serialize(video));
    }

    async search(videoId: string): Promise<Video> {
        const videoData = await fs.promises.readFile(this.filePath(videoId));
        const {id, name, duration, url } = deserialize(videoData);
        return new Video(id, name, duration, url);
    } 

    private filePath(id: string): string {
        return `${this.FILE_PATH}.${id}.repo`;
    }
    
}