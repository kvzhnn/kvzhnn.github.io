// 等待 DOM 內容完全載入後再執行
document.addEventListener('DOMContentLoaded', () => {

    // --- 效果 4: 頁首捲動淡出 ---
    const heroHeader = document.querySelector('.hero-header');

    // 只有在 heroHeader 存在時才執行
    if (heroHeader) {
        function handleHeaderFadeOut() {
            const scrollY = window.scrollY;
            
            // 設定淡出距離 (例如：捲動 500px 後完全淡出)
            const fadeOutDistance = 500; 

            if (scrollY < fadeOutDistance) {
                // 計算透明度，從 1 到 0
                const opacity = Math.max(0, 1 - (scrollY / fadeOutDistance));
                heroHeader.style.opacity = opacity;
            } else {
                // 捲動超過距離後，保持透明
                heroHeader.style.opacity = 0;
            }
        }

        // 監聽 window 的捲動事件，並執行 handleHeaderFadeOut 函式
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
                
                // entry.isIntersecting 會在 "進入" 和 "離開" 中線時都觸發
                // 我們只希望在 "進入" (即將翻轉) 時觸發一次
                // 檢查卡片是否還沒被翻轉
                if (entry.isIntersecting && !entry.target.classList.contains('is-flipped')) {
                    
                    entry.target.classList.add('is-flipped'); // 觸發翻轉
                    observer.unobserve(entry.target); // 翻轉後停止觀察
                }
            });
        }, {
            /* *** 關鍵修改 ***
             * rootMargin: '-50% 0px -50% 0px' 
             * 意思是將觀察區域(viewport)的頂部下縮50%、底部上縮50%
             * 這會創造一個 "高度為0" 的水平線在螢幕正中央
             */
            rootMargin: '-50% 0px -50% 0px',
            
            /* * threshold: 0.01 
             * 意思是只要卡片的 1% 碰到這條中線，就觸發
             */
            threshold: 0.01 
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