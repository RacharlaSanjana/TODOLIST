// Add event to container 1
function addEvent() {
    var eventInput = document.getElementById("eventInput");
    var eventText = eventInput.value;
  
    if (eventText.trim() === "") {
      alert("Please enter an event.");
      return;
    }
  
    var eventElement = document.createElement("div");
    eventElement.className = "event";
    eventElement.innerHTML = eventText;
  
    // Generate a unique ID for the event element
    var eventId = "event" + Date.now();
    eventElement.id = eventId;
  
    // Enable dragging for the event element
    eventElement.draggable = true;
    eventElement.addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text", event.target.id);
    });
  
    document.getElementById("container1").appendChild(eventElement);
    eventInput.value = "";
  }
  
  // Allow dropping into container 2
  var container2 = document.getElementById("container2");
  container2.addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  
  container2.addEventListener("drop", function (event) {
    event.preventDefault();
    var eventId = event.dataTransfer.getData("text");
    var eventElement = document.getElementById(eventId);
    container2.appendChild(eventElement);
  });
// Reset Container 2
function resetContainer() {
    var container2 = document.getElementById("container2");
    container2.innerHTML = "<h2>COMPLETED TASK</h2>";
}
  