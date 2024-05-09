console.log('El archivo JavaScript está funcionando.');

// ====== Events ======
document.getElementById('number0').addEventListener('click', () => addCharacter(0));
document.getElementById('number1').addEventListener('click', () => addCharacter(1));
document.getElementById('number2').addEventListener('click', () => addCharacter(2));
document.getElementById('number3').addEventListener('click', () => addCharacter(3));
document.getElementById('number4').addEventListener('click', () => addCharacter(4));
document.getElementById('number5').addEventListener('click', () => addCharacter(5));
document.getElementById('number6').addEventListener('click', () => addCharacter(6));
document.getElementById('number7').addEventListener('click', () => addCharacter(7));
document.getElementById('number8').addEventListener('click', () => addCharacter(8));
document.getElementById('number9').addEventListener('click', () => addCharacter(9));

document.getElementById('point').addEventListener('click', () => addCharacter('.'));
document.getElementById('openPar').addEventListener('click', () => addCharacter('('));
document.getElementById('closePar').addEventListener('click', () => addCharacter(')'));
document.getElementById('div').addEventListener('click', () => addCharacter('/'));
document.getElementById('multip').addEventListener('click', () => addCharacter('*'));
document.getElementById('minor').addEventListener('click', () => addCharacter('-'));
document.getElementById('plus').addEventListener('click', () => addCharacter('+'));

document.getElementById('delAll').addEventListener('click', delAll);
document.getElementById('del').addEventListener('click', del);

document.getElementById('equal').addEventListener('click', evalResult);

// ====== Functions ======
let inputResult = document.getElementById('result');
let functionSwitch = true;

// Add character
function addCharacter(character) {
    if (functionSwitch) {
        inputResult.value == '0' && character != '.' ? inputResult.value = '' : '';
        inputResult.value == 'ERROR' ? inputResult.value = '' : '';
        inputResult.value += character;
    }
}

// Delete
function delAll() {
    if (functionSwitch) {
        inputResult.value = '';
        noNumber();
    }
}

function del() {
    if (functionSwitch) {
        inputResult.value = inputResult.value.slice(0, -1);
        noNumber();
    }
}

function noNumber() {
    inputResult.value.length === 0 ? inputResult.value = 0 : '';
}

// Operation (Equal)
function evalResult() {
    if (functionSwitch) {
        try {
            let operationResult = eval(inputResult.value);
            inputResult.value = operationResult;
        }
        catch (error) {
            functionSwitch = false;
            inputResult.value = 'SYNTAX ERROR';
            console.log('Error Detected:', error);
            setTimeout(function() {
                functionSwitch = true;
                inputResult.value = 0;
            }, 1000);
        }
    }
}