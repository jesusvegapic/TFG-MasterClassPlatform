
 export class VideosPostController {

  public async createVideo(id: string, name: string, duration: string, content : File) {

    const formData = new FormData();
    formData.append('name', name)
    formData.append('duration', duration)
    formData.append('content', content)
    await fetch(`http://localhost:5000/videos/${id}`, {
        method: 'PUT',
        body: formData,
    });

    alert(`Felicidades, el curso ${name} ha sido creado!`);
  }
}