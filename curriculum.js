const curriculumTracks = {
  umum: {
    label: 'Matematika Umum (Wajib)',
    phase: 'Fase F',
    ganjil: [
      {
        title: 'Transformasi Fungsi',
        summary: 'Ikuti perubahan koordinat titik untuk menggambar grafik hasil transformasi.',
        topics: [
          ['Translasi grafik', 'Geser titik (x, y) menjadi (x + a, y + b). Grafik y = f(x) berubah menjadi y = f(x − a) + b. Aturan ini berlaku untuk fungsi linear, kuadrat, maupun eksponensial.'],
          ['Refleksi grafik', 'Terhadap sumbu x, hasilnya y = −f(x). Terhadap sumbu y, hasilnya y = f(−x). Pencerminan terhadap y = x menukar (x, y) menjadi (y, x). Pencerminan terhadap y = −x mengubahnya menjadi (−y, −x). Hasil cermin bisa berupa relasi yang bukan fungsi.'],
          ['Rotasi berpusat di (0, 0)', 'Untuk sudut θ berlawanan arah jarum jam, (x, y) menjadi (x cos θ − y sin θ, x sin θ + y cos θ). Pada rotasi 90°, aturannya (x, y) → (−y, x). Uji garis vertikal untuk memeriksa apakah grafik baru masih menyatakan fungsi.'],
          ['Dilatasi grafik', 'Dilatasi berpusat di titik asal dengan faktor k ≠ 0 memetakan (x, y) ke (kx, ky). Grafik barunya y = k · f(x/k).'],
          ['Komposisi transformasi', 'Terapkan transformasi sesuai urutan. Pada T₂ ∘ T₁, kerjakan T₁ dahulu. Menukar urutan translasi dan refleksi dapat mengubah hasil.']
        ],
        example: 'Grafik y = x² digeser 2 satuan ke kanan dan 3 ke atas, sehingga y = (x − 2)² + 3. Setelah dicerminkan terhadap sumbu x, grafiknya menjadi y = −(x − 2)² − 3.'
      },
      {
        title: 'Busur dan Juring Lingkaran',
        summary: 'Hubungkan sudut pusat dengan jarak sepanjang lengkungan dan luas daerah yang dibatasinya.',
        topics: [
          ['Panjang busur', 'Untuk sudut pusat θ dalam derajat, panjang busur s = (θ/360°) × 2πr. Jika θ dinyatakan dalam radian, s = rθ.'],
          ['Luas juring', 'Untuk sudut pusat θ dalam derajat, luas juring L = (θ/360°) × πr². Jika θ dinyatakan dalam radian, L = ½r²θ.'],
          ['Penerapan', 'Gunakan panjang busur untuk jarak yang ditempuh ujung jarum jam. Gunakan luas juring untuk menghitung luas area siram alat penyiram yang berputar dalam sudut tertentu.']
        ],
        example: 'Penyiram berjangkauan 14 m berputar 90°. Busur terluarnya sepanjang 7π m, dan luas area yang disiram adalah 49π m².'
      }
    ],
    genap: [
      {
        title: 'Kombinatorik dan Kaidah Pencacahan',
        summary: 'Pilih aturan hitung sesuai urutan, tahapan, dan syarat pemilihan.',
        topics: [
          ['Pengisian tempat, aturan penjumlahan, dan perkalian', 'Isi setiap posisi dengan pilihan yang memenuhi syarat. Kalikan pilihan antar tahap. Jumlahkan pilihan dari kasus yang saling lepas.'],
          ['Permutasi', 'Jika urutan berpengaruh, susunan r dari n unsur berbeda berjumlah n!/(n − r)!. Untuk menyusun seluruh unsur dengan pengulangan berukuran a, b, dan seterusnya, gunakan n!/(a!b!⋯). Susunan melingkar n unsur berbeda berjumlah (n − 1)! jika rotasi dianggap sama.'],
          ['Kombinasi dan peluang', 'Jika urutan tidak berpengaruh, banyak pilihan r dari n unsur adalah C(n,r) = n!/[r!(n − r)!]. Jika semua hasil dasar sama mungkin, bagi banyak hasil yang memenuhi kejadian dengan banyak seluruh hasil.']
        ],
        example: 'Dari 8 orang, ada C(8,3) = 56 cara memilih tim beranggota 3. Untuk memilih ketua, sekretaris, dan bendahara, ada 8 × 7 × 6 = 336 cara karena perannya berbeda.',
        links: [['Buka bab interaktif', '#materi/pencacahan'], ['Coba kalkulator', '#rumus/pencacahan'], ['Latihan pencacahan', '#kuis/pencacahan']]
      },
      {
        title: 'Statistika',
        summary: 'Rangkum data dan tafsirkan pola dengan ukuran pemusatan dan penyebaran.',
        topics: [
          ['Pengumpulan dan penyajian data', 'Tentukan pertanyaan, populasi, dan cara mengambil sampel. Sajikan data kategori dengan diagram batang, data numerik berkelompok dengan histogram, dan pasangan data numerik dengan diagram pencar.'],
          ['Ukuran pemusatan', 'Mean adalah jumlah data dibagi banyak data. Median adalah nilai tengah setelah data diurutkan, atau rata-rata dua nilai tengah jika jumlah data genap. Modus adalah nilai yang paling sering muncul.'],
          ['Ukuran penyebaran', 'Jangkauan adalah nilai terbesar dikurangi nilai terkecil. Jangkauan antarkuartil (IQR) adalah Q₃ − Q₁. Simpangan baku mengukur penyebaran data di sekitar rata-rata dalam satuan yang sama dengan data.'],
          ['Analisis data lanjut', 'Bandingkan pemusatan dan penyebaran antarkelompok. Gunakan diagram pencar untuk melihat arah hubungan dan pencilan. Hubungan yang tampak pada grafik tidak cukup untuk menyimpulkan sebab-akibat.']
        ],
        example: 'Untuk data 4, 5, 5, 6, 10, mean = 6, median = 5, modus = 5, dan jangkauan = 6. Nilai 10 menarik mean ke atas. Median lebih mewakili nilai tengah data tersebut.'
      }
    ]
  },
  lanjut: {
    label: 'Matematika Tingkat Lanjut',
    phase: 'Pilihan Fase F',
    ganjil: [
      {
        title: 'Geometri Analitik',
        summary: 'Gunakan persamaan untuk mengenali bentuk kurva, lalu cari garis singgung di titik tertentu.',
        topics: [
          ['Lingkaran', 'Bentuk baku (x − a)² + (y − b)² = r² menyatakan pusat (a, b) dan jari-jari r. Garis singgung di suatu titik tegak lurus terhadap jari-jari yang melalui titik itu.'],
          ['Elips, parabola, dan hiperbola', 'Contoh bentuk baku berpusat atau berpuncak di titik asal ialah x²/a² + y²/b² = 1 (elips), y² = 4px (parabola), dan x²/a² − y²/b² = 1 (hiperbola). Tanda dan posisi suku menentukan arah kurva.'],
          ['Garis singgung', 'Jika turunan y terhadap x terdefinisi di titik (x₀, y₀), gunakan y − y₀ = m(x − x₀), dengan m = y′(x₀). Pada singgung vertikal, gunakan x = x₀.']
        ],
        example: 'Pada lingkaran x² + y² = 25, titik (3, 4) berada di kurva. Jari-jarinya searah vektor (3, 4), sehingga garis singgungnya 3x + 4y = 25.'
      },
      {
        title: 'Kalkulus: Limit dan Turunan',
        summary: 'Pahami perilaku fungsi di sekitar titik dan gunakan turunan sebagai laju perubahan sesaat.',
        topics: [
          ['Limit fungsi', 'Limit menggambarkan nilai yang didekati fungsi. Untuk fungsi kontinu, substitusi langsung berlaku. Pada bentuk 0/0, coba faktorisasi, rasionalisasi, atau identitas yang sesuai.'],
          ['Limit trigonometri', 'Jika x dalam radian, lim x→0 (sin x)/x = 1. Gunakan identitas trigonometri untuk membentuk rasio dasar ini.'],
          ['Turunan aljabar, trigonometri, dan eksponensial', 'Aturan dasar meliputi (xⁿ)′ = nxⁿ⁻¹, (sin x)′ = cos x, (cos x)′ = −sin x, dan (eˣ)′ = eˣ. Gunakan aturan jumlah, hasil kali, hasil bagi, atau rantai sesuai bentuk fungsi.']
        ],
        example: 'lim x→0 (sin 3x)/x = 3 karena (sin 3x)/(3x) → 1. Untuk f(x) = sin(3x) + eˣ, aturan rantai memberi f′(x) = 3 cos(3x) + eˣ.'
      }
    ],
    genap: [
      {
        title: 'Kalkulus: Integral',
        summary: 'Hubungkan penjumlahan luas potongan kecil dengan integral tentu dan antiturunan.',
        topics: [
          ['Jumlahan Riemann', 'Bagi [a, b] menjadi n selang dengan lebar Δx = (b − a)/n. Pilih titik sampel xᵢ* pada tiap selang. Jumlah Σ f(xᵢ*)Δx mendekati integral ketika ukuran selang mengecil.'],
          ['Integral tentu dan sifatnya', 'Integral tentu menyatakan luas bertanda. Bagian di bawah sumbu x berkontribusi negatif. Integral bersifat linear, dapat dijumlahkan pada interval bersebelahan, dan berubah tanda ketika batas ditukar.'],
          ['Teorema Dasar Kalkulus', 'Jika f kontinu dan F′ = f, maka ∫ₐᵇ f(x) dx = F(b) − F(a). Untuk G(x) = ∫ₐˣ f(t) dt, turunannya G′(x) = f(x).']
        ],
        example: 'Dengan antiturunan x³/3, integral ∫₀² x² dx bernilai 8/3. Karena grafiknya di atas sumbu x, hasil tersebut juga menyatakan luas daerahnya.'
      },
      {
        title: 'Analisis Data dan Peluang',
        summary: 'Gunakan variabel acak dan distribusi peluang untuk memodelkan hasil yang belum diketahui.',
        topics: [
          ['Variabel acak diskret dan kontinu', 'Variabel diskret memiliki nilai yang dapat dicacah, seperti jumlah jawaban benar. Variabel kontinu dapat mengambil nilai pada suatu interval, seperti waktu tempuh.'],
          ['Fungsi peluang dan fungsi kepadatan', 'Untuk variabel diskret, jumlah semua nilai P(X = x) adalah 1. Pada variabel kontinu dengan kepadatan, peluang suatu interval adalah luas di bawah kurva kepadatan pada interval itu. Peluang tepat satu titik bernilai 0.'],
          ['Distribusi binomial', 'Gunakan X ~ Bin(n,p) untuk menghitung jumlah sukses dari n percobaan independen dengan peluang sukses p tetap. P(X = k) = C(n,k)pᵏ(1 − p)ⁿ⁻ᵏ, dengan nilai harapan np.'],
          ['Distribusi normal', 'Distribusi normal kontinu berbentuk lonceng dan simetris terhadap mean μ. Simpangan baku σ mengatur lebar kurva. Gunakan z = (x − μ)/σ untuk mengubah nilai ke skala normal baku.']
        ],
        example: 'Pada 4 lemparan koin adil yang independen, peluang muncul tepat 2 sisi gambar adalah C(4,2)(½)⁴ = 3/8.'
      }
    ]
  }
};

function renderCurriculum(requestedTrack, requestedSemester) {
  const trackId = Object.hasOwn(curriculumTracks, requestedTrack) ? requestedTrack : 'umum';
  const semester = requestedSemester === 'genap' ? 'genap' : 'ganjil';
  const track = curriculumTracks[trackId];
  const semesterLabels = {ganjil: 'Ganjil', genap: 'Genap'};
  const notes = trackId === 'lanjut'
    ? 'Panduan resmi menyebutnya Matematika Tingkat Lanjut pada Fase F. Sebutan Fase F+ merujuk pada jalur ini dalam peta belajar.'
    : '';
  main.innerHTML = pageHead('Materi Kurikulum Merdeka', 'Kelas XII · Pilih kelompok dan semester untuk membuka konsep, rumus, dan contoh soal.') + `
    <nav class="tabs" aria-label="Kelompok matematika">
      ${Object.entries(curriculumTracks).map(([id, item]) => `
        <a class="tab" href="#kurikulum/${id}/${semester}" aria-current="${id === trackId ? 'page' : 'false'}">${item.label}</a>`).join('')}
    </nav>
    <nav class="tabs" aria-label="Pilih semester">
      ${Object.entries(semesterLabels).map(([id, label]) => `
        <a class="tab" href="#kurikulum/${trackId}/${id}" aria-current="${id === semester ? 'page' : 'false'}">Semester ${label}</a>`).join('')}
    </nav>
    <div class="section-head curriculum-heading">
      <h2>${track.label}</h2><p>${track.phase} · Semester ${semesterLabels[semester]}</p>
    </div>
    <div class="source-stack curriculum-lessons">
      ${track[semester].map(lesson => `
        <article class="panel">
          <h3>${lesson.title}</h3><p>${lesson.summary}</p>
          <div class="topics">${lesson.topics.map(([name, detail]) => `
            <details><summary>${name}</summary><div class="topic-body"><p>${detail}</p></div></details>`).join('')}
          </div>
          <details class="curriculum-example"><summary>Contoh dan pembahasan</summary><p>${lesson.example}</p></details>
          ${lesson.links ? `<div class="actions">${lesson.links.map(([label, url]) => `<a class="button ghost" href="${url}">${label}</a>`).join('')}</div>` : ''}
        </article>`).join('')}
      <section class="panel">
        <h3>Referensi dan bab dari buku acuan</h3>
        <p>Pembagian Ganjil–Genap mengikuti peta belajar ini dan dapat disesuaikan dengan alur tujuan pembelajaran sekolah.</p>
        ${notes ? `<p>${notes}</p>` : ''}
        <div class="actions">
          <a class="button ghost" href="#materi/barisan">Bab buku acuan</a>
          <a class="button ghost" href="https://repositori.kemendikdasmen.go.id/33608/1/5.%20Final%20Panduan%20Mata%20Pelajaran%20Matematika_12_09_2025_Revisi%203.pdf" target="_blank" rel="noopener">Panduan resmi</a>
          <a class="button ghost" href="https://www.ruangguru.com/blog/materi-matematika-kelas-12-kurikulum-merdeka" target="_blank" rel="noopener">Ringkasan Ruangguru</a>
        </div>
      </section>
    </div>`;
}
