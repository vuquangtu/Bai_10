// // Bài 1: Viết chương trình hiển thị chuỗi “The number is N” 5 lần sử dụng vòng lặp for. Với N sẽ hiển thị từ 0 đến 5.
// let i;
// for (i = 0; i <= 5; i++) {
//   document.write("The number is " + i + "<br>");
// }

// //Bài 2: Viết chương trình nhập vào một số bất kỳ lớn hơn 0. Tính tổng các phần tử từ 1 đến số vừa nhập vào.
// let a = prompt("hãy nhập số a lớn hơn 0");
// let tong = 0;
// let kiemTra = a > 0;
// if (kiemTra) {
//   for (let i = 1; i <= a; i++) {
//     tong = tong + i;
//   }
//   document.write("tổng các số từ 0 tới a là = " + tong);
// } else {
//   alert("hãy nhập lại số lớn hơn 0");
// }

// // Bài 3: Viết chương trình nhận vào một số từ hộp thoại, việc nhập kết thúc khi người dùng nhập vào giá trị -1. Mỗi giá trị nhập được sẽ được hiển thị ra và thực hiện tính tổng các giá trị đó.
// let nhapSo = +prompt("moi ban nhap gia tri");
// let tong = 0;
// while (nhapSo != -1) {
//   tong = tong + nhapSo;
//   nhapSo = +prompt("moi ban nhap gia tri");
// }
// alert("tong cua tat ca cac so la " + tong);

// // Bài 2: Viết chương hình hiển thị thẻ <hr> theo độ rộng từ 1 đến 100. Kết quả sẽ được hiển thị như hình

// let i = 1;
// while (i <= 100) {
//   document.write("<hr width = " + i + "<br>");
//   i = i + 1;
// }

// bài 4 Sử dụng vòng lặp do while để viết lại chương trình yêu cầu nhập các số từ 1 -> 10 ở ví dụ trong phần vòng lặp while.

// let tong = 0;

// do {
//   num = +prompt("mời bạn nhập số");
//   tong += num;
// } while ((num >= 1) & (num <= 10));
// document.write("tổng các số từ 1 tới 10 bạn vừa nhập là " + tong);

// document.write("");

// for (i = 1; i <= 10; i++) {
//   for (r = 1; r <= 10; r++) {
//     document.write("<tr>" + r * i + " <tr>");
//   }
//   document.write("<br>");
// }
// document.write("<table border= 2 >");
// for (r = 1; r <= 10; r++) {
//   document.write("<tr>");
//   for (i = 1; i <= 10; i = i + 1) {
//     document.write("<td>" + i * r + "</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table>");
