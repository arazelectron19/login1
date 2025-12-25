document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const loginBtn = document.querySelector('.btn-login');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate loading state
        const originalText = loginBtn.innerText;
        loginBtn.innerText = 'Signing In...';
        loginBtn.style.opacity = '0.7';

        setTimeout(() => {
            loginBtn.innerText = 'Success!';
            loginBtn.style.backgroundColor = '#4CAF50'; // Green for success

            setTimeout(() => {
                loginBtn.innerText = originalText;
                loginBtn.style.backgroundColor = '#1da1f2'; // Reset color
                loginBtn.style.opacity = '1';
                alert("Login successful!");
            }, 1000);
        }, 1500);
    });

    // Add satisfying click effects for all neumorphic buttons
    const buttons = document.querySelectorAll('.social-btn, .btn-login');
    buttons.forEach(btn => {
        btn.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('touchend', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
            
