speel()

function speel() {
    let itemIndex = Math.floor(Math.random()*3)
    let lijstItems = ["Steen" ,"Papier" ,"Schaar" ]
    const txtField=document.getElementById("txtField")
    txtField.textContent = lijstItems[itemIndex]
    
}
