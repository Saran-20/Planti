// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
document.getElementById('user').addEventListener("click", openForm);
document.getElementById('close-label').addEventListener("click", closeForm);

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
   document.getElementById("myForm").style.display = "none";
}