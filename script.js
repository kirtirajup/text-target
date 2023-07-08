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
        elseinner == "Clear"){
            string.value="";
        }
    })
})