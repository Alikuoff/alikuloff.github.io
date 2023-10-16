function registerUser() {
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    var registrationMessage = document.getElementById("registration-message");

    // Bu erda foydalanuvchining login va parolni saqlash logikasi joylashadi
    // Masalan, localStorage obyektini ishlatib, foydalanuvchining ma'lumotlarini saqlaymiz
    localStorage.setItem(newUsername, newPassword);
    
    registrationMessage.style.color = "green";
    registrationMessage.textContent = "Muvaffaqiyatli ro'yxatdan o'tdingiz! Iltimos,  login sahifasiga o'ting.";
}
