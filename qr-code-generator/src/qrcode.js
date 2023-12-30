export const generateQRImage = async (url) => {
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${url}`);
    return response;
}