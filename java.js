var index = 1;
changeImage = function() {
    var imgs = ["anh/r2.jpg", "anh/r4.png", "anh/r5.jpeg", "anh/rn.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if (index == 4) {
        index = 0;
    }
}
setInterval(changeImage, 1000)
    // changeImage dùng đẻ thay đổi nguồn  ảnh