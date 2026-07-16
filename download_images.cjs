const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { name: '1.jpg', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1280&q=80' },
  { name: '2.jpg', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&q=80' },
  { name: '3.jpg', url: 'https://images.unsplash.com/photo-1471922694854-ceafcbce1070?w=1280&q=80' },
  { name: '4.jpg', url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1280&q=80' },
  { name: '5.jpg', url: 'https://images.unsplash.com/photo-1444464666168-e0d16ee736b6?w=1280&q=80' },
  { name: '6.jpg', url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1280&q=80' },
  { name: '7.jpg', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1280&q=80' },
  { name: '8.jpg', url: 'https://images.unsplash.com/photo-1518182170546-076616fd6251?w=1280&q=80' },
  { name: '9.jpg', url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1280&q=80' },
  { name: '10.jpg', url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1280&q=80' },
  { name: '11.jpg', url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1280&q=80' },
  { name: '12.jpg', url: 'https://images.unsplash.com/photo-1485160497022-3e09382fb310?w=1280&q=80' }
];

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const img of images) {
    const dest = path.join(__dirname, 'public/assets/works', img.name);
    console.log(`Downloading ${img.url} to ${dest}...`);
    await download(img.url, dest);
  }
  console.log('Done!');
}
run();
