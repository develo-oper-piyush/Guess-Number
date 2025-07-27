let inp = document.querySelector("#inp");
let cnt = document.querySelector("#number");

let crt = document.querySelector("#crt");
let btn = document.querySelector("#btn");

let msg = document.querySelector("#msg");

let min = 1,
    max = 100;
let gen = Math.floor(Math.random() * (max - min + 1)) + min;

btn.addEventListener("click", () => {
    console.log(gen);

    let val = Number(inp.value);
    if (inp.value === "") msg.classList.remove("hidden");
    else if (isNaN(val)) {
        msg.textContent = "Enter a valid number.";
        msg.classList.remove("hidden");
    } else if (val > 100 || val < 1) {
        msg.textContent = "Enter a number (integer) between 1 to 100 only.";
        msg.classList.remove("hidden");
    } else {
        msg.classList.add("hidden");

        if (val === gen) {
            crt.classList.remove("hidden");
            btn.setAttribute("disabled", 0);
        } else {
            if (Number(cnt.textContent) > 0) {
                cnt.textContent = Number(cnt.textContent) - 1;
                if (val > gen) {
                    msg.textContent = `Number is lesser than ${val}`;
                    msg.classList.remove("hidden");
                } else {
                    msg.textContent = `Number is greater than ${val}`;
                    msg.classList.remove("hidden");
                }
            }
            if (Number(cnt.textContent) === 0) {
                inp.setAttribute("disabled", 0);
                msg.textContent =
                    "Sorry but you lost. Please refresh the page to play again.";
                msg.classList.remove("hidden");
            }
        }
    }
});
