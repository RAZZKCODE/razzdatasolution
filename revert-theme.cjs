const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');
const files = [
  'components/Hero.jsx',
  'components/TechMarquee.jsx',
  'components/Services.jsx',
  'components/Projects.jsx',
  'components/Contact.jsx',
  'components/Footer.jsx'
];

files.forEach(f => {
  const filePath = path.join(dir, f);
  if (fs.existsSync(filePath)) {
    let text = fs.readFileSync(filePath, 'utf8');
    
    // Reverse Text
    text = text.replace(/text-textmain/g, 'text-white');
    text = text.replace(/text-textmuted/g, 'text-gray-400');
    // For text on primary buttons
    text = text.replace(/text-background/g, 'text-[#040B16]');
    
    // Reverse Background
    text = text.replace(/bg-background/g, 'bg-[#040B16]');
    text = text.replace(/bg-secondary/g, 'bg-[#0A192F]');
    
    // Reverse Borders
    text = text.replace(/border-bordermain0/g, 'border-white/50'); // Fix for hover mapping issue
    text = text.replace(/border-bordermain/g, 'border-white/10');

    fs.writeFileSync(filePath, text);
    console.log(`Reverted ${filePath}`);
  }
});
