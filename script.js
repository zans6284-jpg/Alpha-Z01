// Toggle antar Login dan Register
function toggleAuth() {
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');
    
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        regForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        regForm.style.display = "block";
    }
}

// Fungsi Register
function handleRegister() {
    const user = document.getElementById('reg-user').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if (user && email && pass) {
        const userData = { username: user, email: email, password: pass };
        // Simpan ke localStorage (menggantikan file backend)
        localStorage.setItem('alpha_user_' + user, JSON.stringify(userData));
        alert("Registrasi Berhasil! Silakan Login.");
        toggleAuth();
    } else {
        alert("Mohon isi semua kolom!");
    }
}

// Fungsi Login
function handleLogin() {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;

    const storedData = localStorage.getItem('alpha_user_' + user);

    if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData.password === pass) {
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('main-page').style.display = 'block';
        } else {
            alert("Password salah!");
        }
    } else {
        alert("Username tidak ditemukan!");
    }
}

// Fungsi Search
function executeSearch() {
    const query = document.getElementById('search-input').value;
    const frame = document.getElementById('search-frame');
    const msg = document.getElementById('welcome-msg');

    if (query) {
        msg.style.display = 'none';
        frame.style.display = 'block';
        
        // Menggunakan Google Search via Iframe
        // Catatan: Banyak situs (Google/YT) memblokir iframe (X-Frame-Options).
        // Solusi: Kita arahkan ke link pencarian di tab baru atau proxy jika perlu.
        // Di sini kita coba tampilkan link langsung:
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&igu=1`;
        frame.src = searchUrl;
    }
}
