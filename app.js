const chapters = [
  {id:'barisan', title:'Barisan dan Deret', icon:'→', tint:'mint', page:1, desc:'Kenali pola, tentukan suku, dan hitung jumlah deret.', topics:[
    ['Barisan aritmetika',3,'Selisih dua suku berurutan selalu sama. Jika suku pertama a dan beda b, setiap langkah menambah b.','arith'],
    ['Barisan geometri',11,'Rasio antarsuku tetap. Dari satu suku ke suku berikutnya, kalikan dengan r.','geom'],
    ['Deret aritmetika',20,'Deret adalah penjumlahan suku barisan. Pasangkan suku pertama dengan yang terakhir untuk mendapatkan jumlah pasangan yang sama.','sArith'],
    ['Deret geometri',25,'Kalikan jumlah dengan r, lalu kurangkan kedua persamaan untuk menyisakan suku pertama dan suku batas. Jika r = 1, semua suku bernilai a.','sGeom'],
    ['Deret geometri tak hingga',28,'Jumlah mendekati nilai tertentu hanya jika |r| < 1 untuk suku awal yang tidak nol. Pada pola pantulan, jarak naik dan turun dihitung terpisah.','infinite'],
    ['Bunga tunggal',30,'Bunga setiap periode tetap karena selalu dihitung terhadap modal awal. Besar bunga mengikuti pola aritmetika.','simple']
  ]},
  {id:'investasi', title:'Investasi dan Pinjaman', icon:'≋', tint:'gold', page:35, desc:'Bandingkan pertumbuhan tabungan, bunga, dan cicilan.', topics:[
    ['Suku bunga tunggal',37,'Samakan satuan waktu antara suku bunga dan jumlah periode. Untuk suku nominal tahunan yang dibagi rata per bulan, bagi tarif tahunan dengan 12.','simple'],
    ['Investasi bunga majemuk',40,'Bunga setiap periode menambah saldo sehingga menjadi dasar bunga periode berikutnya.','compound'],
    ['Investasi anuitas',45,'Setoran tetap pada akhir periode membentuk deret geometri. Untuk setoran di awal periode, hasil akhir dikalikan lagi dengan (1 + i).','deposit'],
    ['Pinjaman bunga majemuk',55,'Pada angsuran pokok tetap, pokok dibayar sama besar setiap periode. Bunga mengikuti sisa pokok sebelum pembayaran, sehingga total cicilan menurun.','fixed'],
    ['Pinjaman dengan anuitas',59,'Cicilan total tetap. Pada setiap periode, bunga dihitung dari sisa pinjaman dan sisanya menjadi pembayaran pokok.','loan'],
    ['Parameter suku bunga',71,'Jika modal awal, target saldo, dan jumlah periode diketahui, ambil akar pangkat n dari faktor pertumbuhan untuk mendapatkan tingkat bunga efektif per periode.','rate'],
    ['Parameter periode pembayaran',73,'Untuk mencari waktu mencapai target dengan bunga majemuk, gunakan logaritma. Jika bunga masuk hanya pada akhir periode, bulatkan ke atas untuk mendapatkan periode penuh yang diperlukan.','duration']
  ]},
  {id:'pencacahan', title:'Kaidah Pencacahan', icon:'⊞', tint:'lilac', page:81, desc:'Hitung pilihan, susunan, dan kelompok tanpa mendaftar semuanya.', topics:[
    ['Aturan pengisian tempat',83,'Kalikan banyak pilihan pada tahap yang harus dilalui bersama. Untuk alternatif yang saling lepas, jumlahkan banyak cara masing-masing.','product'],
    ['Permutasi',91,'Permutasi menghitung susunan ketika urutan penting. Untuk mengurutkan semua n objek berbeda, gunakan n! dengan 0! = 1.','perm'],
    ['Permutasi dengan objek sama',95,'Tukar-menukar objek identik tidak menghasilkan susunan baru. Bagi n! dengan faktorial dari banyak anggota setiap kelompok identik.','repeat'],
    ['Permutasi siklis',97,'Pada susunan melingkar, rotasi menghasilkan susunan yang sama. Tetapkan satu posisi untuk menghilangkan pengulangan. Bayangan cermin tetap dibedakan pada model ini.','cycle'],
    ['Kombinasi',102,'Kombinasi menghitung pemilihan dengan urutan diabaikan. Setiap pilihan k objek muncul sebanyak k! kali dalam daftar permutasi.','choose'],
    ['Penerapan permutasi dan kombinasi',113,'Dalam pemilihan pengurus, peran berbeda membuat urutan penting. Dalam pemilihan anggota tim dengan peran setara, gunakan kombinasi.','choose']
  ]},
  {id:'peluang', title:'Peluang', icon:'◎', tint:'rose', page:123, desc:'Tentukan ruang sampel dan peluang kejadian tunggal atau majemuk.', topics:[
    ['Ruang sampel dan peluang suatu kejadian',125,'Ruang sampel S memuat seluruh hasil yang mungkin. Jika peluang setiap hasil sama, bagi banyak hasil yang memenuhi kejadian A dengan banyak hasil dalam S.','prob'],
    ['Kejadian majemuk dan frekuensi harapan',138,'Frekuensi harapan adalah banyak percobaan dikalikan peluang kejadian. Nilai ini menyatakan perkiraan dalam jangka panjang.','expected'],
    ['Gabungan dua kejadian',142,'Gabungan A ∪ B mencakup hasil dalam A, dalam B, atau keduanya. Kurangi irisan yang terhitung dua kali.','union'],
    ['Kejadian saling lepas',144,'Dua kejadian saling lepas jika tidak memiliki hasil bersama. Peluang gabungannya sama dengan jumlah peluang masing-masing.','disjoint'],
    ['Kejadian saling bebas',151,'Jika A dan B saling bebas, terjadinya B tidak mengubah peluang A. Peluang keduanya terjadi adalah hasil kali peluang masing-masing.','independent'],
    ['Peluang bersyarat',158,'Jika B diketahui terjadi, ruang acuan menyempit menjadi B. Gunakan peluang irisan sebagai pembilang dan peluang B sebagai penyebut.','conditional'],
    ['Kejadian berurutan',162,'Untuk menghitung peluang dua kejadian berurutan, kalikan peluang kejadian pertama dengan peluang kejadian kedua setelah yang pertama terjadi. Pada pengambilan tanpa pengembalian, perbarui jumlah objek yang tersisa.','sequence']
  ]}
];

const decimalFormat = new Intl.NumberFormat('id-ID',{maximumFractionDigits:6});
const scientificFormat = new Intl.NumberFormat('id-ID',{notation:'scientific',maximumFractionDigits:5});
const number = v => v!==0 && (Math.abs(v)<1e-6 || Math.abs(v)>=1e16) ? scientificFormat.format(v) : decimalFormat.format(v);
const rupiah = v => 'Rp' + new Intl.NumberFormat('id-ID',{maximumFractionDigits:2}).format(v);
const pct = v => number(v * 100) + '%';
const fact = n => {let result=1; for(let i=2;i<=n;i++) result*=i; return result;};
const nPk = (n,k) => {let result=1; for(let i=0;i<k;i++) result*=n-i; return result;};
const nCk = (n,k) => {let result=1; const m=Math.min(k,n-k); for(let i=1;i<=m;i++) result=result*(n-i+1)/i; return Math.round(result);};
const exponentFactor = (i,n) => i===0 ? n : Math.expm1(n*Math.log1p(i))/i;
const pvFactor = (i,n) => i===0 ? n : -Math.expm1(-n*Math.log1p(i))/i;
const real=(label,value,min=-1e9,max=1e9)=>({label,value,min,max,step:'any'});
const whole=(label,value,min=1,max=1000)=>({label,value,min,max,step:'1'});
const money=(label,value)=>real(label,value,0,1e12);
const interest=(value)=>real('Bunga per periode (%)',value,0,100);
const chance=(label,value)=>real(label,value,0,1);
const step=(value,...steps)=>({value,steps});

const formulas = {
  arith:['Suku ke-n aritmetika','Uₙ = a + (n − 1)b',[real('Suku pertama a',4),real('Beda b',3),whole('Indeks suku n',8)],([a,b,n])=>step(a+(n-1)*b,'Masukkan nilai a, b, dan n ke rumus.',`Uₙ = ${number(a)} + (${n} − 1) × (${number(b)})`,`Uₙ = ${number(a)} + (${number((n-1)*b)})`)],
  geom:['Suku ke-n geometri','Uₙ = a × rⁿ⁻¹',[real('Suku pertama a',3),real('Rasio r',2,-10,10),whole('Indeks suku n',5,1,100)],([a,r,n])=>step(a*r**(n-1),`Uₙ = ${number(a)} × (${number(r)})^(${n} − 1)`,`Hitung pangkat r dengan eksponen ${n-1}, lalu kalikan dengan a.`)],
  sArith:['Jumlah deret aritmetika','Sₙ = n(a + Uₙ)/2',[real('Suku pertama a',5),real('Beda b',2),whole('Banyak suku n',10)],([a,b,n])=>{const u=a+(n-1)*b;return step(n*(a+u)/2,`Uₙ = ${number(a)} + (${n} − 1) × (${number(b)}) = ${number(u)}.`,`Sₙ = ${n} × (${number(a)} + ${number(u)}) ÷ 2.`);}],
  sGeom:['Jumlah deret geometri','Sₙ = a(1 − rⁿ)/(1 − r)',[real('Suku pertama a',2),real('Rasio r',3,-10,10),whole('Banyak suku n',4,1,100)],([a,r,n])=>step(a*(r===1?n:(1-r**n)/(1-r)),r===1?`Karena r = 1, semua suku sama. Sₙ = ${number(a)} × ${n}.`:`Sₙ = ${number(a)} × (1 − (${number(r)})^${n}) ÷ (1 − (${number(r)})).`)],
  infinite:['Jumlah deret geometri tak hingga','S∞ = a/(1 − r) untuk |r| < 1',[real('Suku pertama a',9),real('Rasio r',0.5,-10,10)],([a,r])=>{if(a===0)return step(0,'Semua suku bernilai nol.');if(Math.abs(r)>=1)throw new Error('Deret divergen karena |r| ≥ 1. Jumlah hingga tidak ada.');return step(a/(1-r),`Uji konvergensi. |r| = ${number(Math.abs(r))} < 1.`,`S∞ = ${number(a)} ÷ (1 − (${number(r)})).`);}],
  simple:['Saldo bunga tunggal','Mₙ = M(1 + ni)',[money('Modal awal (Rp)',2000000),interest(5),whole('Jumlah periode n',3,0,500)],([m,p,n])=>{const i=p/100;return step(m*(1+n*i),`Ubah bunga ${number(p)}% menjadi ${number(i)} per periode.`,`Total bunga = ${rupiah(m)} × ${number(i)} × ${n} = ${rupiah(m*n*i)}.`,`Saldo akhir = ${rupiah(m)} + ${rupiah(m*n*i)}.`);},rupiah],
  compound:['Saldo bunga majemuk','Mₙ = M(1 + i)ⁿ',[money('Modal awal (Rp)',1000000),interest(10),whole('Jumlah periode n',3,0,500)],([m,p,n])=>{const i=p/100;return step(m*(1+i)**n,`Faktor pertumbuhan per periode = 1 + ${number(i)} = ${number(1+i)}.`,`Saldo akhir = ${rupiah(m)} × ${number(1+i)}^${n}.`);},rupiah],
  deposit:['Nilai akhir setoran rutin','FV = A[(1 + i)ⁿ − 1]/i',[money('Setoran tetap (Rp)',100000),interest(10),whole('Jumlah setoran n',3,1,500),whole('Waktu setoran (0 = akhir, 1 = awal)',0,0,1)],([a,p,n,early])=>{const i=p/100;const factor=exponentFactor(i,n);return step(a*factor*(early?1+i:1),i===0?`Bunga nol, sehingga jumlah setoran = ${n} × ${rupiah(a)}.`:`Faktor nilai akhir setoran akhir periode = ((1 + ${number(i)})^${n} − 1) ÷ ${number(i)} = ${number(factor)}.`,`Kalikan faktor dengan setoran ${rupiah(a)}${early?' dan faktor tambahan (1 + i) karena setoran di awal.':'.'}`);},rupiah],
  fixed:['Cicilan ke-k dengan pokok tetap','Cₖ = P/n + i[P − (k − 1)P/n]',[money('Pokok pinjaman (Rp)',1200000),interest(1),whole('Jumlah cicilan n',12),whole('Nomor cicilan k',3)],([m,p,n,k])=>{if(k>n)throw new Error('Nomor cicilan k harus lebih kecil dari atau sama dengan n.');const a=m/n,balance=m-(k-1)*a;return step(a+p/100*balance,`Pokok tetap per cicilan = ${rupiah(m)} ÷ ${n} = ${rupiah(a)}.`,`Sisa pokok sebelum cicilan ke-${k} = ${rupiah(balance)}.`,`Cicilan = ${rupiah(a)} + ${number(p)}% × ${rupiah(balance)}.`);},rupiah],
  loan:['Cicilan tetap anuitas','C = Pi/[1 − (1 + i)⁻ⁿ]',[money('Pokok pinjaman (Rp)',210000),interest(10),whole('Jumlah cicilan n',2,1,500)],([m,p,n])=>{const i=p/100;return step(m/pvFactor(i,n),i===0?`Bunga nol. Bagi ${rupiah(m)} dengan ${n} periode.`:`Faktor nilai sekarang = (1 − ${number(1+i)}^(−${n})) ÷ ${number(i)} = ${number(pvFactor(i,n))}.`,`Bagi pokok ${rupiah(m)} dengan faktor nilai sekarang.`);},rupiah],
  rate:['Suku bunga majemuk efektif','i = (Mₙ/M)^(1/n) − 1',[real('Modal awal (Rp)',1000000,0.01,1e12),real('Saldo akhir (Rp)',1210000,0.01,1e12),whole('Jumlah periode n',2)],([m,end,n])=>step(Math.expm1(Math.log(end/m)/n),`Faktor total = ${rupiah(end)} ÷ ${rupiah(m)} = ${number(end/m)}.`,`Ambil akar pangkat ${n}, kurangi 1, lalu ubah ke persen.`),pct],
  duration:['Periode mencapai target saldo','n = log(Mₙ/M)/log(1 + i)',[real('Modal awal (Rp)',1000000,0.01,1e12),real('Target saldo (Rp)',1500000,0.01,1e12),interest(10)],([m,end,p])=>{
    if(end<=m)return step(0,'Target sudah tercapai pada awal periode.');
    if(p===0)throw new Error('Dengan bunga 0%, saldo tidak akan bertambah menuju target ini.');
    const t=Math.log(end/m)/Math.log1p(p/100);
    const complete=Math.ceil(Math.abs(t-Math.round(t))<1e-12?Math.round(t):t);
    return step(complete,`Faktor pertumbuhan yang diperlukan adalah ${number(end/m)}.`,`Jumlah periode matematis adalah log(${number(end/m)}) ÷ log(1 + ${number(p/100)}) ≈ ${number(t)}.`,'Bulatkan ke atas karena bunga dibukukan pada akhir periode penuh.');
  }],
  product:['Aturan perkalian pilihan','N = p₁ × p₂ × p₃',[whole('Pilihan tahap pertama',4,0,10000),whole('Pilihan tahap kedua',3,0,10000),whole('Pilihan tahap ketiga (isi 1 jika tidak ada)',2,0,10000)],([a,b,c])=>step(a*b*c,`Untuk setiap pilihan tahap pertama, tersedia ${b} pilihan tahap kedua dan ${c} pilihan tahap ketiga.`,`N = ${a} × ${b} × ${c}.`)],
  perm:['Permutasi tanpa pengulangan','P(n,k) = n!/(n − k)!',[whole('Jumlah objek berbeda n',6,0,18),whole('Posisi yang diisi k',2,0,18)],([n,k])=>{if(k>n)throw new Error('Banyak posisi k harus ≤ n.');return step(nPk(n,k),`Urutan penting, jadi gunakan P(${n}, ${k}).`,`P = ${n}! ÷ ${n-k}!.`);}],
  repeat:['Permutasi objek identik','N = n!/(a!b!c!)',[whole('Jumlah objek n',5,0,18),whole('Objek identik jenis pertama a',2,0,18),whole('Objek identik jenis kedua b',2,0,18),whole('Objek identik jenis ketiga c',0,0,18)],([n,a,b,c])=>{if(a+b+c>n)throw new Error('Total objek identik melebihi n.');return step(Math.round(fact(n)/fact(a)/fact(b)/fact(c)),`Susun semua ${n} objek seolah berbeda, menghasilkan ${n}! susunan.`,`Bagi dengan pengulangan setiap jenis. N = ${n}! ÷ (${a}! × ${b}! × ${c}!).`);}],
  cycle:['Permutasi melingkar','N = (n − 1)!',[whole('Jumlah objek berbeda n',5,1,19)],([n])=>step(fact(n-1),'Tetapkan satu orang sebagai acuan agar hasil rotasi tidak dihitung lagi.',`Susun ${n-1} objek tersisa. N = ${n-1}!.`)],
  choose:['Kombinasi tanpa pengulangan','C(n,k) = n!/[k!(n − k)!]',[whole('Jumlah objek berbeda n',8,0,50),whole('Ukuran kelompok k',3,0,50)],([n,k])=>{if(k>n)throw new Error('Ukuran kelompok k harus ≤ n.');return step(nCk(n,k),`Urutan diabaikan, jadi gunakan C(${n}, ${k}).`,`C = ${n}! ÷ (${k}! × ${n-k}!).`);}],
  prob:['Peluang kejadian tunggal','P(A) = n(A)/n(S)',[whole('Banyak hasil yang memenuhi A',3,0,1000000),whole('Banyak hasil setara dalam S',8,1,1000000)],([a,s])=>{if(a>s)throw new Error('Banyak hasil dalam A harus ≤ banyak hasil dalam S.');return step(a/s,`Ada ${a} hasil yang memenuhi A dari ${s} hasil yang sama mungkin.`,`P(A) = ${a} ÷ ${s}.`);},pct],
  expected:['Frekuensi harapan','F = N × P(A)',[whole('Jumlah percobaan N',80,0,1000000),chance('Peluang A (0–1)',0.25)],([n,p])=>step(n*p,`F = ${n} × ${number(p)}.`,'Nilai harapan dapat berupa pecahan karena menggambarkan rata-rata teoretis.')],
  union:['Gabungan dua kejadian','P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',[chance('Peluang A (0–1)',0.5),chance('Peluang B (0–1)',0.4),chance('Peluang irisan A dan B (0–1)',0.2)],([a,b,x])=>{if(x>Math.min(a,b)+1e-12||x<Math.max(0,a+b-1)-1e-12)throw new Error('Peluang irisan tidak sesuai dengan peluang A dan B.');return step(Math.min(1,a+b-x),`Jumlahkan P(A) dan P(B), lalu kurangi irisan yang terhitung dua kali.`,`P(A ∪ B) = ${number(a)} + ${number(b)} − ${number(x)}.`);},pct],
  disjoint:['Gabungan kejadian saling lepas','P(A ∪ B) = P(A) + P(B)',[chance('Peluang A (0–1)',0.25),chance('Peluang B (0–1)',0.45)],([a,b])=>{if(a+b>1+1e-12)throw new Error('Jumlah peluang dua kejadian saling lepas harus ≤ 1.');return step(Math.min(1,a+b),'P(A ∩ B) = 0 karena kedua kejadian saling lepas.',`P(A ∪ B) = ${number(a)} + ${number(b)}.`);},pct],
  independent:['Irisan kejadian saling bebas','P(A ∩ B) = P(A) × P(B)',[chance('Peluang A (0–1)',0.5),chance('Peluang B (0–1)',0.4)],([a,b])=>step(a*b,'Karena kedua kejadian saling bebas, kalikan peluang masing-masing.',`P(A ∩ B) = ${number(a)} × ${number(b)}.`),pct],
  sequence:['Peluang dua kejadian berurutan','P(A ∩ B) = P(A) × P(B | A)',[chance('Peluang kejadian pertama A (0–1)',0.5),chance('Peluang B setelah A terjadi (0–1)',0.4)],([a,b])=>step(a*b,'Gunakan peluang kejadian kedua setelah kejadian pertama terjadi.',`P(A ∩ B) = ${number(a)} × ${number(b)}.`),pct],
  conditional:['Peluang bersyarat','P(A | B) = P(A ∩ B)/P(B)',[chance('Peluang irisan A dan B (0–1)',0.2),real('Peluang B (lebih dari 0 hingga 1)',0.5,1e-12,1)],([intersection,b])=>{if(intersection>b)throw new Error('Peluang irisan harus ≤ peluang B.');return step(intersection/b,`Saat B terjadi, gunakan P(B) sebagai penyebut.`,`P(A | B) = ${number(intersection)} ÷ ${number(b)}.`);},pct]
};

const quizzes = {
 barisan:[
  ['arith','Baris pertama aula berisi 12 kursi. Setiap baris berikutnya memiliki 4 kursi lebih banyak. Berapa kursi di baris ke-7?',[12,4,7],[32,36,40,48]],
  ['geom','Setiap tahap sebuah eksperimen menghasilkan tiga kali jumlah tahap sebelumnya. Tahap pertama menghasilkan 2 unit. Berapa jumlah pada tahap ke-5?',[2,3,5],[54,81,162,486]],
  ['sArith','Selama delapan hari, Nisa menabung Rp5.000 pada hari pertama dan menambah Rp1.000 setiap hari berikutnya. Berapa total tabungannya dalam ribuan rupiah?',[5,1,8],[40,61,68,72]],
  ['sGeom','Satu kelompok mula-mula mengumpulkan 4 botol. Setiap pekan berikutnya jumlah botol yang dikumpulkan berlipat dua. Berapa total selama empat pekan?',[4,2,4],[28,32,60,64]],
  ['infinite','Tentukan jumlah deret 12 + 4 + 4/3 + … .',[12,1/3],[16,18,24,36]]
 ],
 investasi:[
  ['simple','Modal Rp2.000.000 mendapat bunga tunggal 4% per tahun. Berapa saldo setelah 3 tahun?',[2000000,4,3],[2080000,2160000,2240000,2480000]],
  ['compound','Simpanan Rp1.000.000 menerima bunga majemuk 10% per tahun. Berapa saldo setelah dua tahun?',[1000000,10,2],[1100000,1200000,1210000,1220000]],
  ['deposit','Setiap akhir tahun Dita menyetor Rp100.000. Bunga 10% per tahun. Berapa saldo tepat setelah setoran kedua?',[100000,10,2,0],[200000,201000,210000,220000]],
  ['fixed','Pinjaman Rp1.200.000 dilunasi dalam 4 cicilan dengan pokok tetap. Bunga 2% per bulan dari sisa pokok. Berapa cicilan bulan ke-2?',[1200000,2,4,2],[300000,306000,318000,324000]],
  ['loan','Pinjaman Rp210.000 dilunasi dengan dua cicilan tetap pada akhir periode. Bunga 10% per periode. Berapa setiap cicilan?',[210000,10,2],[105000,110000,121000,125000]]
 ],
 pencacahan:[
  ['product','Tersedia 4 kemeja, 3 celana, dan 2 sepatu. Berapa paduan yang terdiri atas satu dari tiap jenis?',[4,3,2],[9,12,18,24]],
  ['perm','Ada 6 calon yang memenuhi syarat untuk posisi ketua dan sekretaris. Satu orang hanya boleh mengisi satu posisi. Berapa susunannya?',[6,2],[12,15,30,36]],
  ['repeat','Berapa susunan huruf berbeda yang dapat dibentuk dari kata KAKAK?',[5,3,2,0],[5,10,20,60]],
  ['cycle','Lima siswa duduk mengelilingi meja bundar. Susunan yang hanya berbeda karena rotasi dianggap sama. Berapa susunannya?',[5],[12,20,24,120]],
  ['choose','Dari delapan siswa, dipilih tiga orang dengan peran setara. Berapa kelompok yang mungkin?',[8,3],[24,56,112,336]]
 ],
 peluang:[
  ['prob','Sebuah dadu adil dilempar sekali. Berapa peluang muncul angka lebih besar dari 3?',[3,6],[1/6,1/3,1/2,2/3]],
  ['expected','Pada 80 putaran, peluang menang setiap putaran ¼. Berapa frekuensi harapan menang?',[80,0.25],[10,20,25,40]],
  ['union','Peluang hujan 50%, peluang angin kuat 40%, dan peluang keduanya 20%. Berapa peluang hujan atau angin kuat?',[0.5,0.4,0.2],[0.2,0.3,0.7,0.9]],
  ['independent','Satu koin adil dan satu dadu adil dilempar terpisah. Berapa peluang sisi gambar pada koin dan angka genap pada dadu?',[0.5,0.5],[0.125,0.25,0.5,0.75]],
  ['conditional','Peluang siswa mengikuti klub sains 50%. Peluang siswa mengikuti klub sains dan klub matematika 20%. Jika diketahui siswa mengikuti klub sains, berapa peluang ia mengikuti klub matematika?',[0.2,0.5],[0.1,0.2,0.4,0.7]]
 ]
};

const main = document.querySelector('#main');
const sourceUrl = 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika_BS_KLS_XII_Rev.pdf';
const bookHash = 'b4cecf12512f24f9810f35d6710efe7a8d2e9166d203430f10133a11e718aa0b';
const pages = ['beranda','materi','kurikulum','rumus','kuis','sumber'];
const scores = {};
try {
  const previous = JSON.parse(localStorage.getItem('ruang-matematika-xii-scores') || '{}') || {};
  for (const chapter of chapters) {
    const value = previous[chapter.id];
    if (Number.isInteger(value) && value >= 0 && value <= quizzes[chapter.id].length) scores[chapter.id] = value;
  }
} catch {}
const sessions = new Map();
let file = null;
let fileURL = '';
let isOriginal = false;
let chartResize = null;
let previousPage = '';

function pageHead(title,description) {
  return `<header class="page-head"><h1>${title}</h1><p>${description}</p></header>`;
}

function tabs(page,active) {
  return `<nav class="tabs" aria-label="Pilih bab">${chapters.map(c=>`<a class="tab" href="#${page}/${c.id}" aria-current="${c.id===active.id}">${c.title}</a>`).join('')}</nav>`;
}

function updateProgress() {
  const count = Object.keys(scores).length;
  document.querySelector('#progress').value = count;
  document.querySelector('#progress-label').textContent = `${count} / ${chapters.length}`;
}

function home() {
  main.innerHTML = `
  <section class="hero">
    <div class="hero-copy"><span class="kicker">Belajar Matematika Kelas XII</span><h1>Dari rumus ke <em>pemahaman.</em></h1><p>Pelajari konsep dari buku acuan, uji angka dengan kalkulator, lalu cek pemahaman lewat kuis dengan langkah penyelesaian.</p>
      <div class="actions"><a class="button mint" href="#kurikulum">Mulai belajar <span aria-hidden="true">→</span></a><a class="button ghost" href="#rumus/barisan">Buka kalkulator</a></div>
    </div>
    <figure class="hero-visual"><figcaption>Pertumbuhan geometri <span>Uₙ = a · rⁿ⁻¹</span></figcaption><canvas id="hero-chart" aria-label="Ilustrasi grafik pertumbuhan geometri" role="img"></canvas></figure>
  </section>
  <div class="section-head"><h2>Jelajahi materi</h2><p>${Object.keys(scores).length} dari 4 kuis selesai</p></div>
  <div class="chapter-grid">${chapters.map((c,i)=>`
    <a class="chapter-card" href="#materi/${c.id}"><div class="card-top"><span class="chapter-icon ${c.tint}" aria-hidden="true">${c.icon}</span><small>Bab ${i+1}</small></div>
      <h3>${c.title}</h3><p>${c.desc}</p><strong>Buka materi <span aria-hidden="true">→</span></strong></a>`).join('')}
  </div>
  <div class="strip"><div><strong>Kuis per bab</strong><p>Jawab soal, periksa hasilnya, lalu ikuti pembahasan langkah demi langkah.</p></div><a class="button ghost" href="#kuis/barisan">Mulai kuis <span aria-hidden="true">→</span></a></div>`;
  const canvas = document.querySelector('#hero-chart');
  mountChart(canvas, (c,w,h)=>{
    const ox=18, oy=h-24, rw=w-38, rh=h-46;
    c.strokeStyle='#78a69550'; c.lineWidth=1; c.beginPath();
    for(let i=0;i<=8;i++){const x=ox+rw*i/8;c.moveTo(x,13);c.lineTo(x,oy);}
    for(let i=0;i<=5;i++){const y=oy-rh*i/5;c.moveTo(ox,y);c.lineTo(w-11,y);}
    c.stroke();
    const pts=Array.from({length:9},(_,i)=>[ox+rw*i/8,oy-rh*(2**(i/2)-1)/15]);
    const gradient=c.createLinearGradient(0,15,0,oy);
    gradient.addColorStop(0,'#dcf7ac72');gradient.addColorStop(1,'#dcf7ac08');
    c.beginPath();c.moveTo(ox,oy);pts.forEach(([x,y])=>c.lineTo(x,y));c.lineTo(ox+rw,oy);c.closePath();c.fillStyle=gradient;c.fill();
    plotLine(c,pts,'#dcf7ac',2);
    c.fillStyle='#d2e9dd';c.font='12px system-ui';c.fillText('n',w-15,oy+18);
  });
}

const visuals = {
  barisan:{title:'Bandingkan pertumbuhan',label:'Banyak suku',max:10,min:3,start:7,desc:'Aritmetika bertambah 2 per suku. Geometri dikali 1,6 per suku. Keduanya diawali dengan 3.',draw:(ctx,w,h,n)=>chartLines(ctx,w,h,[{name:'Aritmetika',color:'#195e4d',values:Array.from({length:n},(_,i)=>3+2*i)},{name:'Geometri',color:'#aa591f',values:Array.from({length:n},(_,i)=>3*1.6**i)}],1)},
  investasi:{title:'Bandingkan saldo akhir',label:'Bunga per tahun',max:20,min:0,start:10,suffix:'%',desc:'Modal awal Rp1.000.000 selama lima tahun. Saldo ditampilkan dalam juta rupiah.',draw:(ctx,w,h,p)=>chartLines(ctx,w,h,[{name:'Tunggal',color:'#195e4d',values:Array.from({length:6},(_,i)=>1+i*p/100)},{name:'Majemuk',color:'#aa591f',values:Array.from({length:6},(_,i)=>(1+p/100)**i)}],0)},
  pencacahan:{title:'Visualisasi aturan perkalian',label:'Pilihan tahap kedua',max:5,min:1,start:3,desc:'Setiap dari dua pilihan pada tahap pertama dapat dipasangkan dengan semua pilihan tahap kedua.',draw:(ctx,w,h,n)=>{
    const xx=[34,w*.46,w-35],mid=h/2;
    const ys=[h*.26,h*.74];
    ctx.font='12px system-ui';ctx.textAlign='center';
    ys.forEach((y,i)=>{
      connect(ctx,xx[0],mid,xx[1],y);
      for(let j=0;j<n;j++){const yy=y+(j-(n-1)/2)*18;connect(ctx,xx[1],y,xx[2],yy);dot(ctx,xx[2],yy,`${i?'B':'A'}${j+1}`,'#dcece1',9);}
      dot(ctx,xx[1],y,i?'B':'A','#c8e7d4',13);
    });
    dot(ctx,xx[0],mid,'Mulai','#c8e7d4',22);
    ctx.textAlign='left';ctx.fillStyle='#224739';ctx.fillText(`2 × ${n} = ${2*n} hasil`,15,h-9);
  }},
  peluang:{title:'Ruang sampel pada dadu',label:'Tampilkan angka yang lebih besar dari',max:6,min:0,start:3,desc:'Sel hijau adalah hasil yang memenuhi A. Keenam sisi dadu sama mungkin.',draw:(ctx,w,h,n)=>{
    const size=Math.min(58,(w-50)/3),gap=10;
    const x0=(w-(3*size+2*gap))/2,y0=(h-(2*size+gap))/2-9;
    ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 17px system-ui';
    for(let i=1;i<=6;i++){const x=x0+((i-1)%3)*(size+gap),y=y0+Math.floor((i-1)/3)*(size+gap);
      ctx.fillStyle=i>n?'#bcdfca':'#e4ebe4';ctx.beginPath();ctx.roundRect(x,y,size,size,8);ctx.fill();ctx.fillStyle='#16372f';ctx.fillText(i,x+size/2,y+size/2);}
    ctx.font='13px system-ui';ctx.fillText(`P(A) = ${6-n}/6 = ${pct((6-n)/6)}`,w/2,h-18);
  }}
};

function connect(ctx,x1,y1,x2,y2) {
  ctx.strokeStyle='#65947e';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
}
function dot(ctx,x,y,label,color,r) {
  ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#153c30';ctx.font=(r===9?'9px':'11px')+' system-ui';ctx.textBaseline='middle';ctx.fillText(label,x,y);
}
function plotLine(ctx,pts,color,width) {
  ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();
  ctx.fillStyle=color;
  for(const [x,y] of pts){ctx.beginPath();ctx.arc(x,y,width+1,0,2*Math.PI);ctx.fill();}
}
function mountChart(canvas,draw) {
  function paint() {
    const rect=canvas.getBoundingClientRect();
    const ratio=window.devicePixelRatio||1;
    canvas.width=Math.round(rect.width*ratio);canvas.height=Math.round(rect.height*ratio);
    const ctx=canvas.getContext('2d');
    ctx.scale(ratio,ratio);
    draw(ctx,rect.width,rect.height);
  }
  chartResize=new ResizeObserver(paint);
  chartResize.observe(canvas);
  paint();
  return paint;
}
function chartLines(ctx,w,h,series,start) {
  const maxRaw=Math.max(...series.flatMap(s=>s.values));
  const unit=maxRaw>20?10:maxRaw>8?2:0.5;
  const max=Math.ceil(maxRaw/unit)*unit;
  const left=41, right=w-17, top=30, bottom=h-29, count=series[0].values.length;
  const x=i=>left+(right-left)*i/(count-1);
  const y=v=>bottom-(bottom-top)*v/max;
  ctx.textAlign='right';ctx.textBaseline='middle';ctx.font='11px system-ui';
  for(let i=0;i<=4;i++){
    const value=max*i/4, yy=y(value);
    ctx.fillStyle='#51635c';ctx.fillText(number(value),left-6,yy);
    ctx.strokeStyle='#d8e3dc';ctx.beginPath();ctx.moveTo(left,yy);ctx.lineTo(right,yy);ctx.stroke();
  }
  ctx.textAlign='center';ctx.fillStyle='#51635c';
  for(let i=0;i<count;i++)ctx.fillText(i+start,x(i),bottom+13);
  series.forEach((s,i)=>{plotLine(ctx,s.values.map((v,j)=>[x(j),y(v)]),s.color,2);ctx.fillStyle=s.color;ctx.textAlign='left';ctx.fillText(s.name,left+(right-left)*i/2,13);});
}

function material(chapter) {
  const visual=visuals[chapter.id];
  main.innerHTML=pageHead(chapter.title,chapter.desc)+tabs('materi',chapter)+`
    <div class="split"><section class="panel"><h2>Konsep dan rumus</h2><div class="topics">${chapter.topics.map(([title,p,desc,formula],i)=>`
      <details ${i===0?'open':''}><summary>${title}</summary><div class="topic-body"><p>${desc}</p><div class="formula">${formulas[formula][1]}</div>
      <div class="actions"><a href="#rumus/${chapter.id}/${formula}">Coba rumus →</a><a href="#sumber/${chapter.id}/${p}">Buku hlm. ${p} →</a></div></div></details>`).join('')}</div>
      <div class="actions"><a class="button" href="#kuis/${chapter.id}">Latihan bab ini →</a></div></section>
    <section class="panel"><h2>${visual.title}</h2><p class="caption" id="chart-description">${visual.desc}</p>
      <canvas class="chart" id="visual" aria-label="${visual.title}" aria-describedby="chart-description" role="img"></canvas>
      <label class="range-row" for="range"><span>${visual.label}</span><output for="range" id="range-value">${visual.start}${visual.suffix||''}</output></label>
      <input id="range" type="range" min="${visual.min}" max="${visual.max}" value="${visual.start}"></section></div>`;
  const range=document.querySelector('#range');
  const paint=mountChart(document.querySelector('#visual'),(c,w,h)=>visual.draw(c,w,h,Number(range.value)));
  range.addEventListener('input',()=>{document.querySelector('#range-value').value=range.value+(visual.suffix||'');paint();});
}

function calculator(chapter,requested) {
  const ids=[...new Set(chapter.topics.map(topic=>topic[3]))];
  const key=ids.includes(requested)?requested:ids[0];
  const [title,equation,fields,solve,format=number]=formulas[key];
  main.innerHTML=pageHead('Kalkulator rumus','Pilih rumus yang sesuai dengan soal. Masukkan nilai yang diketahui untuk melihat hasil dan langkah perhitungannya.')+tabs('rumus',chapter)+`
    <div class="split"><section class="panel"><form id="calc-form">
      <label>Rumus<select id="formula-picker">${ids.map(id=>`<option value="${id}" ${id===key?'selected':''}>${formulas[id][0]}</option>`).join('')}</select></label>
      <div class="formula">${equation}</div>
      <div class="calc-fields">${fields.map(({label,value,min,max,step})=>`<label>${label}<input name="values" type="number" min="${min}" max="${max}" step="${step}" value="${value}" required></label>`).join('')}</div>
      <small>Angka awal adalah contoh. Masukkan angka tanpa pemisah ribuan. Peluang 50% ditulis 0,5 atau 0.5 sesuai pengaturan perangkat.</small>
      <div><button class="button" type="submit">Hitung dan lihat langkah →</button></div></form></section>
      <section class="panel"><h2>Langkah penyelesaian</h2><div id="calc-result" aria-live="polite"><p>Hasil dan urutan hitung untuk ${title.toLowerCase()} akan muncul setelah tombol Hitung ditekan.</p></div></section></div>`;
  document.querySelector('#formula-picker').addEventListener('change',e=>{location.hash=`rumus/${chapter.id}/${e.target.value}`;});
  const form=document.querySelector('#calc-form'),result=document.querySelector('#calc-result');
  form.addEventListener('input',()=>{result.textContent='Masukan berubah. Tekan Hitung untuk memperbarui hasil.';});
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const values=Array.from(form.querySelectorAll('input'),input=>input.valueAsNumber);
    try {
      const data=solve(values);
      if(!Number.isFinite(data.value))throw new Error('Hasil berada di luar jangkauan. Gunakan nilai lebih kecil.');
      result.innerHTML=worked(data,format);
    } catch(error){
      result.innerHTML='<div class="feedback error"></div>';
      result.firstElementChild.textContent=error.message;
    }
  });
}
function worked({value,steps},format) {
  return `<div class="feedback"><div>Hasil</div><div class="answer">${format(value)}</div><ol class="steps">${steps.map(s=>`<li>${s}</li>`).join('')}</ol></div>`;
}
function sameValue(a,b) {return Math.abs(a-b)<1e-8*Math.max(1,Math.abs(a),Math.abs(b));}

function quiz(chapter) {
  if(!sessions.has(chapter.id)) sessions.set(chapter.id,{index:0,answer:null,correct:0,done:false});
  const state=sessions.get(chapter.id), questions=quizzes[chapter.id];
  main.innerHTML=pageHead('Kuis per bab','Pilih jawaban untuk membuka pembahasan. Gunakan langkahnya untuk memeriksa cara berpikirmu.')+tabs('kuis',chapter)+`<section class="panel quiz-panel" id="quiz-panel"></section>`;
  const panel=document.querySelector('#quiz-panel');
  function render() {
    if(state.done) {
      panel.innerHTML=`<h2>Kuis selesai</h2><p>Skor sesi ini</p><div class="answer">${state.correct} / ${questions.length}</div><p>Skor terbaik bab ini ${scores[chapter.id]} / ${questions.length}</p><div class="actions"><button class="button" id="retry">Ulangi kuis</button><a class="button ghost" href="#materi/${chapter.id}">Pelajari materi</a></div>`;
      document.querySelector('#retry').addEventListener('click',()=>{Object.assign(state,{index:0,answer:null,correct:0,done:false});render();panel.querySelector('h2').setAttribute('tabindex','-1');panel.querySelector('h2').focus();});
      return;
    }
    const [key,prompt,values,options]=questions[state.index];
    const [,formula,,solve,format=number]=formulas[key],data=solve(values),checked=state.answer!==null;
    const correctIndex=options.findIndex(option=>sameValue(option,data.value));
    panel.innerHTML=`<div class="kicker">Soal ${state.index+1} dari ${questions.length}</div><progress value="${state.index+Number(checked)}" max="${questions.length}" aria-label="Soal yang sudah dijawab"></progress>
      <h2 id="question" tabindex="-1">${prompt}</h2><form id="quiz-form"><fieldset class="choices" aria-labelledby="question" ${checked?'disabled':''}>${options.map((option,i)=>`
      <label class="choice ${checked&&i===correctIndex?'correct':checked&&i===state.answer?'wrong':''}">
       <input name="choice" type="radio" value="${i}" ${state.answer===i?'checked':''} required><span>${String.fromCharCode(65+i)}. ${format(option)}</span>
      </label>`).join('')}</fieldset>${checked?'':'<div><button class="button" type="submit">Periksa jawaban</button></div>'}</form>
      ${checked?`<div id="quiz-feedback" tabindex="-1"><h3 style="margin-top:16px">${state.answer===correctIndex?'Jawaban benar':'Jawaban belum tepat'}</h3>
      <div class="formula">${formula}</div>${worked(data,format)}</div>
      <div class="actions"><button class="button" id="next">${state.index+1===questions.length?'Lihat skor':'Soal berikutnya'} →</button><a class="button ghost" href="#rumus/${chapter.id}/${key}">Coba kalkulator</a></div>`:''}`;
    if (!checked) {
      document.querySelector('#quiz-form').addEventListener('submit',event=>{
        event.preventDefault();
        const selected=new FormData(event.target).get('choice');
        if(selected===null)return;
        state.answer=Number(selected);if(state.answer===correctIndex)state.correct++;
        render();document.querySelector('#quiz-feedback').focus();
      });
    } else {
      document.querySelector('#next').addEventListener('click',()=>{
        if(state.index+1===questions.length){
          state.done=true;scores[chapter.id]=Math.max(scores[chapter.id]||0,state.correct);
          try{localStorage.setItem('ruang-matematika-xii-scores',JSON.stringify(scores));}catch{}
          updateProgress();
        } else {state.index++;state.answer=null;}
        render();const heading=panel.querySelector('h2');heading.setAttribute('tabindex','-1');heading.focus();
      });
    }
  }
  render();
}

function source(requested) {
  const target=/^\d{1,3}$/.test(requested || '')&&Number(requested)>=1&&Number(requested)<=171 ? Number(requested):null;
  main.innerHTML=pageHead('Buku acuan','Rangkuman, rumus, dan latihan disusun menurut urutan bab buku yang diunggah.')+`
  <div class="source-stack"><section class="panel"><span class="kicker">Edisi Revisi 2025</span><h2>Matematika untuk SMA/MA/SMK/MAK Kelas XII</h2>
  <p>Mohammad Tohir, Ahmad Choirul Anam, Ibnu Taufiq, dan Tista Imam Riyadi. Kementerian Pendidikan Dasar dan Menengah.</p>
  <p>${target?`Halaman buku yang dirujuk <strong>${target}</strong> (halaman PDF ${target+18}).`:'Halaman awal bab: 1, 35, 81, dan 123.'}</p>
  <div class="actions"><a class="button ghost" href="${sourceUrl}" target="_blank" rel="noopener">Buka PDF acuan →</a></div></section>
  <section class="panel"><h2>Baca PDF di aplikasi</h2><p>Pilih PDF dari perangkat untuk membacanya bersama materi. Jika memilih buku acuan yang sama, penampil akan mencoba membuka halaman rujukan secara langsung.</p>
  <label>Pilih file PDF<input id="file" type="file" accept=".pdf,application/pdf"></label>
  <p class="caption" id="file-status" role="status"></p><div id="preview"></div></section></div>`;
  const input=document.querySelector('#file'), status=document.querySelector('#file-status'), view=document.querySelector('#preview');
  function showPreview() {
    if(!file)return;
    status.textContent=`${file.name}${isOriginal?' · buku acuan terverifikasi':''}`;
    const url=fileURL+(target&&isOriginal?`#page=${target+18}`:'');
    view.innerHTML='<div class="actions"><a class="button ghost" target="_blank" rel="noopener">Buka PDF di tab baru →</a></div><object type="application/pdf" aria-label="Pratinjau PDF"><p>Gunakan tombol Buka PDF di tab baru jika pratinjau tidak tampil.</p></object>';
    view.querySelector('a').href=url;
    view.querySelector('object').data=url;
  }
  showPreview();
  input.addEventListener('change',async ()=>{
    const chosen=input.files[0];
    if(!chosen)return;
    if(!/\.pdf$/i.test(chosen.name)||chosen.size>50*1024*1024){status.textContent='Pilih PDF dengan ukuran maksimal 50 MB.';return;}
    const bytes=await chosen.arrayBuffer();
    if(input.files[0]!==chosen)return;
    if(!new TextDecoder().decode(bytes.slice(0,1024)).includes('%PDF-')){status.textContent='Isi file tidak dapat dikenali sebagai PDF.';return;}
    let hash='';
    try {hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),b=>b.toString(16).padStart(2,'0')).join('');}catch{}
    if(input.files[0]!==chosen)return;
    if(fileURL)URL.revokeObjectURL(fileURL);
    file=chosen;fileURL=URL.createObjectURL(chosen);isOriginal=hash===bookHash;
    const currentTarget=location.hash.slice(1).split('/')[2];
    if(document.querySelector('#file')===input)showPreview();
    else if(location.hash.startsWith('#sumber'))source(currentTarget);
  });
}

function route() {
  const [raw,chapterId,detail]=location.hash.slice(1).split('/');
  const page=pages.includes(raw)?raw:'beranda';
  const chapter=chapters.find(c=>c.id===chapterId)||chapters[0];
  if(raw==='main') {main.focus();return;}
  if(chartResize){chartResize.disconnect();chartResize=null;}
  document.querySelectorAll('[data-nav]').forEach(link=>{
    if(link.dataset.nav===(page==='kurikulum'?'materi':page))link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
  updateProgress();
  if(page==='beranda')home();
  if(page==='materi')material(chapter);
  if(page==='kurikulum')renderCurriculum(chapterId,detail);
  if(page==='rumus')calculator(chapter,detail);
  if(page==='kuis')quiz(chapter);
  if(page==='sumber')source(detail);
  if(previousPage) {
    if(previousPage!==page || page==='kurikulum')window.scrollTo(0,0);
    main.focus({preventScroll:true});
  }
  previousPage=page;
}
window.addEventListener('hashchange',route);
route();
