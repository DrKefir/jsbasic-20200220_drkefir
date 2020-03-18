let calculator = {
 	numberA: 0,
   	numberB: 0,
   	read(a, b) {
     this.numberA = a;
     this.numberB = b;
   	},
   	sum() {
    	return this.numberA + this.numberB;
   	},
   	mul() {
    	return this.numberA * this.numberB;
   	},
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
