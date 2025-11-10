// Configuration - Customize your links here
const config = {
    profileName: "Alqalam flex and Printing press",
    profileImage: "profile.jpeg", // Replace with your image path
    
    // Social Media Links
    socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://www.instagram.com/alqalamprintingagency?igsh=dnU0Z2s1d3c4bHZy",
        tiktok: "https://www.tiktok.com/@alqalamprintingagency?_r=1&_t=ZS-91HvhqILS5q",
        whatsapp: "https://wa.me/923036901089"
    },
    
    // Main Links
    links: [
        {
            id: "pdf-link",
            url: "https://example.com/your-pdf-file.pdf",
            text: "PDF",
            icon: "far fa-file-pdf",
            iconColor: "#dc2626"
        },
        {
            id: "rate-list",
            url: "https://example.com/rate-list",
            text: "Rate List",
            icon: "fas fa-list",
            iconColor: "#1f2937"
        },
        {
            id: "composing-card",
            url: "https://example.com/composing-card",
            text: "Composing All Card 2025-26",
            icon: "fas fa-file-image",
            iconColor: "#059669"
        },
        {
            id: "whatsapp-channel",
            url: "https://whatsapp.com/channel/your-channel",
            text: "Alqalam Wedding Cards | WhatsApp Channel",
            icon: "fab fa-whatsapp",
            iconColor: "#25d366"
        }
    ],
    
    // Analytics tracking
    enableAnalytics: true
};

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#fdcb6e', '#6c5ce7', '#a29bfe', '#fd79a8', '#e17055'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 5) + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.width = (Math.random() * 8 + 4) + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confettiContainer.appendChild(confetti);
    }
}

// Initialize Social Links
function initializeSocialLinks() {
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        const platform = Array.from(icon.classList).find(cls => config.socialLinks[cls]);
        if (platform) {
            icon.href = config.socialLinks[platform];
        }
    });
}

// PDF files in the same folder
const pdfFiles = [
    "Cards Fancy Yamin Yasin Wedding PDF 25+26_compressed.pdf",
    "Cards Simple Yamin Yasin Wedding PDF 25+26_compressed.pdf", 
    "Deal# 31 Full Room.pdf",
    "MUGHAL CARD 2024.pdf",
    "MUGHAL CARD BOOK 2024-1.pdf"
];

// Show PDF in embedded viewer
function showPdfViewer(pdfUrl, pdfTitle) {
    const viewerModal = document.getElementById('pdfViewerModal');
    const viewerTitle = document.getElementById('pdfViewerTitle');
    const viewer = document.getElementById('pdfViewer');
    
    viewerTitle.textContent = pdfTitle;
    viewer.src = pdfUrl;
    viewerModal.classList.add('active');
}

// Show PDF list modal
function showPdfModal() {
    const modal = document.getElementById('pdfModal');
    const pdfList = document.getElementById('pdfFileList');
    
    // Clear existing list
    pdfList.innerHTML = '';
    
    // Add PDF files to list
    pdfFiles.forEach(file => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = file;
        link.href = '#';
        link.className = 'pdf-link';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Close modal and show PDF in viewer
            modal.classList.remove('active');
            showPdfViewer(encodeURIComponent(file), file);
        });
        li.appendChild(link);
        pdfList.appendChild(li);
    });
    
    modal.classList.add('active');
}

// Initialize PDF viewer modal
function initializePdfViewerModal() {
    const viewerModal = document.getElementById('pdfViewerModal');
    const closeButton = document.getElementById('closePdfViewerModal');
    
    // Close viewer modal when clicking close button
    closeButton.addEventListener('click', () => {
        viewerModal.classList.remove('active');
        // Clear the iframe source to stop loading
        document.getElementById('pdfViewer').src = '';
    });
    
    // Close viewer modal when clicking outside
    viewerModal.addEventListener('click', (e) => {
        if (e.target === viewerModal) {
            viewerModal.classList.remove('active');
            // Clear the iframe source to stop loading
            document.getElementById('pdfViewer').src = '';
        }
    });
    
    // Close viewer modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && viewerModal.classList.contains('active')) {
            viewerModal.classList.remove('active');
            // Clear the iframe source to stop loading
            document.getElementById('pdfViewer').src = '';
        }
    });
}

// Initialize PDF modal functionality
function initializePdfModal() {
    const pdfButton = document.querySelector('[data-link="pdf-link"]');
    const modal = document.getElementById('pdfModal');
    const closeButton = document.getElementById('closePdfModal');
    
    // Handle PDF button click
    pdfButton.addEventListener('click', (e) => {
        e.preventDefault();
        showPdfModal();
        createRipple(e, pdfButton);
    });
    
    // Close modal when clicking close button
    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Initialize Main Links
function initializeLinks() {
    const linkButtons = document.querySelectorAll('.link-button');
    
    linkButtons.forEach((button, index) => {
        if (config.links[index]) {
            // Skip PDF link as it's handled separately
            if (config.links[index].id === 'pdf-link') {
                button.href = '#';
                button.querySelector('.link-text').textContent = config.links[index].text;
                return;
            }
            
            button.href = config.links[index].url;
            button.querySelector('.link-text').textContent = config.links[index].text;
            
            // Add click tracking
            button.addEventListener('click', (e) => {
                trackLinkClick(config.links[index].id, config.links[index].text);
                
                // Add ripple effect
                createRipple(e, button);
            });
        }
    });
}

// Create ripple effect on click
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation to styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Track link clicks (can be integrated with Google Analytics)
function trackLinkClick(linkId, linkText) {
    if (config.enableAnalytics) {
        console.log(`Link clicked: ${linkId} - ${linkText}`);
        
        // Example: Google Analytics tracking
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'click', {
        //         'event_category': 'Link',
        //         'event_label': linkText,
        //         'link_id': linkId
        //     });
        // }
        
        // You can also send to your own analytics endpoint
        // fetch('/api/track', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ linkId, linkText, timestamp: new Date().toISOString() })
        // });
    }
}

// Add hover effect to social icons
function addSocialIconEffects() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            // Track social media clicks
            const platform = icon.classList[1]; // Gets 'facebook', 'instagram', etc.
            console.log(`Social media clicked: ${platform}`);
        });
    });
}

// Smooth scroll reveal animation for links
function observeLinks() {
    const links = document.querySelectorAll('.link-button');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    links.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'all 0.5s ease';
        observer.observe(link);
    });
}

// Page view tracking
function trackPageView() {
    if (config.enableAnalytics) {
        console.log('Page viewed:', {
            url: window.location.href,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        });
        
        // Example: Send to analytics endpoint
        // fetch('/api/pageview', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         url: window.location.href,
        //         timestamp: new Date().toISOString(),
        //         referrer: document.referrer
        //     })
        // });
    }
}

// Copy link to clipboard functionality
function addCopyLinkFeature() {
    // Add copy button (optional feature)
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-link-button';
    copyButton.innerHTML = '<i class="fas fa-link"></i>';
    copyButton.title = 'Copy link';
    copyButton.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        width: 48px;
        height: 48px;
        background: white;
        border: none;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            copyButton.innerHTML = '<i class="fas fa-check"></i>';
            copyButton.style.background = '#10b981';
            copyButton.style.color = 'white';
            
            setTimeout(() => {
                copyButton.innerHTML = '<i class="fas fa-link"></i>';
                copyButton.style.background = 'white';
                copyButton.style.color = '#333';
            }, 2000);
        });
    });
    
    // Uncomment to enable copy link button
    // document.body.appendChild(copyButton);
}

// Mobile detection
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Add mobile-specific features
function initializeMobileFeatures() {
    if (isMobile()) {
        document.body.classList.add('mobile');
        // Add mobile-specific functionality here
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create confetti effect
    createConfetti();
    
    // Initialize all functionality
    initializeSocialLinks();
    initializeLinks();
    initializePdfModal();
    initializePdfViewerModal();
    addSocialIconEffects();
    observeLinks();
    addCopyLinkFeature();
    initializeMobileFeatures();
    
    // Track page view
    trackPageView();
    
    // Set profile name and image from config
    document.getElementById('profileName').textContent = config.profileName;
    document.getElementById('profileImage').src = config.profileImage;
    
    console.log(' clone initialized successfully!');
});

// Handle errors
window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.error);
});

// Service Worker registration (for PWA features - optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA features
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(reg => console.log('Service Worker registered'))
    //         .catch(err => console.log('Service Worker registration failed'));
    // });
}
