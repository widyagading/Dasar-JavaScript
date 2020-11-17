class Lingkaran{
    constructor(r){
        this.pi = 3.14
        this.jari_jari = r
    }

    luas = () =>{
        return this.pi * this.jari_jari * this.jari_jari
    }
    keliling = () =>{
        return this.pi * this.jari_jari * 2
    }

}

class Tabung extends Lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volume = () =>{
        return this.pi * this.jari_jari * this.jari_jari * this.tinggi
    }
    luas_permukaan = () =>{
        return 2 * this.pi * this.jari_jari * (this.jari_jari + this.tinggi)
    }
    luas_selimut = () =>{
        return 2 * this.pi * this.jari_jari * this.tinggi
    }
}

class Kerucut extends Lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volume = () =>{
        return 1/3 * this.pi * this.jari_jari * this.jari_jari * this.tinggi
    }
    luasPermukaan = () =>{
        let cari_s = this.jari_jari * this.jari_jari + this.tinggi * this.tinggi
        let s = Math.sqrt(cari_s)
        return this.pi * this.jari_jari * (this.jari_jari + s )
    }
    luasSelimut = () =>{
        let cari_s = this.jari_jari * this.jari_jari + this.tinggi * this.tinggi
        let s = Math.sqrt(cari_s)
        return this.pi * s * this.jari_jari
    }
}

class Bola extends Lingkaran{
    constructor(r){
        super(r)
    }
    volume = () =>{
        return 4/3 * this.pi * this.jari_jari * this.jari_jari * this.jari_jari
    }
    luasPermukaan = () =>{
        return 4 * this.pi * this.jari_jari * this.jari_jari
    }
}

let tabung = new Tabung(7.5,50)
let kerucut = new Kerucut(10,40)
let bola = new Bola(15)

console.log("Volume Tabung = "+ tabung.volume());
console.log("Volume Kerucut = "+ kerucut.volume());
console.log("Volume Bola = "+ bola.volume());