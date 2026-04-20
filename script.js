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
    // .trim() digunakan untuk menghapus spasi di awal/akhir yang sering bikin error
    const user = document.getElementById('reg-user').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();

    if (user && email && pass) {
        const userData = { 
            username: user, 
            email: email, 
            password: pass 
        };
        
        // Simpan dengan key yang konsisten
        localStorage.setItem('alpha_user_' + user.toLowerCase(), JSON.stringify(userData));
        
        alert("Registrasi Berhasil untuk: " + user + "! Silakan Login.");
        toggleAuth();
    } else {
        alert("Mohon isi semua kolom!");
    }
}

// Fungsi Login
function handleLogin() {
    const userInput = document.getElementById('login-user').value.trim();
    const passInput = document.getElementById('login-pass').value.trim();

    // Ambil data dengan mengubah input ke lowercase agar tidak sensitif huruf besar/kecil di username
    const storedData = localStorage.getItem('alpha_user_' + userInput.toLowerCase());

    if (storedData) {
        const parsedData = JSON.parse(storedData);
        
        // Cek apakah password cocok
        if (parsedData.password === passInput) {
            alert("Akses Diterima. Masuk ke Alpha Z01...");
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('main-page').style.display = 'block';
        } else {
            alert("Password salah!");
        }
    } else {
        alert("Username '" + userInput + "' tidak ditemukan!");
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
        
        // Menggunakan mode IGU agar Google mengizinkan iframe (beberapa browser mungkin memblokir)
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&igu=1`;
        frame.src = searchUrl;
    }
}
