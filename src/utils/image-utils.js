import { saveAs } from 'file-saver'

function downloadImage(url) {
    saveAs(url, url.slice(22));
}

export default downloadImage;