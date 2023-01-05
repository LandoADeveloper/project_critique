let body = document.querySelector("body")


let elems = document.querySelectorAll("a, p, h1,h2,h3")
let lightOn = true

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



