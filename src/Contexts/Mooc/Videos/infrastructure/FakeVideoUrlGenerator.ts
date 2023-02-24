import { VideoUrlGenerator } from "../domain/VideoUrlGenerator";
import { VideoUrl } from "../domain/VideoUrl";
export class FakeVideoUrlGenerator implements VideoUrlGenerator {
    async run(id : string, name : string) {
        const videoUrl = new VideoUrl('https://www.youtube.com/watch?v=xHH61wtLNWs&t');
        return new Promise.arguments(videoUrl)
    }
}