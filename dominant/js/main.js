const register = document.getElementById("register");

const registerDialog = document.getElementById("registerDialog");
const usernameField = registerDialog.querySelector('[type="text"]');
const passwordField = registerDialog.querySelector('[type="password"]');
const cancelButton = registerDialog.querySelector(['button[value="cancel"]']);
const registerButton = registerDialog.querySelector(['button[value="register"]']);

register.addEventListener("click", (event) => {
    console.log(event);
    registerDialog.show();
    console.log(usernameField)
});

// close event of dialog - 
registerDialog.addEventListener("close", (e) => {
    console.log("closing the dialog")
});

registerDialog.addEventListener("submit", async (e) => {
    //event.preventDefault();
    registerDialog.close();

    const data = await registerLogic(usernameField.value, passwordField.value);
    console.log(data);
});

cancelButton.addEventListener("click", (event => {
    event.preventDefault();
    registerDialog.close();
}));

registerButton.addEventListener("click", (async event => {
    
}));

async function registerLogic(username, password) {
    const response = await fetch('http://localhost:5000/reg',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({username, password})
    });
  
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
  
    const data = await response.json();
    return data;
  }