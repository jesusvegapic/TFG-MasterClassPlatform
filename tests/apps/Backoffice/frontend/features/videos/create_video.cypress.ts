
describe('Create courses', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('frontpage can be opened', () => {
        cy.contains('Publicar conferencia');
    });

    it('exists a button for upload a video', () => {
        cy.get('input[value="Publicar conferencia"]');
    });
});