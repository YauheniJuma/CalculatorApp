let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear-btn'),
    resultBtn = document.getElementById('result'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = '0',
    MemoryNewNumber = false,
    MemoryPendingOperation = '',
    operationsList = document.getElementById('operationsList');


for (let i=0; i<numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
};

for (let i=0; i<operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
};

for (let i=0; i<clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    });
};


decimalBtn.addEventListener('click', decimal);
resultBtn.addEventListener('click', result);


function numberPress(number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };
    
};

function operation(operationOp) {
    let localOperationMemory = display.value;


    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        };

        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = operationOp;
    }
};

function decimal(argument) {
    let localDecimalMemory = display.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        };   
    };

    display.value = localDecimalMemory;
};


function clear(id) {
    if (id === 'ce')  {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    };
}; 

