console.log("Hai, I am MRJD");
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Access form data
  var formData = new FormData(event.target);

  // Process the form data as needed (e.g., send it to a server using AJAX)

  // For demonstration purposes, log the form data to the console
  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
});