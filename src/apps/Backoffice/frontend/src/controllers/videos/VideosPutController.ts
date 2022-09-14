const { v4: uuidv4 } = require('uuid');

 export class VideosPutController {

  public async createVideo(name: string, duration: string, url: string) {

    const id = uuidv4();
    await fetch('http://localhost:5000/videos/'+id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: name,
            duration: duration,
            url: url
        })
    });

    alert(`Felicidades, el curso ${name} ha sido creado!`);
  }
}