const dark = ()=>{
    let dark = document.getElementById("dark");
    let textBox = document.getElementById("textBox");
    let a = dark.innerText;
    if(a == "Dark Mode"){
        document.body.style.background = "black"
        dark.innerText = "Light Mode"
        textBox.style.background = "black"
        textBox.style.color = "white"
        localStorage.setItem("dark")
    }
    else{
        document.body.style.background = "white"
        dark.innerText = "Dark Mode"
        textBox.style.background = "white"
        textBox.style.color = "black"
        localStorage.setItem("dark",false)
    }
}
window.onload = ()=>{
    let a = localStorage.getItem("dark");
    if(a == "true"){
        dark()
    }
}
let string = document.getElementById("textBox");
let search = document.getElementById("search").addEventListener("click",(e)=>{
    e.preventDefault();
})
let buttons = document.getElementsByClassName("buttons");
Array.from(buttons).map((btn)=>{
    btn.addEventListener("click",()=>{
        let inner = btn.innerText;
        if(inner == "Upper Case"){
            string.value = string.value.toUpperCase();
        }
        else if(inner == "Lower Case"){
            string.value = string.value.toLowerCase();
        }
        else if(inner == "Clear All"){
            string.value="";
        }
    })
})

const copyIt = ()=>{
        var copyText = document.getElementById("textBox");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
      }
