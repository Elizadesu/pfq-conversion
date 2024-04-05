function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    let convertedAmount;

    if (fromCurrency === 'ZC' && toCurrency === 'GP') {
        convertedAmount = amount * 5;
    } else if (fromCurrency === 'GP' && toCurrency === 'ZC') {
        convertedAmount = amount / 5; 
    } else if (fromCurrency === 'Cr' && toCurrency === 'ZC') {
        convertedAmount = amount / 5000; 
    } else if (fromCurrency === 'ZC' && toCurrency === 'Cr') {
        convertedAmount = amount * 5000; 
    } else if (fromCurrency === 'GP' && toCurrency === 'Cr') {
        convertedAmount = amount * 1000;
    } else if (fromCurrency === 'Cr' && toCurrency === 'GP') {
        convertedAmount = amount / 1000; 
    }

    if (!isNaN(convertedAmount)) {
        document.getElementById('result').textContent = `Equivalent: ${amount} ${fromCurrency} is ${convertedAmount} ${toCurrency}`;
    } else {
        document.getElementById('result').textContent = 'Invalid input. Please enter a valid amount.';
    }
}


function calculateOwe() {
    const amount1 = document.getElementById('amount1').value;
    const amount2 = document.getElementById('amount2').value;
    const oweCurrency = document.getElementById('oweCurrency').value;
    const haveCurrency = document.getElementById('haveCurrency').value;
    let owedAmountgp,owedAmountcr,owedAmount,hC,oC;
    
    /*Converting everything into ZC*/

    if (haveCurrency !== 'ZC') {
        if(haveCurrency === 'GP') {
            hC=amount2/5;
        }
        else if(haveCurrency === 'Cr') {
            hC=amount2/5000;
        }
    }
    else{               
      hC=amount2;
    }

    if (oweCurrency !== 'ZC') {

        if(oweCurrency === 'GP') {
            oC=amount1/5;
        }

        else if(oweCurrency === 'Cr') {
            oC=amount1/5000;
        }
    }
    else{
        oC=amount1;
    }

    /*Calculating how much is still owed in ZC*/
    owedAmount=oC-hC;
    owedAmountgp=owedAmount*5;
    owedAmountcr=owedAmount*5000;

    if (!isNaN(owedAmount)) {
        document.getElementById('result1').textContent = `You still owe: ${owedAmount}ZC or ${owedAmountgp}GP or ${owedAmountcr}Credits`;
    } else {
        document.getElementById('result1').textContent = 'Invalid input. Please enter a valid amount.';
    }


    }
    
