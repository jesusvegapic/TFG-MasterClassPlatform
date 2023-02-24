import { VideoUrl } from "./VideoUrl";
export interface VideoUrlGenerator {
    run(id : string, name : string) : Promise<VideoUrl>;
}