function randomNum (){
    let randomNumber = (Math.floor(Math.random() * 10000)).toString();
    
    if(randomNum.length == 5){
        randomNumber = randomNumber.substring(0,4);
    }
    else{
        if(randomNumber.length == 3){
            randomNumber = '0' + randomNumber;
            return randomNumber;
        }
        else if(randomNumber.length == 2){
            randomNumber = '00' + randomNumber;
            return randomNumber;
        }
        else if(randomNumber.length == 1){
            randomNumber = '000' + randomNumber;
            return randomNumber;
        }
        else{
            return randomNumber;
        }
    }
}

let pinGenerator = document.getElementById('get-pin');
    pinGenerator.addEventListener('click',function(){
        const pin = randomNum();
        const displayPin = document.getElementById('display-generate-pin');
        displayPin.value = pin;
});

let inputPin = document.getElementById('input-pin')
    inputPin.addEventListener('click', function (event) {
            const number = event.target.innerText;
            const displayPin = document.getElementById('display-user-pin');
            const previousTypedNumber = displayPin.value;
            if(isNaN(number)){
                if(number === 'C'){
                    displayPin.value = '';
                }
                else if (number === '←'){
                    const digits = previousTypedNumber.split('');
                    digits.pop();
                    const remainingDigits = digits.join('');
                    displayPin.value = remainingDigits;
                }
            }
            else{
                const newTypedNumber = previousTypedNumber + number;
                displayPin.value = newTypedNumber;
            }

    });