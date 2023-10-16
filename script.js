function malumotniKorsat() {
    var malumot = document.getElementById("malumotInput").value;
    var surat = document.getElementById("suratInput").files[0];

    var infoElement = document.getElementById("info");

    if (malumot && surat) {
        // Agar malumot va surat mavjud bo'lsa
        var info = "Kiritilgan malumot: " + malumot;
        infoElement.textContent = info;

        // Suratni yuklash
        var suratReader = new FileReader();
        suratReader.onload = function(event) {
            var suratUrl = event.target.result;
            var suratElement = document.createElement("img");
            suratElement.src = suratUrl;
            suratElement.alt = "Surat";
            document.body.appendChild(suratElement);
        };
        suratReader.readAsDataURL(surat);
    } else {
        // Agar malumot yoki surat kiritilmagan bo'lsa
        infoElement.textContent = "Iltimos, malumotni va suratni kiriting.";
    }
}
