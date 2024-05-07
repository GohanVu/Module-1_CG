function  changeArray(array,num){
    let newArray = []
    for (let i = 0; i <array.length; i++) {
        if(num !== array[i]){
            newArray.push(array[i])
        }
    }
    return newArray
}
let array = [0,1,2,3,4,5]
let result = changeArray(array,4)
document.write(result)