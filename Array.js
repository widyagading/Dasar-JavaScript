//array string
let jurusan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]

//array numeric
let tingkatan_kelas = [10,11,12]

//array objek
let siswa = [
    //objek 1
    {
        nama: "Widya", jurusan: "RPL"
    },
    //2
    {
        nama: "Gading", jurusan: "TKJ"
    },
    //3
    {
        nama: "Sejati", jurusan: "RPL"
    },
]

console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);

let kota = ["Malang","Surabaya","Tulungagung"]

console.log("isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("-------------");

//tambah data baru
kota.push("Banyuwangi")

console.log("isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

//hapus data
kota.splice(2,1)

let barang = [
    { nama: "RInsoo", harga: 5000},
    { nama: "Moonlight", harga: 4000}
]

console.log("isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("-------------------------")

//tambah data baru
barang.push(
    { nama: "Motlo", harga: 10000 }
)

console.log("isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);

let siswa = [
    {nama_depan = "Lee", nama_belakang: "Dongwook"},
    {nama_depan = "Kim", nama_belakang: "Bum"},
    {nama_depan = "Jo", nama_belakang: "Jongsuk"},    
]

//menmpilkan nama lengkap array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)