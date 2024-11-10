 // let input = prompt("Mesaj nedir");
 // console.log(input); 

 // console.log("Merhaba");
// değişkenler
// let sayi1 = prompt("1.Sayı giriniz");
// const sayi2 = prompt("2.Sayı giriniz");
// var sayi3 = prompt("3.Sayı giriniz");

// console.log("Sayı 1 =", sayi1);
// console.log("Sayı 2 =", sayi2);
// console.log("Sayı 3 =", sayi3);

// const değeri başalngıç değeri olması lazım
// let sayi1 = 43;
// const sayi2 = 12; 
// var sayi3 = 14;

// sayi1 = 12;
// sayi3 = 12;


// console.log("Sayı 1 =", sayi1);
// console.log("Sayı 2 =", sayi2);
// console.log("Sayı 3 =", sayi3);


// console.log = ("ben App.js den geldim");

// let dersler = [];

 // console.log("Dersler", dersler ,"dersler Uzunluğu", dersler.length);

// dersler.push("PHP"); // Arrayın Sonundan ekler
// dersler.push("HTML");
// dersler.push("CSS");
// dersler.unshift("C#");// Arrayın En başından başlar

 // console.log("Dersler", dersler, "dersler Uzunluğu", dersler.length);

// dersler.pop(); // son elemanı siler
// dersler.shift(); // ilk elemanı siler
   
// console.log("Dersler", dersler, "dersler Uzunluğu", dersler.length);

// dersler.push("Java","Python");

// console.log("Dersler", dersler, "dersler Uzunluğu", dersler.length); 

// let cSharpIndex = dersler.findIndex((ders) => {

//     console.log("Taranan Ders", ders);

//     if (ders == "C#") return true;

// });

// if (cSharpIndex != -1) {
//     console.log("C# DErsi Bulundu : ", cSharpIndex);
// } else {
// console.log("C# Dersi Bulunamadı");
// }

// const yas = 100;

// if (yas <= 15){
//     console.log("Yaşınız 18 veya 18'den Küçüktür");
// } else if (yas <= 35){
//     console.log("Yaşınız 18 ve 35 Arasındadır");
// } else {
//     console.log("Yaşınız 35'den Büyüktür");

// }

// Döngüler

// let dersler = [];
// dersler.push("PHP"); 
// dersler.push("HTML");
// dersler.push("CSS");
// dersler.push("Java","Python");
// dersler.push(".NET CORE"); 
// dersler.push("F#");
// dersler.push("CSS");


// for (let i = 0; i < dersler.length; i++) {
//     console.log(dersler[i]," = Dersİ");
//      console.log("Ders : ",dersler[i]);
    
// }

// FOREACH KULLANIMI
// let dersler = [];
// dersler.push("PHP","HTML","CSS","C#","F#",".NET CORE","Java","Python");

// dersler.forEach(function (ders,index,array){
//     console.log("Ders : ", ders, "Ders Index : ", index); 
// });

// While Kullanımı
// let i = 0;
// let dersler = [];
// dersler.push("PHP","HTML","CSS","C#","F#",".NET CORE","Java","Python");
// while (i < dersler.length) {
//     console.log("Ders  = ",dersler[i]);
//     i++;
// }

// button tüklama işlemleri

function ButtonTiklama() {
    console.log("Tıklandı");
}
