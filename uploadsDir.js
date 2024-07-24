// createUploadsDir.js
import fs from 'fs';
import path from 'path';

const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
    console.log('Uploads directory created.');
} else {
    console.log('Uploads directory already exists.');
}
