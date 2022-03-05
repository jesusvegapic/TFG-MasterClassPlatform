import faker from '@faker-js/faker';

describe('frontpage courses can be opened', () => {
    it('exists title', () => {
        cy.visit(''); 
        cy.contains('Crear Video');
    });
});

describe('Create video', () => {
    beforeEach(() => {
        cy.visit('')
    });

    it('I can write upload video formulary, upload the video and see sucessfull message', () => {
        let i = 0;
        const numberOfCourses = 5;
        while (i < numberOfCourses) {
            i++;
            const courseName = faker.random.words(1);
            cy.get('input[name="id"]').type('1234567');
            cy.get('input[name="nombre"]').type(courseName);
            cy.get('input[name="duracion"]').type('8 days');
            cy.get('input[name="url"]').type('www.urlInventada.com');
            cy.get('form[data-cy="create-video"]').submit();
            cy.get('div[role="alert"]').contains(`Felicidades, el curso ${courseName} ha sido creado!`);
            cy.reload();
        } 
    });
});