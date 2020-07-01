const allowDrop = (event) => {
  event.preventDefault();
  // console.log(e.target.id)
  document.getElementById(event.target.id).classList.add("hovering")
  document.getElementById(event.target.id).classList.remove("no-hover")
}



// TODO 2
// Use the `allowDrop` function as a template to make this function 
// be called when a draggable object exits a valid dropzone 
// so the green background is removed.
const removeDrop = (event) => {
  event.preventDefault(); 
  document.getElementById(event.target.id).classList.remove("hovering")
  document.getElementById(event.target.id).classList.add("no-hover")
  
  // write code here that will make the background return to normal when the dragged objects leaves a dropzone.
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

const drop = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}