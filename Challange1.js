let nama = "Pak Aman"
let sisi_1 = 20.5
let sisi_2 = 30
let harga = 1500000
let ppn = 15


let luas = sisi_1 * sisi_2
console.log("Luas keseluruhan : " + luas +" m2" );

let total_harga = luas * harga
var	reverse = total_harga.toString().split('').reverse().join(''),
	ribuan 	= reverse.match(/\d{1,3}/g);
    ribuan1	= ribuan.join('.').split('').reverse().join('');
console.log("Harga Tanah : Rp "+ribuan1)

let harga_ppn = total_harga * ppn / 100
var	reverse = harga_ppn.toString().split('').reverse().join(''),
	ribuan 	= reverse.match(/\d{1,3}/g);
    ribuan2	= ribuan.join('.').split('').reverse().join('');
console.log("Harga PPN : Rp " + ribuan2)
console.log("(Harga Tanah - Harga PPN)");

let total_harga_tanah = total_harga - harga_ppn
var	reverse = total_harga_tanah.toString().split('').reverse().join(''),
	ribuan 	= reverse.match(/\d{1,3}/g);
    ribuan3	= ribuan.join('.').split('').reverse().join('');
console.log("Total Harga : Rp "+ribuan3)