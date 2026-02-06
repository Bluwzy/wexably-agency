const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files recursively
function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
      files.push(fullPath);
    }
  });
  
  return files;
}

const files = getImageFiles(inputDir).filter(file => !file.includes('optimized'));

console.log(`📸 Found ${files.length} images to optimize...`);

// Process each image
Promise.all(files.map(async (inputPath) => {
  const relativePath = path.relative(inputDir, inputPath);
  const fileName = path.basename(inputPath);
  const outputFileName = fileName.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(outputDir, outputFileName);

  try {
    const info = await sharp(inputPath)
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const savings = ((originalSize - info.size) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${fileName} → ${outputFileName} (${savings}% smaller)`);
  } catch (err) {
    console.error(`❌ Error processing ${fileName}:`, err.message);
  }
})).then(() => {
  console.log('\n🎉 All images optimized successfully!');
}).catch(err => {
  console.error('❌ Error:', err);
});
