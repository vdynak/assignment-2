// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    fullGrid = document.getElementById("grid");
    let newRow = fullGrid.insertRow(); //Built in function.
    for(let i = 0; i <= numCols; i++){ //Important note: Set to less than or equal to to account for empty grid.
        let newCell = newRow.insertCell();
        newCell.style.backgroundColor = "white"; //Will need updating when color changing function is updated.
    }
    numRows++;
    console.log(numRows);
}
//FIX COL COUNT HERE

// Add a column
function addC() {
    fullGrid = document.getElementById("grid");
    //Ask for clarification with numRow == 0, should we add a row first?
    // if(numRows == 0){
    //     addR();
    // }
    // else{
        for(let i = 0; i < numRows; i++){
            singleRow = fullGrid.rows[i];
            let newCell = singleRow.insertCell();
            newCell.style.backgrounColor = "white"; //Will need updating when color changing function is updated.
        //}
    }
    numCols++;
    console.log(numCols);
}

// Remove a row
function removeR() {
    fullGrid = document.getElementById("grid");
    if(numRows > 0){
        fullGrid.deleteRow(numRows - 1); //Indexing starts at 0.
        numRows--;
    }
    console.log(numRows)
}

// Remove a column
function removeC() {
   fullGrid = document.getElementById("grid");
   for(let i = 0; i < numRows; i++){
        singleRow = fullGrid.rows[i];
        let removedCell = singleRow.deleteCell(-1);
   }
   numCols--;
   console.log(numCols);
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