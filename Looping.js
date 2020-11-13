for (let index = 1; index <= 10; index++) {
    console.log("Perulangan ke-" + index)
}
let siswa = { 
    nama: "Widya Gading",
    gender: "Wanita",
    jurusan: "RPL",
    usia: "17",
    alamat: "Malang"
}

for (key in siswa){
    console.log(key);
}
let presiden = ["Soekarno", "Soeharto", "Habibie", "Gus Dur", "Megawati", "SBY", "Jokowi"]
for (pres of presiden) {
    console.log(pres)
}
let laptop = ["Lenovo","HP","Acer","Asus"]
let i = 0
while(laptop[1]){
    console.log(laptop[i])
    i++
}
let gadget = ["xiaomi","Samsung","Motorola","Sony Ericson"]
let i = 0
do{
    console.log(laptop[i])
    i++
}while(gadget[i])