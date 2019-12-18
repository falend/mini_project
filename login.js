/* buat nampilin nama user di quis page */
var username = document.getElementById("username");
function tampilan(){
    localStorage.setItem('username',username.value);
}