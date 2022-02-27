
describe('Create courses', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('frontpage can be opened', () => {
        cy.contains('Publicar conferencia');
    });
});