const form = document.getElementById("searchBar");
const output = document.getElementById("cookies");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission



  // Change the text content of the element
  output.textContent = `the cookie is: ${document.cookie}`;

  const options = {};

  fetch(
    'https://reqres.in/api/users/2',
    options
  )
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const popup = document.getElementById("modal");
    popup.style.display = "block";

    const img = document.getElementById("myImage");

    img.src = data.data.avatar;
  })
  .catch(err => console.error(err))
});