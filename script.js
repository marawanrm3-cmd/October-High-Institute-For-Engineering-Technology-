<div class="lang-toggle" id="langToggle">
    <i class="fas fa-globe"></i>
    <span class="lang-text">عربي</span>
    <i class="fas fa-chevron-down lang-arrow"></i>
    <div class="lang-dropdown">
        <div class="lang-option active" data-lang="ar">
            <i class="fas fa-language"></i>
            <span>العربية</span>
        </div>
        <div class="lang-option" data-lang="en">
            <i class="fas fa-language"></i>
            <span>الإنجليزية</span>
        </div>
    </div>
</div>
function setLanguage(lang) {
    if (lang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.classList.add('lang-en');
        body.classList.remove('lang-ar');
        langText.textContent = 'English';
    } else {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        body.classList.add('lang-ar');
        body.classList.remove('lang-en');
        langText.textContent = 'عربي';
    }
    
    // تحديث النصوص في الصفحة
    updatePageTexts(lang);
    
    // حفظ تفضيل اللغة
    localStorage.setItem('preferredLanguage', lang);
}
function updatePageTexts(lang) {
    document.querySelectorAll('[data-ar][data-en]').forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-ar');
        }
    });
}