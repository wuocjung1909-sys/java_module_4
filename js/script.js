/* 1. Hàm kích hoạt khi rê chuột qua ảnh xem trước (hover) */
function upDate(previewPic) {
  // a. Kiểm tra sự kiện hoạt động trong Console
  console.log("Sự kiện hover đã được kích hoạt!");

  // b. In thông tin alt và src của ảnh đang được hover
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  // Lấy thẻ có id là 'image'
  const imageDiv = document.getElementById("image");

  // c. Thay đổi văn bản hiển thị thành alt của ảnh preview
  imageDiv.innerHTML = previewPic.alt;

  // e. Thay đổi ảnh nền (background-image) thành src của ảnh preview
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* 2. Hàm kích hoạt khi di chuột ra khỏi ảnh xem trước */
function undo() {
  const imageDiv = document.getElementById("image");

  // a. Khôi phục lại background-image ban đầu
  imageDiv.style.backgroundImage = "url('')";

  // b. Khôi phục lại văn bản ban đầu
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
/* Hàm cập nhật ảnh lớn khi di chuột hoặc Focus qua phím Tab */
function upDate(previewPic) {
    console.log("Event triggered: upDate");
    console.log("Source: " + previewPic.src);
    console.log("Alt text: " + previewPic.alt);

    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

/* Hàm khôi phục lại trạng thái ban đầu khi rời chuột hoặc Blur */
function undo() {
    console.log("Event triggered: undo");

    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

/* Hàm tự động thêm tabindex cho từng hình ảnh khi trang được tải */
function addTabFocus() {
    console.log("Page loaded: addTabFocus executed");

    const images = document.querySelectorAll('.preview');

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}