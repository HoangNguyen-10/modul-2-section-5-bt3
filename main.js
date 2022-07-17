
function add(){
    let debit = document.getElementById('debit').value;
    debit = parseFloat(debit);
    let rate = document.getElementById('rate').value;
    rate = parseFloat(rate);
    let years = document.getElementById('years').value;
    years =  parseFloat(years);
    
    let result = debit + rate/100*debit*years;

    document.getElementById('result').innerText = result;
}