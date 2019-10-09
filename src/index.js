module.exports = function check(str, bracketsConfig) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let symbol = str[i];
        let arrInConfig;
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j].indexOf(symbol) >= 0) {
                arrInConfig = j;
                break;
            };
          };
        if (arr.length === 0) {
            arr.push(symbol);
        }
        else if (arr[arr.length-1] === bracketsConfig[arrInConfig][0] && symbol === bracketsConfig[arrInConfig][1]) {
            arr.pop();
        }        
        else {
            arr.push(symbol);
        }                   
    }
    return arr.length === 0;
}
