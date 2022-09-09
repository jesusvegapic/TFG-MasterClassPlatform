import {Video} from "../../../../../src/Contexts/Mooc/Videos/domain/Video"
import {FileVideoRepository} from "../../../../../src/Contexts/Mooc/Videos/infrastructure/FileVideoRepository"

describe('FileVideoRepository', () => {
    it('should save a video', async () => {
        const expectedVideo = new Video('id', 'name', 'duration', 'url');
        const repository = new FileVideoRepository();

        await repository.save(expectedVideo);

        const video = await repository.search('id');
        expect(video).toEqual(expectedVideo);
    });
});