/* ==========================================
   GLOBAL SCRIPTS - Scrollytelling News Website
   ==========================================
   
   DO NOT MODIFY THIS FILE FOR PAGE-SPECIFIC LOGIC
   Create your own JS file (e.g., your-page.js) instead
   
   This file contains:
   - Hamburger Menu Toggle
   - Navigation Bar Scroll Visibility
   - Global Audio Toggle (if needed)
   ========================================== */

$(document).ready(function() {
    
    // ==================== HAMBURGER MENU TOGGLE ====================
    $('#hamburger').on('click', function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('#navMenu').toggleClass('active');
    });
    
    // ==================== NAVIGATION LINKS - SMOOTH SCROLL ====================
    $('.nav-link[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        
        // Close menu
        $('#hamburger').removeClass('active');
        $('#navMenu').removeClass('active');
        
        // Smooth scroll to section
        if (target && target !== '#') {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800, 'swing');
        }
    });
    
    // ==================== CLICK OUTSIDE TO CLOSE MENU ====================
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.navbar').length && !$(e.target).closest('.nav-menu').length) {
            $('#hamburger').removeClass('active');
            $('#navMenu').removeClass('active');
        }
    });
    
    // ==================== NAVBAR SCROLL VISIBILITY ====================
    /**
     * Shows navigation bar when user scrolls past the header
     * Adjust the selector based on your header structure
     */
    function toggleNavbarVisibility() {
        const header = $('#main-header'); // Change this ID if your header has a different ID
        const mainContent = $('main');
        
        if (header.length && mainContent.length) {
            const scrollTop = $(window).scrollTop();
            const mainContentTop = mainContent.offset().top;
            
            // Show navbar when scrolled past header (into main content)
            if (scrollTop >= mainContentTop - 10) {
                $('#navbar').addClass('visible');
            } else {
                $('#navbar').removeClass('visible');
            }
        }
    }
    
    // Initial check
    toggleNavbarVisibility();
    
    // Check on scroll
    $(window).on('scroll', toggleNavbarVisibility);
    
    
    // ==================== GLOBAL AUDIO TOGGLE (OPTIONAL) ====================
    /**
     * If your page uses audio/video elements and needs a global mute/unmute button
     * Uncomment and customize this section
     */
    /*
    let isGlobalMuted = true;
    
    $('#globalAudioToggle').on('click', function() {
        isGlobalMuted = !isGlobalMuted;
        
        // Update button appearance
        if (isGlobalMuted) {
            $(this).removeClass('muted');
            $(this).find('.audio-text').text('開啟聲音');
            // Add your volume-off SVG icon here
        } else {
            $(this).addClass('muted');
            $(this).find('.audio-text').text('聲音已開啟');
            // Add your volume-up SVG icon here
        }
        
        // Apply to all audio/video elements on the page
        $('audio, video').each(function() {
            this.muted = isGlobalMuted;
        });
        
        console.log(isGlobalMuted ? '🔇 Audio muted' : '🔊 Audio unmuted');
    });
    */
    
});


/* ==========================================
   EXAMPLE FUNCTIONS FROM MASTER DESIGN
   (For Reference Only - DO NOT USE)
   ========================================== */

/*
These functions are specific to the "Pumpkin Story" page
and should NOT be used in your sub-pages.

If you need similar functionality, implement it in your
page-specific JS file.

Examples:
- initFaceScrollEffect() - Complex scroll-triggered text animation
- initAudioPlayers() - NYT-style audio player with IntersectionObserver
- updateTextByScroll() - Character-by-character text reveal
... etc ...
*/
