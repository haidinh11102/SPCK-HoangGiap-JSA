// Đăng nhập dựng
const hardcodedUsername = "admin";
const hardcodedPassword = "123456";

// Xử lý form khi người dùng ấn nút "Đăng nhập"
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn submit form mặc định

        // Lấy giá trị người dùng nhập vào
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra nếu tên đăng nhập và mật khẩu đúng
    if (username === hardcodedUsername && password === hardcodedPassword) {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
    // Thực hiện các hành động sau khi đăng nhập thành công, ví dụ: chuyển hướng tới trang khác
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại!");
    }
});
