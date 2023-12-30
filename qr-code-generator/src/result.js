const downloadBtn = document.querySelector("#download-btn");
const shareBtn = document.querySelector("#share-btn");
const qrImage = document.querySelector("#qr-image");
import { generateQRImage } from "./qrcode.js";

// get url from params
const text = new URLSearchParams(window.location.search).get("text");

window.addEventListener("load", async () => {
    if (!text) {
        window.location.href = "/";
    }
    const qrUrl = await generateQRImage(text).then((res) => res.url);
    qrImage.src = qrUrl;
});

const blob = await generateQRImage(text).then((r) => r.blob());

downloadBtn.addEventListener("click", async () => {
    const imgUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = imgUrl;
    a.download = "qr-image.png";
    a.click();
});

shareBtn.addEventListener("click", () => {
    var file = new File([blob], "picture.jpg", { type: 'image/jpeg' });
    var filesArray = [file];

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        navigator.share({
            files: filesArray,
            title: 'QR Image'
        });
    } else {
        alert("Your browser doesn't support sharing");
    }
});
