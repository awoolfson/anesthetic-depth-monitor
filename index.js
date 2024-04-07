var currentPsi = -1;
var currentMap = -1;

function updateValues() {
    map = document.querySelector("#map-input").value;
    psi = document.querySelector("#psi-input").value;
    dot = document.querySelector("#dot");
    dot.style.bottom = `${mapToCoord(map)}px`;
    dot.style.left = `${psiToCoord(psi)}px`;
    dot.style.opacity = '0';
    toggleCell(currentPsi, currentMap);
    toggleCell(psi, map);
    currentPsi = psi;
    currentMap = map;
}

function mapToCoord(map) {
    return map - 20;
}

function psiToCoord(psi) {
    return (psi * 16) - 1;
}

function toggleCell(psi, map) {
    console.log(psi, map)
    cellId = "";
    if (map > 100) {
        if (psi <= 25) {
            cellId = "cell-1";
        } else if (psi <= 50) {
            cellId = "cell-2";
        } else if (psi <= 100) {
            cellId = "cell-3";
        } else {
            return;
        }
    } else if (map > 65) {
        if (psi <= 25) {
            cellId = "cell-4";
        } else if (psi <= 50) {
            cellId = "cell-5";
        } else if (psi <= 100) {
            cellId = "cell-6";
        } else {
            return;
        }
    } else if (map >= 0) {
        if (psi <= 25) {
            cellId = "cell-7";
        } else if (psi <= 50) {
            cellId = "cell-8";
        } else if (psi <= 100) {
            cellId = "cell-9";
        } else {
            return;
        }
    } else {
        return;
    }

    cell = document.querySelector(`#${cellId}`);
    
    if (cell.classList.contains("blue-cell")) {
        if (cell.classList.contains("blink-blue")) {
            cell.classList.remove("blink-blue");
            return;
        }
        cell.classList.add("blink-blue")
    } else if (cell.classList.contains("red-cell")) {
        if (cell.classList.contains("blink-red")) {
            cell.classList.remove("blink-red");
            return;
        }
        cell.classList.add("blink-red");
    } else {
        if (cell.classList.contains("glowing-cell")) {
            cell.classList.remove("glowing-cell");
            return;
        }
        cell.classList.add("glowing-cell");
    }
}