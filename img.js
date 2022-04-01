function changeImage(id) {
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src', imagePath);
}
// imagePath là 1 Object
// src là tên thuộc tính
// imagePath là để gán giá trị mặc 
//  getAttribute để lấy ra attribute của thẻ và setAttribute để thêm attribute cho thẻ.
// attribute là 1 thuộc tính