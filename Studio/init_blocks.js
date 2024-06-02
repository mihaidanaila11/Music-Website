function init_blocks() {
    var melodies = {
        "melodies": [
            { "name": "Melody1", "bpm": 140, "key": "Cmaj" },
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

    var percs = {
        "percs": [
            { "name": "Percs1", "bpm": 140},
            { "name": "Percs2", "bpm": 70}
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

    for (perc in percs.percs) {
        newBlock = document.createElement("div");
        newBlock.id = percs.percs[perc].name.toLowerCase();
        newBlock.className = "inventory_track_block perc";

        track_title_span = document.createElement("span");
        track_title_span.className = "inventory_track_title inventory_info";
        track_title = document.createTextNode(percs.percs[perc].name);
        track_title_span.appendChild(track_title);
        newBlock.appendChild(track_title_span);

        track_BPM_span = document.createElement("span");
        track_BPM_span.className = "inventory_track_info inventory_info";
        track_BPM = document.createTextNode("BPM: " + percs.percs[perc].bpm);
        track_BPM_span.appendChild(track_BPM);
        newBlock.appendChild(track_BPM_span);

        document.getElementById("inventory_percs").appendChild(newBlock);
    }
}

document.addEventListener("DOMContentLoaded", init_blocks, false);
localStorage.setItem("current_melody", null);
localStorage.setItem("current_drums", null);
localStorage.setItem("current_percs", null);