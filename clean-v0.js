const fs = require('fs');
const path = require('path');

// Patterns to search and remove
const patterns = [
  //gi,
  /v0\.dev/gi,
  //gi,
  /meta name="generator" content="v0\.dev"/gi
];

// Recursively read files and clean them
function cleanDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      cleanDirectory(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.tsx') || fullPath.endsWith('.html') || fullPath.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      patterns.forEach(pattern => {
        content = content.replace(pattern, '');
      });
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  });
}

// Run script
cleanDirectory('./');
console.log('✅ Clean-up complete! All v0 references removed.');
