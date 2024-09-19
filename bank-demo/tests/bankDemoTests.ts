import Bank from "../src/bankDemo";

const BIA = new Bank();

// Account creation tests
console.log("Bank Account Creation Tests: Two scenarios.")

// Scenario 1- Successful account creation
const newAccount1 = BIA.createAccount("James Cook", 34, "123");
if(newAccount1.accountNumber === "123") {
    console.log("Scenario 1 passed!");
}

else {
    console.log("Scenario 1 failed!");
}

// Scenario 2- Unsuccessful account creation
try {
    BIA.createAccount("James Cook", 34, "123");
    console.log("Duplicate account: Scenario 2 failed!");
} 

catch(_) {
    console.log("Scenario 2 passed!");
}

// Deposit tests
console.log("Bank Account Deposit Tests: Three scenarios.");

const depositBIA = new Bank();
const depositAccount = depositBIA.createAccount("James Cook", 42, "123")

//Scenario 1- Successful deposit
depositBIA.deposit("123", 500);
if (depositAccount.balance == 500) {
    console.log("Scenario 1 passed!");
}
else {
    console.log("Scenario 1 failed!")
}

//Scenario 2- Unsuccessful deposit (Invalid account)
try {
    BIA.deposit("1234567", 500);
    console.log("Scenario 2 failed!");
} catch(__) {
    console.log("Scenario 2 passed!")
}

//Scenario 3- Unsuccessful deposit (Invalid deposit amount)
try {
    BIA.deposit("123", -500);
    console.log("Scenario 3 failed!");
} catch(__) {
    console.log("Scenario 3 passed!")
}

// Withdrawal tests
console.log("Bank Account Withdrawal Tests: Three scenarios.")

const withdrawalBIA = new Bank();
const withdrawalAccount = withdrawalBIA.createAccount("James Cook", 42, "123")

//1000 starting funds added to withdrawalAccount
withdrawalBIA.deposit("123", 1000);


//Scenario 1- Successful deposit
withdrawalBIA.withdraw("123", 500);
if (newAccount1.balance == 500) {
    console.log("Scenario 1 passed!");
}
else {
    console.log("Scenario 1 failed!")
}

//Scenario 2- Unsuccessful withdrawal (Invalid account)
try {
    withdrawalBIA.withdraw("1234567", 500);
    console.log("Scenario 2 failed!");
} catch(__) {
    console.log("Scenario 2 passed!")
}

//Scenario 3- Unsuccessful withdrawal (Invalid withdrawal amount)
try {
    withdrawalBIA.withdraw("123", 5000);
    console.log("Scenario 3 failed!");
} catch(__) {
    console.log("Scenario 3 passed!");
}

//Check balance tests
console.log("Bank Account check balance Tests: Two scenarios.");

const balanceBIA = new Bank();
const balanceAccount = balanceBIA.createAccount("James Cook", 42, "123")

//1000 starting funds added to balance checking account
balanceBIA.deposit("123", 1000);

// Scenario 1 - Valid check balance
if (balanceBIA.checkBalance("123") == 1000) {
    console.log("Scneario 1 passed!");
} else {
    console.log("Scenario 1 failled!");
}

// Scenario 2 - Invalid check balance (account not found)
try {
    balanceBIA.checkBalance("1234567");
    console.log("Scenario 2 failed!");
} catch(__) {
    console.log("Scenario 2 passed!")
}