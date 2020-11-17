class BMI{
    constructor(t,b){
        this.tinggi = t/100
        this.berat = b
    }
    
    hasil = () => {
        let bmi = this.berat / (this.tinggi * this.tinggi)
        if(bmi < 18.5){
            return "Rata - rata BMI : "+ bmi +"\nStatus Badan : Kurang"
        }
        else if(bmi >= 18.5 && bmi <= 24.9 ){
            return "Rata - rata BMI : "+ bmi +"\nStatus Badan : Normal "
        }
        else if(bmi >= 25 && bmi <= 29.9){
            return "Rata - rata BMI : "+ bmi +"\nStatus Badan : Berlebih "
        }
        else if(bmi >= 30){
            return "Rata - rata BMI : "+ bmi +"\nStatus Badan : Obesitas "
        }
        else{
            return "Not Found"
        }
    }
}

let hasil = new BMI(170,90)
console.log(hasil.hasil());