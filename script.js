// function for incrase or decrase product quantity
let updateProductQuantity = (productName, quantity) => {
    const productPrice = (productName=="phone")? 1219 : 59
    
    let productQuantity = getValueToInt(productName + 'Quantity')
    productQuantity = productQuantity + quantity
    if(productQuantity > 0){
        let totalProductPrice = productQuantity * productPrice
        setValue(productName + 'Quantity', productQuantity)
        setText(productName + 'TotalPrice', totalProductPrice)
        updateTotalPrice()
    }else{
        alert("Minium product quantity 1, if you want to remove this item click 'X' button")
    }
}

// function to update total price
let updateTotalPrice = () => {
    let phonePrice = getValueToInt('phoneQuantity')*1219
    let casePrice = getValueToInt('caseQuantity')*59
    let subTotal = phonePrice + casePrice
    setText('subTotal', subTotal)
    setText('total', subTotal)
}

// function to remove item from cart 
let removeItem = (productName) =>{
    setValue(productName + 'Quantity', 0)
    document.querySelector('.'+productName).style.display="none"
    updateTotalPrice()
}

// function to get input field value to integer 
let getValueToInt = (id) =>{
    return parseInt(document.getElementById(id).value)
}

// function to get html text to integer
let getTextToFloat = (id) =>{
    return parseFloat(document.getElementById(id).innerText)
}

// function to set input field value
let setValue = (id, value) =>{
    document.getElementById(id).value = value
}

// function to set text in html element
let setText = (id, value) =>{
    document.getElementById(id).innerText = value
}


