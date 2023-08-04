
    document.getElementById("submitButton").onclick = function() {
      // Your JavaScript function code here
      alert("Button clicked!");


      const output = document.getElementById("cookies");
      output.textContent = `> ${document.cookie}`;
    };
