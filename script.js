let btnArr = document.querySelectorAll("button");
let display = document.querySelector("input");
let string = "";
btnArr.forEach(btn => {
    btn.addEventListener("click", () => {
        let btnValue = btn.textContent;
        if (btnValue == "AC") {
            string = "";
            
        } else if (btnValue == "DEL") {
            string = string.slice(0,-1);
        }
        else if (btnValue == "=") {
            // string = Function(`return (${string})`)();
            try{
                string = eval(string).toString();
            }catch(e){
                string = "Error";
            }
        } else {
            string += btnValue;
        }
        display.value = string;
    })
});