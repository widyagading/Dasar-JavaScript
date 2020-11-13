let nama = "Widya" //menyimpan data string
let umur = 17 //menyimpan data numerik
let status_menikah = false //menyimpan data boolean

const url = "http://smktelkom-mlg.sch.id"
const port = 8080

let nama_siswa1 = "Dongwook"
let nis_siswa1 = "101"
let jurusan_siswa1 = "RPL"

let nama_siswa2 = "Gading"
let nis_siswa2 = "102"
let jurusan_siswa2 = "TKJ"

let siswa1 = {
    nis: "101",
    nama: "Dongwook",
    jurusan: "RPL"
}

let siswa2 = {
    nis: "102",
    nama: "Lee Yeon",
    jurusan: "TKJ"
}

let siswa1 = {
    nis: "101",
    nama: "Dongwook",
    jurusan: "RPL"
}

//menampilkan nama siswa1
console.log("Nama Siswa 1 = " + siswa1.nama);

//mengubah nama siswa 1 menjadi Lee Dongwook
siswa1.nama = "Lee Dongwook"

//menampilkan nama setelah diubah
console.log("Nama Siswa 1 = " + siswa1.nama);