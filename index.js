const input = document.getElementById("input");

function addingEventListener() {
  alert("CLICKED");
  input.addEventListener("click", addingEventListener);
}

input.addEventListener("click", addingEventListener);
