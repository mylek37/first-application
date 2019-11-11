// alert('xin chao')
// document.getElementById('myImage').src='pic_bulbon.gif'
// var showMessenger = () => {
        // alert('An Nhien')};
// showMessenger();

var getAgeMortherAndAgeChild = (motherAge, childAge) => { 
        var totalAge = motherAge + childAge; alert(totalAge) 
}
        var mumAge = 26;
        var childAge = 2;
        // getAgeMortherAndAgeChild(mumAge, childAge)
        // geMortherAndAgeChild(mumAge, childAge);
// var getAgeMotherAndChildren = (motherAge, childAge) => {
//                 var totalAge = motherAge + childAge;
//                 alert(totalAge);
//             }
//             /// Thuc thi ham tren
//             var mumAge = 26;
//             var childAge = 2;
//             getAgeMotherAndChildren(mumAge, childAge);
const imageElement = document.getElementById('myImage');
var turnOnTheLight = () => {
        var imageSrc = 'pic_bulbon.gif'; 
        imageElement.src = imageSrc;
}

var turnOffTheLight = () => {
        var imageSrc = 'pic_bulboff.gif';
        imageElement.src = imageSrc;
}
let isOn = false;
var switchTheLight = () => {
        if (isOn == false) {
                imageElement.src = 'pic_bulbon.gif';
                isOn = true;
        } else {
                imageElement.src = 'pic_bulboff.gif';
                isOn = false;
        }
}