let bgColor = prompt("Enter the background color:");
let textColor = prompt("Enter the text color:");

document.body.style.backgroundColor = bgColor;
document.getElementById('textArea').style.color = textColor;

console.log(`Background color: ${bgColor}`);
console.log(`Text color: ${textColor}`);