export type Video = {
  id: string
  name: string
  duration: string
  content: Blob
}

export const createVideo = (video: Video) => {
  post('http://localhost:5000/videos', video)
}

const post = async (url: string, body : Record<string, unknown>) => {
  await fetch(url, {
      method: 'POST',
      body: FormData.arguments({...body}),
      headers: { 'Content-Type': 'multipart/form-data' }
  })
}