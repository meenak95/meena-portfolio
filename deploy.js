const fs = require('fs');
const { execSync } = require('child_process');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Add homepage for deployment
packageJson.homepage = 'https://meenak95.github.io/meena-portfolio';

// Write back to package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('✅ Added homepage for deployment');

// Deploy
try {
  execSync('npm run deploy', { stdio: 'inherit' });
  console.log('🚀 Successfully deployed to GitHub Pages!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
}

// Remove homepage for local development
delete packageJson.homepage;
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('✅ Removed homepage for local development');
console.log('🌐 Your portfolio is live at: https://meenak95.github.io/meena-portfolio');
