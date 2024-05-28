const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');

const filesToObfuscate = [
  './JS/scripts.js',
  // Add more files here if needed
];

// Obfuscate each file
filesToObfuscate.forEach(filePath => {
  const code = fs.readFileSync(filePath, 'utf8');
  const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: true,
    debugProtectionInterval: true,
    disableConsoleOutput: true,
    rotateStringArray: true,
    selfDefending: true,
    stringArray: true,
    stringArrayEncoding: 'rc4',
    stringArrayThreshold: 0.75,
  }).getObfuscatedCode();
  
  fs.writeFileSync(filePath.replace('.js', '.obfuscated.js'), obfuscatedCode, 'utf8');
});
