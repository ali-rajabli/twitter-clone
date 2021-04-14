var input= document.getElementById('floatingInput')

var inputValue1 = input.value






input.oninput = function () {
    if(inputValue1 !== null) {
        document.getElementById('btn-disable').classList.remove('disabled')
        document.getElementById('btn-disable').classList.add('active')

    } 
}

