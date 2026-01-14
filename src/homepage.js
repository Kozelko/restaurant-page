export function loadHomepage() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="hero">
            <h1>🍽️ Kozel's Restaurant</h1>
            <p class="hero-subtitle">Experience the finest dining with a blend of traditional and modern cuisine</p>
        </div>

        <div class="info-cards">
            <div class="info-card">
                <div class="info-card-icon">🕐</div>
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
            <div class="info-card">
                <div class="info-card-icon">📍</div>
                <h3>Location</h3>
                <p>Bojná 8888</p>
                <p>Bojná Borín 95601</p>
            </div>
            <div class="info-card">
                <div class="info-card-icon">📞</div>
                <h3>Reservations</h3>
                <p>+421 123 456 789</p>
                <p>reservations@kozel.sk</p>
            </div>
        </div>
    `;

    // Set active nav button
    document.querySelectorAll('#nav button').forEach((btn, i) => {
        btn.classList.toggle('active', i === 0);
    });
}
