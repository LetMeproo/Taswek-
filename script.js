let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.carousel-item');
    slides.forEach(slide => slide.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides(); 
    setInterval(showSlides, 3000); 
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('google-login').addEventListener('click', function() {
        
        alert('تسجيل الدخول عبر جوجل!');
    });
});

window.addEventListener('scroll', function() {
    let cards = document.querySelectorAll('.card');
    let windowHeight = window.innerHeight;

    cards.forEach(card => {
        let cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 50) {
            card.classList.add('show');
        }
    });
});

// search box

document.addEventListener('DOMContentLoaded', function() {
    // جمع أسماء المنتجات من عناصر .card-title
    const productElements = document.querySelectorAll('.card-title');
    const products = Array.from(productElements).map(element => element.textContent.trim());

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query) {
            const filteredProducts = products.filter(product => product.toLowerCase().includes(query));
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const li = document.createElement('li');
                    li.classList.add('list-group-item');
                    li.textContent = product;
                    li.addEventListener('click', () => {
                        searchInput.value = product;
                        searchResults.innerHTML = '';
                        
                        const targetElement = Array.from(productElements).find(element => element.textContent.trim() === product);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                    searchResults.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.textContent = 'المنتج غير متوفر حاليا';
                searchResults.appendChild(li);
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.innerHTML = '';
        }
    });
});




// auto type for about.html page :

document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["ابحث", "قارن", "إستمتع بالخصم", "كل ده في مكان واحد Taswek"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        loop: true
    };

    var typed = new Typed("#typed-text", options);
});

// Circle analyses

document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.circle');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function runCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const number = counter.querySelector('.number');
        const speed = 200; 
        let count = 0;

        const updateCount = () => {
            const increment = target / speed;
            count += increment;

            if (count < target) {
                number.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                number.textContent = target;
                counter.querySelector('.circle-inner').style.animation = 'none'; 
            }
        };

        updateCount();
    }

    function checkCounters() {
        counters.forEach(counter => {
            if (isElementInViewport(counter) && !counter.classList.contains('started')) {
                counter.classList.add('started');
                runCounter(counter);
                const circleInner = counter.querySelector('.circle-inner');
                circleInner.style.animationDuration = '2s'; // ضبط زمن الرسوم المتحركة
                circleInner.style.animationPlayState = 'running';
            }
        });
    }

    window.addEventListener('scroll', checkCounters);
    window.addEventListener('load', checkCounters);
});


// cart shop
const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function showAlert() {
        alertBox.classList.remove('d-none');
        setTimeout(() => {
            alertBox.classList.add('d-none');
        }, 2000);
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const product = {
                title: card.querySelector('.card-title').textContent,
                text: card.querySelector('.card-text').textContent,
                image: card.querySelector('img').src,
                price: card.querySelector('.card-text:nth-child(3)').textContent
            };
            cart.push(product);
            saveCart();
            showAlert();
        });
    });
    

    // FORM
    (function() {
        emailjs.init("LonyvePhRqBDUS19j"); 
    })();
    
    function sendEmail(e) {
        e.preventDefault();



        
        emailjs.sendForm('service_3ti7jqn', 'template_r86xavw', e.target)
            .then((result) => {
                alert('تم إرسال البيانات بنجاح!');
            }, (error) => {
                alert('حدث خطأ أثناء إرسال البيانات. الخطأ: ' + JSON.stringify(error));
            });
    }
    


