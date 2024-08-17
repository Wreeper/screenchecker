/* screenchecker by wreeper - https://github.com/Wreeper/screenchecker */
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
