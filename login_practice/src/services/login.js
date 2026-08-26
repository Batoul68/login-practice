
export async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(credentials)
  })
    .then(response => {
      if(!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => console.error(error));
}