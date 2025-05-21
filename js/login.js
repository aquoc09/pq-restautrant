let listAccounts = [];

function loadAccountData() {
    //Fetch dữ liệu từ file json
    fetch('../data/Accounts.json')
        .then((response) => response.json())
        .then((response) => {
            listAccounts = response;
        });
}

function verifyLogin() {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();

        var usernameErrorMessage = document.getElementById('usernameErrorMessage');
        var passwordErrorMessage = document.getElementById('passwordErrorMessage');

        var userRegex = /^[0-9a-zA-Z]{4,}$/;
        var passwordRegex = /^.{4,}$/;

        var isValid = true;

        if (!userRegex.test(username)) {
            usernameErrorMessage.innerHTML = 'Tài khoản không được có kí tự đặc biệt!';
            isValid = false;
        } else {
            usernameErrorMessage.innerHTML = '';
        }

        if (!passwordRegex.test(password)) {
            passwordErrorMessage.innerHTML = 'Mật khẩu phải dài hơn 4 kí tự!';
            isValid = false;
        } else {
            passwordErrorMessage.innerHTML = '';
        }

        if (isValid) {
            //Hiển thị modal thông báo đã đăng nhập thành công
            const btn_modal = document.getElementById('btnModal');
            btn_modal.click();
            const title = document.getElementById('title-text-modal');

            var account = {
                username: username,
                password: password
            };

            var matchedAccount = false;

            for(var acc of listAccounts){
                if(acc.username === account.username && acc.password === account.password){
                    matchedAccount = true;
                    break;
                }
            }

            if (matchedAccount) {
                title.innerHTML = 'Đã đăng nhập thành công';
                window.location.href = '../index.html?id=' + username;
            } else {
                title.innerHTML = 'Sai tài khoản hoặc mật khẩu';
            }
        }
    });
}

function verifyRegister() {
    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();
        var confirmPassword = document.getElementById('confirmPassword').value.trim();
        var fullName = document.getElementById('fullName').value.trim();
        var phone = document.getElementById('phone').value.trim();

        var usernameErrorMessage = document.getElementById('usernameErrorMessage');
        var passwordErrorMessage = document.getElementById('passwordErrorMessage');
        var confirmPasswordErrorMessage = document.getElementById('confirmPasswordErrorMessage');
        var fullNameErrorMessage = document.getElementById('fullNameErrorMessage');
        var phoneErrorMessage = document.getElementById('phoneErrorMessage');

        var userRegex = /^[0-9a-zA-Z]{4,}$/;
        var passwordRegex = /^.{4,}$/;
        var fullNameRegex = /[a-zA-Z]/;
        var phoneRegex = /^[0-9]{10,}$/;

        var isValid = true;

        if (!userRegex.test(username)) {
            usernameErrorMessage.innerHTML = 'Tài khoản không được có kí tự đặc biệt!';
            isValid = false;
        } else {
            usernameErrorMessage.innerHTML = '';
        }

        if (!passwordRegex.test(password)) {
            passwordErrorMessage.innerHTML = 'Mật khẩu phải dài hơn 4 kí tự!';
            isValid = false;
        } else {
            passwordErrorMessage.innerHTML = '';
        }

        if (!passwordRegex.test(confirmPassword)) {
            confirmPasswordErrorMessage.innerHTML = 'Mật khẩu phải dài hơn 4 kí tự!';
            isValid = false;
        } else {
            confirmPasswordErrorMessage.innerHTML = '';
        }

        if (!fullNameRegex.test(fullName)) {
            fullNameErrorMessage.innerHTML = 'Tên không hợp lệ';
            isValid = false;
        } else {
            fullNameErrorMessage.innerHTML = '';
        }

        if (!phoneRegex.test(phone)) {
            phoneErrorMessage.innerHTML = 'SĐT phải có đủ 10 chữ số!';
            isValid = false;
        } else {
            phoneErrorMessage.innerHTML = '';
        }

        if (isValid) {
            //Hiển thị modal thông báo đã đăng kí thành công
            const btn_modal = document.getElementById('btnModal');
            btn_modal.click();
            const title = document.getElementById('title-text-modal');

            title.innerHTML = 'Đã đăng kí thành công';
        }
        this.reset()
    });
}

loadAccountData()
