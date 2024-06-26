function init_blocks() {
    var melodies = {
        "melodies": [
            { "name": "Melody1", "bpm": 140, "key": "CMaj" },
            { "name": "Melody2", "bpm": 130, "key": "D#Min" },
            { "name": "Melody3", "bpm": 130, "key": "D#Min" },
            { "name": "Melody4", "bpm": 130, "key": "D#Min" }
        ]
    };

    var drums = {
        "drums": [
            { "name": "Drums1", "bpm": 140},
            { "name": "Drums2", "bpm": 130}
        ]
    };

    var counters = {
        "counters": [
            { "name": "Counter1", "bpm": 140, "key" : "CMaj"},
            { "name": "Counter2", "bpm": 70, "key" : "D#min"}
        ]
    };
    for (melody in melodies.melodies) {
        newBlock = document.createElement("div");
        newBlock.id = melodies.melodies[melody].name.toLowerCase();
        newBlock.className = "inventory_track_block melody";

        track_title_span = document.createElement("span");
        track_title_span.className = "inventory_track_title inventory_info";
        track_title = document.createTextNode(melodies.melodies[melody].name);
        track_title_span.appendChild(track_title);
        newBlock.appendChild(track_title_span);

        track_BPM_span = document.createElement("span");
        track_BPM_span.className = "inventory_track_info inventory_info";
        track_BPM = document.createTextNode("BPM: " + melodies.melodies[melody].bpm);
        track_BPM_span.appendChild(track_BPM);
        newBlock.appendChild(track_BPM_span);

        track_key_span = document.createElement("span");
        track_key_span.className = "inventory_track_info inventory_info";
        track_key = document.createTextNode("Key: " + melodies.melodies[melody].key);
        track_key_span.appendChild(track_key);
        newBlock.appendChild(track_key_span);

        document.getElementById("inventory_melody").appendChild(newBlock);
        
        
    }

    for (drum in drums.drums) {
        newBlock = document.createElement("div");
        newBlock.id = drums.drums[drum].name.toLowerCase();
        newBlock.className = "inventory_track_block drum";

        track_title_span = document.createElement("span");
        track_title_span.className = "inventory_track_title inventory_info";
        track_title = document.createTextNode(drums.drums[drum].name);
        track_title_span.appendChild(track_title);
        newBlock.appendChild(track_title_span);

        track_BPM_span = document.createElement("span");
        track_BPM_span.className = "inventory_track_info inventory_info";
        track_BPM = document.createTextNode("BPM: " + drums.drums[drum].bpm);
        track_BPM_span.appendChild(track_BPM);
        newBlock.appendChild(track_BPM_span);

        document.getElementById("inventory_drums").appendChild(newBlock);
    }

    for (counter in counters.counters) {
        newBlock = document.createElement("div");
        newBlock.id = counters.counters[counter].name.toLowerCase();
        newBlock.className = "inventory_track_block counter";

        track_title_span = document.createElement("span");
        track_title_span.className = "inventory_track_title inventory_info";
        track_title = document.createTextNode(counters.counters[counter].name);
        track_title_span.appendChild(track_title);
        newBlock.appendChild(track_title_span);

        track_BPM_span = document.createElement("span");
        track_BPM_span.className = "inventory_track_info inventory_info";
        track_BPM = document.createTextNode("BPM: " + counters.counters[counter].bpm);
        track_BPM_span.appendChild(track_BPM);
        newBlock.appendChild(track_BPM_span);

        track_key_span = document.createElement("span");
        track_key_span.className = "inventory_track_info inventory_info";
        track_key = document.createTextNode("Key: " + counters.counters [counter].key);
        track_key_span.appendChild(track_key);
        newBlock.appendChild(track_key_span);

        document.getElementById("inventory_counter").appendChild(newBlock);
    }

    if (localStorage.getItem("melody_selected") == 1) {
        document.getElementById(localStorage.getItem("current_melody")).style.backgroundColor = "red";
        selected = document.getElementById("selected_melody");
        selected.style.display = "flex";
        selected.childNodes[1].childNodes[0].nodeValue = localStorage.getItem("last_melody_name");
        selected.childNodes[3].childNodes[0].nodeValue = localStorage.getItem("last_melody_bpm");
        selected.childNodes[5].childNodes[0].nodeValue = localStorage.getItem("last_melody_key");
    }
    else {
        localStorage.setItem("current_melody", null);
    }

    if (localStorage.getItem("drums_selected") == 1) {
        document.getElementById(localStorage.getItem("current_drums")).style.backgroundColor = "red";
        selected = document.getElementById("selected_drums");
        selected.style.display = "flex";
        selected.childNodes[1].childNodes[0].nodeValue = localStorage.getItem("last_drums_name");
        selected.childNodes[3].childNodes[0].nodeValue = localStorage.getItem("last_drums_bpm");
    }
    else {
        localStorage.setItem("current_drums", null);
    }

    if (localStorage.getItem("counter_selected") == 1) {
        document.getElementById(localStorage.getItem("current_counter")).style.backgroundColor = "red";
        selected = document.getElementById("selected_counter");
        selected.style.display = "flex";
        selected.childNodes[1].childNodes[0].nodeValue = localStorage.getItem("last_counter_name");
        selected.childNodes[3].childNodes[0].nodeValue = localStorage.getItem("last_counter_bpm");
        selected.childNodes[5].childNodes[0].nodeValue = localStorage.getItem("last_counter_key");
    }
    else {
        localStorage.setItem("current_counter", null);
    }

}

document.addEventListener("DOMContentLoaded", init_blocks, false);