let string = "";
var btns = document.querySelectorAll('.innerbtns');

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let targetBtn = e.target.closest('.innerbtns');
        if (targetBtn.classList.contains('noncalc-btn')) {
            return;
        }
        let value = targetBtn.innerText.trim();
        if (value === '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            document.querySelector('#displaymain').innerText = string;
        } else if (value === "%") {
            try {
                string = String(eval(string) / 100);
            } catch {
                string = "Error";
            }
            document.querySelector('#displaymain').innerText = string;
        } else if (value === 'AC') {
            string = "";
            document.querySelector('#displaymain').innerText = string;
        } else if (value === 'dlt') {
            string = string.slice(0, -1);
            document.querySelector('#displaymain').innerText = string;
        } else {
            string += value;
            document.querySelector('#displaymain').innerText = string;
        }
    });
});
