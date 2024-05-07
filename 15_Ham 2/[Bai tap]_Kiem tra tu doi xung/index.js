function isPalindrome(n){
    let first = 0
    let last = n.length-1
    while (first<last){
        if (n[first] != n[last]){
            return " - Not palindrome"
        }
        first++
        last --
    }
    return " - palindrome"
}

let a= prompt("Enter your word:")
alert("Your word: "+a + isPalindrome(a))
