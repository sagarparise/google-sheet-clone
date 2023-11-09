let cellNamePlaceholder = document.querySelector("#active-cell");
let form = document.querySelector("#form");
let activeElement = null;

const state = {};
const defaultProperties = {
    fontFamily:'sans',
    fontSize: 16,
    color: "#000000",
   backgroundColor:"#ffffff",
    textAlign:"left",
    bold:false,
    itallic:false,
    underline:false
    // value:''

}

function onCellFocus(event){
    const currentCellId = event.target.id;
    cellNamePlaceholder.textContent = currentCellId;
   activeElement = event.target;
   if(state[currentCellId])
   {

   resetOptions(state[currentCellId]);
   
   }
   else
   {
    resetOptions(defaultProperties)
   }
}
function resetOptions(defaultProperties)
{
    form.fontFamily.value = defaultProperties.fontFamily; 
    form.fontSize.value = defaultProperties.fontSize;
    form.color.value = defaultProperties.color;
    form.backgroundColor.value = defaultProperties.backgroundColor;
    form.textAlign.value = defaultProperties.textAlign;
    form.bold.checked = defaultProperties.bold;
    form.itallic.checked = defaultProperties.itallic;
    form.underline.checked = defaultProperties.underline;
   
}

function onFormChange()
{
    if (!activeElement) {
        alert("Please select a cell to make changes");
        form.reset();
        return;
    }
    currentState = {
        fontFamily:form.fontFamily.value,
        fontSize: form.fontSize.value,
       color:form.color.value,
        backgroundColor:form.backgroundColor.value,
        textAlign:form.textAlign.value,
        bold:form.bold.checked,
        itallic:form.itallic.checked,
        underline:form.underline.checked
    }
   
    applyStylesToCell(currentState);

}
 function applyStylesToCell(currentState)
 {
    activeElement.style.fontSize = `${currentState.fontSize}px`;
    activeElement.style.fontFamily = currentState.fontFamily;
    activeElement.style.color = currentState.color;
    activeElement.style. backgroundColor = currentState.backgroundColor;
    activeElement.style.textAlign = currentState.textAlign;

    activeElement.style.fontWeight = currentState.bold ? "bold": "normal";
    activeElement.style.fontStyle = currentState.itallic ? "italic" : "normal";
    activeElement.style.textDecoration = currentState.underline ? "underline" : "none";
    state[activeElement.id] = {...currentState , value:activeElement.innerText};
   // console.log(state);
    
 }