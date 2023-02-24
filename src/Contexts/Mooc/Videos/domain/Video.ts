import { VideoUrl } from "./VideoUrl";
export class Video {
    readonly id: string;
    readonly name: string;
    readonly duration: string;
    readonly url : VideoUrl;

    constructor(id: string, name: string, duration: string, url : VideoUrl) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.url = url
    }
}