var app = document.getElementsByTagName("BODY")[0]
if(localStorage.lightMode == "light"){
    app.setAttribute("light-mode", "light")
}
window.addEventListener('load',function(){
    if(localStorage.lightMode == "light"){
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = e.tagName[1]?'black':'green')
        document.getElementById("theToggle").innerHTML = "Dark mode"
        document.getElementById("theToggle").ariaLabel = "Toggle dark mode"
    }else if(localStorage.lightMode == "dark"){
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = e.tagName[1] ? 'white' : 'pink')
    } else if(localStorage.lightMode == undefined){
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = e.tagName[1] ? 'white' : 'pink')
    }
})
function toggle_light_mode(){
    var app = document.getElementsByTagName("BODY")[0]
    if (localStorage.lightMode == "light"){
        localStorage.lightMode = "dark"
        app.setAttribute("light-mode", "dark");
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = e.tagName[1] ? 'white' : 'pink')
        document.getElementById("theToggle").innerHTML = "Light mode"
        document.getElementById("theToggle").ariaLabel = "Toggle light mode"
    }else{
        localStorage.lightMode = "light"
        app.setAttribute("light-mode", "light");
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = e.tagName[1] ? 'black' : 'green')
        document.getElementById("theToggle").innerHTML = "Dark mode"
        document.getElementById("theToggle").ariaLabel = "Toggle dark mode"
    }
}
window.addEventListener("storage",function(){
    if(localStorage.lightMode == "dark"){
        app.setAttribute("light-mode", "dark");
    }
    else{
        app.setAttribute("light-mode", "light")
    }
}, false)
//
