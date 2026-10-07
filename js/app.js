const pages=document.querySelectorAll(".page");
const menu=document.getElementById("mobileMenu");
const burger=document.getElementById("hamburger");

function showPage(id,push=true){
  const target=document.getElementById(id);
  if(!target)return;
  pages.forEach(p=>p.classList.remove("active"));
  target.classList.add("active");
  closeMainMenu();
  if(push)history.replaceState(null,"","#"+id);
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll(".navbtn").forEach(btn=>{
  btn.addEventListener("click",()=>showPage(btn.dataset.page));
});

/* ===== DRAWER MENU v1.7 ===== */
const desktopMenuButton=document.getElementById("desktopMenuButton");
const menuBackdrop=document.getElementById("menuBackdrop");
const menuCloseBtn=document.getElementById("menuCloseBtn");

function setMenuA11y(open){
  menu.setAttribute("aria-hidden",open?"false":"true");
  if(menuBackdrop)menuBackdrop.setAttribute("aria-hidden",open?"false":"true");
  if(burger)burger.setAttribute("aria-expanded",open?"true":"false");
  if(desktopMenuButton)desktopMenuButton.setAttribute("aria-expanded",open?"true":"false");
}
function openMainMenu(){
  menu.classList.add("open");
  if(menuBackdrop)menuBackdrop.classList.add("open");
  document.body.classList.add("menu-open");
  setMenuA11y(true);
  window.setTimeout(()=>menuCloseBtn&&menuCloseBtn.focus(),120);
}
function closeMainMenu(){
  menu.classList.remove("open");
  if(menuBackdrop)menuBackdrop.classList.remove("open");
  document.body.classList.remove("menu-open");
  setMenuA11y(false);
}
function toggleMainMenu(){
  menu.classList.contains("open")?closeMainMenu():openMainMenu();
}
if(burger)burger.addEventListener("click",toggleMainMenu);
if(desktopMenuButton)desktopMenuButton.addEventListener("click",toggleMainMenu);
if(menuCloseBtn)menuCloseBtn.addEventListener("click",closeMainMenu);
if(menuBackdrop)menuBackdrop.addEventListener("click",closeMainMenu);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMainMenu();});
/* ===== END DRAWER MENU v1.7 ===== */

document.querySelectorAll(".acc-title").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const acc=btn.closest(".acc");
    acc.classList.toggle("open");
    btn.querySelector("i").textContent=acc.classList.contains("open")?"⌃":"⌄";
  });
});

/* Panduan komunikasi situasional */
const COMM={
  pkl:{
    title:"PKL / Pedagang Kaki Lima",
    open:"Sapa, perkenalkan diri, lalu sebutkan kondisi ruang publik yang menjadi perhatian. Dengarkan dulu alasan pedagang sebelum memberikan arahan.",
    example:"“Selamat pagi, Bapak/Ibu. Kami dari Satpol PP Kabupaten Lembata. Mohon izin, kami mau bicara sebentar terkait tempat jualan di bagian ini. Kami dengar dulu kondisi Bapak/Ibu, setelah itu kami jelaskan apa yang perlu ditata.”",
    reject:"Jika pedagang berkata sudah lama berjualan atau merasa hanya dirinya yang ditegur, akui bahwa keberatannya sudah didengar. Kembali pada kondisi di titik tersebut dan jangan mengubah percakapan menjadi perdebatan tentang siapa yang paling salah.",
    avoid:"Jangan membuka dengan ancaman, jangan mempermalukan, dan jangan menjanjikan relokasi/izin/keputusan yang belum pasti.",
    coord:"Ketika penolakan berlanjut, massa mulai berkumpul, situasi tidak aman, atau diperlukan keputusan/tindakan yang melampaui komunikasi awal."
  },
  bahujalan:{
    title:"Pedagang di Bahu Jalan / Trotoar",
    open:"Tunjukkan kondisi jalan atau trotoar yang menjadi perhatian. Gunakan bahasa konkret: jalur terhalang, ruang menyempit, atau keselamatan terganggu, bila memang itu yang terlihat.",
    example:"“Bapak/Ibu, kami mau menyampaikan soal bagian bahu jalan ini. Saat ini ruangnya menjadi sempit untuk pengguna jalan. Kami minta bantuannya supaya barang yang masuk ke jalur ini dirapikan.”",
    reject:"Jika dijawab 'orang lain juga begitu', catat informasinya tetapi tetap selesaikan pembicaraan tentang kondisi di titik ini.",
    avoid:"Jangan menyebut pasal atau sanksi yang belum dipastikan. Jangan menuduh pedagang sengaja mengganggu jalan.",
    coord:"Jika menyangkut pengaturan lalu lintas, rambu, lokasi parkir, keselamatan jalan, atau membutuhkan keputusan Dishub/Polri/atasan."
  },
  bbm:{
    title:"BBM Eceran / Bersubsidi",
    open:"Perkenalkan diri dan jelaskan tujuan komunikasi atau pemeriksaan. Tanyakan fakta terlebih dahulu. Hindari membuka percakapan dengan kata 'penimbunan', 'penyelewengan', atau tuduhan pidana.",
    example:"“Selamat siang, Bapak/Ibu. Kami dari Satpol PP Kabupaten Lembata. Kami sedang melaksanakan tugas terkait kondisi penjualan BBM di lokasi ini. Kami mau dengar dulu penjelasan Bapak/Ibu dan mencatat kondisi yang ada.”",
    reject:"Jika ditanya 'kenapa cuma saya?', jawab bahwa petugas sedang menangani kondisi di lokasi ini sesuai penugasan dan keberatan tersebut akan dicatat.",
    avoid:"Jangan menetapkan sendiri tindak pidana Migas, jangan mengancam penyitaan, dan jangan menyatakan pelanggaran yang belum diverifikasi.",
    coord:"Ketika temuan berkaitan dengan distribusi, izin, BBM subsidi, dugaan tindak pidana, atau membutuhkan OPD teknis/Pertamina/BPH Migas/Polri."
  },
  sampah:{
    title:"Sampah & Kebersihan Ruang Publik",
    open:"Sapa, tunjukkan perilaku atau kondisi sampah yang perlu diperbaiki, lalu minta tindakan sederhana yang jelas.",
    example:"“Permisi, Bapak/Ibu. Mohon bantuannya, sampah ini jangan ditinggalkan di sini. Bisa dipindahkan ke tempat yang semestinya supaya area ini tetap bersih dan tidak mengganggu?”",
    reject:"Jika dijawab 'cuma sedikit', tetap jelaskan bahwa imbauannya ditujukan pada perilaku dan kebersihan lokasi, bukan pada besar-kecilnya jumlah semata.",
    avoid:"Jangan mengejek, mempermalukan, atau langsung menentukan denda tanpa dasar yang sudah dipastikan.",
    coord:"Jika kejadian berulang, volume besar, lokasi membutuhkan penanganan teknis, atau tindak lanjut perlu melibatkan OPD persampahan/lingkungan."
  },
  ternak:{
    title:"Ternak Berkeliaran",
    open:"Cari pemilik bila memungkinkan. Jelaskan gangguan yang benar-benar terlihat pada jalan, kebun, atau aktivitas masyarakat.",
    example:"“Selamat siang, Bapak/Ibu. Kami mau menyampaikan soal ternak yang berada di bagian jalan ini. Mohon bantuannya supaya ternaknya diamankan dulu agar tidak mengganggu pengguna jalan dan tidak menimbulkan masalah.”",
    reject:"Jika pemilik merasa ternaknya tidak mengganggu, tunjukkan kondisi objektif yang menjadi perhatian dan hindari perdebatan tentang kebiasaan lama.",
    avoid:"Jangan langsung membuat ancaman denda, penangkapan, atau penahanan ternak jika dasar lokal dan prosedurnya belum dipastikan.",
    coord:"Jika pemilik tidak ditemukan, gangguan berulang, ada kerusakan/sengketa, atau diperlukan desa/kelurahan dan OPD peternakan/pertanian."
  },
  pelajar:{
    title:"Pelajar pada Jam Sekolah",
    open:"Dekati secara wajar dan tidak mengintimidasi. Tanyakan keadaan, sekolah, dan alasan berada di luar sekolah tanpa mempermalukan.",
    example:"“Adik-adik, selamat siang. Kami dari Satpol PP. Sekarang masih jam sekolah, jadi kami mau tanya dulu kenapa berada di sini dan apakah pihak sekolah sudah tahu?”",
    reject:"Jika pelajar defensif, tetap gunakan nada pembinaan. Jangan memaksa pengakuan atau membuat ancaman yang tidak sesuai.",
    avoid:"Jangan mempermalukan, memaki, memotret untuk publikasi, atau memperlakukan pelajar sebagai pelaku kriminal hanya karena berada di luar sekolah.",
    coord:"Jika perlu konfirmasi, hubungi sekolah/orang tua/wali atau layanan terkait. Utamakan perlindungan anak."
  },
  parkir:{
    title:"Parkir & Penggunaan Ruang Jalan",
    open:"Jelaskan kondisi kendaraan atau ruang jalan yang menjadi perhatian. Dengarkan juru parkir sebelum memberi arahan.",
    example:"“Selamat siang. Kami mau menyampaikan soal pengaturan kendaraan di bagian ini. Posisi kendaraan sekarang membuat ruang jalan menyempit. Bisa kita atur supaya jalurnya lebih aman?”",
    reject:"Jika juru parkir merasa sudah mengatur dengan benar, tunjukkan kondisi yang menjadi perhatian dan arahkan pada perbaikan konkret.",
    avoid:"Jangan menyerang pribadi, jangan mencampur penertiban ruang publik dengan kewenangan penindakan lalu lintas.",
    coord:"Jika berkaitan dengan rambu, lokasi resmi parkir, tarif/retribusi, atau penindakan lalu lintas yang memerlukan Dishub/Polri."
  },
  kerumunan:{
    title:"Kerumunan / Konflik Ringan",
    open:"Baca situasi sebelum mendekat. Jika aman untuk berkomunikasi, gunakan satu petugas sebagai penyampai utama dan minta satu orang mewakili penjelasan.",
    example:"“Bapak/Ibu, kami ingin dengar penjelasannya, tapi mari satu orang dulu yang bicara supaya informasinya jelas dan tidak saling potong.”",
    reject:"Jika suara mulai meninggi, jangan berlomba meninggikan suara. Ulangi tujuan komunikasi dan beri batas bahwa pembicaraan akan dihentikan bila situasi tidak aman.",
    avoid:"Jangan memprovokasi, menyentuh orang tanpa kebutuhan dan dasar, atau menganggap kritik/unjuk rasa damai sebagai pelanggaran dengan sendirinya.",
    coord:"Segera koordinasikan jika ada ancaman keselamatan, perkelahian, senjata, dugaan tindak pidana, massa bertambah, atau situasi membutuhkan pengamanan Polri."
  }
};

const commDetail=document.getElementById("commDetail");
document.querySelectorAll(".comm-case").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const d=COMM[btn.dataset.case];
    if(!d)return;
    document.getElementById("commTitle").textContent=d.title;
    document.getElementById("commOpen").textContent=d.open;
    document.getElementById("commExample").textContent=d.example;
    document.getElementById("commReject").textContent=d.reject;
    document.getElementById("commAvoid").textContent=d.avoid;
    document.getElementById("commCoord").textContent=d.coord;
    commDetail.classList.remove("hidden");
    setTimeout(()=>commDetail.scrollIntoView({behavior:"smooth",block:"start"}),50);
  });
});
const closeCommDetail=document.getElementById("closeCommDetail"); if(closeCommDetail) closeCommDetail.addEventListener("click",()=>commDetail.classList.add("hidden"));

/* Panduan situasi ringkas */
const detail=document.getElementById("detail");
document.querySelectorAll(".situations button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.getElementById("detailTitle").textContent=btn.dataset.title;
    document.getElementById("detailText").textContent=btn.dataset.text;
    detail.classList.remove("hidden");
    setTimeout(()=>detail.scrollIntoView({behavior:"smooth",block:"center"}),50);
  });
});

const closeDetail=document.getElementById("closeDetail"); if(closeDetail) closeDetail.addEventListener("click",()=>detail.classList.add("hidden"));

document.getElementById("searchSituasi").addEventListener("input",e=>{
  const q=e.target.value.toLowerCase().trim();
  document.querySelectorAll(".situations button").forEach(btn=>{
    const hay=(btn.textContent+" "+btn.dataset.title).toLowerCase();
    btn.style.display=hay.includes(q)?"":"none";
  });
});

document.addEventListener("click",e=>{
  if(!menu.contains(e.target)&&!burger.contains(e.target))menu.classList.remove("open");
});

const first=location.hash.replace("#","")||"beranda";
showPage(document.getElementById(first)?first:"beranda",false);


/* ===== SIMULASI LAPANGAN v1.11 ===== */
const SIMULATIONS = {
  pkl:{
    number:"01",
    title:"PKL keberatan ditata",
    story:"Petugas menyampaikan penataan kepada seorang PKL. Pedagang menjawab, “Saya sudah lama jualan di sini. Kenapa sekarang baru dipermasalahkan?” Nada bicaranya masih terkendali, tetapi ia terlihat keberatan.",
    task:"Anda menjadi petugas yang pertama berbicara. Apa respons awal yang paling tepat?",
    options:[
      {
        text:"“Bapak harus ikut arahan. Kami sedang menjalankan tugas, jadi tidak perlu diperdebatkan.”",
        level:"kurang",
        feedback:"Kalimat ini terlalu cepat menutup ruang komunikasi dan dapat membuat pedagang merasa tidak didengar.",
        why:"Keberatan masih bisa ditangani melalui komunikasi. Petugas belum perlu mengubah percakapan menjadi adu kewenangan.",
        pattern:"Dengarkan → jelaskan maksud → beri arahan spesifik.",
        better:"“Kami paham Bapak sudah lama berjualan di sini. Kami dengar dulu alasannya. Setelah itu kami jelaskan bagian yang perlu ditata.”"
      },
      {
        text:"Dengarkan alasan pedagang, akui bahwa keberatannya sudah didengar, lalu jelaskan kondisi yang perlu ditata dan langkah yang diminta.",
        level:"baik",
        feedback:"Ini respons paling sesuai dengan pola komunikasi SIAP SATPOL PP.",
        why:"Petugas tetap tegas pada masalah, tetapi tidak memperlakukan keberatan sebagai perlawanan.",
        pattern:"Sapa → dengarkan → beri arahan → tutup dengan langkah berikutnya.",
        better:"“Baik, kami dengar dulu, Bapak. Setelah itu kami jelaskan bagian yang perlu dirapikan supaya pembicaraannya jelas.”"
      },
      {
        text:"Tinggalkan lokasi agar tidak terjadi perdebatan dan tunggu petugas lain yang berbicara.",
        level:"cukup",
        feedback:"Menghindari konflik bisa tepat jika situasi tidak aman, tetapi pada kondisi ini komunikasi masih dapat dilakukan.",
        why:"Belum ada tanda bahaya yang mengharuskan komunikasi dihentikan.",
        pattern:"Komunikasi dulu; eskalasi bila komunikasi tidak efektif atau situasi menjadi tidak aman.",
        better:"Tetap lakukan komunikasi singkat, kemudian dokumentasikan dan koordinasikan bila penolakan berlanjut."
      }
    ]
  },

  bahujalan:{
    number:"02",
    title:"Pedagang di bahu jalan menolak imbauan",
    story:"Barang dagangan mengambil sebagian ruang bahu jalan. Saat diberi imbauan, pedagang menjawab, “Kenapa saya? Di sebelah sana juga banyak yang jualan begini.”",
    task:"Bagaimana menjaga pembicaraan tetap fokus tanpa terjebak perdebatan tentang pedagang lain?",
    options:[
      {
        text:"“Baik, informasi soal lokasi lain kami catat. Sekarang kami selesaikan dulu kondisi di titik ini dan bagian yang perlu dirapikan.”",
        level:"baik",
        feedback:"Respons ini mengakui keberatan tanpa kehilangan fokus pada kondisi yang sedang ditangani.",
        why:"Petugas tidak perlu membuktikan bahwa orang lain salah atau benar untuk menjelaskan masalah yang ada di depan.",
        pattern:"Dengarkan keberatan → kembali ke fakta → beri arahan.",
        better:"Tunjukkan bagian bahu jalan yang menjadi perhatian dan minta penataan yang konkret."
      },
      {
        text:"“Kalau orang lain salah, bukan berarti Bapak boleh salah juga.”",
        level:"cukup",
        feedback:"Maksudnya dapat dipahami, tetapi nadanya mudah terdengar menggurui dan memancing perdebatan.",
        why:"Tujuan komunikasi bukan memenangkan argumen moral.",
        pattern:"Gunakan fakta kondisi, bukan perbandingan pribadi.",
        better:"“Lokasi lain kami catat. Untuk titik ini, yang perlu dirapikan adalah bagian yang masuk ke ruang jalan.”"
      },
      {
        text:"“Jangan banyak alasan. Kalau tidak pindah sekarang kami tindak.”",
        level:"kurang",
        feedback:"Ancaman sebelum dasar tindakan dan prosedur dipastikan dapat memperburuk situasi.",
        why:"Tegas tidak sama dengan langsung mengancam.",
        pattern:"Jelaskan → arahkan → dokumentasikan → koordinasikan bila perlu.",
        better:"Sampaikan tindakan yang memang dapat dilakukan dan hindari ancaman yang belum memiliki dasar."
      }
    ]
  },

  bbm:{
    number:"03",
    title:"Penjual BBM eceran meninggikan suara",
    story:"Petugas mendatangi lokasi penjualan BBM eceran. Penjual berkata keras, “Kenapa hanya saya yang didatangi? Memangnya saya menimbun?” Beberapa warga mulai memperhatikan.",
    task:"Apa respons awal yang paling aman dan tidak melampaui kewenangan?",
    options:[
      {
        text:"Balas dengan nada tegas yang lebih keras supaya petugas tidak dianggap lemah.",
        level:"kurang",
        feedback:"Nada tinggi dari petugas justru dapat memperbesar ketegangan.",
        why:"Tegas ditunjukkan lewat isi pesan dan kendali diri, bukan volume suara.",
        pattern:"Redakan → jelaskan tujuan → dengarkan → catat fakta.",
        better:"“Kami tidak sedang menyimpulkan Bapak melakukan pelanggaran. Kami sedang mencatat kondisi dan ingin mendengar penjelasan Bapak.”"
      },
      {
        text:"Jelaskan bahwa petugas belum menyimpulkan pelanggaran, dengarkan keterangannya, catat fakta, lalu koordinasikan aspek distribusi/izin bila diperlukan.",
        level:"baik",
        feedback:"Respons ini paling aman karena tidak membuat tuduhan dan tetap menjaga fungsi petugas di lapangan.",
        why:"Persoalan BBM dapat bersinggungan dengan kewenangan sektoral dan pidana.",
        pattern:"Jelaskan maksud → dengarkan → dokumentasikan → cek kewenangan.",
        better:"“Kami datang untuk melihat kondisi dan mencatat informasi. Untuk hal yang perlu pemeriksaan lebih lanjut, kami koordinasikan dengan instansi terkait.”"
      },
      {
        text:"Langsung menyatakan bahwa penjualan tersebut pasti melanggar aturan dan barang dapat disita.",
        level:"kurang",
        feedback:"Pernyataan ini melampaui informasi yang tersedia dan dapat menciptakan konflik baru.",
        why:"Petugas tidak boleh mengarang dasar pelanggaran atau kewenangan penyitaan.",
        pattern:"Fakta dulu → aturan yang sudah dipastikan → koordinasi.",
        better:"Hindari menyebut pelanggaran, pidana, atau penyitaan sebelum dasar dan kewenangan jelas."
      }
    ]
  },

  sampah:{
    number:"04",
    title:"Warga membuang sampah sembarangan",
    story:"Petugas melihat seorang warga meninggalkan sampah di area publik. Saat diingatkan, ia menjawab, “Cuma sedikit. Yang lain juga buang di sini.”",
    task:"Bagaimana memberi teguran tanpa mempermalukan tetapi tetap jelas?",
    options:[
      {
        text:"Minta warga mengambil kembali sampahnya, jelaskan tujuan menjaga kebersihan lokasi, dan tetap fokus pada perilaku yang sedang terlihat.",
        level:"baik",
        feedback:"Pesan tetap tegas pada tindakan yang perlu diperbaiki tanpa merendahkan orangnya.",
        why:"Jumlah sampah bukan alasan untuk mengabaikan perilaku yang perlu diperbaiki.",
        pattern:"Fakta → imbauan spesifik → alasan singkat.",
        better:"“Mohon bantuannya sampah ini dipindahkan ke tempat yang semestinya supaya area ini tetap bersih.”"
      },
      {
        text:"Foto warga tersebut lalu katakan fotonya akan disebarkan supaya jera.",
        level:"kurang",
        feedback:"Mempermalukan warga bukan pendekatan komunikasi yang tepat dan menimbulkan persoalan baru.",
        why:"Dokumentasi untuk kebutuhan tugas berbeda dengan publikasi untuk mempermalukan.",
        pattern:"Hormati orangnya, koreksi perilakunya.",
        better:"Jika dokumentasi diperlukan, gunakan sesuai kebutuhan resmi dan jangan dijadikan ancaman."
      },
      {
        text:"Biarkan saja karena sampahnya sedikit.",
        level:"cukup",
        feedback:"Respons ini menghindari konflik tetapi tidak menjalankan fungsi pembinaan.",
        why:"Imbauan sederhana masih dapat diberikan secara proporsional.",
        pattern:"Komunikasi singkat dan jelas.",
        better:"Berikan imbauan singkat tanpa memperpanjang percakapan."
      }
    ]
  },

  ternak:{
    number:"05",
    title:"Ternak berkeliaran di dekat jalan",
    story:"Seekor ternak berada di sisi jalan dan beberapa kali masuk ke badan jalan. Pemiliknya mengatakan, “Biasanya aman, tidak pernah terjadi apa-apa.”",
    task:"Apa respons awal yang paling tepat?",
    options:[
      {
        text:"Tunjukkan kondisi yang terlihat, minta pemilik mengamankan ternaknya, lalu jelaskan bahwa tindak lanjut lain akan mengikuti aturan dan koordinasi yang berlaku.",
        level:"baik",
        feedback:"Respons ini fokus pada risiko nyata tanpa membuat ancaman yang belum memiliki dasar.",
        why:"Petugas dapat mengkomunikasikan gangguan yang terlihat tanpa mengarang denda atau prosedur penahanan ternak.",
        pattern:"Fakta → arahan → koordinasi bila berulang.",
        better:"“Saat ini ternaknya beberapa kali masuk ke badan jalan. Mohon diamankan dulu supaya tidak membahayakan pengguna jalan.”"
      },
      {
        text:"Langsung memberi tahu bahwa ternak akan ditangkap dan pemilik akan didenda.",
        level:"kurang",
        feedback:"Tindakan seperti penangkapan atau denda membutuhkan dasar lokal dan prosedur yang jelas.",
        why:"Kewenangan tidak boleh dibuat berdasarkan kebiasaan atau asumsi.",
        pattern:"Cek kewenangan sebelum tindakan lanjutan.",
        better:"Jika gangguan berulang, dokumentasikan dan koordinasikan dengan atasan/desa/OPD terkait."
      },
      {
        text:"Membiarkan karena pemilik sudah mengatakan ternaknya aman.",
        level:"cukup",
        feedback:"Penjelasan pemilik perlu didengar, tetapi fakta yang terlihat tetap perlu ditangani.",
        why:"Mendengarkan tidak berarti mengabaikan risiko objektif.",
        pattern:"Dengarkan → kembali pada fakta.",
        better:"Akui penjelasannya, lalu tunjukkan risiko yang sedang terlihat."
      }
    ]
  },

  pelajar:{
    number:"06",
    title:"Pelajar berada di luar sekolah saat jam belajar",
    story:"Beberapa pelajar berada di luar lingkungan sekolah. Ketika ditanya, salah satu berkata, “Kami sudah izin.” Teman-temannya terlihat cemas ketika petugas mendekat.",
    task:"Apa respons awal yang paling sesuai dengan pendekatan pembinaan dan perlindungan anak?",
    options:[
      {
        text:"Minta mereka berdiri berbaris, foto semuanya, lalu ancam mengirim foto ke media sosial sekolah.",
        level:"kurang",
        feedback:"Pendekatan ini mempermalukan anak dan tidak sesuai dengan tujuan pembinaan.",
        why:"Identitas dan martabat anak perlu dilindungi.",
        pattern:"Humanis → klarifikasi → koordinasi.",
        better:"Tanyakan keadaan secara tenang dan verifikasi ke sekolah/orang tua bila memang diperlukan."
      },
      {
        text:"Tanyakan sekolah dan alasan mereka berada di luar, dengarkan penjelasan, lalu verifikasi dengan sekolah tanpa mempermalukan.",
        level:"baik",
        feedback:"Respons ini paling sesuai dengan pendekatan pembinaan.",
        why:"Petugas memperoleh fakta sekaligus menjaga rasa aman dan privasi pelajar.",
        pattern:"Sapa → klarifikasi → lindungi privasi → koordinasi.",
        better:"“Kami mau tanya dulu kenapa berada di sini dan apakah pihak sekolah sudah mengetahui.”"
      },
      {
        text:"Langsung menyebut mereka membolos karena berada di luar sekolah.",
        level:"kurang",
        feedback:"Petugas belum memiliki cukup informasi untuk memberi label tersebut.",
        why:"Kesimpulan seharusnya mengikuti klarifikasi fakta.",
        pattern:"Jangan memberi label sebelum keadaan dipahami.",
        better:"Gunakan pertanyaan terbuka dan verifikasi."
      }
    ]
  },

  parkir:{
    number:"07",
    title:"Juru parkir mempertanyakan teguran",
    story:"Kendaraan mulai memakan ruang jalan. Juru parkir berkata, “Saya sudah atur baik-baik. Tidak ada masalah.”",
    task:"Bagaimana merespons tanpa menyerang cara kerja juru parkir?",
    options:[
      {
        text:"“Cara parkir Bapak memang dari awal salah. Makanya jalan jadi kacau.”",
        level:"kurang",
        feedback:"Kalimat ini menyerang pribadi/cara kerja dan mudah menutup komunikasi.",
        why:"Yang perlu dibahas adalah kondisi kendaraan dan ruang jalan.",
        pattern:"Fokus pada situasi, bukan pribadi.",
        better:"Tunjukkan titik yang menyempit dan arahkan perubahan yang diperlukan."
      },
      {
        text:"Ulangi teguran berkali-kali sampai juru parkir berhenti membantah.",
        level:"cukup",
        feedback:"Mengulang tanpa mendengar biasanya tidak membuat pesan lebih jelas.",
        why:"Keberatan perlu didengar agar petugas tahu bagian mana yang perlu dijelaskan.",
        pattern:"Dengarkan → tunjukkan fakta → arahkan.",
        better:"“Kami lihat bagian ini mulai menyempit. Bisa kendaraan diatur sedikit ke bagian yang lebih aman?”"
      },
      {
        text:"Dengarkan penjelasannya, tunjukkan posisi kendaraan yang menjadi perhatian, lalu berikan arahan konkret dan koordinasikan aspek teknis bila perlu.",
        level:"baik",
        feedback:"Respons ini paling tepat karena fokus pada kondisi dan solusi.",
        why:"Petugas tetap tegas tanpa menilai pribadi juru parkir.",
        pattern:"Dengarkan → fakta → arahan → koordinasi Dishub/Polri bila diperlukan.",
        better:"Gunakan kondisi yang terlihat sebagai dasar percakapan."
      }
    ]
  },

  kerumunan:{
    number:"08",
    title:"Kerumunan mulai tegang",
    story:"Beberapa warga berkumpul dan berbicara keras kepada petugas secara bersamaan. Belum ada kekerasan, tetapi percakapan sulit dikendalikan.",
    task:"Apa respons awal yang paling tepat sebelum situasi berkembang?",
    options:[
      {
        text:"Petugas juga berbicara lebih keras agar suara petugas terdengar dan massa mengetahui siapa yang berwenang.",
        level:"kurang",
        feedback:"Menaikkan volume suara dapat mempercepat eskalasi.",
        why:"Tujuan awal adalah membuat komunikasi kembali terstruktur dan menjaga keselamatan.",
        pattern:"Redakan → satu komunikator → satu perwakilan berbicara.",
        better:"“Kami ingin dengar penjelasannya. Mari satu orang dulu yang bicara supaya tidak saling potong.”"
      },
      {
        text:"Gunakan satu petugas sebagai komunikator, minta satu orang menjelaskan, jaga jarak aman, dan koordinasikan bila ketegangan meningkat.",
        level:"baik",
        feedback:"Respons ini paling sesuai untuk menjaga komunikasi dan keselamatan.",
        why:"Struktur percakapan membantu mencegah salah paham dan petugas tetap punya ruang untuk membaca risiko.",
        pattern:"Amankan → de-eskalasi → dengarkan → koordinasi.",
        better:"Jika ada ancaman keselamatan, hentikan percakapan rutin dan minta dukungan sesuai prosedur."
      },
      {
        text:"Langsung bubarkan seluruh kerumunan karena suara mereka mulai keras.",
        level:"cukup",
        feedback:"Pada kondisi ini belum cukup informasi untuk menyimpulkan bahwa pembubaran adalah langkah yang tepat.",
        why:"Kritik atau suara keras tidak otomatis berarti situasi sudah menjadi pelanggaran yang harus dibubarkan.",
        pattern:"Baca risiko dan kewenangan sebelum tindakan.",
        better:"Mulai dengan de-eskalasi dan koordinasikan jika risiko meningkat."
      }
    ]
  }
};

const SIM_ORDER=["pkl","bahujalan","bbm","sampah","ternak","pelajar","parkir","kerumunan"];

const SIM_IMAGES={
  pkl:"assets/visual/m5-01-pkl.webp",
  bahujalan:"assets/visual/m5-02-bahu-jalan.webp",
  bbm:"assets/visual/m5-03-bbm.webp",
  sampah:"assets/visual/m5-04-sampah.webp",
  ternak:"assets/visual/hukum/hukum-ternak.webp",
  pelajar:"assets/visual/hukum/hukum-pelajar.webp",
  parkir:"assets/visual/m5-05-parkir.webp",
  kerumunan:"assets/visual/m5-06-kerumunan.webp"
};

const simTitle=document.getElementById("simTitle");
const simStory=document.getElementById("simStory");
const simTask=document.getElementById("simTask");
const simOptions=document.getElementById("simOptions");
const simFeedback=document.getElementById("simFeedback");
const simHero=document.getElementById("simHero");
const simNumber=document.getElementById("simNumber");
const simStateBadge=document.getElementById("simStateBadge");
const simDoneCount=document.getElementById("simDoneCount");
const simMiniProgress=document.getElementById("simMiniProgress");
const simRetry=document.getElementById("simRetry");
const simNext=document.getElementById("simNext");
let currentSim="pkl";

function getSimProgress(){
  try{
    const arr=JSON.parse(localStorage.getItem("siap_sim_done")||"[]");
    return Array.isArray(arr)?arr:[];
  }catch(e){return []}
}

function getSimResults(){
  try{
    const data=JSON.parse(localStorage.getItem("siap_sim_results")||"{}");
    return data&&typeof data==="object"?data:{};
  }catch(e){return {}}
}

function saveSimResult(key,index,opt){
  const done=getSimProgress();
  if(!done.includes(key)){
    done.push(key);
    localStorage.setItem("siap_sim_done",JSON.stringify(done));
  }
  const results=getSimResults();
  results[key]={
    option:index,
    level:opt.level,
    timestamp:new Date().toISOString()
  };
  localStorage.setItem("siap_sim_results",JSON.stringify(results));
  updateSimProgressUI();
  if(typeof updateProgressPage==="function") updateProgressPage();
}

function updateSimProgressUI(){
  const done=getSimProgress().filter(x=>SIM_ORDER.includes(x));
  if(simDoneCount) simDoneCount.textContent=done.length+"/8";
  if(simMiniProgress) simMiniProgress.style.width=(done.length/8*100)+"%";
  document.querySelectorAll(".sim-select").forEach(btn=>{
    btn.classList.toggle("done",done.includes(btn.dataset.sim));
  });
  if(simStateBadge){
    simStateBadge.textContent=done.includes(currentSim)?"Sudah dicoba":"Belum dicoba";
    simStateBadge.classList.toggle("done",done.includes(currentSim));
  }
}

function loadSimulation(key){
  if(!SIMULATIONS[key]) return;
  currentSim=key;
  const s=SIMULATIONS[key];

  document.querySelectorAll(".sim-select").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.sim===key);
  });

  if(simHero&&SIM_IMAGES[key]){
    simHero.src=SIM_IMAGES[key];
    simHero.alt=s.title;
  }
  if(simNumber) simNumber.textContent=`SKENARIO ${s.number} / 08`;
  if(simTitle) simTitle.textContent=s.title;
  if(simStory) simStory.textContent=s.story;
  if(simTask) simTask.textContent=s.task;
  if(simOptions) simOptions.innerHTML="";
  if(simFeedback) simFeedback.classList.add("hidden");

  s.options.forEach((opt,idx)=>{
    const btn=document.createElement("button");
    btn.type="button";
    btn.className="sim-option sim-option-v111";
    btn.innerHTML=`<span>${String.fromCharCode(65+idx)}</span><p>${opt.text}</p>`;

    btn.addEventListener("click",()=>{
      document.querySelectorAll(".sim-option").forEach(x=>{
        x.classList.remove("selected-good","selected-mid","selected-bad");
      });
      btn.classList.add(opt.level==="baik"?"selected-good":opt.level==="cukup"?"selected-mid":"selected-bad");

      const title=opt.level==="baik"?"Respons paling tepat":opt.level==="cukup"?"Masih bisa diperbaiki":"Perlu dipikirkan kembali";
      const icon=opt.level==="baik"?"✓":opt.level==="cukup"?"!":"×";

      document.getElementById("simFeedbackTitle").textContent=title;
      document.getElementById("simFeedbackIcon").textContent=icon;
      document.getElementById("simFeedbackText").textContent=opt.feedback;
      document.getElementById("simWhy").textContent=opt.why;
      document.getElementById("simPattern").textContent=opt.pattern;
      document.getElementById("simBetter").textContent=opt.better;

      simFeedback.dataset.level=opt.level;
      simFeedback.classList.remove("hidden");
      saveSimResult(key,idx,opt);
    });

    simOptions.appendChild(btn);
  });

  updateSimProgressUI();
}

document.querySelectorAll(".sim-select").forEach(btn=>{
  btn.addEventListener("click",()=>loadSimulation(btn.dataset.sim));
});

if(simRetry){
  simRetry.addEventListener("click",()=>{
    document.querySelectorAll(".sim-option").forEach(x=>x.classList.remove("selected-good","selected-mid","selected-bad"));
    simFeedback.classList.add("hidden");
  });
}

if(simNext){
  simNext.addEventListener("click",()=>{
    const pos=SIM_ORDER.indexOf(currentSim);
    const next=SIM_ORDER[(pos+1)%SIM_ORDER.length];
    loadSimulation(next);
    const panel=document.querySelector(".sim-panel-v111");
    if(panel) panel.scrollIntoView({behavior:"smooth",block:"start"});
  });
}

if(simTitle){
  loadSimulation("pkl");
  updateSimProgressUI();
}
/* ===== END SIMULASI LAPANGAN v1.11 ===== */

/* ===== PRE/POST TEST v0.9 ===== */
const QUESTIONS=[
  {q:"Tujuan utama SIAP SATPOL PP adalah...",o:["Menentukan sanksi di lapangan","Menjadi acuan komunikasi awal yang sederhana dan mudah diakses","Menggantikan arahan pimpinan","Menggantikan seluruh SOP"],a:1},
  {q:"Komunikasi yang diarahkan dalam SIAP SATPOL PP adalah...",o:["Keras dan cepat","Humanis, persuasif, sopan, dan jelas","Panjang dan sangat formal","Selalu mengalah"],a:1},
  {q:"Sebelum memberi imbauan kepada PKL, personel sebaiknya...",o:["Langsung memerintah","Mendengar kondisi dan menjelaskan maksud kedatangan","Menghindari percakapan","Membuat ancaman"],a:1},
  {q:"Jika pedagang di bahu jalan menyampaikan keberatan, personel sebaiknya...",o:["Memotong penjelasannya","Mendengarkan lalu menjelaskan inti arahan secara singkat","Beradu argumen","Meninggalkan lokasi tanpa tindak lanjut"],a:1},
  {q:"Saat penjual BBM eceran mulai meninggikan suara, respons awal yang lebih tepat adalah...",o:["Ikut meninggikan suara","Jaga nada bicara dan dengarkan keberatan","Menyindir penjual","Membuat pernyataan yang belum dipastikan"],a:1},
  {q:"Saat menemukan orang membuang sampah sembarangan, komunikasi yang lebih tepat adalah...",o:["Mempermalukan di depan umum","Sampaikan imbauan pada perilakunya dengan sopan dan jelas","Mengabaikan","Merekam lalu menyebarkan"],a:1},
  {q:"Mengapa contoh kalimat komunikasi perlu dibuat?",o:["Agar semua orang harus berbicara dengan kalimat yang sama persis","Agar personel memiliki acuan bersama yang sederhana dan dapat disesuaikan","Agar petugas tidak perlu memahami situasi","Agar komunikasi menjadi lebih panjang"],a:1},
  {q:"Jika komunikasi awal tidak lagi efektif dan situasi memanas, personel sebaiknya...",o:["Terus berdebat","Koordinasikan sesuai kebutuhan dan kewenangan","Membuat keputusan sendiri di luar kewenangan","Mengabaikan situasi"],a:1},
  {q:"Pemanfaatan QR Code dalam gagasan SIAP SATPOL PP ditujukan untuk...",o:["Membuat tampilan lebih ramai","Memudahkan akses cepat melalui HP","Menggantikan isi panduan","Menyimpan data pribadi masyarakat"],a:1},
  {q:"Masukan personel setelah uji coba digunakan untuk...",o:["Menentukan siapa yang paling baik","Mencatat kekurangan dan menyempurnakan panduan","Menghapus seluruh materi","Menggantikan arahan mentor"],a:1}
];

let testMode="pre";
const quizForm=document.getElementById("quizForm");
const submitQuiz=document.getElementById("submitQuiz");

function renderQuiz(){
  quizForm.innerHTML="";
  QUESTIONS.forEach((item,i)=>{
    const wrap=document.createElement("article");
    wrap.className="quiz-question";
    wrap.innerHTML=`<h3><span>${i+1}</span>${item.q}</h3>`;
    const opts=document.createElement("div");
    opts.className="quiz-options";
    item.o.forEach((txt,j)=>{
      const id=`${testMode}_${i}_${j}`;
      opts.innerHTML+=`<label for="${id}"><input id="${id}" type="radio" name="q${i}" value="${j}"><span>${txt}</span></label>`;
    });
    wrap.appendChild(opts);
    quizForm.appendChild(wrap);
  });
}

function updateScoreSummary(){
  const pre=localStorage.getItem("siap_pre_score");
  const post=localStorage.getItem("siap_post_score");
  document.getElementById("preScoreDisplay").textContent=pre!==null?pre+"/100":"Belum ada";
  document.getElementById("postScoreDisplay").textContent=post!==null?post+"/100":"Belum ada";
  if(pre!==null && post!==null){
    const d=Number(post)-Number(pre);
    document.getElementById("deltaDisplay").textContent=(d>0?"+":"")+d+" poin";
    document.getElementById("deltaDisplay").className=d>0?"delta-positive":d<0?"delta-negative":"";
  } else {
    document.getElementById("deltaDisplay").textContent="-";
  }
}

document.querySelectorAll(".test-tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".test-tab").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    testMode=btn.dataset.test;
    document.getElementById("testTitle").textContent=testMode==="pre"?"Pre-test":"Post-test";
    document.getElementById("testIntro").textContent=testMode==="pre"
      ?"Kerjakan sebelum mempelajari materi. Jawab sesuai pemahaman saat ini. Hasil akan disimpan pada perangkat ini."
      :"Kerjakan setelah mempelajari SIAP SATPOL PP. Gunakan pemahaman yang sudah diperoleh.";
    submitQuiz.textContent=testMode==="pre"?"Simpan Hasil Pre-test":"Simpan Hasil Post-test";
    document.getElementById("quizResult").classList.add("hidden");
    renderQuiz();
  });
});

submitQuiz.addEventListener("click",()=>{
  let correct=0;
  let answered=0;
  QUESTIONS.forEach((item,i)=>{
    const selected=quizForm.querySelector(`input[name="q${i}"]:checked`);
    if(selected){
      answered++;
      if(Number(selected.value)===item.a)correct++;
    }
  });
  if(answered<QUESTIONS.length){
    alert(`Masih ada ${QUESTIONS.length-answered} soal yang belum dijawab.`);
    return;
  }
  const score=correct*10;
  localStorage.setItem(testMode==="pre"?"siap_pre_score":"siap_post_score",String(score));
  localStorage.setItem(testMode==="pre"?"siap_pre_time":"siap_post_time",new Date().toISOString());
  document.getElementById("quizScore").textContent=`${score}/100`;
  document.getElementById("quizMessage").textContent=testMode==="pre"
    ?"Nilai awal sudah tersimpan. Pelajari materi, gunakan simulasi, lalu kerjakan post-test."
    :score>=80?"Pemahaman sudah cukup baik. Tetap gunakan panduan sesuai kondisi dan kewenangan.":"Masih ada bagian yang perlu diperkuat. Buka kembali Panduan Komunikasi dan Simulasi Lapangan.";
  document.getElementById("quizResult").classList.remove("hidden");
  updateScoreSummary();
  document.getElementById("quizResult").scrollIntoView({behavior:"smooth",block:"center"});
});

if(quizForm){
  renderQuiz();
  updateScoreSummary();
}


/* ===== MATERI BELAJAR v1.0 ===== */
const MATERIALS = {
  komunikasi:{
    title:"Komunikasi Persuasif",
    body:`<div class="material-points">
      <h3>Ingat pola 4 langkah</h3>
      <ol>
        <li><b>Sapa</b> — buka komunikasi dengan sikap tenang.</li>
        <li><b>Dengar</b> — beri ruang orang menjelaskan kondisinya.</li>
        <li><b>Jelaskan</b> — sampaikan tujuan atau imbauan dengan kalimat singkat.</li>
        <li><b>Arahkan</b> — tutup dengan langkah berikutnya yang jelas.</li>
      </ol>
      <aside>Komunikasi persuasif tidak berarti kehilangan ketegasan. Tegas pada tujuan, tetap baik pada cara penyampaiannya.</aside>
    </div>`
  },
  respons:{
    title:"Respons Awal",
    body:`<div class="material-points">
      <h3>Sebelum bertindak, cek 3 hal</h3>
      <ul>
        <li>Apa yang sebenarnya terjadi?</li>
        <li>Apakah kondisi aman untuk didekati?</li>
        <li>Apakah situasi masih bisa ditangani di tingkat personel?</li>
      </ul>
      <p>Setelah itu barulah lakukan komunikasi, dokumentasi seperlunya, dan koordinasi jika diperlukan.</p>
    </div>`
  },
  eskalasi:{
    title:"De-eskalasi",
    body:`<div class="material-points">
      <h3>Saat situasi memanas</h3>
      <ul>
        <li>Jangan ikut menaikkan volume suara.</li>
        <li>Gunakan kalimat pendek dan tidak provokatif.</li>
        <li>Jangan memaksa orang menerima penjelasan panjang saat emosi tinggi.</li>
        <li>Jaga posisi aman dan kenali kapan komunikasi perlu dihentikan.</li>
      </ul>
      <aside>Tujuan pertama bukan memenangkan perdebatan, tetapi menjaga situasi tetap terkendali.</aside>
    </div>`
  },
  dokumentasi:{
    title:"Dokumentasi",
    body:`<div class="material-points">
      <h3>Catat yang penting</h3>
      <ul>
        <li>Waktu dan lokasi kegiatan.</li>
        <li>Jenis situasi yang ditemui.</li>
        <li>Pihak yang terkait seperlunya.</li>
        <li>Respons atau langkah yang sudah dilakukan.</li>
        <li>Kebutuhan tindak lanjut atau koordinasi.</li>
      </ul>
      <p>Hindari dokumentasi yang tidak perlu atau mempermalukan masyarakat.</p>
    </div>`
  },
  koordinasi:{
    title:"Koordinasi",
    body:`<div class="material-points">
      <h3>Koordinasi diperlukan ketika</h3>
      <ul>
        <li>Situasi mulai melebihi kemampuan personel.</li>
        <li>Diperlukan keputusan dari atasan.</li>
        <li>Ada risiko keselamatan.</li>
        <li>Diperlukan keterlibatan pihak atau instansi lain.</li>
        <li>Informasi aturan atau kewenangan belum cukup jelas.</li>
      </ul>
    </div>`
  },
  evaluasi:{
    title:"Evaluasi Diri",
    body:`<div class="material-points">
      <h3>Setelah tugas, tanyakan 4 hal</h3>
      <ol>
        <li>Apa yang berjalan baik?</li>
        <li>Apa yang membuat komunikasi sulit?</li>
        <li>Apakah saya tetap tenang dan jelas?</li>
        <li>Apa yang akan saya lakukan lebih baik pada situasi berikutnya?</li>
      </ol>
      <aside>Evaluasi singkat membantu pengalaman lapangan berubah menjadi pembelajaran.</aside>
    </div>`
  }
};

const learnDetail=document.getElementById("learnDetail");
document.querySelectorAll(".learn-card").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const m=MATERIALS[btn.dataset.topic];
    if(!m)return;
    document.getElementById("learnTitle").textContent=m.title;
    document.getElementById("learnBody").innerHTML=m.body;
    learnDetail.classList.remove("hidden");
    setTimeout(()=>learnDetail.scrollIntoView({behavior:"smooth",block:"start"}),50);
  });
});
if(document.getElementById("closeLearnDetail")){
  document.getElementById("closeLearnDetail").addEventListener("click",()=>learnDetail.classList.add("hidden"));
}

/* ===== PROGRESS TRACKING v1.0 ===== */

function updateProgressPage(){
  const pre=localStorage.getItem("siap_pre_score");
  const post=localStorage.getItem("siap_post_score");
  const sims=getSimProgress();

  const elPre=document.getElementById("progressPre");
  if(!elPre)return;
  elPre.textContent=pre!==null?pre+"/100":"Belum ada";
  document.getElementById("progressPost").textContent=post!==null?post+"/100":"Belum ada";

  if(pre!==null && post!==null){
    const d=Number(post)-Number(pre);
    document.getElementById("progressDelta").textContent=(d>0?"+":"")+d+" poin";
  }else document.getElementById("progressDelta").textContent="-";

  document.getElementById("progressSim").textContent=Math.min(sims.filter(x=>SIM_ORDER.includes(x)).length,8)+"/8";

  let done=0;
  if(pre!==null)done+=25;
  if(sims.length>0)done+=Math.round((Math.min(sims.filter(x=>SIM_ORDER.includes(x)).length,8)/8)*25);
  if(post!==null)done+=35;
  if(localStorage.getItem("siap_feedback"))done+=15;
  done=Math.min(done,100);

  document.getElementById("progressBar").style.width=done+"%";
  document.getElementById("progressPercent").textContent=done+"%";

  let msg="Mulai dari pre-test, pelajari materi, coba simulasi, lalu kerjakan post-test.";
  if(done>=100)msg="Progres lengkap. Data pribadi di perangkat ini sudah mencakup pre-test, simulasi, post-test, dan feedback.";
  else if(post!==null)msg="Post-test sudah selesai. Lengkapi feedback untuk menutup rangkaian pembelajaran.";
  else if(sims.filter(x=>SIM_ORDER.includes(x)).length>=6)msg="Simulasi sudah cukup banyak dicoba. Setelah materi dipahami, lanjutkan ke post-test.";
  document.getElementById("progressMessage").textContent=msg;
}

/* ===== FEEDBACK v1.0 ===== */
const feedbackForm=document.getElementById("feedbackForm");
if(feedbackForm){
  feedbackForm.addEventListener("submit",e=>{
    e.preventDefault();
    const data={
      ease:document.getElementById("fbEase").value,
      help:document.getElementById("fbHelp").value,
      best:document.getElementById("fbBest").value,
      note:document.getElementById("fbNote").value.trim(),
      time:new Date().toISOString()
    };
    localStorage.setItem("siap_feedback",JSON.stringify(data));
    document.getElementById("feedbackSaved").classList.remove("hidden");
    updateProgressPage();
  });
}
updateProgressPage();


/* ===== DATA & GOOGLE SHEET v1.1 ===== */
const SIAP_WEBAPP_URL=(window.SIAP_CONFIG&&window.SIAP_CONFIG.GOOGLE_SHEET_WEBAPP_URL||"").trim();
function collectSiapData(){
  return {
    type:"snapshot",
    timestamp:new Date().toISOString(),
    pre_score:localStorage.getItem("siap_pre_score"),
    pre_time:localStorage.getItem("siap_pre_time"),
    post_score:localStorage.getItem("siap_post_score"),
    post_time:localStorage.getItem("siap_post_time"),
    simulations:(()=>{try{return JSON.parse(localStorage.getItem("siap_sim_done")||"[]")}catch(e){return []}})(),
    feedback:(()=>{try{return JSON.parse(localStorage.getItem("siap_feedback")||"null")}catch(e){return null}})()
  };
}
async function sendToSheet(payload){
  if(!SIAP_WEBAPP_URL) throw new Error("URL Google Sheet belum diatur");
  const res=await fetch(SIAP_WEBAPP_URL,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(payload)});
  if(!res.ok) throw new Error("Gagal mengirim data");
  return res.text();
}
function refreshSheetStatus(){
  const dot=document.querySelector("#sheetStatus .status-dot");
  const txt=document.getElementById("sheetStatusText");
  if(!txt)return;
  if(SIAP_WEBAPP_URL){txt.textContent="Terhubung. Data dapat dikirim ke rekap Google Sheet.";dot&&dot.classList.add("connected")}
  else{txt.textContent="Belum terhubung. Data masih tersimpan pada perangkat ini.";dot&&dot.classList.remove("connected")}
}
const exportBtn=document.getElementById("exportLocalData");
if(exportBtn) exportBtn.addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify(collectSiapData(),null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="siap-satpol-pp-rekap-perangkat.json";a.click();URL.revokeObjectURL(a.href);
});
const syncBtn=document.getElementById("syncAllData");
if(syncBtn) syncBtn.addEventListener("click",async()=>{
  const old=syncBtn.textContent;syncBtn.disabled=true;syncBtn.textContent="Mengirim...";
  try{await sendToSheet(collectSiapData());syncBtn.textContent="Data terkirim ✓"}
  catch(e){syncBtn.textContent=SIAP_WEBAPP_URL?"Gagal mengirim":"Google Sheet belum terhubung"}
  setTimeout(()=>{syncBtn.disabled=false;syncBtn.textContent=old},2200);
});
refreshSheetStatus();

console.log("SIAP SATPOL PP v1.14 aktif");


/* ===== MENU AKTIF v1.7.2 ===== */
(function(){
  function getDrawer(){ return document.getElementById("mobileMenu"); }
  function getBackdrop(){ return document.getElementById("menuBackdrop"); }

  function setExpanded(value){
    document.querySelectorAll("#desktopMenuButton,#hamburger,.menu-trigger").forEach(btn=>{
      btn.setAttribute("aria-expanded", value ? "true" : "false");
    });
  }

  function openDrawer(){
    const drawer=getDrawer();
    const backdrop=getBackdrop();
    if(!drawer) return;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden","false");
    if(backdrop){
      backdrop.classList.add("open");
      backdrop.setAttribute("aria-hidden","false");
    }
    document.body.classList.add("menu-open");
    setExpanded(true);
  }

  function closeDrawer(){
    const drawer=getDrawer();
    const backdrop=getBackdrop();
    if(drawer){
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden","true");
    }
    if(backdrop){
      backdrop.classList.remove("open");
      backdrop.setAttribute("aria-hidden","true");
    }
    document.body.classList.remove("menu-open");
    setExpanded(false);
  }

  // Listener capture: memastikan tombol Menu yang SEKARANG terlihat selalu membuka drawer.
  document.addEventListener("click", function(e){
    const trigger=e.target.closest("#desktopMenuButton,#hamburger,.menu-trigger");
    if(trigger){
      e.preventDefault();
      e.stopImmediatePropagation();
      const drawer=getDrawer();
      if(drawer && drawer.classList.contains("open")) closeDrawer();
      else openDrawer();
      return;
    }

    if(e.target.closest("#menuCloseBtn") || e.target.id==="menuBackdrop"){
      e.preventDefault();
      closeDrawer();
      return;
    }

    // Saat memilih salah satu item drawer, halaman dibuka oleh navbtn lama,
    // lalu drawer ditutup tanpa mengganggu navigasinya.
    if(e.target.closest("#mobileMenu .drawer-item")){
      window.setTimeout(closeDrawer, 40);
    }
  }, true);

  document.addEventListener("keydown", function(e){
    if(e.key==="Escape") closeDrawer();
  });

  // state awal
  closeDrawer();
})();
 /* ===== END MENU AKTIF v1.7.2 ===== */


/* ===== HUKUM KASUS LEMBATA v1.8 ===== */
(function(){
  const search=document.getElementById("lawSearch");
  const filters=[...document.querySelectorAll(".law-filter")];
  const cards=[...document.querySelectorAll(".law-case")];
  const count=document.getElementById("lawCount");
  if(!cards.length)return;
  let level="all";
  function norm(s){return (s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
  function apply(){
    const q=norm(search?search.value:"").trim();
    let visible=0;
    cards.forEach(card=>{
      const hay=norm((card.dataset.keywords||"")+" "+card.textContent);
      const okText=!q||hay.includes(q);
      const okLevel=level==="all"||card.dataset.level===level;
      const show=okText&&okLevel;
      card.hidden=!show;
      if(show)visible++;
    });
    if(count)count.textContent=visible+" panduan ditampilkan";
  }
  filters.forEach(btn=>btn.addEventListener("click",()=>{
    filters.forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    level=btn.dataset.lawfilter||"all";
    apply();
  }));
  if(search)search.addEventListener("input",apply);
  apply();
})();
/* ===== END HUKUM KASUS LEMBATA v1.8 ===== */


/* ===== VISUAL HUKUM v1.9 ===== */
(function(){
  const visualCards=[...document.querySelectorAll(".law-visual-card")];
  if(!visualCards.length)return;

  visualCards.forEach(btn=>btn.addEventListener("click",()=>{
    const term=(btn.dataset.lawterm||"").toLowerCase();
    const search=document.getElementById("lawSearch");

    if(search)search.value="";
    const allFilter=document.querySelector('.law-filter[data-lawfilter="all"]');
    if(allFilter) allFilter.click();
    else document.querySelectorAll(".law-case").forEach(c=>c.hidden=false);

    const target=[...document.querySelectorAll(".law-case")]
      .find(c=>(c.dataset.keywords||"").toLowerCase().includes(term));

    if(target){
      target.hidden=false;
      target.open=true;
      setTimeout(()=>target.scrollIntoView({behavior:"smooth",block:"center"}),60);
    }
  }));
})();
/* ===== END VISUAL HUKUM v1.9 ===== */


/* ===== AUDIT TOTAL v1.9.1 ===== */
(function(){
  document.querySelectorAll(".acc-title").forEach(btn=>{
    const acc=btn.closest(".acc");
    btn.setAttribute("aria-expanded",acc&&acc.classList.contains("open")?"true":"false");
    btn.addEventListener("click",()=>{
      requestAnimationFrame(()=>{
        btn.setAttribute("aria-expanded",acc&&acc.classList.contains("open")?"true":"false");
      });
    });
  });

  window.addEventListener("hashchange",()=>{
    const id=(location.hash||"#beranda").slice(1);
    if(document.getElementById(id)) showPage(id,false);
  });

  document.querySelectorAll("img").forEach(img=>{
    img.addEventListener("error",()=>{
      img.classList.add("image-load-error");
      img.setAttribute("aria-hidden","true");
    },{once:true});
  });
})();
/* ===== END AUDIT TOTAL v1.9.1 ===== */


/* ===== HUKUM INLINE FOTO v1.9.6 ===== */
(function(){
  const grid=document.querySelector(".law-visual-grid");
  if(!grid)return;

  const links={
    pp16:"https://peraturan.bpk.go.id/Details/77284/pp-no-16-tahun-2018",
    perm26:"https://peraturan.bpk.go.id/Details/143373/permendagri-no-26-tahun-2020",
    perda2024:"https://peraturan.bpk.go.id/Details/310243/perda-kab-lembata-no-1-tahun-2024",
    jdih:"https://jdih.lembatakab.go.id/",
    child:"https://jdih.lembatakab.go.id/dokumen/view?id=9",
    pklCase:"https://kumparan.com/florespedia/petugas-tertibkan-pkl-yang-berjualan-di-atas-badan-jalan-dan-trotoar-di-lewoleba-1yVXji3Eufi"
  };

  const data={
    pkl:{
      title:"PKL / Pedagang Kaki Lima",
      intro:"Dasar hukum ditampilkan langsung pada situasi yang dipilih.",
      national:[
        ["PP Nomor 16 Tahun 2018","Dasar tugas Satpol PP dalam penegakan Perda/Perkada, ketertiban umum, ketenteraman, dan pelindungan masyarakat.",links.pp16],
        ["Permendagri Nomor 26 Tahun 2020","Rujukan penyelenggaraan Trantibum dan pelindungan masyarakat.",links.perm26]
      ],
      local:[
        ["Perda Lembata Nomor 12 Tahun 2006","Pernah disebut sebagai dasar penertiban PKL di Lewoleba. Status berlaku dan pasal yang akan dipakai harus diverifikasi kembali melalui JDIH/Bagian Hukum.",links.jdih,true]
      ],
      action:["Utamakan imbauan dan komunikasi persuasif.","Pastikan lokasi memang termasuk ruang yang dilarang/dibatasi.","Penertiban atau penyitaan hanya berdasarkan aturan dan prosedur yang sudah diverifikasi."],
      extra:[["Konteks penertiban PKL Lewoleba 2022",links.pklCase]]
    },
    bahu:{
      title:"Pedagang di Bahu Jalan / Trotoar",
      intro:"Penanganan berfokus pada fungsi jalan, keselamatan, dan ketertiban ruang publik.",
      national:[
        ["PP Nomor 16 Tahun 2018","Dasar umum pelaksanaan tugas Satpol PP.",links.pp16],
        ["UU Nomor 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan","Relevan bila aktivitas mengganggu fungsi jalan, keselamatan, atau kelancaran lalu lintas.","https://peraturan.bpk.go.id/"]
      ],
      local:[
        ["Perda Trantibum Lembata","Nomor/pasal yang tepat harus diverifikasi dari naskah resmi sebelum dipakai untuk penindakan.",links.jdih,true]
      ],
      action:["Identifikasi ruang jalan/trotoar yang digunakan.","Berikan penjelasan dan kesempatan untuk menata atau memindahkan barang bila memungkinkan.","Koordinasikan aspek lalu lintas dengan Dishub/Polri."]
    },
    bbm:{
      title:"BBM Bersubsidi & Penjualan Eceran",
      intro:"Satpol PP menjaga ketertiban dan mendukung operasi terpadu, bukan menetapkan sendiri tindak pidana Migas.",
      national:[
        ["UU Nomor 22 Tahun 2001 tentang Minyak dan Gas Bumi","Kerangka hukum utama kegiatan usaha minyak dan gas bumi.","https://peraturan.bpk.go.id/"],
        ["Perpres Nomor 191 Tahun 2014 beserta perubahannya","Mengatur penyediaan, pendistribusian, dan harga jual eceran BBM.","https://peraturan.bpk.go.id/"]
      ],
      local:[
        ["Aturan lokal / surat tugas operasi","Belum dicantumkan Perda Lembata khusus BBM karena belum terverifikasi. Gunakan surat tugas dan aturan sektoral yang berlaku.",links.jdih,true]
      ],
      action:["Jaga ketertiban lokasi/antrean.","Dokumentasikan temuan secara objektif.","Koordinasikan aspek distribusi atau dugaan pidana dengan instansi berwenang."]
    },
    sampah:{
      title:"Sampah & Kebersihan Ruang Publik",
      intro:"Kategori ini memiliki dasar daerah yang lebih jelas untuk penanganan sampah.",
      national:[
        ["UU Nomor 18 Tahun 2008 tentang Pengelolaan Sampah","Dasar nasional pengurangan dan penanganan sampah.","https://peraturan.bpk.go.id/"],
        ["PP Nomor 16 Tahun 2018","Dasar umum tugas Satpol PP dalam penegakan Perda/Perkada.",links.pp16]
      ],
      local:[
        ["Perda Kabupaten Lembata Nomor 5 Tahun 2017 tentang Pengelolaan Sampah","Rujukan daerah untuk pengelolaan sampah. Pasal larangan dan sanksi harus dibaca dari naskah resmi sebelum penindakan.",links.jdih,false],
        ["Perda Kabupaten Lembata Nomor 1 Tahun 2024","Relevan untuk aspek Pajak Daerah dan Retribusi Daerah, termasuk retribusi pelayanan persampahan.",links.perda2024,false]
      ],
      action:["Lakukan imbauan dan dokumentasi lokasi.","Untuk pelanggaran berulang, gunakan pasal Perda yang sudah diverifikasi.","Koordinasikan aspek teknis dengan OPD yang membidangi persampahan."]
    },
    ternak:{
      title:"Ternak Berkeliaran",
      intro:"Gangguan ternak dapat ditangani dalam kerangka Trantibum, tetapi dasar lokal khusus harus dipastikan.",
      national:[
        ["PP Nomor 16 Tahun 2018","Dasar umum tugas Satpol PP.",links.pp16],
        ["Permendagri Nomor 26 Tahun 2020","Rujukan penyelenggaraan ketertiban umum dan ketenteraman masyarakat.",links.perm26]
      ],
      local:[
        ["Perda/Perkada Lembata khusus ternak","Belum dicantumkan nomor Perda karena belum terverifikasi. Jangan memakai Perda daerah lain sebagai dasar.",links.jdih,true]
      ],
      action:["Identifikasi pemilik ternak.","Utamakan komunikasi dan pencegahan gangguan.","Koordinasikan dengan desa/kelurahan dan OPD pertanian/peternakan."]
    },
    pelajar:{
      title:"Pelajar Bolos / Pembinaan Remaja",
      intro:"Pendekatan harus mengutamakan perlindungan anak, pembinaan, dan koordinasi dengan sekolah/orang tua.",
      national:[
        ["UU Nomor 35 Tahun 2014 tentang Perlindungan Anak","Menegaskan perlindungan hak anak dan kewajiban perlindungan.","https://peraturan.bpk.go.id/"],
        ["PP Nomor 16 Tahun 2018","Dasar umum pelaksanaan tugas Satpol PP.",links.pp16]
      ],
      local:[
        ["Perda Kabupaten Lembata Nomor 17 Tahun 2015 tentang Perlindungan Anak","Tercatat berlaku di JDIH Kabupaten Lembata.",links.child,false]
      ],
      action:["Lakukan pendekatan humanis.","Jaga privasi anak.","Koordinasikan dengan sekolah, orang tua/wali, dan layanan terkait."]
    },
    parkir:{
      title:"Parkir & Penggunaan Ruang Jalan",
      intro:"Masalah parkir perlu dibedakan antara ketertiban ruang publik, lalu lintas, dan retribusi.",
      national:[
        ["UU Nomor 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan","Dasar nasional penyelenggaraan lalu lintas dan ketertiban jalan.","https://peraturan.bpk.go.id/"],
        ["PP Nomor 16 Tahun 2018","Dasar umum penegakan Perda/Perkada oleh Satpol PP.",links.pp16]
      ],
      local:[
        ["Perda Kabupaten Lembata Nomor 1 Tahun 2024 tentang Pajak Daerah dan Retribusi Daerah","Berstatus berlaku dan menjadi rujukan terbaru untuk aspek retribusi daerah.",links.perda2024,false]
      ],
      action:["Identifikasi apakah masalahnya parkir, penggunaan ruang jalan, atau retribusi.","Koordinasikan aspek teknis lalu lintas dengan Dishub/Polri.","Jangan memakai tarif atau Perda retribusi lama yang sudah dicabut."]
    },
    kerumunan:{
      title:"Kerumunan, Konflik Ringan & Unjuk Rasa",
      intro:"Jaga ketertiban tanpa menganggap unjuk rasa damai sebagai pelanggaran dengan sendirinya.",
      national:[
        ["UU Nomor 9 Tahun 1998","Dasar kemerdekaan menyampaikan pendapat di muka umum.","https://peraturan.bpk.go.id/Details/45478/uu-no-9-tahun-1998"],
        ["Permendagri Nomor 26 Tahun 2020","Rujukan pelaksanaan ketertiban umum dan ketenteraman masyarakat.",links.perm26]
      ],
      local:[
        ["Perda Trantibum Lembata","Status dan pasal lokal yang tepat harus diverifikasi sebelum penindakan.",links.jdih,true]
      ],
      action:["Gunakan komunikasi dan de-eskalasi.","Jaga akses pelayanan/aset sesuai penugasan.","Koordinasikan pengamanan massa dan dugaan pidana dengan Polri."]
    }
  };

  // Bungkus setiap kartu agar detail bisa muncul persis di bawah foto itu.
  [...grid.querySelectorAll(".law-visual-card")].forEach(card=>{
    if(card.parentElement.classList.contains("law-visual-item"))return;
    const wrap=document.createElement("div");
    wrap.className="law-visual-item";
    card.parentNode.insertBefore(wrap,card);
    wrap.appendChild(card);

    const detail=document.createElement("div");
    detail.className="law-inline-detail";
    detail.hidden=true;
    wrap.appendChild(detail);
  });

  function lawBox(label,item,kind){
    const [title,desc,url,caution]=item;
    return `
      <div class="law-inline-box ${kind} ${caution?"caution":""}">
        <span class="law-inline-label">${label}</span>
        <strong>${title}</strong>
        <p>${desc}</p>
        ${url?`<div class="law-inline-links"><a href="${url}" target="_blank" rel="noopener">Buka sumber ↗</a></div>`:""}
      </div>`;
  }

  function render(card,key){
    const d=data[key];
    if(!d)return;
    const wrap=card.closest(".law-visual-item");
    const detail=wrap.querySelector(".law-inline-detail");
    const alreadyOpen=!detail.hidden;

    document.querySelectorAll(".law-inline-detail").forEach(x=>x.hidden=true);
    document.querySelectorAll(".law-visual-card").forEach(x=>x.classList.remove("is-selected"));

    if(alreadyOpen)return;

    card.classList.add("is-selected");

    const national=d.national.map((x,i)=>lawBox(i===0?"DASAR HUKUM NASIONAL":"ATURAN NASIONAL",x,"national")).join("");
    const local=d.local.map((x,i)=>lawBox(i===0?"PERDA / ATURAN LEMBATA":"ATURAN DAERAH",x,"local")).join("");
    const action=`
      <div class="law-inline-box action">
        <span class="law-inline-label">TINDAKAN SATPOL PP</span>
        <strong>Arah tindakan di lapangan</strong>
        <ul>${d.action.map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>`;
    const extra=(d.extra||[]).length
      ? `<div class="law-inline-links">${d.extra.map(x=>`<a href="${x[1]}" target="_blank" rel="noopener">${x[0]} ↗</a>`).join("")}</div>`
      : "";

    detail.innerHTML=`
      <div class="law-inline-head">
        <div class="law-inline-kicker">DASAR HUKUM LANGSUNG</div>
        <h3>${d.title}</h3>
        <p>${d.intro}</p>
      </div>
      <div class="law-inline-sections">
        ${national}
        ${local}
        ${action}
        ${extra}
      </div>
      <div class="law-inline-note">
        <b>Catatan:</b> pasal, sanksi, penyitaan, atau tindakan paksa hanya digunakan setelah naskah resmi dan SOP yang berlaku sudah diverifikasi.
      </div>`;
    detail.hidden=false;
  }

  // Menangkap klik sebelum handler v1.9 lama, jadi tidak lagi meloncat ke daftar bawah.
  document.addEventListener("click",e=>{
    const card=e.target.closest(".law-visual-card");
    if(!card || !grid.contains(card))return;
    const key=(card.dataset.lawterm||"").toLowerCase();
    if(!data[key])return;
    e.preventDefault();
    e.stopImmediatePropagation();
    render(card,key);
  },true);
})();
/* ===== END HUKUM INLINE FOTO v1.9.6 ===== */



/* ===== DYNAMIC NAV v1.10 ===== */
document.addEventListener("click",e=>{
  const btn=e.target.closest(".detail .navbtn");
  if(btn&&btn.dataset.page){
    e.preventDefault();
    showPage(btn.dataset.page);
  }
});
/* ===== END DYNAMIC NAV v1.10 ===== */
