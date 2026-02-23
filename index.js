// Declare our variables

const tabLinks = document.querySelectorAll('.tablink')
const tabContents = document.querySelectorAll('.tab_content')
const taskRadios = document.querySelectorAll('input[name="task"]')
const task38Radios = document.querySelectorAll('input[name="task38"]')
const inputModal = document.getElementById('input_overlay')
const resultContainer = document.getElementById('result_container')
const resultModal = document.getElementById('result_overlay')
const inputContainer = document.getElementById('input_container')
const counterModal = document.getElementById('counter_overlay')
const counterContainer = document.getElementById('counter_container')
const counterText = document.getElementById('counter_text')
const incrementBtn = document.getElementById('counterIncrementBtn')
const decrementBtn = document.getElementById('counterDecrementBtn')
const closeInputBtn = document.getElementById('closeInputBtn')
const closeResultBtn = document.getElementById('closeResultBtn')
const closeCounterBtn = document.getElementById('closeCounterBtn')
const inputField = document.getElementById('inputContainer')
const submitBtn = document.getElementById('submitBtn')
const resultText = document.getElementById('result_text')

// New modal elements for Phase 5
const charCounterOverlay = document.getElementById('charCounter_overlay')
const charCounterInput = document.getElementById('charCounterInput')
const charCountDisplay = document.getElementById('charCount')
const closeCharCounterBtn = document.getElementById('closeCharCounterBtn')

const todoAppOverlay = document.getElementById('todoApp_overlay')
const todoInput = document.getElementById('todoInput')
const addTodoBtn = document.getElementById('addTodoBtn')
const todoList = document.getElementById('todoList')
const closeTodoBtn = document.getElementById('closeTodoBtn')

const modalPopupOverlay = document.getElementById('modalPopup_overlay')
const popupTitle = document.getElementById('popupTitle')
const popupMessage = document.getElementById('popupMessage')
const closePopupBtn = document.getElementById('closePopupBtn')

const validateFormOverlay = document.getElementById('validateForm_overlay')
const validateEmail = document.getElementById('validateEmail')
const validatePassword = document.getElementById('validatePassword')
const validatePhone = document.getElementById('validatePhone')
const validateFormBtn = document.getElementById('validateFormBtn')
const validationResult = document.getElementById('validationResult')
const closeFormBtn = document.getElementById('closeFormBtn')

// Initialize counter variable
window.count = 0;
window.todos = [];


// Loop through each Tab
// Switch Active Tabs and it's contents

tabLinks.forEach((links) =>{

    links.addEventListener('click', () => {
        const targetId = links.dataset.tab;

        tabLinks.forEach(l => {
            l.classList.remove('is-active')
        });

        tabContents.forEach(c => {
            c.classList.remove('content-active')
            c.style.display = 'none';
        });


         links.classList.add('is-active');

        const activeContent = document.getElementById(targetId);

        if (activeContent) {
            activeContent.classList.add('content-active');
            activeContent.style.display = 'flex';
        }

    });

});


// Reset Radio Buttons

function resetRadios() {
    taskRadios.forEach((radio) => { radio.checked = false; });
    task38Radios.forEach((radio) => { radio.checked = false; });

    
}


// Close button

closeInputBtn.addEventListener('click', () => {
    const closeModal = document.getElementById('input_overlay');
    if(closeModal){
        closeModal.style.display = 'none'
        counterModal.style.display = 'none';
        resetRadios();
        inputField.value = '';
    }
});


// Radio Button Calling Modal

taskRadios.forEach((radio) => {

    radio.addEventListener('change', () => {
        if(radio.checked) {
            inputModal.style.display =  'flex';
        }
    });

});

// Phase 5 radios open their modals directly
task38Radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (!radio.checked) return;
        switch (radio.value) {
            case 'clickCounter':
                tasks.clickCounter();
                break;
            case 'charCounter':
                tasks.charCounter('');
                break;
            case 'toDoApp':
                tasks.toDoApp();
                break;
            case 'modalPopUp':
                tasks.modalPopUp('Notification', 'This is a popup message.');
                break;
            case 'validateForm':
                tasks.validateForm();
                break;
            default:
                break;
        }
    });
});


// Task Mapping Object

const tasks = {

    // Phase 1 Tasks

    ageChecker: (age) => {
        if(age < 18) {
            return 'You are a Minor.';
        } else if (age >= 18 && age < 65) {
            return 'You are an Adult.';
        } else {
            return 'You are a Senior.';
        }
    },

    passwordChecker: (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < 8) {
            return 'Password must be at least 8 characters long.';
        } else if (!hasUpperCase) {
            return 'Password must contain at least one uppercase letter.';
        } else if (!hasLowerCase) {
            return 'Password must contain at least one lowercase letter.';
        } else if (!hasDigit) {
            return 'Password must contain at least one digit.';
        } else if (!hasSpecialChar) {
            return 'Password must contain at least one special character.';
        } else {
            return 'Password is strong.';
        };
    },

    userNameFormatter: (username) => {
        username = username.trim();
        if (username.length === 0) {
            return 'Username cannot be empty.';
        } 
        
        if (username.length < 3) {
        return 'Username must be at least 3 characters long.';
        }

        const formatted = username.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

        return `Formatted Username: ${formatted}`;
        
    },

    tempConverter: (tempC) => {
        if (isNaN(tempC)) {
            return 'Please enter a valid number for temperature.';
        }
        const tempF = (tempC * 9/5) + 32;
        return `Temperature in Fahrenheit: ${tempF.toFixed(2)}°F`;
    },

    gradeCalculator: (score) => {
        if (score < 0 || score > 100) {
            return 'Score must be between 0 and 100.';
        } else if (score >= 70) {
            return 'Grade: A';
        } else if (score >= 60) {
            return 'Grade: B';
        } else if (score >= 50) {
            return 'Grade: C';
        } else if (score >= 45) {
            return 'Grade: D';
        } else if (score >= 40) {
            return 'Grade: E';
        } else {
            return 'Grade: F';
        }
    
    },

    discountCalculator: (price, discount) => {
        if (isNaN(price) || isNaN(discount)) {
            return 'Please enter valid numbers for price and discount.';
        }
        if (discount < 0 || discount > 100) {
            return 'Discount must be between 0 and 100.';
        }
        const discountedPrice = price - (price * (discount / 100));
        return `Discounted Price: $${discountedPrice.toFixed(2)}`;
    },

    messageGenerator: (name) => {
        
        const cleanName = name.trim();

        if (cleanName.length === 0) return "Please enter a name.";
        if (cleanName.length < 3) return "Name must be at least 3 characters long.";

        const formattedName = cleanName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

        return `Hello, ${formattedName}! Welcome to our website.`;

    },

    loginSimulator: (username, password) => {
        const validUsername = "user123";
        const validPassword = "Passw0rd!";

        if (username === validUsername && password === validPassword) {
            return "Login successful! Welcome back.";
        } else {
            return "Login failed. Invalid username or password.";
        }
    },

    vowelCounter: (text) => {
        const vowels = text.match(/[aeiouAEIOU]/g);
        const count = vowels ? vowels.length : 0;
        return `Number of vowels: ${count}`;
    },

    numIdentifier: (input) => {
        
        const numbers = input.split(/[\s,]+/).filter(val => val.trim() !== '');
        
        if (numbers.length === 0) {
            return 'Please enter at least one number.';
        }
        
        const evenNumbers = [];
        const oddNumbers = [];
        const invalidNumbers = [];
        
        numbers.forEach(numStr => {
            const num = parseFloat(numStr.trim());
            
            if (isNaN(num)) {
                invalidNumbers.push(numStr.trim());
            } else if (num < 0) {
                invalidNumbers.push(`${num} (Negative)`);
            } else if (num % 2 === 0) {
                evenNumbers.push(num);
            } else {
                oddNumbers.push(num);
            }
        });
        
        let result = '';
        
        if (invalidNumbers.length > 0) {
            result += `Invalid: ${invalidNumbers.join(', ')}. `;
        }
        
        if (evenNumbers.length > 0) {
            result += `Even: ${evenNumbers.join(', ')}. `;
        }
        
        if (oddNumbers.length > 0) {
            result += `Odd: ${oddNumbers.join(', ')}.`;
        }
        
        return result.trim() || 'Please enter valid numbers.';
    },

    // Phase 2 Tasks

    calcFunctions: (num1, num2, operator) => {
    
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

        
        if (isNaN(n1) || isNaN(n2)) {
            return "Error: Please enter valid numbers.";
        }

        switch (operator) {
            case '+':
                return n1 + n2;
            case '-':
                return n1 - n2;
            case '*':
                return n1 * n2;
            case '/':
                
                return n2 === 0 ? "Error: Cannot divide by zero." : n1 / n2;
            default:
                return "Error: Invalid operator. Use +, -, *, or /.";
        }
    },

    minMaxNumbers: (n1, n2, n3, n4, n5) => {
        const numbers = [n1, n2, n3, n4, n5];
        const min = Math.min(...numbers);
        const max = Math.max(...numbers);
        return `Minimum: ${min}, Maximum: ${max}`;
    },

    factCalculators: (num) => {
        if (isNaN(num) || num < 0) {
            return 'Please enter a valid non-negative number.';
        }
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        return `Factorial of ${num} is ${factorial}.`;
    },

    revStringFunctions: (str) => {
        if (typeof str !== 'string' || str.trim() === '') {
            return 'Please enter a valid non-empty string.';
        }
        const reversed = str.split('').reverse().join('');
        
        return `Reversed String: ${reversed}`;
    },

    intCalculator: (principal, rate, time) => {
        if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
            return 'Please enter valid numbers for principal, rate, and time.';
        }
        const interest = (principal * rate * time) / 100;
        return `Calculated Interest: ₦${interest.toFixed(2)}`;
    },

    bmiCalculator: (weight, height) => {
        if (isNaN(weight) || isNaN(height) || height <= 0) {
            return 'Please enter valid numbers for weight and height.';
        }
        const bmi = weight / ((height / 100) ** 2);
        let category;

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        return `Your BMI is ${bmi.toFixed(2)} (${category}).`;
    },

    leapYearChecker: (year) => {
        if (isNaN(year) || year < 0) {
            return 'Please enter a valid non-negative number for the year.';
        }
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return `${year} is a Leap Year.`;
        } else {
            return `${year} is not a Leap Year.`;
        }
    },

    eliChecker: (age) => {
        
        const numAge = parseInt(age)
        if (isNaN(numAge) || numAge < 0) {
            return 'Please enter a valid non-negative number for age.';
        }
        return numAge >= 18 ? 'You are eligible to vote.' : 'You are not eligible to vote.';
    },

    // Phase 3 Tasks

    sumNumbers: (numbers) => {

        const nums = numbers.split(' ').map(n => n.trim()).filter(n => n !== '').map(Number);

        if (nums.length === 0 || nums.some(isNaN)) {
            return 'Please enter numbers separated by spaces (e.g., 1 2 3).';
        }
        const sum = nums.reduce((acc, num) => acc + num, 0);
        return `The sum of the numbers is: ${sum}`;
    },

    largeArray: (numbers) => {

        const nums = numbers.split(' ').map(n => n.trim()).filter(n => n !== '').map(Number);

        if (nums.length === 0 || nums.some(isNaN)) {
            return 'Please enter numbers separated by spaces (e.g., 1 2 3).';
        }
        const largest = Math.max(...nums);
        return `The largest number is: ${largest}`;
    },

    dupArrays: (numbers) => {

        const nums = numbers.split(' ').map(n => n.trim()).filter(n => n !== '').map(Number);

        if (nums.length === 0 || nums.some(isNaN)) {
            return 'Please enter numbers separated by spaces (e.g., 1 2 3).';
        }
        const uniqueNums = [...new Set(nums)];
        return `Unique numbers: ${uniqueNums.join(', ')}`;
    },

    ascDescOrder: (numbers) => {

        const nums = numbers.split(' ').map(n => n.trim()).filter(n => n !== '').map(Number);

        if (nums.length === 0 || nums.some(isNaN)) {
            return 'Please enter numbers separated by spaces (e.g., 1 2 3).';
        }
        const ascOrder = [...nums].sort((a, b) => a - b);
        const descOrder = [...nums].sort((a, b) => b - a);
        return `Ascending Order: ${ascOrder.join(', ')} | Descending Order: ${descOrder.join(', ')}`;
    },
    
    valueArrays: (numbers) => {

        const nums = numbers.split(' ').map(n => n.trim()).filter(n => n !== '').map(Number);

        if (nums.length === 0 || nums.some(isNaN)) {
            return 'Please enter numbers separated by spaces (e.g., 1 2 3).';
        }
        const sum = nums.reduce((acc, num) => acc + num, 0);
        const average = sum / nums.length;
        return `The average score is: ${average.toFixed(2)}`;
    },

    scoreCalculator: (scores) => {

        const nums = scores.split(' ').map(n => n.trim()).filter(n => n !== '').map(Number);

        if (nums.length === 0 || nums.some(isNaN)) {
            return 'Please enter scores separated by spaces (e.g., 85 90 78).';
        }
        const sum = nums.reduce((acc, num) => acc + num, 0);
        const average = sum / nums.length;
        return `The average score is: ${average.toFixed(2)}`;
    },

    evenNumbers: (numbers) => {

        const nums = numbers.split(' ').map(n => n.trim()).filter(n => n !== '').map(Number);

        if (nums.length === 0 || nums.some(isNaN)) {
            return 'Please enter numbers separated by spaces (e.g., 1 2 3).';
        }
        const evenNums = nums.filter(num => num % 2 === 0);
        return `Even numbers: ${evenNums.join(', ')}`;
    },

    twoArrays: (array1, array2) => {

        const arr1 = array1.split(' ').map(n => n.trim()).filter(n => n !== '').map(Number);
        const arr2 = array2.split(' ').map(n => n.trim()).filter(n => n !== '').map(Number);

        if (arr1.length === 0 || arr2.length === 0 || arr1.some(isNaN) || arr2.some(isNaN)) {
            return 'Please enter valid numbers for both arrays separated by spaces (e.g., 1 2 3).';
        }
        const mergedArray = [...new Set([...arr1, ...arr2])];
        return `Merged Array without duplicates: ${mergedArray.join(', ')}`;
    },

    // Phase 4 Tasks

    ageGrade: (name, age, grade) => {

        const numAge = parseInt(age);
        const numGrade = parseFloat(grade);

        if (typeof name !== 'string' || name.trim() === '') {
            return 'Please enter a valid name.';
        }
        if (isNaN(numAge) || numAge < 0) {
            return 'Please enter a valid non-negative number for age.';
        }
        if (isNaN(numGrade) || numGrade < 0 || numGrade > 100) {
            return 'Please enter a valid grade between 0 and 100.';
        }

        const student = {
            name: name.trim(),
            age: numAge,
            grade: numGrade
        };

        return `Student Object: ${JSON.stringify(student)}`;
    },

    keyObject: (obj, key) => {

        let parsedObj;
        try {
            parsedObj = JSON.parse(obj);
        } catch (e) {
            return 'Please enter a valid JSON object.';
        }

        if (typeof parsedObj !== 'object' || parsedObj === null) {
            return 'Please enter a valid JSON object.';
        }

        if (key in parsedObj) {
            return `Value of the key "${key}": ${parsedObj[key]}`;
        } else {
            return `Key "${key}" does not exist in the object.`;
        }
    },

    contactBook: (name, phone) => {

        const contact = {
            name: name.trim(),
            phone: phone.trim()
        };

        return `Contact Object: ${JSON.stringify(contact)}`;
    },

    calTotalPrice: (item, price, quantity) => {

        const totalPrice = price * quantity;

        const product = {
            item: item.trim(),
            price: price,
            quantity: quantity,
            totalPrice: totalPrice
        };

        return `Product Object: ${JSON.stringify(product)}`;
    },

    addRemoveItems: (cart, action, item, price) => {

        if (typeof cart !== 'object' || cart === null) {
            return 'Please enter a valid shopping cart object.';
        }
        if (action !== 'add' && action !== 'remove') {
            return 'Action must be either "add" or "remove".';
        }
        if (typeof item !== 'string' || item.trim() === '') {
            return 'Please enter a valid item name.';
        }
        if (isNaN(price) || price < 0) {
            return 'Please enter a valid non-negative number for price.';
        }

        if (action === 'add') {
            cart[item] = price;
            return `Added ${item} to the cart at $${price}. Current Cart: ${JSON.stringify(cart)}`;
        } else {
            delete cart[item];
            return `Removed ${item} from the cart. Current Cart: ${JSON.stringify(cart)}`;
        }
    },

    jsonForamtting: (jsonString) => {
        let parsedJson;
        try {
            parsedJson = JSON.parse(jsonString);
        } catch (e) {
            return 'Please enter a valid JSON string.';
        }

        return `Formatted JSON: ${JSON.stringify(parsedJson, null, 2)}`;
    },

    countObjectKey: (obj) => {

        let parsedObj;
        try {
            parsedObj = JSON.parse(obj);
        } catch (e) {
            return 'Please enter a valid JSON object.';
        }

        if (typeof parsedObj !== 'object' || parsedObj === null) {
            return 'Please enter a valid JSON object.';
        }

        const keyCount = Object.keys(parsedObj).length;
        return `Number of keys in the object: ${keyCount}`;
    },



    // Phase 5 Tasks

    clickCounter: () => {  

        counterText.textContent = window.count;
        counterModal.style.display = 'flex';
        
        if (window.count === 0) {
            decrementBtn.classList.add('inactive-btn');
        } else {
            decrementBtn.classList.remove('inactive-btn');
        }
    },

    charCounter: (input) => {
        charCounterInput.value = input;
        charCounterOverlay.style.display = 'flex';
        updateCharCount();
    },

    toDoApp: () => {
        todoAppOverlay.style.display = 'flex';
        todoList.innerHTML = '';
        if (window.todos === undefined) {
            window.todos = [];
        }
        renderTodos();
    },

    modalPopUp: (title, message) => {
        popupTitle.textContent = title || 'Notification';
        popupMessage.textContent = message || 'This is your notification message.';
        modalPopupOverlay.style.display = 'flex';
    },

    validateForm: () => {
        validateFormOverlay.style.display = 'flex';
        validationResult.textContent = '';
    },


};

// Submit button logic

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const checkedRadio = document.querySelector('input[name="task"]:checked');
    if (!checkedRadio) {
        // alert('Please select a task.');
        resultText.textContent = 'Please select a task.';
        resultModal.style.display = 'flex';
        return;
    }
    const selectedTask = checkedRadio.value;
    const userInput = inputField.value.trim();

    if (userInput === '') {
        // alert('Please enter a value.');
        resultText.textContent = 'Please enter a value.';
        resultModal.style.display = 'flex';
        return;
    }

    // Phase 1 Tasks
    
    let result;

    if (selectedTask === 'ageChecker') {
        const age = parseInt(userInput);
        if (isNaN(age)) {
            resultText.textContent = 'Please enter a valid number.';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.ageChecker(age);


    } else if (selectedTask === 'passwordChecker') {
        result = tasks.passwordChecker(userInput);

    } else if (selectedTask === 'tempConverter') {
        const tempC = parseFloat(userInput);
        if (isNaN(tempC)) {
            resultText.textContent = 'Please enter a valid number for temperature.';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.tempConverter(tempC);
    
    
    } else if (selectedTask === 'gradeCalculator') {
        const score = parseInt(userInput);
        if (isNaN(score)) {
            resultText.textContent = 'Please enter a valid number.';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.gradeCalculator(score);

    } else if (selectedTask === 'discountCalculator') {
        const [price, discount] = userInput.split(' ').map(Number);
        if (isNaN(price) || isNaN(discount)) {
            resultText.textContent = 'Please enter valid numbers for price and discount.';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.discountCalculator(price, discount);

    
    } else if (selectedTask === 'userNameFormatter') {
        result = tasks.userNameFormatter(userInput);

    
    } else if (selectedTask === 'messageGenerator') {
        result = tasks.messageGenerator(userInput);

    } else if (selectedTask === 'loginSimulator') {
        const [username, password] = userInput.split(' ');
        if (!username || !password) {
            resultText.textContent = 'Please enter in the format: username password (e.g., user123 Passw0rd!).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.loginSimulator(username, password);

    } else if (selectedTask === 'vowelCounter') {
        result = tasks.vowelCounter(userInput);

        
        // Phase 2 Tasks


    } else if (selectedTask === 'numIdentifier') {
        result = tasks.numIdentifier(userInput);
    
    } else if (selectedTask === 'calcFunctions') {
        const [num1, operator, num2] = userInput.split(' ');

        if (!num1 || !operator || !num2) {
            resultText.textContent = 'Please enter in the format: number operator number (e.g., 5 + 3).';
            resultModal.style.display = 'flex';
            return;
        }

        result = 'Answer is: ' + tasks.calcFunctions(num1, num2, operator);
    
    } else if (selectedTask === 'minMaxNumbers') {
        const numbers = userInput.split(' ').map(Number);
        if (numbers.length !== 5 || numbers.some(isNaN)) {
            resultText.textContent = 'Please enter exactly 5 valid numbers separated by spaces (e.g., 3 5 1 8 2).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.minMaxNumbers(...numbers);
    
    } else if (selectedTask === 'factCalculators') {
        const num = parseInt(userInput);
        if (isNaN(num) || num < 0) {
            resultText.textContent = 'Please enter a valid non-negative number.';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.factCalculators(num);
    
    } else if (selectedTask === 'revStringFunctions') {
        result = tasks.revStringFunctions(userInput);
    
    } else if (selectedTask === 'intCalculator') {
        const [principal, rate, time] = userInput.split(' ').map(Number);
        if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
            resultText.textContent = 'Please enter valid numbers for principal, rate, and time (e.g., 1000 5 2).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.intCalculator(principal, rate, time);
    
    } else if (selectedTask === 'bmiCalculator') {
        const [weight, height] = userInput.split(' ').map(Number);
        if (isNaN(weight) || isNaN(height) || height <= 0) {
            resultText.textContent = 'Please enter valid numbers for weight and height (e.g., 70 175).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.bmiCalculator(weight, height);
    
    } else if (selectedTask === 'leapYearChecker') {
        const year = parseInt(userInput);
        if (isNaN(year) || year < 0) {
            resultText.textContent = 'Please enter a valid non-negative number for the year (e.g., 2024).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.leapYearChecker(year);
    

        // Phase 3 Tasks
    
    } else if (selectedTask === 'eliChecker') {
        const age = parseInt(userInput);
        if (isNaN(age) || age < 0) {
            resultText.textContent = 'Please enter a valid non-negative number for age (e.g., 25).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.eliChecker(age);


    } else if (selectedTask === 'sumNumbers') {
        result = tasks.sumNumbers(userInput);


    } else if (selectedTask === 'scoreCalculator') {
        result = tasks.scoreCalculator(userInput);
    
    
    } else if (selectedTask === 'largeArray') {
        result = tasks.largeArray(userInput);
    
    
    } else if (selectedTask === 'dupArrays') {
        result = tasks.dupArrays(userInput);
    
    } else if (selectedTask === 'ascDescOrder') {
        result = tasks.ascDescOrder(userInput);
    
    } else if (selectedTask === 'valueArrays') {
        result = tasks.valueArrays(userInput);
    
    } else if (selectedTask === 'evenNumbers') {
        result = tasks.evenNumbers(userInput);
    
    } else if (selectedTask === 'twoArrays') {
        const [array1, array2] = userInput.split('|').map(arr => arr.trim());
        if (!array1 || !array2) {
            resultText.textContent = 'Please enter two arrays separated by a pipe (|) (e.g., 1 2 3 | 4 5 6).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.twoArrays(array1, array2);
    

        // Phase 4 Tasks
    
    } else if (selectedTask === 'ageGrade') {
        const [name, age, grade] = userInput.split(' ').map(item => item.trim());
        if (!name || !age || !grade) {
            resultText.textContent = 'Please enter in the format: name age grade (e.g., John 20 85).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.ageGrade(name, age, grade);
    

    } else if (selectedTask === 'keyObject') {
        const [obj, key] = userInput.split('|').map(item => item.trim());
        if (!obj || !key) {
            resultText.textContent = 'Please enter a JSON object and a key separated by a pipe (|) (e.g., {"name": "John", "age": 30} | name).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.keyObject(obj, key);
    
    } else if (selectedTask === 'contactBook') {
        const [name, phone] = userInput.split(' ').map(item => item.trim());
        if (!name || !phone) {
            resultText.textContent = 'Please enter in the format: name phone (e.g., John 1234567890).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.contactBook(name, phone);
    
     } else if (selectedTask === 'calTotalPrice') {
        const [item, price, quantity] = userInput.split(' ').map(item => item.trim());
        if (!item || isNaN(price) || isNaN(quantity)) {
            resultText.textContent = 'Please enter in the format: item price quantity (e.g., Apple 1.5 10).';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.calTotalPrice(item, parseFloat(price), parseInt(quantity));
    

    } else if (selectedTask === 'addRemoveItems') {
        const [cartStr, action, item, price] = userInput.split('|').map(item => item.trim());
        if (!cartStr || !action || !item || isNaN(price)) {
            resultText.textContent = 'Please enter in the format: cart action item price (e.g., {"Apple": 1.5} | add | Banana | 0.5).';
            resultModal.style.display = 'flex';
            return;
        }
        let cart;
        try {
            cart = JSON.parse(cartStr);
        } catch (e) {
            resultText.textContent = 'Please enter a valid JSON object for the cart.';
            resultModal.style.display = 'flex';
            return;
        }
        result = tasks.addRemoveItems(cart, action, item, parseFloat(price));
    
    
    } else if (selectedTask === 'jsonForamtting') {
        result = tasks.jsonForamtting(userInput);
    

    } else if (selectedTask === 'countObjectKey') {
        result = tasks.countObjectKey(userInput);

        // Phase 5 Tasks
        // These tasks open their own modals when selected (radio change handlers)
    }
    inputModal.style.display = 'none';
    resultText.textContent = result;
    resultModal.style.display = 'flex';
    
});


incrementBtn.addEventListener('click', () => {
    window.count++;
    counterText.textContent = `${window.count}`;
    
    if (window.count > 0) {
        decrementBtn.classList.remove('inactive-btn');
    }
});


decrementBtn.addEventListener('click', () => {

    if (decrementBtn.classList.contains('inactive-btn')) {
        return;
    }
    
    window.count--;
    counterText.textContent = `${window.count}`;
    
    if (window.count === 0) {
        decrementBtn.classList.add('inactive-btn');
    }
});

// Close Counter Modal

closeCounterBtn.addEventListener('click', () => {
    counterModal.style.display = 'none';
    window.count = 0;
    counterText.textContent = `${window.count}`;
    decrementBtn.classList.add('inactive-btn');
    task38Radios.forEach(r => r.checked = false);
});

// Close result modal

closeResultBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    counterModal.style.display = 'none';
    resetRadios();
    inputField.value = '';
});

// CHARACTER COUNTER 
function updateCharCount() {
    const count = charCounterInput.value.length;
    charCountDisplay.textContent = `Characters: ${count}`;
}

charCounterInput.addEventListener('input', updateCharCount);

closeCharCounterBtn.addEventListener('click', () => {
    charCounterOverlay.style.display = 'none';
    charCounterInput.value = '';
    charCountDisplay.textContent = 'Characters: 0';
});

// TODO APP 
function renderTodos() {
    todoList.innerHTML = '';
    window.todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 10px;';
        li.innerHTML = `
            <span>${todo}</span>
            <button class="button" data-index="${index}" style="padding: 5px 10px; font-size: 0.8rem;">Remove</button>
        `;
        todoList.appendChild(li);
    });

    // Add remove listeners
    document.querySelectorAll('#todoList button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            window.todos.splice(index, 1);
            renderTodos();
        });
    });
}

addTodoBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task !== '') {
        window.todos.push(task);
        todoInput.value = '';
        renderTodos();
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodoBtn.click();
    }
});

closeTodoBtn.addEventListener('click', () => {
    todoAppOverlay.style.display = 'none';
    todoInput.value = '';
});

//  MODAL POPUP 
closePopupBtn.addEventListener('click', () => {
    modalPopupOverlay.style.display = 'none';
});

//  FORM VALIDATION 
validateFormBtn.addEventListener('click', () => {
    const email = validateEmail.value.trim();
    const password = validatePassword.value.trim();
    const phone = validatePhone.value.trim();

    let errors = [];

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.push('Email is required.');
    } else if (!emailRegex.test(email)) {
        errors.push('Email format is invalid.');
    }

    // Password validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!password) {
        errors.push('Password is required.');
    } else if (password.length < 8) {
        errors.push('Password must be at least 8 characters.');
    } else if (!hasUpperCase) {
        errors.push('Password must contain an uppercase letter.');
    } else if (!hasLowerCase) {
        errors.push('Password must contain a lowercase letter.');
    } else if (!hasDigit) {
        errors.push('Password must contain a digit.');
    } else if (!hasSpecialChar) {
        errors.push('Password must contain a special character.');
    }

    // Phone validation
    const phoneRegex = /^\d{10,}$/;
    if (!phone) {
        errors.push('Phone is required.');
    } else if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        errors.push('Phone must be at least 10 digits.');
    }

    // Display results
    if (errors.length === 0) {
        validationResult.style.color = 'green';
        validationResult.textContent = '✓ All fields are valid!';
    } else {
        validationResult.style.color = 'red';
        validationResult.textContent = errors.join(' | ');
    }
});

closeFormBtn.addEventListener('click', () => {
    validateFormOverlay.style.display = 'none';
    validateEmail.value = '';
    validatePassword.value = '';
    validatePhone.value = '';
    validationResult.textContent = '';
});

