document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // 1. สร้างรายการ User ที่อนุญาตให้เข้าใช้งาน
    const users = [
        { u: "65017", p: "65017" },    // คนที่ 1
        { u: "65016", p: "65016" },  // คนที่ 2
        { u: "admin", p: "1234" },
        { u: "67001", p: "67001" } // คนที่ 3 (เพิ่มต่อได้เรื่อยๆ)
    ];

    // 2. ตรวจสอบว่า User และ Password ที่พิมพ์มา ตรงกับในรายการไหม
    const foundUser = users.find(item => item.u === user && item.p === pass);

    if (foundUser) {
        // บันทึกสถานะการล็อคอิน (ถ้าคุณใช้ระบบป้องกันการแอบเข้า)
        sessionStorage.setItem("isLoggedIn", "true");
        // ไปที่หน้าหลัก
        window.location.href = "main.html"; 
    } else {
        // ถ้าไม่เจอ หรือรหัสผิด
        errorMsg.textContent = "Username หรือ Password ไม่ถูกต้อง!";
    }
});