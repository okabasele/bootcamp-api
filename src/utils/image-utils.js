import { saveAs } from 'file-saver'

function downloadImage(e,url) {
    e.preventDefault();
    saveAs(url, url.slice(22));
}

export default downloadImage;