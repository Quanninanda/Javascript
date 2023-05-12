inputLy = prompt("Nhap diem ly");
inputHoa = prompt("Nhap diem hoa");
inputSinh = prompt("Nhap diem sinh");
let Ly = parseInt(inputLy);
let Hoa = parseInt(inputHoa);
let Sinh = parseInt(inputSinh);
let Sum = Ly + Hoa + Sinh;
document.write("The sum is " + Sum + '<br/>');
let Average = (Ly + Hoa + Sinh)/3;
document.write("The Average is " + Average);


