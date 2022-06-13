// Navbar hamburger closing on click

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// Initialize Date
function dateStart (){
    let d=new Date();
    document.getElementById("inputDateStart").valueAsDate=d
}

// Calculate End Date
function dateEnd (){
    let days = document.getElementById("inputDays").value;
    let input = document.getElementById("inputDateStart").value;
    let dateEntered = new Date(input);
    let msec = Date.parse(dateEntered)
    msec += days * 24 * 60 * 60 * 1000
    let dateSubmited = new Date(msec)
    document.getElementById("outputDateEnd").valueAsDate=dateSubmited

}

// Calculate price

function calculatePrice () {
    let room = document.getElementById("inputRoom").value
    let ppl = document.getElementById("inputPeople").value
    let child = document.getElementById("checkChild").checked
    let animal = document.getElementById("checkAnimal").checked
    let elder = document.getElementById("checkElder").checked
    let nights = document.getElementById("inputDays").value
    let fB = document.getElementById("fullBoard").checked
    let aI = document.getElementById("allInclusive").checked
    basicPrice = (room * ppl * nights);
    result = basicPrice;
    console.log(result)
    if (child) {
        result += (basicPrice * 0.15);
    }
    if (animal) {
        result += (basicPrice * 0.10)
    }
    if (elder) {
        result += (basicPrice * 0.50)
    }
    if (fB) {
        result += (basicPrice * 0.25)
    }
    if (aI) {
        result += (basicPrice * 0.50)
    }
    
    document.getElementById("outputPrice").value = result + " Kč"

}

function budget (){
    let price = document.getElementById("outputPrice").value
    let bdg = document.getElementById("inputBudget").value
    if (bdg >= price) {
        document.getElementById("checkBudget").value="Váš rozpočet je dostatečný"
        document.getElementById("checkBudget").style.backgroundColor="lightgreen"
    }
    else {
        document.getElementById("checkBudget").value="Váš rozpočet není dostatečný"
        document.getElementById("checkBudget").style.backgroundColor="lightcoral"
    }
}

// No special symbols at comment section
$("#inputComment").keypress(function(event){
    var znak = event.which;
    if(znak == 32)
        return true;
    if(48 <= znak && znak <= 57)
        return true;
    if(65 <= znak && znak <= 90)
        return true;
    if(97 <= znak && znak <= 122)
        return true;
    return false;
});
