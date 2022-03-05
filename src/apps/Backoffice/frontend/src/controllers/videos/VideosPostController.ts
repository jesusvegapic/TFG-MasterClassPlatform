
 export class VideosPostController {

  public async createVideo(id: string, name: string, duration: string, url: string) {

    
    await fetch('https://localhost:5000/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            id: id,
            name: name,
            duration: duration,
            url: url
        })
    });

    alert(`Felicidades, el curso ${name} ha sido creado!`);
  }
}