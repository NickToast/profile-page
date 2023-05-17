console.log("page loaded...");

var editName = document.querySelector("#profile-name");
var removeConnection = document.querySelector("#todd-e");
var removePhil = document.querySelector("#phil-e")
var requestNum = document.querySelector("#connection-requests");
var connectionsNum = document.querySelector("#connections-number")
var requestCounter = 2;
var connectionsCounter = 418;

function editProfile() {
    editName.innerText = "Sally Mander";
}

function accept() {
    requestCounter--;
    requestNum.innerText = requestCounter;
    connectionsCounter++;
    connectionsNum.innerText = connectionsCounter;
    removeConnection.remove();
}

function declineTodd() {
    requestCounter--;
    requestNum.innerText = requestCounter;
    removeConnection.remove();
}

function acceptPhil() {
    requestCounter--;
    requestNum.innerText = requestCounter;
    connectionsCounter++;
    connectionsNum.innerText = connectionsCounter;
    removePhil.remove();
}

function declinePhil() {
    requestCounter--;
    requestNum.innerText = requestCounter;
    removePhil.remove();
}