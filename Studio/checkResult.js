function checkResult() {
    if (localStorage.getItem("melody_selected") == 1 &&
    localStorage.getItem("drums_selected") == 1 &&
    localStorage.getItem("percs_selected")) {
        melody = document.getElementById("selected_melody");
        
        melody_info = {"bpm" : melody.childNodes[3].childNodes[0].nodeValue.split(" ")[1], "key": melody.childNodes[5].childNodes[0].nodeValue.split(" ")[-1]}
        drums = document.getElementById("selected_drums");
        drums_info = {"bpm" : drums.childNodes[3].childNodes[0].nodeValue.split(" ")[1]}
        percs = document.getElementById("selected_percs");
        percs_info = { "bpm": percs.childNodes[3].childNodes[0].nodeValue.split(" ")[1]}

        
        if (melody_info.bpm == drums_info.bpm && melody_info.bpm == percs_info.bpm && drums_info.bpm == percs_info.bpm) {
            console.log("compatibile");
        }
        else {
            console.log("nus compatibile");
        }


    }
    else {
        console.log("not completed");
    }
}

function eventHandle(event) {
    if (!(event.target.id == "checkResult")) {
        return;
    }
    checkResult()
}

document.addEventListener("click", eventHandle, false);