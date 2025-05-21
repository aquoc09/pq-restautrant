function loadUserHeader(flag) {
    const queryString = window.location.search;  // ví dụ: ?id=admin

    // Tạo đối tượng URLSearchParams để dễ thao tác
    const urlParams = new URLSearchParams(queryString);

    // Lấy giá trị param "id"
    var username = urlParams.get('id');

    var user_header = document.getElementById('user-header');

    if (flag == 1) {
        if (username == null) {
            user_header.innerHTML = `
            <a href="./header-site/register-form.html"><i class="bi-person-plus"></i>Đăng kí</a>
            <a href="./header-site/login-form.html"><i class="bi bi-person-circle"></i>Đăng nhập</a>`;
        } else if (username == 'admin') {
            user_header.innerHTML = `
            <a href="#" id="log-out" onclick="logoutConfirm(true)"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
            <a href="./header-site/user-form.html"><i class="bi bi-person-circle"></i>Tài khoản</a>
            <a href="./dashboard.html"><i class="bi bi-person-gear"></i>Admin</a>`;
        } else {
            user_header.innerHTML = `
            <a href="./index.html"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
            <a href="./header-site/user-form.html"><i class="bi bi-person-circle"></i>Tài khoản</a>`;
        }
    } else {
        if (username == null) {
            user_header.innerHTML = `
            <a href="../header-site/register-form.html"><i class="bi-person-plus"></i>Đăng kí</a>
            <a href="../header-site/login-form.html"><i class="bi bi-person-circle"></i>Đăng nhập</a>`;
        } else if (username == 'admin') {
            user_header.innerHTML = `
            <a href="#" id="log-out" onclick="logoutConfirm(false)"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
            <a href="../header-site/user-form.html"><i class="bi bi-person-circle"></i>Tài khoản</a>
            <a href="../dashboard.html"><i class="bi bi-person-gear"></i>Admin</a>`;
        } else {
            user_header.innerHTML = `
            <a href="../index.html"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
            <a href="../header-site/user-form.html"><i class="bi bi-person-circle"></i>Tài khoản</a>`;
        }
    }

}

function logoutConfirm(valid) {
    var logout = document.getElementById('log-out')

    var flag = confirm('Bạn chắc chắn muốn đăng xuất chứ?');
    var isValid = valid;

    if (flag && valid) {
        window.location.href = "./index.html";
    } else {
        window.location.href = "../index.html";
    }
}