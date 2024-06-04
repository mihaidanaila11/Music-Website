function convertNewLines(string, nrSpaces=1) {
    returnSpan = document.createElement("span");

    let subString = "";
    console.log(string.length);
    for (let i = 0; i < string.length; i++) {
        console.log(subString);
        if (string[i] == "\n") {
            if (subString != "") {
                returnSpan.appendChild(document.createTextNode(subString));
                subString = ""
            }

            for (let j = 0; j < nrSpaces; j++){
                returnSpan.appendChild(document.createElement("br"));
            }
            
        } else {
            subString += string[i];
        }
    }

    if (string.substr(-1) != "\n") {
        returnSpan.appendChild(document.createTextNode(subString));
    }

    return returnSpan;
}

function deleteResult() {
    document.getElementById("resultDiv").remove();
}

function createResultDiv(compatibil, errorMessage) {
    if (document.getElementById("resultDiv") != null) {
        clearTimeout();
        deleteResult();
    }

    resultDiv = document.createElement("div");
    resultDiv.id = "resultDiv";
    var textNode;

    if (compatibil) {
        textNode = document.createTextNode("Elementele sunt compatibile!");
        resultDiv.style.backgroundColor = "darkgreen";
    }
    else {
        textNode = document.createTextNode("Elementele nu sunt compatibile!");
        resultDiv.style.backgroundColor = "red";
    }

    resultDiv.appendChild(textNode);
    
    if (!compatibil) {
        resultDiv.appendChild(document.createElement("br"));
        resultDiv.appendChild(document.createElement("br"));
        resultDiv.appendChild(convertNewLines(errorMessage, 2));
    } else {
        setTimeout(deleteResult, 4000);
    }
   
    document.getElementsByTagName("main")[0].appendChild(resultDiv);
}

function checkResult() {
    if (localStorage.getItem("melody_selected") == 1 &&
        localStorage.getItem("drums_selected") == 1 &&
        localStorage.getItem("percs_selected")) {
        melody = document.getElementById("selected_melody");

        melody_info = { "name": "melody", "bpm": melody.childNodes[3].childNodes[0].nodeValue.split(" ")[1], "key": melody.childNodes[5].childNodes[0].nodeValue.split(" ")[-1] }
        drums = document.getElementById("selected_drums");
        drums_info = { "name": "drums", "bpm": drums.childNodes[3].childNodes[0].nodeValue.split(" ")[1] }
        percs = document.getElementById("selected_percs");
        percs_info = { "name": "percs", "bpm": percs.childNodes[3].childNodes[0].nodeValue.split(" ")[1] }

        tracks = [melody_info, drums_info, percs_info];

        var compatibil = true;
        var errorMessage = "";

        for (let i = 0; i < tracks.length - 1; i++) {
            for (let j = i + 1; j < tracks.length; j++) {
                if (Math.max(parseInt(tracks[i].bpm), parseInt(tracks[j].bpm)) % Math.min(parseInt(tracks[i].bpm), parseInt(tracks[j].bpm)) != 0) {
                    errorMessage += "Track-ul " + tracks[i].name + " nu e compatibil cu track-ul " + tracks[j].name
                        + " deoarece BPM-urile sunt prime intre ele (nu se impart unul la altul)\n"
                    compatibil = false;
                }
            }
        }

        console.log("Compatibil: " + compatibil);

        createResultDiv(compatibil, errorMessage);
    }
}

function eventHandle(event) {
    if (!(event.target.id == "checkResult")) {
        return;
    }
    checkResult()
}

document.addEventListener("click", eventHandle, false);