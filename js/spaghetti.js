


 // Dark Mode Functionality
        function toggleDarkMode() {
            const html = document.documentElement;
            const isDark = html.classList.contains('dark');
            
            if (isDark) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                updateThemeIcons('light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcons('dark');
            }
        }

        function updateThemeIcons(theme) {
            const sunIcons = document.querySelectorAll('.sun-icon, .sun-icon-mobile');
            const moonIcons = document.querySelectorAll('.moon-icon, .moon-icon-mobile');
            const themeTexts = document.querySelectorAll('.theme-text, .theme-text-mobile');
            
            if (theme === 'dark') {
                sunIcons.forEach(icon => icon.classList.remove('hidden'));
                moonIcons.forEach(icon => icon.classList.add('hidden'));
                themeTexts.forEach(text => text.textContent = 'Light');
            } else {
                sunIcons.forEach(icon => icon.classList.add('hidden'));
                moonIcons.forEach(icon => icon.classList.remove('hidden'));
                themeTexts.forEach(text => text.textContent = 'Dark');
            }
        }

        // Check for saved theme preference or respect OS preference
        function initTheme() {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                document.documentElement.classList.add('dark');
                updateThemeIcons('dark');
            } else {
                document.documentElement.classList.remove('dark');
                updateThemeIcons('light');
            }
        }

        // Initialize theme on page load
        document.addEventListener('DOMContentLoaded', initTheme);

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    document.documentElement.classList.add('dark');
                    updateThemeIcons('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    updateThemeIcons('light');
                }
            }
        });