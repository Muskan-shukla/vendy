const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="fresh-vegetable-market-logo-icon-600w-2017006655.webp" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">fruits</li>
                <li><a href="#" class="footer-link">apple</a></li>
                <li><a href="#" class="footer-link">banana</a></li>
                <li><a href="#" class="footer-link">guava</a></li>
                <li><a href="#" class="footer-link">grapes</a></li>
                <li><a href="#" class="footer-link">kiwi</a></li>
                <li><a href="#" class="footer-link">papaya</a></li>
                <li><a href="#" class="footer-link">mango</a></li>
                <li><a href="#" class="footer-link">strawberry</a></li>
                <li><a href="#" class="footer-link">watermelon</a></li>
                <li><a href="#" class="footer-link">raspberry</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">vegetables</li>
                <li><a href="#" class="footer-link">potato</a></li>
                <li><a href="#" class="footer-link">tomato</a></li>
                <li><a href="#" class="footer-link">cabbage</a></li>
                <li><a href="#" class="footer-link">brinjal</a></li>
                <li><a href="#" class="footer-link">peas</a></li>
                <li><a href="#" class="footer-link">carrot</a></li>
                <li><a href="#" class="footer-link">lady finger</a></li>
                <li><a href="#" class="footer-link">broccoli</a></li>
                <li><a href="#" class="footer-link">bottle gourd</a></li>
                <li><a href="#" class="footer-link">pumpkin</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">we aim to provide fresh fruits and vegetables to our customer in less price. </p>
    <p class="info">support emails - help@vendy.com, customersupport@vendy.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    `;
}

createFooter();