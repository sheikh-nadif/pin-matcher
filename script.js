
function clearPin (){
    let generatedPin = document.getElementById('display-generate-pin');
    let userPin = document.getElementById('display-user-pin');
   
    generatedPin.value = "";
    userPin.value = "";

    return 0;
}
function clearNotiification (){
    document.getElementById('match'); // ✅
    document.getElementById('unmatch'); // ❌
   
    match.style.display = 'none';
    unmatch.style.display = 'none';
    submitCounter = 3;

    return 0;
}
function resetCount (){
    let count = document.getElementById('count');

    submitCounter = 3;
    count.innerHTML = submitCounter;

    return 0;
}

function randomNum (){
    let randomNumber = (Math.floor(Math.random() * 10000)).toString();
    
    if(randomNum.length == 5){
        randomNumber = randomNumber.substring(0,4);
        clearPin();
        clearNotiification();
        resetCount();
    }
    else{
        if(randomNumber.length == 3){
            randomNumber = '0' + randomNumber;
            clearPin();
            clearNotiification();
            resetCount();
            return randomNumber;
        }
        else if(randomNumber.length == 2){
            randomNumber = '00' + randomNumber;
            clearPin();
            clearNotiification();
            resetCount();
            return randomNumber;
        }
        else if(randomNumber.length == 1){
            randomNumber = '000' + randomNumber;
            clearPin();
            clearNotiification();
            resetCount();
            return randomNumber;
        }
        else{
            clearPin();
            clearNotiification();
            resetCount();
            return randomNumber;
        }
    }
}
// GEnerate Random Pin
let pinGenerator = document.getElementById('get-pin');
    pinGenerator.addEventListener('click',function(){
        const pin = randomNum();
        const displayPin = document.getElementById('display-generate-pin');
        displayPin.value = pin;
});
// Input User Pin
let inputPin = document.getElementById('input-pin');
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
// Submit User Pin
let submitCounter = 3;
let submitPin =  document.getElementById('submit');
    submitPin.addEventListener('click', function(){
    let generatedPin = document.getElementById('display-generate-pin');
    let userPin = document.getElementById('display-user-pin');

    document.getElementById('match'); // ✅
    document.getElementById('unmatch'); // ❌

    let count = document.getElementById('count');

        if(submitCounter >= 1){
            if(generatedPin.value === userPin.value){
                match.style.display = 'block';
                unmatch.style.display = 'none';
                clearPin();
                resetCount();
            }
            else{
                match.style.display = 'none';
                unmatch.style.display = 'block';
                submitCounter--;
                count.innerHTML = submitCounter;
            }
        }
        // in case alert is not needed, can use this to access alternative html block
        // else{
        //     const tryBlock = document.getElementById('try-block');
        //           tryBlock.classList.toggle('try-block-hide');
        
        //     const tryBtn = document.getElementById('try-btn');
        //           tryBtn.addEventListener('click', function(){
        //             clearPin();
        //             clearNotiification();
        //             resetCount();
        //             tryBlock.classList.toggle('try-block-hide');
        //           });
        // }
        else{
            if(confirm("You have 0 try left, Try again!")){
                clearPin();
                clearNotiification();
                resetCount();
            }
        }
    });