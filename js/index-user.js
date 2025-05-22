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
            <a href="./header-site/user-form.html?id=`+ username + `"><i class="bi bi-person-circle"></i>Tài khoản</a>
            <a href="./dashboard.html"><i class="bi bi-person-gear"></i>Admin</a>`;
        } else {
            user_header.innerHTML = `
            <a href="./index.html"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
            <a href="./header-site/user-form.html?id=`+ username + `"><i class="bi bi-person-circle"></i>Tài khoản</a>`;
        }
    } else {
        if (username == null) {
            user_header.innerHTML = `
            <a href="../header-site/register-form.html"><i class="bi-person-plus"></i>Đăng kí</a>
            <a href="../header-site/login-form.html"><i class="bi bi-person-circle"></i>Đăng nhập</a>`;
        } else if (username == 'admin') {
            user_header.innerHTML = `
            <a href="#" id="log-out" onclick="logoutConfirm(false)"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
            <a href="../header-site/user-form.html?id=`+ username + `"><i class="bi bi-person-circle"></i>Tài khoản</a>
            <a href="../dashboard.html"><i class="bi bi-person-gear"></i>Admin</a>`;
        } else {
            user_header.innerHTML = `
            <a href="../index.html"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
            <a href="../header-site/user-form.html?id=`+ username + `"><i class="bi bi-person-circle"></i>Tài khoản</a>`;
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

function loadHeaderMenu(flag) {
    const queryString = window.location.search;  // ví dụ: ?id=admin

    // Tạo đối tượng URLSearchParams để dễ thao tác
    const urlParams = new URLSearchParams(queryString);

    // Lấy giá trị param "id"
    var username = urlParams.get('id');

    var header_menu = document.getElementById('header-menu');

    if (flag == 1) {
        if (username == null) {
            username = '';
            header_menu.innerHTML =
                `
            <!-- Logo -->
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <div class="logo"></div>
                </a>

                <div class="hmenu navbar-expand-lg d-none d-lg-block">
                    <ul class="navbar-nav flex-row">
                    <li class="nav-item">
                        <a class="nav-link" href="./menu-site/saleoff.html">Ưu Đãi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./menu-site/order.html">Thực Đơn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./menu-site/booktable.html">Đặt Bàn</a>
                    </li>
                    </ul>
                </div>

                <!-- Toggle button (hamburger menu) -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar links -->
                <div class="collapse navbar-collapse justify-content-center" id="mainNavbar">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="./menu-site/saleoff.html">Ưu Đãi</a>
                        </li>
                        <!-- Dropdown menu for Thực Đơn -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="orderDropdown" 
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thực Đơn
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="orderDropdown">
                                <li><a class="dropdown-item" href="./menu-site/order.html">Gọi Món</a></li>
                                <li><a class="dropdown-item" href="./menu-site/bento.html">Combo</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./menu-site/booktable.html">Đặt Bàn</a>
                        </li>
                        <li>
                            <a class="nav-link" href="./menu-site/about-site.html">Về chúng tôi</a>
                        </li>
                    </ul>
                </div>
                `;
        } else {
            header_menu.innerHTML =
                `
            <!-- Logo -->
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <div class="logo"></div>
                </a>

                <div class="hmenu navbar-expand-lg d-none d-lg-block">
                    <ul class="navbar-nav flex-row">
                    <li class="nav-item">
                        <a class="nav-link" href="./menu-site/saleoff.html?id=`+ username + `">Ưu Đãi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./menu-site/order.html?id=`+ username + `">Thực Đơn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./menu-site/booktable.html?id=`+ username + `">Đặt Bàn</a>
                    </li>
                    </ul>
                </div>

                <!-- Toggle button (hamburger menu) -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar links -->
                <div class="collapse navbar-collapse justify-content-center" id="mainNavbar">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="./menu-site/saleoff.html?id=`+ username + `">Ưu Đãi</a>
                        </li>
                        <!-- Dropdown menu for Thực Đơn -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="orderDropdown" 
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thực Đơn
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="orderDropdown">
                                <li><a class="dropdown-item" href="./menu-site/order.html?id=`+ username + `">Gọi Món</a></li>
                                <li><a class="dropdown-item" href="./menu-site/bento.html?id=`+ username + `">Combo</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./menu-site/booktable.html?id=`+ username + `">Đặt Bàn</a>
                        </li>
                        <li>
                            <a class="nav-link" href="./menu-site/about-site.html?id=`+ username + `">Về chúng tôi</a>
                        </li>
                    </ul>
                </div>
                `;
        }
    } else {
        if (username == null) {
            username = '';
            header_menu.innerHTML =
                `
            <!-- Logo -->
                <a class="navbar-brand d-flex align-items-center" href="../index.html">
                    <div class="logo"></div>
                </a>

                <div class="hmenu navbar-expand-lg d-none d-lg-block">
                    <ul class="navbar-nav flex-row">
                    <li class="nav-item">
                        <a class="nav-link" href="../menu-site/saleoff.html">Ưu Đãi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../menu-site/order.html">Thực Đơn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../menu-site/booktable.html">Đặt Bàn</a>
                    </li>
                    </ul>
                </div>

                <!-- Toggle button (hamburger menu) -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar links -->
                <div class="collapse navbar-collapse justify-content-center" id="mainNavbar">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="../menu-site/saleoff.html">Ưu Đãi</a>
                        </li>
                        <!-- Dropdown menu for Thực Đơn -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="orderDropdown" 
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thực Đơn
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="orderDropdown">
                                <li><a class="dropdown-item" href="../menu-site/order.html">Gọi Món</a></li>
                                <li><a class="dropdown-item" href="../menu-site/bento.html">Combo</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../menu-site/booktable.html">Đặt Bàn</a>
                        </li>
                        <li>
                            <a class="nav-link" href="../menu-site/about-site.html">Về chúng tôi</a>
                        </li>
                    </ul>
                </div>
                `;
        } else {
            header_menu.innerHTML =
                `
            <!-- Logo -->
                <a class="navbar-brand d-flex align-items-center" href="../index.html?id=`+ username + `">
                    <div class="logo"></div>
                </a>

                <div class="hmenu navbar-expand-lg d-none d-lg-block">
                    <ul class="navbar-nav flex-row">
                    <li class="nav-item">
                        <a class="nav-link" href="../menu-site/saleoff.html?id=`+ username + `">Ưu Đãi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../menu-site/order.html?id=`+ username + `">Thực Đơn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../menu-site/booktable.html?id=`+ username + `">Đặt Bàn</a>
                    </li>
                    </ul>
                </div>

                <!-- Toggle button (hamburger menu) -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar links -->
                <div class="collapse navbar-collapse justify-content-center" id="mainNavbar">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="../menu-site/saleoff.html?id=`+ username + `">Ưu Đãi</a>
                        </li>
                        <!-- Dropdown menu for Thực Đơn -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="orderDropdown" 
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thực Đơn
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="orderDropdown">
                                <li><a class="dropdown-item" href="../menu-site/order.html?id=`+ username + `">Gọi Món</a></li>
                                <li><a class="dropdown-item" href="../menu-site/bento.html?id=`+ username + `">Combo</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../menu-site/booktable.html?id=`+ username + `">Đặt Bàn</a>
                        </li>
                        <li>
                            <a class="nav-link" href="../menu-site/about-site.html?id=`+ username + `">Về chúng tôi</a>
                        </li>
                    </ul>
                </div>
                `;
        }
    }
}