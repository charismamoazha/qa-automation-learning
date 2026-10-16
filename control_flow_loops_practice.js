let testNames = ["Login", "AddtoCart", "Checkout", "Pay", "PaymentReceived"];

for (let testName of testNames){
    let passed;

    if (testName === "Login"){
        passed = true;
    } else if (testName === "AddtoCart"){
        passed = false;
    } else if (testName === "Checkout"){
        passed = true;
    } else if (testName === "Pay"){
        passed = false;
    } else {
        passed = "true";
    }

    
    if (passed === true){
        console.log(testName + " passed!");
    } else {
        console.log(testName + " failed!");
    }

    
}