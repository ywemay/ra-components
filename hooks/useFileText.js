export async function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file, 'base64');
  });
}

export default function useFileText(props) {
  const { onResult } = { onResult: (r) => console.log(r), ...props}
  const readFile = (file) => readFileAsText(file)
    .then(data => {
      typeof onResult === 'function' ? onResult(data) : console.log('useFileText', data)
    }).catch(e => console.error(e))
  return { readFile }
}