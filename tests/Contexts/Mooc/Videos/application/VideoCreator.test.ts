import {VideoCreator} from "../../../../../src/Contexts/Mooc/Videos/application/VideoCreator"
import {VideoRepository} from "../../../../../src/Contexts/Mooc/Videos/domain/VideoRepository"
import {Video} from "../../../../../src/Contexts/Mooc/Videos/domain/Video"

describe('VideoCreator', () => {
    it('should create a valid video', async () => {
        const repository: VideoRepository = {
            save: jest.fn()
        }
        const creator = new VideoCreator(repository);
        const id = 'id';
        const name = 'name';
        const duration = '5 hours';
        const url = 'storageVideoUrl'
        const expectedVideo = new Video(id, name, duration, url);

        await creator.run(id, name , duration, url);

        expect(repository.save).toHaveBeenCalledWith(expectedVideo);
    });
});