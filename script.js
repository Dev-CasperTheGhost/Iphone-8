let homeBtn = document.getElementById("homeBtn")
let phoneBackground = document.getElementById("phone")
let appsBackground = document.getElementById("apps")
let bottomApps = document.getElementById("apps-b")
let slider = document.getElementById("slider")
let battery = document.getElementById("battery")
let provider = document.getElementById("provider");
let time = document.getElementById("time")
let d = new Date()

// Apps 
let facetime = document.getElementById("facetime")
let calender = document.getElementById("calender")
let photos = document.getElementById("photos")
let call = document.getElementById("call")

setInterval(() => {
    const CurrentTime = `${
        d.getHours() < 10 ? "0" : ""
        }${d.getHours()}:${
        d.getMinutes() < 10 ? "0" : ""
        }${d.getMinutes()}`;
    document.getElementById("time").innerHTML = CurrentTime;
    // document.getElementById("big-timer").innerHTML = CurrentTime
}, 10);

function button() {
    document.getElementById("apps-b").style.display = "grid"
    appsBackground.style.display = "grid"
    slider.style.display = "none"
}

function homeButton() {
    facetime.style.display = "none"
    calender.style.display = "none"
    photos.style.display = "none"
    // facetime.style.display = "none"
    // facetime.style.display = "none"
    phoneBackground.style.background = "url('./images/wallpaper.png')"
    phoneBackground.style.backgroundSize = "cover"
    slider.style.display = "block"
    time.style.display = "block"
    provider.style.display = "block"
    battery.style.display = "block"


    homeBtn.addEventListener("click", button)
}

function openApp(appName) {
    if (!appName) {
        return alert("app doesn't exist yet!")
    } else {
        appsBackground.style.display = "none";
        bottomApps.style.display = "none";
        phoneBackground.style.background = "none";
        phoneBackground.style.backgroundColor = "rgba(0,0,0,0.4)"
    }

    if (appName == "facetime") {
        facetime.style.display = "block"
    } else if (appName == "calender") {
        calender.style.display = "block"
    } else if (appName == "photos") {
        photos.style.display = "block"
    } else if (appName == "call") {
        call.style.display = "block"
        document.getElementById("recents").style.display = "block"
        document.getElementById("call-title").style.display = "block"
    }
}


function off() {
    facetime.style.display = "none"
    calender.style.display = "none"
    photos.style.display = "none"
    slider.style.display = "none"
    time.style.display = "none"
    provider.style.display = "none"
    battery.style.display = "none"
    homeBtn.removeEventListener("click", button, false)
    appsBackground.style.display = "none";
    bottomApps.style.display = "none";
    phoneBackground.style.background = "none";
    phoneBackground.style.backgroundColor = "rgba(0,0,0,0.9)"
}