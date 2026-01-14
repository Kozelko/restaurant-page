export function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>About Us</h1>
        
        <div class="about-content">
            <div class="about-text">
                <p>
                    Welcome to <strong>Kozel's Restaurant</strong>, where culinary passion meets exceptional hospitality. 
                    Founded in 2020, our restaurant has become a beloved destination for food enthusiasts seeking 
                    an unforgettable dining experience.
                </p>
                <p>
                    Our kitchen is led by Chef Kozel Kompot, who brings over 15 years of international culinary 
                    experience to every dish. His philosophy is simple: use the freshest local ingredients, 
                    respect traditional techniques, and add a touch of modern creativity.
                </p>
                <p>
                    We take pride in sourcing our ingredients from local farmers and producers, 
                    ensuring that every meal supports our community while delivering the highest quality flavors.
                </p>
            </div>
            <div class="about-image-placeholder">
                👨‍🍳
            </div>
        </div>

        <div class="chef-quote">
            "Cooking is about creating moments of joy. Every plate that leaves our kitchen 
            carries a piece of our passion and dedication to the art of fine dining."
            <br><br>
            <strong>— Chef Kozel Kompot</strong>
        </div>

        <h2 style="margin-top: 3rem; text-align: center;">Our Values</h2>
        
        <div class="values-grid">
            <div class="value-item">
                <div class="value-icon">🌿</div>
                <h3>Fresh & Local</h3>
                <p>We source 80% of our ingredients from local farms within 50km radius</p>
            </div>
            <div class="value-item">
                <div class="value-icon">👨‍👩‍👧‍👦</div>
                <h3>Family Atmosphere</h3>
                <p>A warm, welcoming environment for families, friends, and special occasions</p>
            </div>
            <div class="value-item">
                <div class="value-icon">♻️</div>
                <h3>Sustainability</h3>
                <p>Committed to eco-friendly practices and minimal food waste</p>
            </div>
            <div class="value-item">
                <div class="value-icon">⭐</div>
                <h3>Excellence</h3>
                <p>Dedicated to delivering exceptional quality in every aspect of your visit</p>
            </div>
        </div>
    `;

    // Set active nav button
    document.querySelectorAll('#nav button').forEach((btn, i) => {
        btn.classList.toggle('active', i === 2);
    });
}
