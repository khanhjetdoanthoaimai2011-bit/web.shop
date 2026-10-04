let str1 = "hai con than lan can nhau dut duoi";
let str2 = str1.split(" ");
let ketqua = "";
for (let word of str2) { ketqua += word[0].toUpperCase() + word.slice(1) + " "; }
console.log(ketqua);
