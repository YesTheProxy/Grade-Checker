document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the login credentials
  var loginId = document.getElementById("loginId").value;
  var password = document.getElementById("password").value;

  // Simulate the login process
  if (loginId === "bemowjoh" && password === "Spamt0ns") {
    // Successful login
    document.getElementById("result").innerHTML = "Login successful!";
    // Perform further actions or redirect to another page
  } else {
    // Failed login
    document.getElementById("result").innerHTML = "Invalid login credentials!";
  }
});
