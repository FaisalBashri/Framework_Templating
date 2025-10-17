import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-theme-bg-primary shadow-lg rounded-xl p-8">
      <h1 className="text-3xl font-bold text-theme-text-base mb-4">Selamat Datang di OneDering</h1>
      <p className="text-theme-text-muted mb-6">
        Aplikasi ini adalah demonstrasi konsep arsitektur dari sistem templating backend, yang diimplementasikan dalam SPA React modern.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-theme-bg-tertiary rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-theme-primary">Tata Letak & Parsial</h2>
          <p>Seluruh UI disusun menggunakan komponen `Layout` utama yang mencakup "parsial" yang dapat digunakan kembali seperti Header, Sidebar, dan Footer.</p>
        </div>
        <div className="p-6 bg-theme-bg-tertiary rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-theme-primary">Sistem Tema</h2>
          <p>Anda dapat beralih antara tema terang dan gelap menggunakan ikon di header. Ini dikelola oleh `ThemeContext` dan diimplementasikan dengan Tailwind CSS.</p>
        </div>
        <div className="p-6 bg-theme-bg-tertiary rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-theme-primary">Sistem Area/Region</h2>
          <p>Sidebar berisi "Region" yang dinamis. Komponen dapat mendaftarkan diri ke area ini, mensimulasikan sistem plugin. Lihat contoh "Sample Plugin Widget".</p>
        </div>
        <div className="p-6 bg-theme-bg-tertiary rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-theme-primary">Ekspor Sisi Klien</h2>
          <p>Navigasi ke halaman "Manajemen Pengguna" untuk melihat tabel data yang dapat diekspor ke CSV atau JSON langsung dari browser.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;