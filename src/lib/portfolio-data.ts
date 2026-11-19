export const personalInfo = {
  name: "Aldorino Sofian", // TODO(isi): nama lengkap
  role: "Full-Stack Developer", // TODO(isi): peran utama
  headline: "Membangun Produk Digital Modern, Cepat, dan Interaktif", // TODO(isi): headline
  bio: "Spesialis dalam pengembangan aplikasi web modern dengan Next.js, TypeScript, dan ekosistem modern. Menggabungkan performa tinggi dengan antarmuka elegan dan animasi yang halus.", // TODO(isi): bio singkat
  availableForWork: true,
  availabilityText: "Tersedia untuk proyek baru", // TODO(isi): ketersediaan
  location: "Klaten, Indonesia", // TODO(isi): lokasi
  email: "aldorinosk@example.com", // TODO(isi): email asli
  github: "", // TODO(isi): tautan github
  linkedin: "", // TODO(isi): tautan linkedin
};

export const aboutInfo = {
  title: "Tentang Saya",
  subtitle:
    "Mengenal lebih dekat perjalanan, minat, dan keunggulan yang saya bawa ke setiap proyek.",
  description:
    "Saya developer dengan fokus pada pengembangan aplikasi web modern. Berawal dari rasa penasaran pada bagaimana website bekerja, saya belajar secara otodidak melalui dokumentasi, komunitas, dan praktik langsung membangun proyek nyata.", // TODO(isi): deskripsi tentang saya
  journey:
    "Perjalanan saya dimulai dari dasar HTML, CSS, dan JavaScript, lalu berkembang ke framework modern seperti React dan Next.js. Kini saya membangun produk digital yang cepat, aksesibel, dan interaktif.", // TODO(isi): perjalanan singkat
  interests: [
    "Web Development",
    "UI/UX Design",
    "Motion Design",
    "Open Source",
    "Performance Optimization",
  ], // TODO(isi): minat
  highlights: [
    {
      title: "Kode Berkualitas",
      description:
        "Menulis kode yang bersih, terstruktur, dan mudah dirawat dengan TypeScript.",
    },
    {
      title: "Performa Tinggi",
      description:
        "Fokus pada kecepatan loading, optimasi aset, dan pengalaman pengguna yang mulus.",
    },
    {
      title: "Desain Modern",
      description:
        "Menggabungkan estetika minimalist modern dengan interaksi yang hidup.",
    },
    {
      title: "Pembelajar Cepat",
      description:
        "Selalu mengikuti perkembangan teknologi terbaru dan cepat beradaptasi.",
    },
  ],
  education: {
    institution: "Universitas Sanata Dharma", // TODO(isi): institusi pendidikan
    major: "S1 Informatika", // TODO(isi): jurusan
    period: "2022 - 2026", // TODO(isi): periode studi
  },
};

export const experienceInfo = {
  title: "Pengalaman & Pendidikan",
  subtitle:
    "Perjalanan profesional dan akademis dalam membangun produk digital yang berdampak.",
  work: [
    {
      role: "Web Developer Intern",
      company: "Karya Digital Labs",
      period: "2020 — 2021",
      type: "Internship",
      description:
        "Mendukung tim engineering dalam membangun fitur frontend dan integrasi API untuk aplikasi internal.",
      achievements: [
        "Mengirimkan 8 fitur produksi dalam masa magang.",
        "Membuat dokumentasi komponen untuk mempercepat onboarding tim.",
      ],
      technologies: ["Vue.js", "Node.js", "MongoDB"],
    },
  ],
  education: [
    {
      degree: "S1 Informatika",
      institution: "Universitas Sanata Dharma",
      period: "2022 — 2026",
      description:
        "Fokus pada rekayasa perangkat lunak, struktur data, sistem terdistribusi, dan interaksi manusia-komputer.",
      achievements: [
        "Lulus dengan predikat Cum Laude.",
        "Asisten dosen untuk mata kuliah Pemrograman Web.",
      ],
    },
  ],
};

export const skillsInfo = {
  title: "Keahlian & Teknologi",
  categories: [
    {
      name: "Frontend Development",
      icon: "Code",
      technologies: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
      ],
    },
    {
      name: "Backend Development",
      icon: "Server",
      technologies: [
        { name: "Node.js", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "NestJS", level: "Advanced" },
      ],
    },
    {
      name: "Database",
      icon: "Database",
      technologies: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL", level: "Beginner" },
      ],
    },
    {
      name: "Tools & Technologies",
      icon: "Tool",
      technologies: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Advanced" },
        { name: "Figma", level: "Advanced" },
        { name: "Vercel", level: "Expert" },
      ],
    },
  ],
};

export type ProjectTone = "gold" | "copper" | "champagne" | "emerald" | "rose-gold";

export interface ProjectItem {
  id: string;
  title: string;
  previewImage?: string;
  category: "Full-Stack" | "Frontend" | "AI & Tools";
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  metric?: string;
  tone: ProjectTone;
  iconName: string;
  features: string[];
}

export const contactInfo = {
  title: "Hubungi Saya",
  subtitle:
    "Punya proyek menarik atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya melalui formulir atau kanal sosial di bawah.",
  email: "aldorinosk@example.com", // TODO(isi): email utama
  location: "Klaten, Indonesia", // TODO(isi): lokasi
  responseTime: "Biasanya membalas dalam 24 jam", // TODO(isi): waktu respons
  socials: [
    { label: "GitHub", href: "", type: "github" }, // TODO(isi): tautan github
    { label: "LinkedIn", href: "", type: "linkedin" }, // TODO(isi): tautan linkedin
    { label: "Twitter / X", href: "", type: "twitter" }, // TODO(isi): tautan twitter
  ],
};

export const projectsInfo: {
  title: string;
  subtitle: string;
  categories: readonly string[];
  projects: ProjectItem[];
} = {
  title: "Proyek Unggulan",
  subtitle:
    "Koleksi proyek terpilih yang menggabungkan arsitektur modular, performa responsif, dan antarmuka elegan.",
  categories: ["Semua", "Full-Stack", "Frontend", "AI & Tools"] as const,
  projects: [
    {
      id: "devspace-platform", // TODO(isi): id proyek
      title: "DevSpace Platform", // TODO(isi): judul proyek
      previewImage: "/previews/devspace.png",
      category: "Full-Stack",
      description:
        "Platform kolaboratif pengembang dengan manajemen tugas Kanban, integrasi repositori Git, dan analitik produktivitas tim.", // TODO(isi): deskripsi proyek
      longDescription:
        "DevSpace adalah platform kerja kolaboratif berorientasi pengembang modern. Menyediakan papan Kanban real-time, sinkronisasi webhook GitHub, pelacakan branch, dan dashboard visualisasi performa sprint.", // TODO(isi): deskripsi lengkap
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"], // TODO(isi): teknologi
      githubUrl: "",
      demoUrl: "",
      featured: true,
      metric: "1.2k+ Pengguna Aktif", // TODO(isi): metrik
      tone: "gold",
      iconName: "Layers",
      features: [
        "Papan Kanban interaktif dengan drag-and-drop mulus", // TODO(isi): fitur
        "Integrasi webhook GitHub untuk sinkronisasi commit otomatis",
        "Autentikasi role-based access control (RBAC)",
        "Notifikasi real-time via WebSocket",
      ],
    },
    {
      id: "neuroflow-ai", // TODO(isi): id proyek
      title: "NeuroFlow AI Assistant", // TODO(isi): judul proyek
      category: "AI & Tools",
      description:
        "Asisten cerdas berbasis LLM untuk sintesis riset, ringkasan dokumen kontekstual, dan otomatisasi alur kerja kode.", // TODO(isi): deskripsi proyek
      longDescription:
        "NeuroFlow memanfaatkan model bahasa generasi terbaru untuk menganalisis dokumen teks panjang, menghasilkan ringkasan terstruktur, dan memberikan rekomendasi perbaikan kode secara interaktif.", // TODO(isi): deskripsi lengkap
      technologies: ["React", "FastAPI", "Python", "Tailwind CSS"], // TODO(isi): teknologi
      githubUrl: "",
      demoUrl: "",
      featured: true,
      metric: "Latensi < 250ms", // TODO(isi): metrik
      tone: "copper",
      iconName: "Sparkles",
      features: [
        "Streaming response token secara real-time", // TODO(isi): fitur
        "Dukungan upload dokumen PDF dan Markdown",
        "Ekstraksi sintaksis kode dengan copy satu-klik",
        "Riwayat obrolan tersimpan lokal dengan privasi tinggi",
      ],
    },
    {
      id: "reservasi-booking", // TODO(isi): id proyek
      title: "Sistem Reservasi & Booking", // TODO(isi): judul proyek
      category: "Full-Stack",
      description:
        "Platform pemesanan dan jadwal online dengan sinkronisasi kalender dan manajemen ketersediaan otomatis.", // TODO(isi): deskripsi proyek
      longDescription:
        "Sistem reservasi end-to-end dengan validasi jadwal real-time, pengingat otomatis, dan analitik penggunaan layanan.", // TODO(isi): deskripsi lengkap
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"], // TODO(isi): teknologi
      githubUrl: "",
      demoUrl: "",
      featured: true,
      metric: "99.9% Uptime", // TODO(isi): metrik
      tone: "gold",
      iconName: "Layers",
      features: [
        "Pemesanan jadwal interaktif dengan konfirmasi langsung", // TODO(isi): fitur
        "Manajemen slot waktu dan kapasitas fleksibel",
        "Dashboard analitik reservasi dan laporan pendapatan",
      ],
    },
    {
      id: "finpulse-analytics", // TODO(isi): id proyek
      title: "FinPulse Analytics", // TODO(isi): judul proyek
      category: "Full-Stack",
      description:
        "Dashboard analitik keuangan real-time dengan streaming data pasar, grafik interaktif, dan deteksi tren otomatis.", // TODO(isi): deskripsi proyek
      longDescription:
        "FinPulse menyediakan antarmuka analitik metrik portofolio keuangan dengan agregasi data cepat, filter rentang waktu dinamis, dan peringatan batas nilai otomatis.", // TODO(isi): deskripsi lengkap
      technologies: ["Next.js", "TypeScript", "Node.js", "Redis"], // TODO(isi): teknologi
      githubUrl: "",
      demoUrl: "",
      featured: false,
      metric: "10k+ Event / Detik", // TODO(isi): metrik
      tone: "champagne",
      iconName: "TrendingUp",
      features: [
        "Streaming grafik candlestick dan sparkline waktu nyata", // TODO(isi): fitur
        "Cache layer Redis untuk respons di bawah 10ms",
        "Ekspor laporan keuangan format PDF dan CSV",
        "Tema gelap teroptimasi untuk pemantauan jangka panjang",
      ],
    },
    {
      id: "zenith-ui", // TODO(isi): id proyek
      title: "Zenith UI Kit", // TODO(isi): judul proyek
      category: "Frontend",
      description:
        "Pustaka komponen UI minimalist modern yang aksesibel, mendukung tema ganda, dan teruji secara menyeluruh.", // TODO(isi): deskripsi proyek
      longDescription:
        "Zenith UI dirancang untuk mempercepat perakitan prototipe dan aplikasi produksi dengan lebih dari 30 komponen yang mematuhi standar WAI-ARIA dan kompatibel dengan Tailwind CSS.", // TODO(isi): deskripsi lengkap
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"], // TODO(isi): teknologi
      githubUrl: "",
      demoUrl: "",
      featured: false,
      metric: "99% Skor Aksesibilitas", // TODO(isi): metrik
      tone: "emerald",
      iconName: "Laptop",
      features: [
        "30+ komponen UI reusable dengan varian lengkap", // TODO(isi): fitur
        "Keyboard navigation dan screen reader ready",
        "Dokumentasi interaktif berbasis Storybook",
        "Bundle size minimalis dengan tree-shaking penuh",
      ],
    },
    {
      id: "aether-synthesizer", // TODO(isi): id proyek
      title: "Aether Audio Synthesizer", // TODO(isi): judul proyek
      category: "Frontend",
      description:
        "Instrumen synthesizer digital berbasis Web Audio API dengan kontrol osilator polyphonic, filter envelope, dan visualisasi spektrum.", // TODO(isi): deskripsi proyek
      longDescription:
        "Aether mengubah browser menjadi stasiun kerja audio mini dengan osilator berganda, kontrol ADSR envelope, filter low-pass, dan visualizer waveform langsung.", // TODO(isi): deskripsi lengkap
      technologies: ["TypeScript", "Web Audio API", "HTML5 Canvas", "Tailwind CSS"], // TODO(isi): teknologi
      githubUrl: "",
      demoUrl: "",
      featured: false,
      metric: "Zero Latency Buffer", // TODO(isi): metrik
      tone: "rose-gold",
      iconName: "AudioWaveform",
      features: [
        "4 bentuk gelombang osilator suara independen", // TODO(isi): fitur
        "Visualisasi frekuensi spektrum realtime via HTML5 Canvas",
        "Keyboard piano virtual interaktif dan dukungan MIDI",
        "Presetting suara dan kontrol volume presisi",
      ],
    },
  ],
};

