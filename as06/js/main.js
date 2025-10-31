// 等待 DOM 內容完全載入後再執行
document.addEventListener('DOMContentLoaded', () => {

    // --- 效果 4: 頁首捲動淡出 ---
    const heroHeader = document.querySelector('.hero-header');

    if (heroHeader) {
        function handleHeaderFadeOut() {
            const scrollY = window.scrollY;
            const fadeOutDistance = 500; 
            if (scrollY < fadeOutDistance) {
                const opacity = Math.max(0, 1 - (scrollY / fadeOutDistance));
                heroHeader.style.opacity = opacity;
            } else {
                heroHeader.style.opacity = 0;
            }
        }
        window.addEventListener('scroll', handleHeaderFadeOut);
    }

    
    /* ===========================================
    === 作業指定效果: Intersection Observers ===
    ===========================================
    */

    // --- 效果 1: 翻卡 (Flip Card) ---
    function initFlipCards() {
        const cards = document.querySelectorAll('.card');

        const cardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-flipped'); // 觸發翻轉
                    observer.unobserve(entry.target); // 翻轉後停止觀察
                }
            });
        }, {
            threshold: 0.9
        });

        cards.forEach(card => {
            cardObserver.observe(card);
        });
    }


    // --- 效果 2: Focus Mode ---
    function initFocusMode() {
        const panels = document.querySelectorAll('main#content > .panel');

        const focusObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('is-focused', entry.isIntersecting);
            });
        }, {
            root: null, 
            rootMargin: '-30% 0px -30% 0px', // "聚焦區域"：畫面中間 40%
            threshold: 0.01 
        });

        panels.forEach(panel => {
            focusObserver.observe(panel);
        });
    }


    // --- 效果 3: 文字畫底線 ---
    function initTextHighlight() {
        const spans = document.querySelectorAll('.bold, .highlight-text');

        const textObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible'); // 觸發底線動畫
                    observer.unobserve(entry.target); // 播放一次後停止觀察
                }
            });
        }, {
            threshold: 0.8 // 元素 80% 可見時觸發
        });

        spans.forEach(span => {
            textObserver.observe(span);
        });
    }

    // --- 啟動所有捲動動畫 ---
    initFlipCards();
    initFocusMode();
    initTextHighlight();

});