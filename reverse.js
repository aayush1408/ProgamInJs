//Program to retrun a reverse string

function reverseStr(string) {
    let rev = '';
    rev = string.split('').reverse().join('');
    return rev;
}
console.log(reverseStr('Reverse Me'));