const form = document.getElementById("searchBar");
const output = document.getElementById("cookies");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Change the text content of the element
  output.textContent = `the cookie is: ${document.cookie}`;
});