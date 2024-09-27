// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    fullGrid = document.getElementById("grid");
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
        }
        numRows++;
        console.log("Rows:", numRows);
    }
}

//Add a column
function addC() {
    fullGrid = document.getElementById("grid");
    //Determine what to do when there are no rows??
    if (numRows > 0) {
        for (let i = 0; i < numRows; i++) { // Change <= to < to avoid undefined rows
            singleRow = fullGrid.rows[i];
            let newCell = singleRow.insertCell();
            newCell.style.backgroundColor = "white"; // Default color
        }
        numCols++;
        console.log("Cols:", numCols);
    }
}

// Remove a row
function removeR() {
    fullGrid = document.getElementById("grid");
    if(numRows > 0){
        fullGrid.deleteRow(numRows - 1); //Indexing starts at 0.
        numRows--;
    }
    console.log("Rows:", numRows)
}

// Remove a column
function removeC() {
   fullGrid = document.getElementById("grid");
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

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}