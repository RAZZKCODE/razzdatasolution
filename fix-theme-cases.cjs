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
    
    // Replace camelCase tailwind classes with lowercase to avoid kebab-case conversion bugs
    text = text.replace(/text-textMain/g, 'text-textmain');
    text = text.replace(/text-textMuted/g, 'text-textmuted');
    text = text.replace(/border-borderMain/g, 'border-bordermain');

    fs.writeFileSync(filePath, text);
    console.log(`Updated ${filePath}`);
  }
});
