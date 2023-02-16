import faker from '@faker-js/faker';

// Snippet para recoger el elemento de input video y subir automaticamente un fichero del tipo elegido.
Cypress.Commands.add("uploadFile", (selector, fileUrl, type = "") => {
    return cy.get(selector).then(subject => {
      return cy
        .fixture(fileUrl, "base64")
        .then(Cypress.Blob.base64StringToBlob)
        .then(blob => {
          return cy.window().then(win => {
            const el = subject[0];
            const nameSegments = fileUrl.split("/");
            const name = nameSegments[nameSegments.length - 1];
            const testFile = new win.File([blob], name, { type });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(testFile);
            el.files = dataTransfer.files;
            return cy.wrap(subject).trigger('change', {force : true});
          });
        });
    });
  });

describe('frontpage courses can be opened', () => {
    it('exists title', () => {
        cy.visit(''); 
        cy.contains('Crear video');
    });
});

describe('Create video', () => {
    beforeEach(() => {
        cy.visit('')
    });

    it('I can write upload video formulary, upload the video and see sucessfull message', () => {
        let i = 0;
        const numberOfCourses = 5;
        const resources = '../../../apps/Backoffice/frontend/features/resources'
        while (i < numberOfCourses) {
            i++;
            const courseName = faker.random.words(1);
            cy.get('input[name="id"]').type('1234567');
            cy.get('input[name="nombre"]').type(courseName);
            cy.get('input[name="duracion"]').type('8 days');
            cy.uploadFile("input[type=file]", resources+"/video-ejemplo.mp4", "video/mp4")
            cy.get('form[data-cy="create-video"]').submit();
            cy.get('div[role="alert"]').contains(`Felicidades, el curso ${courseName} ha sido creado!`);
            cy.reload();
        } 
    });
});