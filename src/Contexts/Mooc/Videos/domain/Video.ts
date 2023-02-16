
export class Video {
    readonly id: string;
    readonly name: string;
    readonly duration: string;
    readonly url: Blob;

    constructor(id: string, name: string, duration: string, url: Blob) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.url = url;
    }
}