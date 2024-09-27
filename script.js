// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
const fullGrid = document.getElementById("grid");

//Add a row
function addR() {
    //Account for the creation of the first row (should also increase col count)
    if (numRows >= 0) {
        let newRow = fullGrid.insertRow();
        //If this is the first row being added, increase the number of columns as well.
        if (numRows === 0) {
            numCols++;  // The first row defines the number of columns.
        }
        //Add cells to the new row.
        for (let i = 0; i < numCols; i++) {
            let newCell = newRow.insertCell();
            newCell.style.backgroundColor = "white"; // Default color

            //Added event listener for the requiremenet in rubric for single cell coloring.
            newCell.addEventListener("click", function() {
                fillSingle(newCell);
            });
        }
        numRows++;
        console.log("Rows:", numRows);
    }
}

//Add a column
function addC() {
    //Determine what to do when there are no rows??
    if (numRows > 0) {
        for (let i = 0; i < numRows; i++) { // Change <= to < to avoid undefined rows
            singleRow = fullGrid.rows[i];
            let newCell = singleRow.insertCell();
            newCell.style.backgroundColor = "white"; // Default color

            //Added event listener for the requiremenet in rubric for single cell coloring.
            newCell.addEventListener("click", function() {
                fillSingle(newCell);
            });
        }
        numCols++;
        console.log("Cols:", numCols);
    }
}

// Remove a row
function removeR() {
    if(numRows > 0){
        fullGrid.deleteRow(numRows - 1); //Indexing starts at 0.
        numRows--;
    }
    console.log("Rows:", numRows)
}

// Remove a column
function removeC() {
   for(let i = 0; i < numRows; i++){
        singleRow = fullGrid.rows[i];
        let removedCell = singleRow.deleteCell(-1); //Removes from the end.
   }
   if(numCols > 0){
        numCols--;
   }
   console.log("Cols:", numCols);
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

//color a single cell, by clicking on the cell, and change its color to the selected color
function fillSingle(cell) {
    if(colorSelected && colorSelected != "SELECT") {
        cell.style.backgroundColor = colorSelected;
    }
    else{
        alert("Select a color.");
    }
}

// Fill all uncolored cells
function fillU() {
    for(let i = 0; i < numRows; i++){
        singleRow = fullGrid.rows[i];
        for(let j = 0; j < numCols; j++){
            let cell = singleRow.cells[j];
            if(cell.style.backgroundColor === "white") {
                cell.style.backgroundColor = colorSelected;
            }
            else if(cell.style.backgrounColor === "SELECT") {
                alert("Select a color.");
            }
        }
    }
}

// Fill all cells
//This follows the same logic as fillU, but there are no conditions on the pre-color condition, so we can omit that.
function fillAll() {
    for(let i = 0; i < numRows; i++){
        singleRow = fullGrid.rows[i];
        for(let j = 0; j < numCols; j++){
            let cell = singleRow.cells[j];
            if(colorSelected === "SELECT") {
                alert("Select a color.");
            }
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    for(let i = 0; i < numRows; i++){
        singleRow = fullGrid.rows[i];
        for(let j = 0; j < numCols; j++){
            let cell = singleRow.cells[j];
            cell.style.backgroundColor = "white";
        }
    }
}