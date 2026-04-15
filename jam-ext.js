function updateJam() {
    let sekarang = new Date();


    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    jam = jam < 10 ? "0" + jam : jam;
    menit = menit < 10 ? "0" + menit : menit;
    detik = detik < 10 ? "0" + detik : detik;

    let daftarHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let daftarBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    let namaHari = daftarHari[sekarang.getDay()];
    let tanggal = sekarang.getDate();
    let namaBulan = daftarBulan[sekarang.getMonth()];
    let tahun = sekarang.getFullYear();

    let pasaran = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"];

    let epoch = new Date(1970, 0, 1)
    let selisihhari = Math.floor((sekarang - epoch) / (1000 * 60 * 60 * 24));

    let indekspasaran = selisihhari % 5;


    let tampilTanggal = namaHari + " " + pasaran[indekspasaran] + ", "+ tanggal + " " + namaBulan + " " + tahun;
    let tampilJam = jam + ":" + menit + ":" + detik;

   
    document.getElementById("tanggal").innerText = tampilTanggal;
    document.getElementById("jam").innerText = tampilJam;
}

// Jalankan fungsi setiap 1 detik
setInterval(updateJam, 1000);

// Jalankan fungsi langsung saat halaman dimuat
updateJam();