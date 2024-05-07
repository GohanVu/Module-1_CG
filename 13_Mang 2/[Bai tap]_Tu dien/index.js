function transWords (){
    let engWords=["banana","apple","orange","lemon","coconut"];
    let vieWords=["chuối","táo","cam","chanh","dừa"];
    let string = document.getElementById("engWord").value;
    let result = ""
    let index = 0
    for (let i = 0; i < engWords.length; i++) {
        if (string == engWords[i]){
            index = i
            for (let j = 0; j < vieWords.length; j++) {
                if (j=index){
                    result = vieWords[j]
                    break;
                }
            }
            break;
        }
    }
        if (result == "")
    {
        result = "NaN"
    }
document.getElementById("result").innerHTML= result
document.getElementById('engWord').value = ""
}

