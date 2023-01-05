let body = document.querySelector("body")
let elems = document.querySelectorAll("a, p, h1,h2,h3")
let lightOn = true


/**
 * inline style wird geändert auf white für alle schriften
 * background wird auf schwarz gesetzt
 * um zurück zum voherigen css zu kommen, wird inlineStyle mitremoveProperty zurückgesetzt
 */
function toggleLight() {
    
    if (lightOn) {
        
        elems.forEach(elem => {
            elem.style.color = "white"
            //elem.style.removeProperty("color")
        })
        body.style.backgroundColor = "black"
    }else {
        elems.forEach(elem => {
            elem.style.removeProperty("color")
        })
        body.style.backgroundColor = "white"

    }
    lightOn = !lightOn
    
}



