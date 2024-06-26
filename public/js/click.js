
function switchDisplay(div) {
    if (window.getComputedStyle(div, null).getPropertyValue("display") == "flex") {
        div.style.display = "none"
    }
    else {
        div.style.display = "flex";
    }
}

function select_block(track_info, category) {
    block = document.getElementById("selected_" + category);

    children = block.childNodes;

    children[1].childNodes[0].nodeValue = track_info.name;
    children[3].childNodes[0].nodeValue = track_info.bpm;
    if (category == "melody" || category == "counter") {
        children[5].childNodes[0].nodeValue = track_info.key;
    }

}

function click_event(event) {

    let track_category;
    let track_info = { "name": null, "bpm": null, "key": null };

    let div;
    if (event.target.classList[0] == "inventory_track_block") {
        div = event.target;
        track_category = event.target.parentElement.id.split("_")[1];

        children = event.target.childNodes;

        track_info.name = children[0].childNodes[0].nodeValue;
        localStorage.setItem("last_" + track_category + "_name", track_info.name);
        track_info.bpm = children[1].childNodes[0].nodeValue;
        localStorage.setItem("last_" + track_category + "_bpm", track_info.bpm);
        if (track_category == "melody" || track_category == "counter") {
            track_info.key = children[2].childNodes[0].nodeValue;
            localStorage.setItem("last_" + track_category + "_key", track_info.key);
        }

    }
    else if (event.target.classList[1] == "inventory_info") {
        div = event.target.parentElement;
        track_category = event.target.parentElement.parentElement.id.split("_")[1];

        children = event.target.parentElement.childNodes;

        track_info.name = children[0].childNodes[0].nodeValue;
        localStorage.setItem("last_" + track_category + "_name", track_info.name);
        track_info.bpm = children[1].childNodes[0].nodeValue;
        localStorage.setItem("last_" + track_category + "_bpm", track_info.bpm);
        if (track_category == "melody" || track_category == "counter") {
            track_info.key = children[2].childNodes[0].nodeValue;
            localStorage.setItem("last_" + track_category + "_key", track_info.key);
        }
    }
    else {
        return;
    }

    if (track_category == undefined) {
        return;
    }

    localStorage_id = "current_" + track_category;

    timeline_block = "selected_" + track_category;

    console.log(localStorage.getItem(localStorage_id));
    if (localStorage.getItem(localStorage_id) == "null") {
        div.style.backgroundColor = "red";
        localStorage.setItem(track_category + "_selected", 1);
        localStorage.setItem(localStorage_id, div.id);
        select_block(track_info, track_category);
        document.getElementById(timeline_block).style.display = "flex";
    }
    else if (div == document.getElementById(localStorage.getItem(localStorage_id))) {
        if (localStorage.getItem(track_category + "_selected")) {
            document.getElementById(timeline_block).style.display = "none";
            localStorage.setItem(track_category + "_selected", 0);
            div.style.backgroundColor = "#4f4f4f";
            localStorage.setItem(localStorage_id, "null");
        }
        else {
            localStorage.setItem(track_category + "_selected", 1);
            div.style.backgroundColor = "red";
            localStorage.setItem(localStorage_id, "div");
            select_block(track_info, track_category);
        }
    }
    else if(div.classList[1] == document.getElementById(localStorage.getItem(localStorage_id)).classList[1]){
        div.style.backgroundColor = "red";
        document.getElementById(localStorage.getItem(localStorage_id)).style.backgroundColor = "#4f4f4f";
        select_block(track_info, track_category);
        localStorage.setItem(localStorage_id, div.id);
    }

}

document.addEventListener("click", click_event, false);