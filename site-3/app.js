const san = document.querySelector(".saniye");
const dak = document.querySelector(".dakika");
const sa = document.querySelector(".saat");

function tiktak() {
    let second = new Date().getSeconds(); /*getSecond o anki saatteki saniye değerini döndürmektedir.*/ 
    let minute = new Date().getMinutes(); /*getMinutes o anki dakika değerini döndürmektedir. */
    let hour = new Date().getHours(); /*getMinutes o anki saat değerini döndürmektedir. */

    san.style.transform = `rotate(${180 + (second * 6)}deg)` /*saniye *6 kadar derece+180 şeklinde bir döndürme gerçekleştirir. */
    dak.style.transform = `rotate(${180 + (minute * 6)}deg)`
    sa.style.transform = `rotate(${180 + (hour * 30)}deg)`
}

setInterval(tiktak, 1000); /*1saniye=1000 milisaniye şeklinde olup tikTak bu süre zarfında bir tur döndürmeye yaramaktadır. */