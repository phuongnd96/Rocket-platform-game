let rockets = 5;
let isWin = false;
let hits = 0;
let map = new Array();
let resolved=false;
const target = [[3, 2], [1, 3]];
map[0] = new Array("-", "-", "-", "-");
map[1] = new Array("-", "-", "-", "-");
map[2] = new Array("-", "-", "-", "-");
map[3] = new Array("-", "-", "-", "-");
console.table(map);
function isHit(y, x) {
        if (target.some((elem) => {
                return elem.toString() == [y, x].toString()
        })) {
                return true;
        };
        return false;
};
function checkVicinity(y, x) {
        let countTarget = 0;
        let vicinity = [[y + 1, x], [y - 1, x], [y, x - 1], [y, x + 1], [y - 1, x - 1], [y - 1, x + 1], [y + 1, x - 1], [y + 1, x + 1]]
        vicinity.forEach((node) => {
                if (isHit(...node)) {
                        countTarget++;
                }
        });
        return countTarget;
};
function ask() {
        let input = prompt("Enter next step");
        if (!input) {
                ask();
        }
        let y = parseInt(input.split(" ")[0]);
        let x = parseInt(input.split(" ")[1]);
        if (isHit(y, x)) {
                alert("Hit")
                map[y][x] = "O";
                hits++;
        } else {
                map[y][x] = "X";
        }
        alert(`There are ${checkVicinity(y, x)} enemy surrounding`);
        console.clear();
        console.table(map);
}
while (!resolved) {
        ask();
        rockets--;
        alert(`You have ${rockets} rockets left!`);
        if (hits == target.length) {
                alert("You won!")
                resolved=true;
        }
        if (rockets<=0){
                alert("Out of rockets! Game End.")
                resolved=true;
        }
}



