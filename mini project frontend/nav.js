const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <a href="index.html"><img src="fresh-vegetable-market-logo-icon-600w-2017006655.webp" class="brand-logo" alt=""></a>
    
     <div class="nav-items">
         <div class="search">
             <input type="text" class="search-box" placeholder="search brand, product">
            <a href="search.html"><button class="search-btn">search</button></a>
         </div>
         <a href="account.html"><img src="user.png" alt=""></a>
         <a href="#"><img src="cart.png" alt=""></a>
     </div>
 </div>
 </nav>
 <ul class="links-container">
     <li class="link-item"><a href="index.html">home</a>
     </li>
     <li class="link-item"><a href="#">about</a></li>
     <li class="link-item"><a href="#">service</a></li>
     <li class="link-item"><a href="product.html">fruits</a></li>
     <li class="link-item"><a href="product.html">vegetables</a></li>
 </ul>
    `;
}

createNav();