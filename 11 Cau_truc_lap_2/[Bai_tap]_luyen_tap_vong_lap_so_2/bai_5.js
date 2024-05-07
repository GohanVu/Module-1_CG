//Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con)
// khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.

function tinhLaiNganHang (tienBanDau,thangChoVay,laiXuatNganHang){
    let lai = tienBanDau * laiXuatNganHang/100;
    let tongTien = tienBanDau + lai * thangChoVay;
    return tongTien ;
}

let soTienBanDau = +prompt("Nhap so tien ban dau: ");
let soThangChoVay = +prompt("So thang cho vay: ");
let laiXuat = +prompt("Nhap lai xuat ngan hang (vd: 20=20%, 7=7%,..): ")

let ketqua = tinhLaiNganHang(soTienBanDau,soThangChoVay,laiXuat);
document.write("Tong tien ngan hang lai sau "+soThangChoVay+" thang cho vay la: "+ ketqua)