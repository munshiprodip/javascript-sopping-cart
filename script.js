// Add event litener to all button
document.getElementById('btnPlus').addEventListener('click', ()=>{
    updatePhoneQuantity(1)
})

document.getElementById('btnMinus').addEventListener('click', ()=>{
    updatePhoneQuantity(-1)
})

document.getElementById('removePhone').addEventListener('click', function(){
    removePhone(this)
})

document.getElementById('btnPlusCase').addEventListener('click', ()=>{
    updateCaseQuantity(1)
})

document.getElementById('btnMinusCase').addEventListener('click', ()=>{
    updateCaseQuantity(-1)
})

document.getElementById('removeCase').addEventListener('click', function(){
    removePhone(this)
})


let removePhone = (x) =>{
    x.parentElement.parentElement.parentElement.style.display="none"
}

// function for phone quantity update
let updatePhoneQuantity = (quantity) => {
    const phonePrice = 1219
    let phoneQuantity = getValueToInt('phoneQuantity')
    phoneQuantity = phoneQuantity + quantity
    if(phoneQuantity > 0){
        let totalPhonePrice = phoneQuantity * phonePrice
        setValue('phoneQuantity', phoneQuantity)
        setText('totalPhonePrice', totalPhonePrice)
        updateTotalPrice(quantity*phonePrice)
    }else{
        alert("Minium product quantity 1, if you want to remove this item click 'X' button")
    }
    
}

// function for case quantity update
let updateCaseQuantity = (quantity) => {
    const casePrice = 59
    let caseQuantity = getValueToInt('caseQuantity')
    caseQuantity = caseQuantity + quantity
    if(caseQuantity > 0){
        let totalCasePrice = caseQuantity * casePrice
        setValue('caseQuantity', caseQuantity)
        setText('totalCasePrice', totalCasePrice)
        updateTotalPrice(quantity*casePrice)
    }else{
        alert("Minium product quantity 1, if you want to remove this item click 'X' button")
    }
}

// function for total price update
let updateTotalPrice = (price) => {
    let subTotal = getTextToFloat('subTotal')
    subTotal = subTotal + price
    setText('subTotal', subTotal)
    setText('total', subTotal)
}

// function get input value to integer 
let getValueToInt = (id) =>{
    return parseInt(document.getElementById(id).value)
}

// function get html text to integer
let getTextToFloat = (id) =>{
    return parseFloat(document.getElementById(id).innerText)
}

// function set input value
let setValue = (id, value) =>{
    document.getElementById(id).value = value
}

// function set html text
let setText = (id, value) =>{
    document.getElementById(id).innerText = value
}


