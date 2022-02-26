
describe('VideoCreator', () => {
    it('should create a valid video', async () => {
        const repository: VideoRepository = {
            save: jest.fn()
        }
        const creator = new VideoCreator(repository);
        const id = 'id';
        const name = 'name';
        const duration = '5 hours';
        const expectedVideo = new Video(id, name, duration);

        await creator.run(id, name , duration);

        expect(repository.save).toHaveBeenCalledWith(expectedVideo);
    });
});