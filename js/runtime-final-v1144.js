
/* ===== FINAL INTERAKTIF v1.14.4 ===== */
(function(){
  if(window.__SIAP_FINAL_INTERAKTIF_1144__) return;
  window.__SIAP_FINAL_INTERAKTIF_1144__ = true;

  const $ = (id)=>document.getElementById(id);

  /* ---------------- SIMULASI 5 SKENARIO ---------------- */
  const SIMS = {
    pkl:{
      n:"01", title:"PKL keberatan ditata",
      story:"Pedagang berkata, “Saya sudah lama jualan di sini. Kenapa sekarang baru ditegur?”",
      img:"assets/visual/m2-01-pkl.webp",
      opts:[
        ["kurang","“Tidak perlu banyak alasan. Ikuti saja arahan petugas.”","Terlalu cepat menutup komunikasi.","“Kami dengar dulu keberatannya, lalu kami jelaskan bagian yang perlu ditata.”"],
        ["baik","Dengarkan keberatan, lalu jelaskan bagian yang perlu ditata.","Paling sesuai dengan komunikasi humanis dan persuasif.","“Kami paham Bapak sudah lama di sini. Mari kita lihat dulu bagian yang perlu dirapikan.”"],
        ["cukup","Tinggalkan lokasi agar tidak terjadi perdebatan.","Bisa diperlukan jika situasi tidak aman, tetapi kondisi ini masih bisa dikomunikasikan.","Tetap komunikasikan maksud secara singkat lalu koordinasikan bila penolakan berlanjut."]
      ]
    },
    bahujalan:{
      n:"02", title:"Pedagang di bahu jalan",
      story:"Pedagang berkata, “Orang lain juga jualan di sini. Kenapa saya yang ditegur?”",
      img:"assets/visual/m2-02-bahu-jalan.webp",
      opts:[
        ["baik","Akui informasi tentang pedagang lain, lalu kembali pada kondisi di titik yang sedang ditangani.","Tetap fokus tanpa mengabaikan keberatan.","“Lokasi lain kami catat. Untuk titik ini, bagian yang perlu dirapikan adalah yang mengganggu akses.”"],
        ["cukup","“Kalau orang lain salah, bukan berarti Bapak boleh salah.”","Mudah terdengar menggurui.","Fokuskan pada akses dan keselamatan."],
        ["kurang","“Kalau tidak pindah sekarang kami tindak.”","Ancaman sebelum dasar tindakan dipastikan dapat memperburuk situasi.","Jelaskan kondisi, arahkan perbaikan, lalu koordinasikan."]
      ]
    },
    bbm:{
      n:"03", title:"Penjual BBM eceran",
      story:"Penjual berkata keras, “Kenapa hanya saya? Memangnya saya menimbun?”",
      img:"assets/visual/m2-03-bbm-eceran.webp",
      opts:[
        ["kurang","Langsung menyatakan penjualan itu pasti melanggar aturan.","Belum cukup fakta untuk membuat kesimpulan.","Hindari tuduhan dan catat kondisi yang terlihat."],
        ["baik","Jelaskan bahwa petugas sedang mencatat kondisi, dengarkan penjelasan, lalu koordinasikan bila menyangkut kewenangan teknis lain.","Menjaga batas kewenangan.","“Kami belum menyimpulkan pelanggaran. Kami sedang melihat kondisi dan mencatat informasi.”"],
        ["cukup","Mengakhiri percakapan karena penjual mulai meninggikan suara.","Belum tentu perlu jika situasi masih aman.","Redakan dulu dan gunakan kalimat singkat."]
      ]
    },
    sampah:{
      n:"04", title:"Sampah sembarangan",
      story:"Warga berkata, “Cuma sedikit. Yang lain juga buang di sini.”",
      img:"assets/visual/m2-04-sampah.webp",
      opts:[
        ["baik","Minta warga memperbaiki perilakunya dan jelaskan dampak kebersihan tanpa mempermalukan.","Fokus pada perilaku yang perlu diperbaiki.","“Mohon bantuannya sampah ini dipindahkan ke tempat yang semestinya.”"],
        ["kurang","Foto warga lalu ancam menyebarkan foto agar jera.","Mempermalukan bukan pendekatan pembinaan.","Dokumentasi resmi tidak digunakan sebagai ancaman."],
        ["cukup","Membiarkan karena sampahnya sedikit.","Fungsi imbauan tidak berjalan.","Berikan imbauan singkat dan proporsional."]
      ]
    },
    parkir:{
      n:"05", title:"Juru parkir mempertanyakan teguran",
      story:"Juru parkir berkata, “Saya sudah atur baik-baik. Tidak ada masalah.”",
      img:"assets/visual/m2-05-juru-parkir.webp",
      opts:[
        ["kurang","“Cara parkir Bapak memang salah dari awal.”","Menyerang cara kerja orangnya, bukan kondisi.","Tunjukkan posisi kendaraan yang menjadi perhatian."],
        ["baik","Dengarkan penjelasan, tunjukkan posisi kendaraan yang mengganggu, lalu beri arahan konkret.","Fokus pada kondisi dan solusi.","“Kami lihat bagian ini mulai menyempit. Bisa kendaraan diatur sedikit ke bagian yang lebih aman?”"],
        ["cukup","Ulangi teguran yang sama sampai juru parkir berhenti membantah.","Mengulang tanpa mendengar tidak membuat pesan lebih jelas.","Dengarkan dulu lalu kembali ke fakta."]
      ]
    }
  };
  const ORDER=["pkl","bahujalan","bbm","sampah","parkir"];
  let currentSim="pkl";

  function renderSim(key){
    if(!SIMS[key] || !$("simTitle")) return;
    currentSim=key;
    const s=SIMS[key];

    document.querySelectorAll(".sim-select").forEach(b=>{
      b.classList.toggle("active",b.dataset.sim===key);
    });

    if($("simHero")){
      $("simHero").src=s.img;
      $("simHero").alt=s.title;
      $("simHero").hidden=false;
    }
    if($("simNumber")) $("simNumber").textContent=`SKENARIO ${s.n} / 05`;
    $("simTitle").textContent=s.title;
    if($("simStory")) $("simStory").textContent=s.story;

    const options=$("simOptions");
    if(options){
      options.innerHTML="";
      s.opts.forEach((o,i)=>{
        const b=document.createElement("button");
        b.type="button";
        b.className="sim-option sim-option-v1144";
        b.innerHTML=`<span>${String.fromCharCode(65+i)}</span><p>${o[1]}</p>`;
        b.addEventListener("click",()=>{
          options.querySelectorAll(".sim-option").forEach(x=>{
            x.classList.remove("selected-good","selected-mid","selected-bad");
          });
          b.classList.add(o[0]==="baik"?"selected-good":o[0]==="cukup"?"selected-mid":"selected-bad");
          if($("simFeedbackTitle")) $("simFeedbackTitle").textContent=
            o[0]==="baik"?"Respons paling tepat":
            o[0]==="cukup"?"Masih bisa diperbaiki":"Perlu dipikirkan kembali";
          if($("simFeedbackText")) $("simFeedbackText").textContent=o[2];
          if($("simBetter")) $("simBetter").textContent=o[3];
          $("simFeedback")?.classList.remove("hidden");
        });
        options.appendChild(b);
      });
    }
    $("simFeedback")?.classList.add("hidden");
  }

  document.querySelectorAll(".sim-select").forEach(b=>{
    b.addEventListener("click",()=>renderSim(b.dataset.sim));
  });

  $("simNext")?.addEventListener("click",()=>{
    const i=ORDER.indexOf(currentSim);
    renderSim(ORDER[(i+1)%ORDER.length]);
  });

  if($("simTitle")) renderSim("pkl");

  /* ---------------- PRE-TEST / POST-TEST 5 SOAL ---------------- */
  const QUESTIONS=[
    {
      q:"Saat mulai berbicara dengan masyarakat, langkah yang paling tepat adalah...",
      o:["Langsung menyebut pelanggaran","Sapa, perkenalkan diri, jelaskan maksud, lalu dengarkan","Menaikkan nada agar terlihat tegas"], a:1
    },
    {
      q:"Jika masyarakat keberatan terhadap teguran, petugas sebaiknya...",
      o:["Mendengarkan dulu lalu menjelaskan kembali maksud secara singkat","Memotong pembicaraan agar tidak melebar","Langsung mengancam tindakan"], a:0
    },
    {
      q:"Jika dasar aturan atau kewenangan belum jelas...",
      o:["Tetap bertindak berdasarkan perkiraan","Klarifikasi dan koordinasikan terlebih dahulu","Gunakan kebiasaan lama sebagai dasar"], a:1
    },
    {
      q:"Pada situasi yang mulai tegang tetapi masih aman...",
      o:["Balas dengan suara lebih keras","Redakan percakapan dan gunakan kalimat singkat","Langsung menuduh masyarakat menghambat tugas"], a:1
    },
    {
      q:"SIAP SATPOL PP digunakan sebagai...",
      o:["SOP baru pengganti aturan resmi","Panduan praktis komunikasi lapangan yang tetap mengikuti SOP dan kewenangan","Aplikasi untuk menentukan sanksi"], a:1
    }
  ];
  let testMode="pre";

  function renderQuiz(){
    const form=$("quizForm");
    if(!form) return;
    form.innerHTML=QUESTIONS.map((q,i)=>`
      <fieldset class="quiz-question-v113">
        <legend>${i+1}. ${q.q}</legend>
        ${q.o.map((o,j)=>`
          <label>
            <input type="radio" name="q${i}" value="${j}">
            <span>${String.fromCharCode(65+j)}. ${o}</span>
          </label>`).join("")}
      </fieldset>`).join("");
  }

  function setMode(mode){
    testMode=mode;
    document.querySelectorAll(".test-tab").forEach(b=>{
      b.classList.toggle("active",b.dataset.test===mode);
    });
    if($("submitQuiz")){
      $("submitQuiz").textContent="Simpan Hasil "+(mode==="pre"?"Pre-Test":"Post-Test");
    }
    $("quizResult")?.classList.add("hidden");
    renderQuiz();
  }

  document.querySelectorAll(".test-tab").forEach(b=>{
    b.addEventListener("click",()=>setMode(b.dataset.test));
  });

  $("submitQuiz")?.addEventListener("click",()=>{
    let correct=0;
    const answers=[];
    for(let i=0;i<QUESTIONS.length;i++){
      const checked=document.querySelector(`input[name="q${i}"]:checked`);
      if(!checked){
        alert(`Soal nomor ${i+1} belum dijawab.`);
        return;
      }
      const v=Number(checked.value);
      answers.push(v);
      if(v===QUESTIONS[i].a) correct++;
    }

    const score=correct*20;
    const name=($("participantName")?.value||"").trim()||"Tanpa nama";
    const record={name,score,answers,timestamp:new Date().toISOString()};

    localStorage.setItem(
      testMode==="pre"?"siap_simple_pre_v113":"siap_simple_post_v113",
      JSON.stringify(record)
    );

    if($("quizScore")) $("quizScore").textContent=`${testMode==="pre"?"Pre-Test":"Post-Test"}: ${score}/100`;
    if($("quizMessage")){
      $("quizMessage").textContent=testMode==="pre"
        ?"Nilai awal tersimpan. Lanjutkan membaca panduan dan simulasi sebelum post-test."
        :"Nilai post-test tersimpan. Bandingkan dengan nilai pre-test untuk bahan laporan aktualisasi.";
    }
    if($("quizReview")){
      $("quizReview").innerHTML=QUESTIONS.map((q,i)=>`<p>${answers[i]===q.a?"✓":"×"} Soal ${i+1}</p>`).join("");
    }
    $("quizResult")?.classList.remove("hidden");
  });

  if($("quizForm")) setMode("pre");

  /* ---------------- FEEDBACK ---------------- */
  const feedbackForm=$("feedbackForm");
  if(feedbackForm && !feedbackForm.dataset.runtime1144){
    feedbackForm.dataset.runtime1144="1";
    feedbackForm.addEventListener("submit",(e)=>{
      e.preventDefault();
      const data={
        name:($("fbName")?.value||"").trim()||"Tanpa nama",
        ease:Number($("fbEase")?.value||0),
        help:Number($("fbHelp")?.value||0),
        note:($("fbNote")?.value||"").trim(),
        timestamp:new Date().toISOString()
      };
      localStorage.setItem("siap_simple_feedback_v113",JSON.stringify(data));
      $("feedbackSaved")?.classList.remove("hidden");
    });
  }

  document.documentElement.dataset.runtimeFinal="1144";
})();
/* ===== END FINAL INTERAKTIF v1.14.4 ===== */
