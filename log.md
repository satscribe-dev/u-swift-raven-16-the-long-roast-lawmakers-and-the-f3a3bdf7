# Log — u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
## The Long Roast: Lawmakers and the File They Cannot Convert
- Mode: SUBAGEN (bounty baru, dashboard). Akun @yuu. Hadiah $2 (juara 1 $0,63, 10 tempat berbayar).
- Deadline: 26 Nov 2026 11:50 UTC = 18:50 WIB. Dibuka 24 Nov 2026 07:47:52 UTC. Entri saat ini: 69 (info monitor).
- Kit kanonis: ~/workspace/makefun/kits/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/ (bundle ea15f7d6…, phase dev, diunduh 24 Nov 08:03 WIB; RULES.txt + competition.yaml dibaca 24 Nov 15:0x WIB).
- Aturan dibaca ulang, lanjut dari awal (sesi baru, subagen build).

## Lembar Paham (ringkas, #3c)
1. Tugas (3 kalimat): Tulis SATU kalimat satir, maks 320 karakter, yang mengejek pembuat undang-undang yang mengatur AI/kripto/internet padahal tidak bisa convert file ke PDF. Program (main.ts, Node 22.18+) menulis kalimat itu ke /output/entry.txt; gate hanya memeriksa UTF-8, 1–320 karakter, bukan spasi saja. Penilai adalah model AI (z-ai/glm-5.3-flash) yang membandingkan dua entri sekaligus berdasarkan bite, aim, dan freshness; 10 besar berbagi hadiah $2.
2. Rumus skor + batas keras (sumber: RULES.txt kit, competition.yaml, dibaca 24 Nov 2026 15:0x WIB):
   - Gate: entry.txt 1–320 karakter UTF-8, bukan hanya whitespace → Valid 1/0; invalid = 0, tanpa rate, tanpa hadiah.
   - Tiap game = 2 panggilan judge (urutan A/B dibalik); tiap panggilan memberi pemenang 0,5 + margin/10 (0,6 di margin 1 s.d. 1,0 di margin 5), sisanya ke yang kalah; skor game = rerata kedua panggilan.
   - Dev: 11 game lawan teks tetap house (3 anchor + 3 rung, lalu hingga 8 game tambahan) → rate provisional vs anchor + interval 90%; provisional TIDAK masuk final, hanya menentukan 500 kursi final heat.
   - Final: 3 ronde Swiss + playoff top 12; skor = win rate dari fit Bradley-Terry atas semua game final heat; yang main playoff menempati di atas yang tidak; yang dijudge final di atas yang terpotong (cut).
   - Tie-break: lebih banyak game playoff antar yang seri → teks lebih kecil (byte) → receipt lebih awal. Entri byte-identik = satu anggota, receipt awal di atas.
   - Hadiah: 1st $0,63; 2nd $0,43; 3rd $0,30; 4th $0,21; 5th $0,15; 6th $0,10; 7th $0,07; 8th $0,05; 9th $0,04; 10th $0,02. Total $2.
   - Batas keras: satu kalimat, maks 320 karakter, program/v1, sandbox tanpa network, waktu program ≤ 60 dtk/run, tanpa secret; repo dibuat sesudah kompetisi buka; transkrip wajib (urusan agen induk, bukan subagen ini).
   - Blind rounds aktif: tidak ada rank/skor live sampai hasil ronde; ronde berikut 24 Nov 16:28:13 UTC.
3. Mekanisme penilai (langkah demi langkah): gate → dev heat lawan 6 teks house (rate provisional + CI 90%) → cut 500 besar dev board saat final heat mulai (yang tak terrate ikut tanpa kursi) → final heat: 3 ronde Swiss (pasangan se-rate) + playoff top 12 (tiap pasangan 1 game) → Bradley-Terry atas semua game final → peringkat mengikuti point estimate rate, dengan aturan grup playoff > non-playoff > cut.
4. PRACTICE vs FINAL: tidak ada set practice terpisah; yang dikejar = rate FINAL (Swiss + playoff vs entri lain; 3 fixed texts ikut di heat tapi tak bisa playoff/hadiah). Dev rate hanya tiket masuk 500 besar — dengan 69 entri saat ini, semua yang valid hampir pasti lolos cut; jadi fokus penuh ke kualitas lawan entri lain di final, bukan mengalahkan anchor.
5. Bedah top 3: TIDAK BISA — blind rounds: rank/skor tidak tampil; feed teks entri tidak terbaca lewat fetch teks halaman bounty (JS-rendered, dicoba 24 Nov 15:0x WIB, hanya 56 baris statis). Ditandai DUGAAN: field 69 entri kemungkinan besar didominasi klise "print email / minta tolong cucu / password di sticky note" — celah: detail spesifik tak terduga (rename .docx→.pdf, foto layar monitor, screenshot Word) + setup kekuasaan yang konkret (subpoena CEO, menulis UU) + punch di kata-kata terakhir.
6. Sumber riset luar (dampak/biaya): (a) RULES.txt kit — brief judge lengkap, 5 kriteria berurutan (dampak TINGGI, biaya 0 — sumber primer); (b) competition.yaml — metric Judge win rate, tie-break byte/receipt (dampak SEDANG — teks pendek + submit awal = tie-break lebih baik); (c) halaman bounty make.fun (fetch 24 Nov 15:0x WIB — escrow $2 terkonfirmasi, 10 tempat bayar; dampak RENDAH, verifikasi fakta).
7. Hipotesis (dampak per biaya): H1 — setup kekuasaan konkret (subpoena CEO / menulis UU) + undercut detail spesifik (rename ekstensi / foto monitor) mengalahkan klise generik, karena kriteria judge #2 (real turn) dan #5 (detail spesifik) — prediksi: menang pairwise vs klise di kedua kriteria; tolak bila pairwise kalah di #2. H2 — punch di kata-kata terakhir (detail gagal convert sebagai klimaks) mengalahkan punch di tengah, karena kriteria #4 — prediksi: versi punch-akhir menang pairwise; tolak bila seri/kalah 2 arah. H3 — satu detail spesifik yang benar secara teknis (rename .docx→.pdf tidak mengubah format) mengalahkan detail mustahil/lebay, karena judge satiris profesional menghargai presisi — prediksi: menang di #5; tolak bila judge menilai detail teknis sebagai "perlu penjelasan".
8. Ajar-balik: Bayangkan juri membandingkan dua lelucon satu baris. Yang satu bilang "politisi itu gaptek" secara umum — datar, sudah ribuan kali terdengar. Yang satu menunjukkan politisi yang baru saja menginterogasi bos perusahaan teknologi selama enam jam, lalu pulang dan memotret layarnya karena tidak tahu cara menyimpan PDF — ada kontras kekuasaan vs ketidakmampuan, ada detail yang bisa dibayangkan, dan tawanya mendarat di kata terakhir. Itulah yang kami tulis: setup kekuasaan, detail spesifik, punch di akhir.

## Pre-mortem (#3e)
- (a) 3 alasan paling mungkin kalah dari top 3 di FINAL: (1) 20 entri lain memakai klise/contoh yang sama → kalah di #5 (freshness); bila byte-identik, berbagi rate dan receipt awal menang; (2) judge GLM menilai setup panjang sebagai bertele-tele dan memilih entri yang lebih pendek/bersih; (3) detail teknis (rename ekstensi) dianggap "perlu penjelasan" oleh judge, kalah kriteria #4.
- (b) 3 jebakan skor lokal bagus tapi server jelek: (1) pairwise self-judge bias ke gaya sendiri — mitigasi: position swap 2 arah + devil's advocate tertulis; (2) angka heat awal = noise (aturan khusus bounty judge); (3) satu kalimat yang lucu dibaca keras oleh manusia belum tentu menang di judge model — mitigasi: nilai ketat per 5 kriteria judge, bukan "menurut gue lucu".
- (c) Pengecekan terukur: tiap kandidat dicek (i) 1 kalimat? (ii) ≤320 karakter (hitung mesin), (iii) pairwise 2 arah vs kandidat lain, (iv) cek duplikasi konsep vs klise umum (daftar klise di bawah).

## Daftar klise yang DIHINDARI (worn tech-illiteracy cliché, kriteria #5)
- Minta tolong cucu/anak untuk hal komputer; password di sticky note; print email; "internet itu seri tabung"; tidak bisa bedakan mouse/keyboard; Wi-Fi dimatikan lalu nyala lagi; "apakah AI ini sadar?" sebagai lelucon utama.

## Kandidat (10, semua 1 kalimat, ≤320 karakter — hitung mesin 24 Nov 15:xx WIB)
- C1 (165 ch): The senator who wrote the bill to regulate artificial intelligence just asked his staff to convert a Word document to PDF by printing it out and scanning it back in.
- C2 (175 ch): Congress will now decide the future of AI, crypto, and the internet, just as soon as someone on the committee figures out how to turn this .docx into a PDF without calling IT.
- C3 (187 ch): He drafted the law that will govern machine learning for the next decade, then emailed his chief of staff a screenshot of a Word document and asked her to "make it a PDF, the proper way."
- C4 (159 ch): The lawmaker who will decide what AI is allowed to do spent the recess renaming a file from report.docx to report.pdf and wondering why the icon didn't change.
- C5 (174 ch): She can subpoena a tech CEO, grill him for six hours on encryption, and write the bill that regulates his entire industry — but the PDF on her desk is a photo of her monitor.
- C6 (166 ch): The committee that regulates the internet has scheduled a hearing on AI safety for Tuesday, pending someone in the office learning what the "Save as PDF" button does.
- C7 (188 ch): He wrote 400 pages of law to govern algorithms he has never seen, then forwarded his own bill to his assistant as a JPEG of a Word document, asking her to convert it "into the PDF format."
- C8 (160 ch): The senator regulating crypto just discovered that a PDF is not, in fact, made by taking a photo of your screen — and has asked for a second hearing to confirm.
- C9 (171 ch): They will legislate the future of artificial intelligence this session, just as soon as the chairman's grandson comes by to show him where the "Export to PDF" button went.
- C10 (187 ch): The senator who just voted to regulate the algorithms that decide what America reads spent twenty minutes this morning trying to save his own speech as a PDF by taking a screenshot of it.

## Pairwise (self-judge, protokol #51: posisi dibalik 2 arah, devil's advocate tertulis, keraguan jatuh ke rival)
Skor per kriteria judge (1–5; #1 topik, #2 turn, #3 aim, #4 keterbacaan/punch akhir, #5 detail spesifik):
| Kand | #1 | #2 | #3 | #4 | #5 | Total | Catatan |
|---|---|---|---|---|---|---|---|
| C1 | 5 | 4 | 5 | 4 | 2 | 20 | print+scan = trope yang dikenal, kalah #5 |
| C2 | 5 | 3 | 4 | 4 | 2 | 18 | turn lemah (delay joke), "calling IT" usang |
| C3 | 5 | 5 | 5 | 4 | 4 | 23 | screenshot + kutipan "the proper way" kuat |
| C4 | 5 | 5 | 5 | 5 | 5 | 25 | rename ekstensi = detail paling tak terduga; punch "why the icon didn't change" di kata terakhir |
| C5 | 5 | 5 | 5 | 5 | 4 | 24 | setup kekuasaan 3-beat terkuat; punch "photo of her monitor" di akhir |
| C6 | 5 | 4 | 5 | 4 | 3 | 21 | "Save as PDF button" agak generik |
| C7 | 5 | 5 | 5 | 4 | 4 | 23 | kuat tapi sedikit bertele-tele; JPEG ≈ keluarga screenshot |
| C8 | 5 | 4 | 5 | 4 | 3 | 21 | "second hearing to confirm" bagus, detail foto-layar sedang |
| C9 | 5 | 3 | 4 | 3 | 1 | 16 | ANCHOR KALIBRASI (kalah sengaja): klise cucu = gagal #5 |
| C10 | 5 | 4 | 5 | 4 | 3 | 21 | keluarga screenshot, kalah segar dari C3/C5 |

Round-robin top 4 (C4, C5, C3, C7), tiap pasangan dinilai 2 arah:
- C5 vs C4 — C5 menang, margin 2, kedua arah. #1 seri. #2: setup C5 (subpoena + grill 6 jam enkripsi + menulis RUU) membangun otoritas lebih besar, jatuhnya lebih dalam — ini kriteria pertama yang berbeda, jadi penentu. Devil's advocate (untuk C4): C4 lebih pendek (159 vs 174 ch), detail rename-ekstensi paling tak terduga di field, "photo of monitor" adalah trope yang pernah beredar; C5 berisiko dinilai setup-nya agak panjang. Counter: punch C5 tetap mendarat di kata terakhir (#4), detail foto-monitor langsung terbayang tanpa pengetahuan teknis — C4 membawa risiko pre-mortem (a)(3): punch-nya bergantung pada fakta teknis kecil (ekstensi menentukan format).
- C4 vs C3 — C4 menang, margin 2, kedua arah. #2 seri; #5: rename-ekstensi jelas lebih tak terduga daripada screenshot (C3 sekeluarga dengan C5/C10).
- C4 vs C7 — C4 menang, margin 2, kedua arah. #5 penentu: rename-ekstensi > JPEG dokumen Word.
- C5 vs C3 — C5 menang, margin 2, kedua arah. #2 penentu: setup 3-beat C5 > setup 1-klausa C3.
- C5 vs C7 — C5 menang, margin 2, kedua arah. #2 penentu.
- C3 vs C7 — C3 menang, margin 1, kedua arah. #2 C7 sedikit unggul, #4 C3 lebih bersih ("the proper way" lebih quotable); margin kecil.
Hasil round-robin: C5 3-0, C4 2-1, C3 1-2, C7 0-3. PEMENANG: C5.
Uji hipotesis: H1 TERBUKTI (setup kekuasaan + undercut spesifik menang #2/#5 di semua pasangan top). H2 TERBUKTI (pemenang punya punch di kata terakhir; C9 yang punch-nya di tengah kalah telak). H3 SEBAGIAN: C4 memang menang #5 atas semua lawan, TAPI kalah #2 dari C5 — presisi teknis saja tidak cukup bila turn-nya kalah; kriteria pertama yang berbeda yang memutuskan, sesuai brief judge.

## Verifikasi lokal (24 Nov 2026 ~15:2x WIB, Node v24.22.1 lokal; grader pakai Node 22.23.4, main.ts kompatibel type-stripping 22.18+)
- `OUTPUT_DIR=/tmp/long-roast-out node main.ts` → exit 0, ~1,08 dtk (batas 60 dtk/run).
- /output/entry.txt (via override dir): 174 karakter / 176 byte, UTF-8, bukan whitespace-only, 1 kalimat, gate 1–320 karakter: LOLOS.
- Isi byte-identik dengan kandidat C5 (pemenang pairwise 3-0).
- Determinisme: run ke-2 menghasilkan file byte-identik (cmp lolos).
- TIDAK ADA grade-local untuk bounty ini (RULES.txt: "There is no local grade of this competition: the server grades every entry") — verifikasi lokal = gate + determinisme + runtime; skor judge hanya dari server sesudah submit (urusan agen induk).
- Belum beres / urusan agen induk: bundle transcripts, `check`, submit, badge rank/reward di README (butuh owner/repo GitHub — belum ada; README baru memuat badge kompetisi + tautan halaman bounty), GitHub About (website make.fun + topik makefun), dan `.makefun/owner.json` bila repo GitHub bukan milik akun @yuu.
## Peta Masalah
| Masalah | Pendekatan dicoba | Hasil | Kenapa gagal |
|---|---|---|---|
| (belum ada) | | | |
