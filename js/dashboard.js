const menu_bar = document.querySelector('.menu-bar');
const admin_navigation = document.querySelector('.admin-navigation');
const image_uploaded = document.querySelector('.image-uploaded');
menu_bar.addEventListener('click', function () {
  admin_navigation.classList.toggle('show');
});


const btn_upload = document.querySelector('.btn-upload');
const file = document.getElementById('file');
//Nêu có button upload
if (btn_upload)
  btn_upload.addEventListener('click', function () {
    file.click();
  });

//Nếu có input file upload
if (file)
  file.addEventListener('change', updateImageDisplay);
/**
 * Hàm này hiển thị hình ảnh sau khi upload ảnh
 */
function updateImageDisplay() {
  const curFiles = file.files; //File upload
  const imageUpload_icon = document.querySelector('.imageUpload-icon')
  const btn_upload = document.querySelector('.btn-upload')
  const imageUpload_description = document.querySelector('.imageUpload-description')
  image_uploaded.src = URL.createObjectURL(curFiles[0]); //Tạo url cho file upload và gán vào img
  image_uploaded.style.opacity = 1;
  //Ẩn nút upload và thông tin upload
  imageUpload_icon.style = 'visibility:hidden;'
  btn_upload.style = 'visibility:hidden;'
  imageUpload_description.style = 'visibility:hidden;'
}
//Nếu có hình upload khi click vào hình thì cho upload hình khác
if (image_uploaded)
  image_uploaded.addEventListener('click', function () {
    file.click();
  });

// Xử lý khi submit form của add food
function saveFood() {
  document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Lấy dữ liệu từ form
    const name = document.getElementById('name').value.trim();
    const price = parseFloat(document.getElementById('price').value);
    const menuCategory = document.getElementById('menuCategory').value;
    const comboCategory = document.getElementById('comboCategory').value;
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    // Dùng FileReader để đọc ảnh (nếu có)
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const product = {
          id: Date.now(),
          name: name,
          price: price,
          menuCategory: menuCategory,
          comboCategory: comboCategory,
          img: e.target.result // Dữ liệu ảnh dạng base64
        };
      };
      reader.readAsDataURL(file); // Đọc file ảnh
    } else {
      // Nếu không có ảnh
      const product = {
        id: Date.now(),
        name: name,
        price: price,
        menuCategory: menuCategory,
        comboCategory: comboCategory,
        img: null
      };
    }
    //Hiển thị modal thông báo đã thêm thành công
      const btn_modal = document.getElementById('btnModal');
      btn_modal.click();
      const title = document.getElementById('title-text-modal');
      const food_combo = document.getElementById('text-modal');
      title.innerHTML = 'Đã thêm food/combo thành công';
      food_combo.innerHTML = name;
  });
}

// Xử lý khi submit form của add category
function saveCategory() {
  document.getElementById('categoryForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Lấy dữ liệu từ form
    const name = document.getElementById('name').value.trim();
    var description = document.getElementById('description').value.trim();
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    // Dùng FileReader để đọc ảnh (nếu có)
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const product = {
          id: Date.now(),
          name: name,
          description : description,
          img: e.target.result // Dữ liệu ảnh dạng base64
        };
      };
      reader.readAsDataURL(file); // Đọc file ảnh
    } else {
      // Nếu không có ảnh
      const product = {
        id: Date.now(),
        name: name,
        description : description,
        img: null
      };
    }
    //Hiển thị modal thông báo đã thêm thành công
      const btn_modal = document.getElementById('btnModal');
      btn_modal.click();
      const title = document.getElementById('title-text-modal');
      const food_combo = document.getElementById('text-modal');
      title.innerHTML = 'Đã thêm danh mục thành công';
      food_combo.innerHTML = name;
  });
}
