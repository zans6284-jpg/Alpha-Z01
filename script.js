// Navigasi antar halaman
function showPage(pageId) {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'none';
    document.getElementById(pageId).style.display = 'flex';
    if(pageId === 'main-page') document.getElementById(pageId).style.display = 'block';
}

// Fitur Register
function handleRegister() {
    const user = document.getElementById('reg-user').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if (user && email && pass) {
        const userData = { user, email, pass };
        localStorage.setItem('alpha_user_' + user, JSON.stringify(userData));
        alert('Registrasi Berhasil! Silahkan Login.');
        showPage('login-page');
    } else {
        alert('Harap isi semua kolom!');
    }
}

// Fitur Login
function handleLogin() {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;
    
    const storedData = localStorage.getItem('alpha_user_' + user);
    
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData.pass === pass) {
            showPage('main-page');
        } else {
            alert('Password Salah!');
        }
    } else {
        alert('User tidak ditemukan!');
    }
}

// Sidebar Toggle
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Fitur Pencarian (Proxy bypass sederhana lewat Google DuckDuckGo)
function executeSearch() {
    const query = document.getElementById('search-input').value;
    const frame = document.getElementById('search-frame');
    const safeSearch = document.getElementById('safesearch-toggle').checked;
    
    // Menggunakan DuckDuckGo untuk pencarian tanpa filter ketat jika diatur
    let searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    
    if (!safeSearch) {
        // Logika sederhana: arahkan ke hasil pencarian yang lebih bebas
        searchUrl += "&adlt=off"; 
    }
    
    frame.src = searchUrl;
    document.querySelector('.welcome-msg').style.display = 'none';
}

// Animasi Air (Sederhana)
function createRain() {
    const container = document.querySelector('.rain-container');
    setInterval(() => {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = (Math.random() * 2 + 3) + 's';
        container.appendChild(drop);
        setTimeout(() => drop.remove(), 5000);
    }, 300);
}

createRain();
