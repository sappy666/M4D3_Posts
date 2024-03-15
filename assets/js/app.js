

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async () => {
  let response = await fetch(API_URL);
  try{
    if(!response.ok){
      console.log('Error al conectar con la API');
      console.log(`Codigo error: ${response.status}`);
      return;
    }
    const data = await response.json(); 
    displayData(data);
  }
  catch(error){
    console.log(error);
  }
}

const displayData = (data) => {
  const postsResults = document.getElementById('post-data');

  data.forEach((post) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h3);
    li.appendChild(p);

    postsResults.appendChild(li);
  });
};
