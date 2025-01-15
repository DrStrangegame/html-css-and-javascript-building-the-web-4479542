
/* below, a function takes an argument (in this case, an HTML element called 'terrariumElement') and makes it draggable by the
functionality of the function  */
  // pos1 and pos2 will store the change in cursor position on the x and Y axis.
  // pos3 and pos4 will store current cursor position......
function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;  /* event listener. Triggered when user presses a pointer button (ex: mouse click)
    on the Element.*/
}

dragElement(document.getElementById('plant1'));  /*document.getElementById looks for an element w/ a matching Id in the parenthesis.
"getElementById", which is part of the document object, looks in the DOM (Document Object Model) for an element of a particular ID, as in the
case of our plants. */
dragElement(document.getElementById('plant2'));

function pointerDrag(e) {  /* takes an event object (e) as it's parameter. It contains info about the event that triggered the function
In this case, the event is a pointer or mouse press.
Objects allow you to store multiple values in a single variable. Objects come w/ predefined functions, also known as methods.*/
        e.preventDefault();  /* This method prevents any default actions that might occur when event is triggered.  For ex, when you click
        and drag an image, the browser might try to drag image as a default action. We use this line to stop it.*/

        console.log(e);  // logs the event object to the console (tool built into the browser), which is useful for debugging.
        pos3 = e.clientX;  /* These next 2 lines store the initial position of the mouse cursor. So e.clientX gives a horizontal coordinate on the X
        axis of the mouse pointer.  */
        pos4 = e.clientY; /* e.clientY gives a vertical coordinate on the Y axis. This all happens when the event occurs.  */
        document.onpointermove = elementDrag;  /* "onpointermove" - while the pointer is moving, the element drag function will be called continuously.
         This function will handle updating the position of the elements as you drag it.  */
        document.onpointerup = stopElementDrag;  /* "document.onpointerup" - The way this works is when you release the pointer button, the
        stopElementDrag function will be called, which will stop the dragging process.  */
    }

function elementDrag(e) {  /* This functions is responsible for udpating the position of the terrarium element as a user drags it. First, it
  calculates the new cursor position.  */
        pos1 = pos3 - e.clientX;  /* Math here (this line and next one) represents how much the mouse has moved since the last mouse move event.*/
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;   /* This line and the next are responsible for updating the stored cursor position.*/
        pos4 = e.clientY;
        
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';  /* This line and next one are responsible for moving the element.
        Here, we're actually manipulating the DOM through CSS.
        "terrariumElement.style.top" sets the top position of the element by adjusting its current top position by amount the mouse has moved 
        vertically.  */
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px'; /*"terrariumElement.style.left" does the same thing, 
        except on left position. So it adjusts its current left position by the amount the mouse has moved horizontally. */
        /*** All that this is really doing is moving the element to follow the mouse movement. So every time you drag a plant, it follows your 
         * mouse cursor.*/
    }

function stopElementDrag() {  /* This function is responsible for stopping the drag operation when the user releases the mouse button. */
        document.onpointerup = null;  /* Removes the event listener for the pointerup event. This really means that the stopElementDrag
        function will no longer be called when the mouse button is released. */
        document.onpointermove = null; /* Removes the event listener for the pointermove event, so that the elementDrag function will no
        longer be called when the mouse moves. This really means that the element will stay in its new position, and no further updates
        to its position will be made until a new drag operation is initiated.*/
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
