export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="menu-section">
            <h1>🍽️ Our Menu</h1>
            <p style="text-align: center; margin-bottom: 3rem;">Fresh ingredients, exceptional taste, unforgettable experience</p>

            <div class="menu-category">
                <h2>🥗 Starters</h2>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Bryndzové Halušky</div>
                        <div class="menu-item-description">Traditional Slovak potato dumplings with sheep cheese and bacon</div>
                    </div>
                    <div class="menu-item-price">€12.90</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Seasonal Soup</div>
                        <div class="menu-item-description">Chef's daily creation with fresh seasonal ingredients</div>
                    </div>
                    <div class="menu-item-price">€6.50</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Carpaccio di Manzo</div>
                        <div class="menu-item-description">Thinly sliced beef with arugula, parmesan, and truffle oil</div>
                    </div>
                    <div class="menu-item-price">€14.90</div>
                </div>
            </div>

            <div class="menu-category">
                <h2>🍖 Main Courses</h2>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Grilled Ribeye Steak</div>
                        <div class="menu-item-description">300g premium beef with herb butter, roasted potatoes, and seasonal vegetables</div>
                    </div>
                    <div class="menu-item-price">€32.90</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Pan-Seared Salmon</div>
                        <div class="menu-item-description">Atlantic salmon with lemon dill sauce, asparagus, and wild rice</div>
                    </div>
                    <div class="menu-item-price">€26.90</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Chicken Supreme</div>
                        <div class="menu-item-description">Herb-crusted chicken breast with creamy mushroom sauce and mashed potatoes</div>
                    </div>
                    <div class="menu-item-price">€22.90</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Vegetarian Risotto</div>
                        <div class="menu-item-description">Arborio rice with wild mushrooms, truffle, and aged parmesan</div>
                    </div>
                    <div class="menu-item-price">€18.90</div>
                </div>
            </div>

            <div class="menu-category">
                <h2>🍰 Desserts</h2>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Chocolate Fondant</div>
                        <div class="menu-item-description">Warm chocolate cake with molten center, vanilla ice cream</div>
                    </div>
                    <div class="menu-item-price">€9.90</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Tiramisu</div>
                        <div class="menu-item-description">Classic Italian dessert with mascarpone and espresso</div>
                    </div>
                    <div class="menu-item-price">€8.50</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Crème Brûlée</div>
                        <div class="menu-item-description">Vanilla custard with caramelized sugar crust</div>
                    </div>
                    <div class="menu-item-price">€8.90</div>
                </div>
            </div>

            <div class="menu-category">
                <h2>🍷 Drinks</h2>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">House Wine (glass)</div>
                        <div class="menu-item-description">Selection of red, white, or rosé from local vineyards</div>
                    </div>
                    <div class="menu-item-price">€6.50</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Craft Beer</div>
                        <div class="menu-item-description">Local brewery selection, 0.5L</div>
                    </div>
                    <div class="menu-item-price">€5.90</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-info">
                        <div class="menu-item-name">Fresh Lemonade</div>
                        <div class="menu-item-description">Homemade with mint and honey</div>
                    </div>
                    <div class="menu-item-price">€4.50</div>
                </div>
            </div>
        </div>
    `;

    // Set active nav button
    document.querySelectorAll('#nav button').forEach((btn, i) => {
        btn.classList.toggle('active', i === 1);
    });
}
