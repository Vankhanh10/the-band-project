//-----------------------mot so kieu du lieu--------------
var fullName ='Nguyen Van Khanh';
var age=18;
setTimeout(function() {
// alert(fullName);
}, 1000)
console.log('Day la mot dong log');
var myObject = {
    name: "Khanh",
    age: 18,
    address: "bacninh" 
}
var isNull = null;
console.log(typeof myObject);
console.log(!false);
var myArray = [
    'Nguyen',
    'Van',
    'Khanh'
]
console.log(myArray);
//---------------------tim hieu ve template string, vong for-of va aguments
function writeLog() {
    var param;
    var myString = " ";
    for(param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}
writeLog("1", "2");
//------------------------- Làm việc với chuỗi -------------------
var myString = "Hoc JS tai F8! JS";
//1.length
 console.log(myString.length);
//2.1. Find index
//tra vi tri dau tien
console.log(myString.indexOf("JS"));
//vi tri bat dau tim kiem
console.log(myString.indexOf("JS", 8));
//tim tu cuoi
console.log(myString.lastIndexOf("Hoc"));
//2.2. Search
console.log(myString.search("JS"));
//Search != Find index  là search không hỗ trợ pt number 
//nhung search ho trọ bt chinh quy
//3. Cut string
console.log(myString.slice(4, 6));
//cut nguoc
console.log(myString.slice(-4, -1));
//4. replace
console.log(myString.replace("JS", "Javascript"));
//ket hop bt chinh quy tim tat ca JS
console.log(myString.replace(/JS/g, "Javascript"));
//5. to upper
console.log(myString.toUpperCase());
//6. to Lower
console.log(myString.toLowerCase());
//7. Trim loai bo khonag trang
var myString2 = "Nguyen Van Khanh     ";
console.log(myString2.length);
console.log(myString2.trim().length);
//8. Split
console.log(myString2.split(" "));
console.log(myString2.split("K"));
console.log(myString2.split(""));
//9. Get a character by index
console.log(myString2.charAt(8));
console.log(typeof myString2.charAt(8));
//cach2
console.log(myString2[8]);
console.log(typeof myString2[8]);
//---------------------------------Mang (Array)---------------------------
//1 tao mang
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Dart',
];
console.log(languages);
//truy suat phan tu Array
console.log(languages[2]);
//kiem tra kieu du lieu
console.log(typeof languages);
//kiem tra kieu Array
console.log(Array.isArray(languages));
//-------------------------------Lam viec voi array---------------
//1. toString
console.log(languages.toString());
//2. join 
//tra ve chuoi co them lien ket giua cac elememt 
console.log(languages.join("--"));
//3. pop (xoa phan tu cuoi mang 
//va tra lai phan tu vua xoa)
console.log(languages.pop());
console.log(languages);
//4. push (them phan tu vao cuoi mang 
//va return so luong phan tu mang moi)
console.log(languages.push("Dart"));
console.log(languages);
//5. Shift (nguoc lai voi pop, xoa 1 pha tu dau)
//va tra ve phan tu vua xoa
console.log(languages.shift());
console.log(languages)
// !!!!!Pop va Shift xoa het se tra ve undefine
//6. unShift (nguoc voi push them 1 phan tu vao dau mang)
//va tra ve do dai moi cua mang
console.log(languages.unshift("Javascript"));
console.log(languages);
//7. splicing (xoa, cut or chen phan tu moi)
//7.1 xoa va tra ve mang chua cac phan tu da xoa
console.log(languages.splice(1, 1));
console.log(languages);
//7.2 chen va thay the 
//tra ve mang rong do khog co phan tu nao duoc xoa
console.log(languages.splice(1, 0, "PHP" ));
console.log(languages);
console.log(languages.splice(1, 1, "Node JS", "Khanh"));
console.log(languages);
//8. Concat noi hai Array
var languages2 = [
    "Html",
];
console.log(languages.concat(languages2));
console.log(languages2.concat(languages));
console.log(languages.concat(languages));
console.log(languages2.concat(languages2));
//9. Slicing cut 1 vai element cua Array
//tra ve Array chua phan tu vua cut
console.log(languages.slice(1, 2));
console.log(languages);
// co the lay xuoi lay nguoc
console.log(languages.slice(-1));
console.log(languages);
//------------------------------tim hieu them ve Object------
var myInfo = {
    name: "Khanh",
    "full-name": "Nguyen Van Khanh",
    age: 18,
    address: "Bac Ninh",
}
console.log(myInfo);
//them mot element sau khi da tao object
myInfo.email = "nguyenkhanhndtt@gmail.com";
myInfo["last-name"] = "Khanh";
console.log(myInfo);
//lay ra element
console.log(myInfo.name);
console.log(myInfo["full-name"]);
//lay qua trung gian gia tri cua 1 bien
//exp gia tri cua bien myKey
var myKey = "address";
console.log(myInfo[myKey]);
// dua gia tri cua bien lam element cua object
//exp gia tri cua bien myWife
var myWife = "wife";
myInfo[myWife] = "Hue";
console.log(myInfo);
//xoa 1 element cua object
delete myInfo.age;
// them 1 key co value la function vao Object
myInfo.getname = function() {
    return this.name; //this o day tuong tu voi myInfo
}//this de tranh truong hop doi ten Object
console.log(myInfo.getname);
console.log(myInfo.getname());
//c2
myInfo["getFullName"] = function() {
    return this["full-name"];
}
console.log(myInfo.getFullName);
console.log(myInfo.getFullName());
// trong object 
//function => method 
//others => property
//----------------------Lam viec vơi vong for
var names =[
    'Khanh',
    'Hue',
    'Huy'
]
var myNumbers = [
    2,
    3,
    0
]
var myWifeInfo = {
    name: 'Hue',
    age: 19,
    gender: 'Nu'
}
//------for/in 
//vơi mang number <=> index (0, 1, 2,...)
for(var number in names) {
    console.log(number);
}
//với object keys <=> properties (name, age, ...)
for(var key in myWifeInfo) {
    console.log(key)
}
// với string thì tương tự với array
//-------for/of
//voi array va string tuong tu nhu nhau lay ra 
//gia tri cac element cua mang
for(var values of names) {
    console.log(values);
}
//voi object khong the thuc hien lay values
//mot cach thong thuong can su dung
// method keys or values de ho tro
for(var values of Object.values(myWifeInfo)) {
    console.log(values);
}
//---or
for(var values of Object.keys(myWifeInfo)) {
    console.log(myWifeInfo[values]);
}
//----------------------------Array Phan 2
//lam viec voi map() in Array
var myArray = [
    {
        id: 1,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 2,
        name: 'Javascript',
        coin: 10
    },
    {
        id: 3,
        name: 'Node JS',
        coin: 2
    },
    {
        id: 4,
        name: 'PHP',
        coin: 12
    }
]
var newArray = myArray.map(function(language){
    // console.log(language);
    return {
        id: language.id,
        name: `Khoa hoc: ${language.name}`,
        coin: language.coin,
        coinText: `Gia: ${language.coin}`
    }
});

console.log(newArray); 
//NOTE: map() trả về "mảng" với các phần tử mong muốn () 
// không có điều kiện
//----------------------tự tao map() method
Array.prototype.map2 = function(callBackFunction) {
    var arrayLength = this.length;
    var outputArray = []
    for(var i = 0; i < arrayLength; i++) {
        //moi khi lap lai se goi lai callBackFunction
        //va truyen cho function nay 2 doi so nhu ben duoi
        //-- callBackFunction(this[i], i);
        //de tong hop cac ket qua nhan duoc
        //can push vao 1 mang duy nhat
        outputArray.push(callBackFunction(this[i], i));
        //ở đây được hiểu
        //mỗi khi đoạn lệnh thực hiện của function 
        //đối vào (function(currentElement, index)) 
        //trả về (return) ra cái gì thì chính là giá trị 
        //của của callBackFunction trong push() 
    }
    //trả về return cho map2()
    return outputArray;
}
// thu nghiem map2() method
var newArray_2 = myArray.map2(function(currentElement, index) {
    return currentElement.name;
})
console.log(newArray_2.join(" - "));
//--------------------sử dung function forEach()
//NOTE: forEach không return
 var testForEach = names.forEach(function(currentElement, index, currentArray) {
    return currentElement;
});
console.log(testForEach);  // -> tra ve undefined
//tự tao function forEach()
//NOTE: Sử dụng for/in để 
//không duyệt qua các empty nếu có (thay vì dung this.length)
Array.prototype.forEach2 = function(callBackFunction) {
    for(var index in this) {
        if(this.hasOwnProperty(index))
        callBackFunction(this[index], index, this)
    }
}
//NOTE: Sử dụng function hasOwnProPerty để 
//không lặp qua các prototype
// thử nghiệm forEach2()
names.forEach2(function(currentElement, index){
    console.log(index);
})
//-----------------------sử dụng function filter()
// NOTE: filter() tra về "mảng" thỏa mãn điều kiện
//kiem tra dang vong for cua filter()
names.length = 100;
console.log(names);
var namesFilter = names.filter(function(value, index, array){
    var bollean = (index == 2)
    return bollean;
})
console.log(namesFilter);
//tự tạo function filter
Array.prototype.filter2 = function(callBackFunction){
    var myOutput = [];
    for(index in this) {
        if(this.hasOwnProperty(index) == true){
            var result = callBackFunction(this[index], index, this);
            if(result == true) {
                myOutput.push(this[index]);
            }
        }
    }
    return myOutput;
}
//thử nghiệm function filter()
var nameFilter2 = names.filter2(function(currentElement, index, array){
    return index == 1;
})
console.log(nameFilter2);
//---------------sử dụng function some()
//NOTE: some() trả về "true or false"
// true nếu có ít nhất một phần tử thỏa mãn
//false nếu không có phần tử nào thỏa mãn
//kiểm tra xem some() có return không
var mySome = names.some(function(currentElement, index, array) {
    return currentElement == 'Hue';
})
console.log(mySome); //-> tra ve bolean (true or false)
//tự tạo function some2()
Array.prototype.some2 = function(callBackFunction) {
    var resultBollean = false;
    for(var index in this) {
        var result = callBackFunction(this[index], index, this);
        if(this.hasOwnProperty(index)) {
            if(result == true) {
                resultBollean = true;
                break;
            }
        }
    }
    return resultBollean;
}
//thử nghiệm function some2()
console.log(names.some2(function(value, index, array){
    return value == 'Khanh';
}))
//----------------sủ dụng function every()
//NOTE: every trả về "true or false"
//true nếu tất cả các phần tử đều thỏa mã điều kiện
//flase nếu chỉ cần có 1 phần tử không thỏa mãn
console.log(myNumbers.every(function(value, index, array) {
    return value >= 0;
}));
// tự tạo function every()
Array.prototype.every2 = function(callBackFunction) {
    var resultBollean = true
    for(var index in this) {
        if(this.hasOwnProperty(index))  {
           var result = callBackFunction(this[index], index, this);
           if(result == false) {
                resultBollean = false;
                break;
           }
        }
    }
    return resultBollean;
}
// thử nghiệm every2()
console.log(myNumbers.every2(function(value, index, array) {
    return value <= 2;
}));
// --------------HTML DOM
//DOCUMENT
//Text <-Element -> Atribute
// NOTE Document chưa toan bộ cac Element -> 
//Luôn thông qua Document
//----DOM Element--------- select đến Element
//-- qua id "" 
//vd: document.getElementById('id cua Element') -> 
//tra ve 1 Element
//--qua class 
//vd: document.getElementsByClassName('class cua Element') -> 
//tra ve 1 HTML Colection ( tuong tu 1 mang)
//--qua tag name
//vd: document
//-- bang cach Css Selector
//vd:  document.querySelector('css selector') -> 
//tra ve 1 Element dau tien co css selector mong muon
//vd: document.querySelectorAll('css selector') ->
//tra ve 1 NodeList gom tat cac cac Element
//co css selector mong muon
//-----DOM Atribute------- 
//----create Atribute for Element
//co 2 cach de create 1 Atribute
//c1: su dung goi den property
//create id: element.id = 'name id';
//c2: sư dung method 
//setAtribute('Atribute name', 'Atribute');
//vd: element.setAtribute('id', 'myId');
//-----take Atribute-----
//co 2 cach de take 1 Atribute
//c1: su dung goi den perroperty
//vd take id: element.id;
//c2: su dung method
//getAtribute('Atribute name')
//var myElement = document.querySelector('div #myH1');
//vd: myElement.getAtribute('title');
//DOM Text
//------------innerText and text content
//---take text of element 
//(element.innerText or contentText)
//vd: document.querySelector('h1').innerText
//or: document.querySelector('h2').contentText
//--- set text ò element
//vd: document.querySelector('h3').innerText = 'Heading'
//-------Create Element with Atribute and Text
//NOTE: Một số thuộc thuộc tính quan trọng của Element node
/*1. Atribute -> return NameNodeMap (tg tự Array)
NameNodeMap gồm tất cả atribute of Element */