window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
  };
  
  function calculateBMI() {
    let tinggi = parseInt(document.querySelector("#tinggi").value);
    let berat = parseInt(document.querySelector("#berat").value);
    let total = document.querySelector("#total");
  
    //   hasil belum terisi
    if (berat === "" || isNaN(berat)) {
      total.innerHTML = "berat badan belum di isi!";
      total.style.color = "red";
    } else if (tinggi === "" || isNaN(tinggi)) {
      total.innerHTML = "tinggi badan belum di isi!";
      total.style.color = "red";
    }
    // hasil terisi
    else {
      // jumlah
      let bmi = (berat / ((tinggi * tinggi) / 10000)).toFixed(2);
  
      // kondisi
      if (bmi < 18.6) {
        total.innerHTML = `${bmi}`;
        total.style.color = "pink";
        totalHasil.innerHTML = `kurang`;
        hasilBerat.innerHTML = `Berat Badan Kurang`;
        judulDeskripsi.innerHTML = `kurang dari 18,5`;
        deskripsi.innerHTML = `anda berada dalam kategori <b>Underweight atau Berat Badan Kurang</b> Cara terbaik untuk menaikan
        berat badan adalah dengan memakan makanan yang bernutrisi dan
        padat kalori. Jika BMI anda berada dalam kategori ini maka anda
        dianjurkan untuk menaikan berat badan hingga batas normal.`;
        judulPenyakit.innerHTML = `Beberapa penyakit berasal dari <br>Kekurangan Berat Badan`;
        penyakit.innerHTML = `<li>Malnutrisi</li>
        <li>Kekebalan Tubuh turun</li>
        <li>Osteoporosis</li>
        <li>Keterlambatan Perkembangan</li>`;
      } else if (bmi >= 18.6 && bmi < 24.9) {
        total.innerHTML = `${bmi}`;
        total.style.color = "green";
        totalHasil.innerHTML = `Normal`;
        hasilBerat.innerHTML = `Berat Badan Normal`;
        judulDeskripsi.innerHTML = `Hasil BMI diantara 18.5 - 24.9`;
        deskripsi.innerHTML = `anda berada dalam kategori <b>Berat Badan Normal</b> Cara terbaik untuk menjaga
        berat badan adalah Kurangi cemilan tinggi GGL dan mengkonsumsi lebih banyak buah dan sayur dan
        Lakukan aktivitas fisik 30 menit per hari. Jika BMI anda berada dalam kategori ini maka anda
        dianjurkan untuk terus menjaga berat badan anda.`;
        judulPenyakit.innerHTML = `Beberapa penyakit berasal dari <br>Kegemukan`;
        penyakit.innerHTML = `<li>Diabetes</li>
        <li>Hipertensi</li>
        <li>Sakit Jantung</li>
        <li>Osteoarthritis</li>`;
      } else if (bmi >= 25.0 && bmi < 29.9) {
        total.innerHTML = `${bmi}`;
        total.style.color = "pink";
        totalHasil.innerHTML = `Lebih`;
        hasilBerat.innerHTML = `Berat Badan Lebih`;
        judulDeskripsi.innerHTML = `Hasil BMI diantara 25.0 - 29.9`;
        deskripsi.innerHTML = `anda berada dalam kategori <b>Berat Badan Overweight atau berat badan berlebih</b> Cara terbaik untuk menurunkan
        berat badan adalah Mengatur kalor makan yang di konsumsi dan
        berolahraga. Jika BMI anda berada dalam kategori ini maka anda
        dianjurkan  menurunkan berat badan hingga batas normal.`;
        judulPenyakit.innerHTML = `Beberapa penyakit berasal dari <br>Kegemukan`;
        penyakit.innerHTML = `<li>Diabetes</li>
        <li>Hipertensi</li>
        <li>Sakit Jantung</li>
        <li>Osteoarthritis</li>`;
      } else {
        total.innerHTML = `${bmi}`;
        total.style.color = `red`;
        totalHasil.innerHTML = `Lebih`;
        hasilBerat.innerHTML = `Berat Badan Lebih`;
        judulDeskripsi.innerHTML = `Hasil BMI diatas 30.0`;
        deskripsi.innerHTML = `anda berada dalam kategori <b>Obesitas</b> Cara terbaik untuk menurunkan
        berat badan adalah Mengatur kalor makan yang di konsumsi dan
        berolahraga. Jika BMI anda berada dalam kategori ini maka anda
        dianjurkan untuk menurunkan berat badan hingga batas normal.`;
        judulPenyakit.innerHTML = `Beberapa penyakit berasal dari <br>Kegemukan`;
        penyakit.innerHTML = `<li>Diabetes</li>
        <li>Hipertensi</li>
        <li>Sakit Jantung</li>
        <li>Osteoarthritis</li>`;
      }
    }
  }
  