/* buat ngenampilin si username yg di inpuit di login page */
var displayid = document.getElementById("display-id");
displayid.innerHTML = localStorage.getItem('username');