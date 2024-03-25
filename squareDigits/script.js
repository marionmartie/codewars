function squareDigits(num){
    return parseInt(num.toString().split('').map( e => e * e).join(""));
  }

console.log(squareDigits(2112));