# Developer Portfolio Website

Website portfolio modern untuk developer profesional yang dibangun menggunakan Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, dan Three.js.

## Fitur Utama

- **Hero 3D Scene**: Visual 3D interaktif berbasis Three.js dengan efek floating, rotasi wireframe, orbit particle ring, mouse parallax lerp, dan fallback anggun untuk perangkat tanpa WebGL / reduced motion.
- **About Me**: Informasi profil, perjalanan belajar, kartu sorotan keunggulan, serta riwayat pendidikan.
- **Skills & Technologies**: Matriks keahlian yang terorganisir per kategori (Frontend, Backend, Database, Tools) dengan progress bar dan badge teknologi.
- **Featured Projects**: Galeri proyek interaktif dengan filter kategori, kartu preview visual modern, detail modal yang aksesibel, serta tautan ke GitHub dan Live Demo.
- **Experience & Education**: Timeline vertikal ganda responsif yang merangkum pengalaman kerja dan pendidikan beserta pencapaian terukur.
- **Contact Me**: Formulir kontak interaktif dengan validasi sisi klien dan integrasi pengiriman via mailto terstruktur, dilengkapi kartu info kontak langsung.
- **Sistem Tema Light/Dark**: Switcher tema dengan persistensi `localStorage` dan sinkronisasi preferensi sistem operasi.
- **Aksesibilitas & Animasi Halus**: Navigasi responsif dengan active-section indicator via `IntersectionObserver`, styling `:focus-visible` di seluruh elemen interaktif, serta dukungan penuh untuk `prefers-reduced-motion`.

---

## Design System

Konsep visual yang digunakan adalah **Minimalist Modern** dengan fokus pada hierarki visual yang jelas, tipografi proporsional, dan sentuhan warna aksen kontemporer.

### Color Tokens

| Token | Light Mode | Dark Mode | Fungsi |
|---|---|---|---|
| `--background` | `#f8fafc` | `#0b0f19` | Latar belakang dasar halaman |
| `--surface` | `#ffffff` | `#111827` | Latar kartu, container, dan panel |
| `--surface-raised` | `#f1f5f9` | `#1f2937` | Latar modal dan elevated component |
| `--border` | `#e2e8f0` | `#1f2937` | Garis batas elemen |
| `--border-hover` | `#cbd5e1` | `#374151` | Garis batas saat hover |
| `--foreground` | `#0f172a` | `#f8fafc` | Teks utama dengan kontras tinggi |
| `--foreground-muted` | `#475569` | `#94a3b8` | Teks sekunder |
| `--foreground-subtle` | `#94a3b8` | `#64748b` | Teks keterangan / placeholder |
| `--primary` | `#2563eb` | `#3b82f6` | Warna aksen utama (Electric Indigo / Sapphire) |
| `--primary-hover` | `#1d4ed8` | `#60a5fa` | State hover warna aksen |
| `--primary-foreground` | `#ffffff` | `#ffffff` | Teks di atas warna primer |
| `--secondary` | `#f1f5f9` | `#1e293b` | Elemen penunjang |
| `--success` | `#10b981` | `#34d399` | Indikator sukses / status aktif |
| `--danger` | `#ef4444` | `#f87171` | Status error / validasi |

### Tipografi

- Font Family: `Inter`, sans-serif (via `next/font/google`)
- Ukuran responsif menggunakan CSS clamp:
  - Heading 1: `clamp(2.5rem, 5vw + 1rem, 4.25rem)`
  - Heading 2: `clamp(1.85rem, 3.5vw + 0.5rem, 2.75rem)`
  - Heading 3: `clamp(1.25rem, 2vw + 0.5rem, 1.75rem)`

### Radius & Shadow

- Radius: `sm` (0.375rem), `md` (0.5rem), `lg` (0.75rem), `xl` (1rem), `2xl` (1.5rem), `full` (9999px).
- Shadow: elevasi halus untuk kartu dan modal (`--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`).

---

## Cara Menjalankan

### Persyaratan

- Node.js 18+ (disarankan Node.js 20+)
- npm / pnpm / yarn

### Menjalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser.

### Membuat Production Build

```bash
npm run build
```

### Menjalankan Server Produksi

```bash
npm run start
```

---

## Struktur Direktori

```
profil/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system tokens & Tailwind imports
│   │   ├── layout.tsx           # Root layout dengan ThemeProvider & Font
│   │   └── page.tsx             # Halaman utama portofolio
│   ├── components/
│   │   ├── ui/                  # Komponen primitif (Button, Card, SectionHeading, MotionSection)
│   │   ├── about-section.tsx    # Section About Me
│   │   ├── contact-section.tsx  # Section Contact Me
│   │   ├── experience-section.tsx # Section Experience & Education
│   │   ├── footer.tsx           # Footer komponen
│   │   ├── hero-3d-scene.tsx    # Komponen Three.js Canvas
│   │   ├── hero-section.tsx     # Section Hero
│   │   ├── navbar.tsx           # Header Navigation bar responsif
│   │   ├── projects-section.tsx # Section Featured Projects
│   │   ├── skills-section.tsx   # Section Skills & Technologies
│   │   └── theme-provider.tsx   # Light/Dark Theme Context
│   └── lib/
│       ├── portfolio-data.ts    # Data terpusat portofolio
│       └── utils.ts             # Utility helper (cn / clsx)
├── next.config.ts               # Konfigurasi Next.js
├── postcss.config.mjs           # Konfigurasi PostCSS Tailwind v4
├── tsconfig.json                # Konfigurasi TypeScript
├── package.json                 # Konfigurasi paket & dependensi
└── README.md                    # Dokumentasi proyek & design system
```

---

## Mengisi Konten

Semua data portofolio terpusat di `src/lib/portfolio-data.ts`.
- Ganti nilai berpenanda `// TODO(isi): ...` dengan data Anda yang sebenarnya (nama, bio, pengalaman, proyek, dan tautan sosial).
- Jalankan perintah `npm run check:content` untuk memeriksa sisa data placeholder atau penanda `TODO(isi)` yang masih perlu diisi.

