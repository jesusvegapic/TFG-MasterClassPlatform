import {VideoCreator} from "../../../../../src/Contexts/Mooc/Videos/application/VideoCreator"
import { Video } from "../../../../../src/Contexts/Mooc/Videos/domain/Video";
import { VideoUrl } from "../../../../../src/Contexts/Mooc/Videos/domain/VideoUrl";
import {VideoRepository} from "../../../../../src/Contexts/Mooc/Videos/domain/VideoRepository"
import { VideoUrlGenerator } from "../../../../../src/Contexts/Mooc/Videos/domain/VideoUrlGenerator";

describe('VideoCreator', () => {
    it('should create a valid video', async () => {
        const repository: VideoRepository = {
            save: jest.fn()
        }
        const url = new VideoUrl('https://www.youtube.com/watch?v=xHH61wtLNWs&t');
        const urlCreator: VideoUrlGenerator = {
            run: jest.fn().mockResolvedValue(url)
        }
        const creator = new VideoCreator(repository, urlCreator)
        const id = 'id';
        const name = 'name';
        const duration = '5 hours';
        const expectedVideo = new Video(id, name, duration, url);
        await creator.run(id, name , duration);

        expect(repository.save).toHaveBeenCalledWith(expectedVideo);
    })
});