const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');

const replacements = [
  { search: /bg-\[#040B16\]/g, replace: 'bg-background' },
  { search: /bg-\[#0A192F\]/g, replace: 'bg-secondary' },
  { search: /text-white/g, replace: 'text-foreground' },
  { search: /border-white\/10/g, replace: 'border-border' },
  { search: /from-\[#040B16\]/g, replace: 'from-background' },
  { search: /text-\[#040B16\]/g, replace: 'text-background' },
  { search: /bg-\[#00E5FF\]\/80/g, replace: 'bg-primary/80' },
  { search: /border-white\/50/g, replace: 'border-foreground/50' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const { search, replace } of replacements) {
        if (search.test(content)) {
          content = content.replace(search, replace);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDirectory(srcDir);
