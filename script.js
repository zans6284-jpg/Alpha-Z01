// Fungsi Sidebar
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Update Fungsi Search dengan Logika SafeSearch
function executeSearch() {
    const query = document.getElementById('search-input').value.trim();
    const isSafeSearch = document.getElementById('safesearch-toggle').checked;
    const frame = document.getElementById('search-frame');

    if (query) {
        // Parameter Google: safe=active (on) atau safe=images (off/lebih longgar)
        // Kita gunakan 'off' untuk mencoba melewati filter
        let safeParam = isSafeSearch ? "active" : "off";
        
        // URL Search dengan parameter khusus
        // igu=1 membantu agar frame bisa terbuka di beberapa kondisi
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&safe=${safeParam}&igu=1`;
        
        frame.style.display = 'block';
        frame.src = searchUrl;
        
        // Tutup sidebar otomatis saat cari
        document.getElementById('sidebar').classList.remove('active');
    }
}

// ... Tambahkan fungsi handleLogin dan handleRegister dari update sebelumnya ...
