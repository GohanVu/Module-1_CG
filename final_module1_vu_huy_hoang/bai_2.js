function countString(n){
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if(n[i] === n[i].toUpperCase() && n[i] !== n[i].toLowerCase()){
            count++
        }
    }
    if (count == 0){
        return 'The Strings is not contain upper char'
    } else {
        return  count
    }
}
let strings =  prompt('Enter your string: ')
console.log(countString(strings))