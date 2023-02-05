const GRAPHQL_URL = "http://localhost:4000/graphql";

async function fetchGreeting() {
  const query = `
        query {
          getUserShortcuts {
            description
            id
            title
            url
          }
        }
  `;
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MDQwNTI4MX0.-AjY1HBp4VQ-76zVU3HVNsAcOitvtrKcj0p3AiRP8Ss",
    },
    body: JSON.stringify({
      query
    }),
  });
  const { data } = await response.json();
  return data;
}

fetchGreeting().then(({ getUserShortcuts }) => {
  const title = document.querySelector('h1');
  title.textContent = JSON.stringify(getUserShortcuts);
});
