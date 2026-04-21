const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');
const files = [
  'App.jsx',
  'components/Navbar.jsx',
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
    
    // Backgrounds
    text = text.replace(/bg-\[\#040B16\]/g, 'bg-background');
    text = text.replace(/bg-\[\#0A192F\]/g, 'bg-secondary');
    
    // Texts
    text = text.replace(/text-white/g, 'text-textMain');
    text = text.replace(/text-gray-200/g, 'text-textMain');
    text = text.replace(/text-gray-300/g, 'text-textMain');
    text = text.replace(/text-gray-400/g, 'text-textMuted');
    text = text.replace(/text-gray-500/g, 'text-textMuted');
    
    // Borders
    text = text.replace(/border-white\/10/g, 'border-borderMain');
    text = text.replace(/border-white\/5/g, 'border-borderMain');
    text = text.replace(/border-white\/20/g, 'border-borderMain');
    
    // Text primary for specific places where we had color issues
    text = text.replace(/text-\[\#040B16\]/g, 'text-background');

    fs.writeFileSync(filePath, text);
    console.log(`Updated ${filePath}`);
  }
});
