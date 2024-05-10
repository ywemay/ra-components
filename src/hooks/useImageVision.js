import { doFetch } from '@/lib/fetch';

const { 
  VITE_OLLAMA_API: API, 
  VITE_OLLAMA_VISION_MODEL: MODEL,
} = import.meta.env

const quotes = '```'
const prompt = `
Analyze the image(s) and identify the product. Come up with a perfect title, description, and relevant tags for the product. Respond with json, here is a template:
${quotes}json
{ 
  "title": "your product title", 
  "description": "description goes here",
  "tags": [ "tag1", "tag2", "tag3" ]
}
${quotes}
`

async function requestVision(images) {
  try {

    const body = new FormData();

    await body.append('model', MODEL || 'llava:7b'); 
    await body.append('prompt', prompt);
    await body.append('stream', false);
    await images.forEach((file) => body.append('images[]', file));
    const res = await doFetch(`${API}/api/generate`, {
      method: 'POST',
      body,
    });
    
    if (res.status !== 200) {
      throw new Error(`API returned error: ${res.status}`);
    }

    return res.json;

  } catch (error) {
    console.error('Error while sending request to Ollama API:', error);
    throw error;
  }
}

const defaults = {
  onData: (data) => console.log(data),
  onError: (error) => console.error(error),
}

export function useImageVision(props) {
  const { onData, onError } = { ...defaults, ...props }

  const analyze = (files) => requestVision(files)
  .then(data => onData(data))
  .catch(e => onError(e))

  return { analyze };
}