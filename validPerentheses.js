function validParentheses(parens) {
    var arr = parens.split('');
    var spliceArray = [];
    var depth = 0;

    for (index = 0; index < arr.length; index++) {
        if (arr[index] == '(' && arr[index+1] == '(') {
            depth++;
        }
    }
    for (x = 0; x <= depth; x++) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === '(' && arr[i + 1] === ')') {
                spliceArray.push(i);
            }
        }
        for (count = spliceArray.length - 1; count >= 0; count--) {
            arr.splice(spliceArray[count], 2);
        }
    }
    return arr.length === 0 ? true : false;
}

validParentheses("(())((()())())");
