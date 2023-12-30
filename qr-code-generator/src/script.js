const urlInput = document.querySelector("#url-input");
const generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", async () => {
    const currentUrl = window.location.href;
    window.location.href = currentUrl + "/generate?url=" + urlInput.value;
});