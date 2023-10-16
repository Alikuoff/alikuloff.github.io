function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Bu erda foydalanuvchining login va parolni tekshirish logikasi joylashadi
    // Masalan, dastlabki kirish sifatida "admin" va "password" ni qo'llaymiz
    if (username === "A" && password === "F") {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login muvaffaqiyatli o'tkazildi!";
        // Foydalanuvchining ma'lumotlarini brauzer xotirasiga saqlash
        localStorage.setItem("username", username);
        // Bu yerni sahifani boshqa joyga yo'naltirish uchun kerak bo'lsa saqlang
         window.location.href = "index.html";
    } else {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Noto'g'ri login yoki parol, iltimos qayta urinib ko'ring.";
    }
}

function redirectToRegistration() {
    // Foydalanuvchini ro'yxatdan o'tkazish uchun boshqa sahifaga yo'naltiramiz
    window.location.href = "registration.html";
}

window.onload = function() {
    var savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
    }
};
