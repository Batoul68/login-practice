
export async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(credentials)
  })
    .then(data => {
      if(!data.ok) {
        throw new Error("Couldn't fetch data");
      }
      return data.json();
    })
    .catch(error => console.error(error));
}