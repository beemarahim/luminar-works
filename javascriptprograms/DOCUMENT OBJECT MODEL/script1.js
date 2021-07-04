function chkSlot() {
    let ag = document.querySelector("#age").value

    
    if (ag < 18) {
        result.innerHTML = `<h2 style="color:red">not eligible</h2>`
    }
    else {
        result.innerHTML = `<h2 style="color:green">eligible</h2>`
    }
}
