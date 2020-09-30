module.exports = function toReadable (number) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
        decimals = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        firstNumber, secondNumber, result, hundred;

    if(number<21){
        return numbers[number];
    }else{
        hundred = Math.floor(number/100);
        firstNumber = Math.floor(number/10);
        secondNumber = number%10;
        console.log(hundred, firstNumber, secondNumber);
        if(number/100 < 1){
            if(number%10 == 0){
                return decimals[firstNumber-2];
            }else{
                result = decimals[firstNumber-2] +" "+numbers[secondNumber];
                console.log(result);
                return result;
            }
        }else{
            if(number%100 == 0){
                return numbers[hundred] +" "+'hundred';
            }else if(number%100 <21){
                secondNumber = number%100;
                result = numbers[hundred] + " " +'hundred' + " "+numbers[secondNumber];
                return result;
            }else if(number%10 == 0){
                firstNumber = Math.floor((number%100)/10);
                result = numbers[hundred] + " " +'hundred' + " " +decimals[firstNumber-2];
                return result;
            }else{
                firstNumber = Math.floor((number%100)/10);
                result = numbers[hundred] + " " +'hundred' + " " +decimals[firstNumber-2] +" " +numbers[secondNumber];
                console.log(result);
                return result;
            }
        }
    }
}
