const width = screen.width;
const height = screen.height;
let checkresult;

if (height < width) {
checkresult = "computer";
} else if (width < height) {
checkresult = "mobile";
} else if (width = height) {
checkresult = "ancient";
}

console.log("Simple User Checker result:\nUser has interface based on " + checkresult);
