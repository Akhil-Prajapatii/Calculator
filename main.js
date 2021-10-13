class Calculator{
    constructor(prevText,currText){
        this.prevText = prevText;
        this.currText = currText;
        this.clear();
    }

    clear(){
        this.prevOper = '';
        this.currOper = '';
        this.operation = undefined;
    }

    delete(){
        this.currOper = this.currOper.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number === '.' && this.currOper.includes('.')) return;
        this.currOper = this.currOper.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currOper === '') return;
        if(this.prevOper !== ''){
            this.compute();
        }
        this.oper = operation;
        this.prevOper = this.currOper;
        this.currOper = '';
    }

    compute(){
        let computation = 0;
        const prev = parseFloat(this.prevOper);
        const curr = parseFloat(this.currOper);
        if (isNaN(prev) || isNaN(curr)) return;
        switch (this.oper){
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '÷':
                computation = prev / curr;
                break;
            default:
                return;
        }
        this.currOper = computation;
        console.log(computation+'equal');
        this.oper = undefined;
        // console.log(this.operation+'omg');
        this.prevOper = '';

    }

    updateDisplay(){
        this.currText.innerText = this.currOper;
        if(this.oper != null){
            this.prevText.innerText = `${this.prevOper} ${this.oper}`;
        }else{
            this.prevText.innerText = this.prevOper;
        }
    }
}


const numBtn = document.querySelectorAll('[data-number]');
const operBtn = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equal]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-all-clear]');
const prevText = document.querySelector('[data-prev-text]');
const currText = document.querySelector('[data-curr-text]');

const cal = new Calculator(prevText,currText);
// for(item of numBtn){
//     item.addEventListener('click',(e)=>{
//         currText.innerHTML = 'hiii';
//     })
// }

numBtn.forEach(button =>{
    button.addEventListener('click',() => {
        cal.appendNumber(button.innerText);
        cal.updateDisplay();
        console.log(button.innerText);
    })
})


operBtn.forEach(button =>{
    button.addEventListener('click',() => {
        cal.chooseOperation(button.innerText);
        cal.updateDisplay();
        console.log(button.innerText);
    })
})

equalBtn.addEventListener('click',() => {
        cal.compute();
        cal.updateDisplay();
        // console.log('yes');
})

clearBtn.addEventListener('click',() => {
        cal.clear();
        cal.updateDisplay();
        // console.log('yes');
})

deleteBtn.addEventListener('click',() => {
        cal.delete();
        cal.updateDisplay();
        console.log('yes');
})

