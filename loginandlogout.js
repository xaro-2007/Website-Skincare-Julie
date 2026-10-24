
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let tdn = document.getElementById('tdn').value;
    let mk = document.getElementById('mk').value;

    alert("Đăng nhập thành công!");

    document.getElementById('usernameDisplay').innerText = tdn;
    document.getElementById('loginArea').style.display = 'none';
    document.getElementById('userArea').style.display = 'flex';

    document.getElementById('tdn').value = '';
    document.getElementById('mk').value = '';
    closeLoginModal();
});

function handleLogout() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        document.getElementById('userArea').style.display = 'none';
        document.getElementById('loginArea').style.display = 'block';
        
        alert("Đã đăng xuất tài khoản!");
    }
}