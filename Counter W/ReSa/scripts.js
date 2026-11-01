let count = 0;

//create your button functions, and place them in the HTML file as the onclick attribute of the buttons.

function updateCount() {
    document.getElementById("counter").innerHTML = count;
}

function increment() {
    count++;
    updateCount(); 
}

function decrement(){
    count--;
    updateCount();
}

function reset() {
    count = 0;
    updateCount();  
}

function saveCount() {
    localStorage.setItem("savedCount", count);
    alert("Count saved: " + count);
}

function loadCount() {
    let saved = localStorage.getItem("savedCount");
    if (saved !== null) {
        count = parseInt(saved);
        updateCount();
    }
    alert("Count loaded: " + count);
}

function deleteCount() {
    localStorage.removeItem("savedCount");
    alert("Saved count deleted.");
}