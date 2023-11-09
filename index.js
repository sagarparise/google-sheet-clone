let columns = 26;
let rowsNo = 100;
const header = document.querySelector(".header");
const sno = document.querySelector(".sno");
const main = document.querySelector(".main");

function createHeaderCells()
{
  //header cells here
  for(let i=0; i<=columns; i++)
  {
    let headerCell = document.createElement("div");
    headerCell.className = "header-cell";
    if(i!==0)
    {
        headerCell.innerText = String.fromCharCode(64+i);
    }
    header.appendChild(headerCell);
  }
}
function createSeriesNumberCells()
{
    for(let i=1; i<=rowsNo; i++)
    {
        let snoCell = document.createElement("div");
        snoCell.className = "sno-cell";
        snoCell.innerText = i;
        sno.appendChild(snoCell);
    }
}
 function createMainRow(rowNumber){
  
  
    let row = document.createElement("div");
    row.className = "main-row";
      for(let j=1; j<=columns; j++)
      {
        let mainCell = document.createElement("div");
        mainCell.className = "main-cell";
        mainCell.contentEditable = true;
      mainCell.id = String.fromCharCode(64 + j) + rowNumber ;
      row.appendChild(mainCell);
      mainCell.addEventListener("focus", onCellFocus);
      mainCell.addEventListener("input",  onFormChange);
      }
    main.appendChild(row);
  
 }
  function buildMainSection()
  {
    for(let i=1; i<=rowsNo; i++)
    {
      createMainRow(i);
    }
  }
createHeaderCells();
createSeriesNumberCells();
buildMainSection();