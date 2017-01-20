function validParentheses(parens){
  var arr = parens.split('');
  var spliceArray = [];
  for (i = 0; i<arr.length; i++) {
    if (arr[i] === '(' && arr[i+1] === ')') {
      spliceArray.push(i);
    }
  }
  for (count = spliceArray.length-1; count>=0; count--) {
    arr.splice(spliceArray[count], 2);
  }
}
// validParentheses( "(" );
// validParentheses( ")()(" );
validParentheses( "(())((()())())" );
