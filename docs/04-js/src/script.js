
/* below, a function takes an argument (in this case, an HTML element called 'terrariumElement') and makes it draggable by the
functionality of the function  */
  // pos1 and pos2 will store the change in cursor position on the x and Y axis.
  // pos3 and pos4 will store current cursor position......
function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;  /* event listener. Triggered when user presses a pointer button (ex: mouse click)
    on the Element.*/
}

dragElement(document.getElementById('plant1'));  /*document.getElementById looks for an element w/ a matching Id in the parenthesis */
dragElement(document.getElementById('plant2'));

function pointerDrag(e) {  /* takes an event object (e) as it's parameter. It contains info about the event that triggered the function
In this case, the event is a pointer or mouse press.
Objects allow you to store multiple values in a single variable. */
        e.preventDefault();  // This method prevents any default actions that might occur when event is triggered.
        console.log(e);  // logs the event object to the console, which is useful for debugging.
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

/* ****** Event listeners are functions that wait for specific events to occur and then execute code in response  *******/
  /* 1. Event types: clicks, key presses, and changes in the document.
     2. Targets: Every event is associated with a particular element in the DOM. Ex: a button that is clicked on is the event target.
     3. Event handler function: The code that should be executed when the event occurs.
     4. Adding an event listener: This is a crucial step to attach an event listener to a particular element.
*/



/* Original content
function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

document.querySelectorAll(".plant").forEach((plant) => {
  plant.onpointerdown = function(){
    dragElement(plant);
  };
});
*/
