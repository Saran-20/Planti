document.getElementById('buy').addEventListener("click", openForm);
document.getElementById('close-label').addEventListener("click", closeForm);

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

function openForm() {
    document.getElementById("corainder").style.display = "block";
}

function closeForm() {
   document.getElementById("corainder").style.display = "none";
}