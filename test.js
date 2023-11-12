let d = prompt("hãy nhập điểm của bạn ");
if (d >= 0 && d <= 10) {
  if (d < 5) {
    alert("không đạt");
    if (d < 7) {
      alert("đạt");
      if (d >= 7) {
        alert("Tốt");
      }
    }
  }
} else {
  alert("mời bạn hãy nhập điểm từ 0 tới 10");
}
