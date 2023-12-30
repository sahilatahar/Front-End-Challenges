const urlInput = document.querySelector("#url-input");
const generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", async () => {
    window.location.href = `/result.html?text=${urlInput.value}`;
});