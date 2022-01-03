// Sắp Xếp Số Nguyên

function sapXep() {
  var soNguyenMotEl = document.getElementById("soNguyenMot").value * 1;
  var soNguyenHaiEl = document.getElementById("soNguyenHai").value * 1;
  var soNguyenBaEl = document.getElementById("soNguyenBa").value * 1;

  if (
    soNguyenMotEl == soNguyenHaiEl ||
    soNguyenMotEl == soNguyenBaEl ||
    soNguyenHaiEl == soNguyenBaEl
  ) {
    document.getElementById("spanSapXep").innerHTML =
      "Vui Lòng Nhập 3 Số Nguyên Khác Nhau";
    document.getElementById("divSapXep").style.display = "block";
    alert("Vui Lòng Nhập 3 Số Nguyên Khác Nhau");
  }
  if (
    soNguyenMotEl > soNguyenHaiEl &&
    soNguyenMotEl > soNguyenBaEl &&
    soNguyenHaiEl > soNguyenBaEl
  ) {
    document.getElementById("spanSapXep").innerHTML =
      soNguyenBaEl + " " + soNguyenHaiEl + " " + soNguyenMotEl;
    document.getElementById("divSapXep").style.display = "block";
    alert(
      "Thứ Tựa là: " + soNguyenBaEl + " " + soNguyenHaiEl + " " + soNguyenMotEl
    );
  }
  if (
    soNguyenMotEl > soNguyenHaiEl &&
    soNguyenMotEl > soNguyenBaEl &&
    soNguyenBaEl > soNguyenHaiEl
  ) {
    document.getElementById("spanSapXep").innerHTML =
      soNguyenHaiEl + " " + soNguyenBaEl + " " + soNguyenMotEl;
    document.getElementById("divSapXep").style.display = "block";
    alert(
      "Thứ Tựa là: " + soNguyenHaiEl + " " + soNguyenBaEl + " " + soNguyenMotEl
    );
  }
  if (
    soNguyenHaiEl > soNguyenMotEl &&
    soNguyenHaiEl > soNguyenBaEl &&
    soNguyenMotEl > soNguyenBaEl
  ) {
    document.getElementById("spanSapXep").innerHTML =
      soNguyenBaEl + " " + soNguyenMotEl + " " + soNguyenHaiEl;
    document.getElementById("divSapXep").style.display = "block";
    alert(
      "Thứ Tựa là: " + soNguyenBaEl + " " + soNguyenMotEl + " " + soNguyenHaiEl
    );
  }
  if (
    soNguyenHaiEl > soNguyenMotEl &&
    soNguyenHaiEl > soNguyenBaEl &&
    soNguyenMotEl < soNguyenBaEl
  ) {
    document.getElementById("spanSapXep").innerHTML =
      soNguyenMotEl + " " + soNguyenBaEl + " " + soNguyenHaiEl;
    document.getElementById("divSapXep").style.display = "block";
    alert(
      "Thứ Tựa là: " + soNguyenMotEl + " " + soNguyenBaEl + " " + soNguyenHaiEl
    );
  }
  if (
    soNguyenBaEl > soNguyenMotEl &&
    soNguyenBaEl > soNguyenHaiEl &&
    soNguyenMotEl > soNguyenHaiEl
  ) {
    document.getElementById("spanSapXep").innerHTML =
      soNguyenHaiEl + " " + soNguyenMotEl + " " + soNguyenBaEl;
    document.getElementById("divSapXep").style.display = "block";
    alert(
      "Thứ Tựa là: " + soNguyenHaiEl + " " + soNguyenMotEl + " " + soNguyenBaEl
    );
  }
  if (
    soNguyenBaEl > soNguyenMotEl &&
    soNguyenBaEl > soNguyenHaiEl &&
    soNguyenMotEl < soNguyenHaiEl
  ) {
    document.getElementById("spanSapXep").innerHTML =
      soNguyenMotEl + " " + soNguyenHaiEl + " " + soNguyenBaEl;
    document.getElementById("divSapXep").style.display = "block";
    alert(
      "Thứ Tựa là: " + soNguyenMotEl + " " + soNguyenHaiEl + " " + soNguyenBaEl
    );
  }
}

// Chương Trình Chào Hỏi

function xacNhan() {
  var nhanVat = document.getElementById("dropDown").value;
  switch (nhanVat) {
    case "B":
      alert("Hello Bố");
      break;
    case "M":
      alert("Hello Mẹ");
      break;
    case "A":
      alert("Hello Anh Trai");
      break;
    case "E":
      alert("Hello Em Gái");
      break;
    default:
      alert("Mời Chọn Lại");
  }
}

// Bao Nhiêu Số Chẵn, Bao Nhiêu Số Lẻ

function tinh() {
  var soNguyenDuongMotEl =
    (document.getElementById("soNguyenDuongMot").value * 1) % 2;
  var soNguyenDuongHaiEl =
    (document.getElementById("soNguyenDuongHai").value * 1) % 2;
  var soNguyenDuongBaEl =
    (document.getElementById("soNguyenDuongBa").value * 1) % 2;

  if (
    soNguyenDuongMotEl == 0 &&
    soNguyenDuongHaiEl == 0 &&
    soNguyenDuongBaEl == 0
  ) {
    alert("Có 3 Số Chẵn");
  } else if (
    (soNguyenDuongMotEl == 0 &&
      soNguyenDuongHaiEl == 0 &&
      soNguyenDuongBaEl != 0) ||
    (soNguyenDuongMotEl == 0 &&
      soNguyenDuongHaiEl != 0 &&
      soNguyenDuongBaEl == 0) ||
    (soNguyenDuongMotEl != 0 &&
      soNguyenDuongHaiEl == 0 &&
      soNguyenDuongBaEl == 0)
  ) {
    alert("Có 2 Số Chẵn Và 1 Số Lẻ");
  } else if (
    (soNguyenDuongMotEl == 0 &&
      soNguyenDuongHaiEl != 0 &&
      soNguyenDuongBaEl != 0) ||
    (soNguyenDuongMotEl != 0 &&
      soNguyenDuongHaiEl != 0 &&
      soNguyenDuongBaEl == 0) ||
    (soNguyenDuongMotEl != 0 &&
      soNguyenDuongHaiEl == 0 &&
      soNguyenDuongBaEl != 0)
  ) {
    alert("Có 1 Số Chẵn Và 2 Số Lẻ");
  } else {
    alert("Có 3 Số Lẻ");
  }
}

// Chương Trình Tìm Tam Giác

function timTamGiac() {
  var canhMotEl = document.getElementById("canhMot").value * 1;
  var canhHaiEl = document.getElementById("canhHai").value * 1;
  var canhBaEl = document.getElementById("canhBa").value * 1;

  if (canhBaEl <= 0 || canhHaiEl <= 0 || canhMotEl <= 0) {
    alert("Vui Lòng Nhập Số Lớn Hơn 0");
  } else if (
    canhMotEl * canhMotEl + canhHaiEl * canhHaiEl == canhBaEl * canhBaEl ||
    canhMotEl * canhMotEl + canhBaEl * canhBaEl == canhHaiEl * canhHaiEl ||
    canhBaEl * canhBaEl + canhHaiEl * canhHaiEl == canhMotEl * canhMotEl
  ) {
    alert("Đây Là Tam Giác Vuông");
  } else if (
    canhMotEl == canhHaiEl &&
    canhHaiEl == canhBaEl &&
    canhBaEl == canhMotEl
  ) {
    alert("Đây Là Tam Giác Đều");
  } else if (
    canhMotEl == canhHaiEl ||
    canhBaEl == canhMotEl ||
    canhHaiEl == canhBaEl
  ) {
    alert("Đây Là Tam Giác Cân");
  } else {
    alert("Đây Là Tam Giác Thường");
  }
}
