import faker from 'faker'
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

describe('frontpage videos can be opened', () => {
    it('exists title', () => {
        cy.visit('/videos'); 
        cy.contains('Aletheia| Videos');
    });
});

describe('Create video', () => {
    beforeEach(() => {
        cy.visit('/videos')
    });

    it('I can write new video formulary, upload the video and see sucessfull message', () => {
        let i = 0;
        const numberOfVideos = 5;
        const resources = '../../../../resources'
        while (i < numberOfVideos) {
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