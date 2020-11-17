class Geometri{
    constructor(s,r,n){
        this.sukuAwal = s,
        this.rasio = r,
        this.jumlahSuku = n
    }
    hasil = () =>{
        let hasil = 0
        let i = 1
        while( i < this.jumlahSuku ){
            hasil += this.sukuAwal *= this.rasio
            i++
        }
        return hasil
    }
}

let jawab = new Geometri(4,3,10)
console.log("Jawaban : " + jawab.hasil());