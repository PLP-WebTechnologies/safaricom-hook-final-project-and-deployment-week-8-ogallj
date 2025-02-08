document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const form = document.getElementById('contact-form');
        if (form) {
        form.addEventListener('submit', function(event) {
            let nameInput = document.getElementById('name')
            let emailInput = document.getElementById('email')
            if (!nameInput.value) {
                alert("Please enter your name.");
                event.preventDefault()
                return
            }
            if (!emailInput.value || !emailInput.value.includes('@')) {
                alert("Please enter a valid email address");
                event.preventDefault()
                return
            }
            alert("Message Sent");
        });
    }
// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
         localStorage.setItem('theme', currentMode);
         updateTheme()
    });
}
function updateTheme() {
const savedTheme = localStorage.getItem('theme')
  if (savedTheme == 'dark') {
       document.body.classList.add('dark-mode');
       themeToggle.textContent = '🔆'
     } else {
          document.body.classList.remove('dark-mode');
           themeToggle.textContent = '🌙'
      }
 }

updateTheme()
// Color picker
const colorPicker = document.getElementById('custom-color');
if (colorPicker) {
    colorPicker.addEventListener('input', (e) => {
        const colorValue = e.target.value;
        document.documentElement.style.setProperty('--accent-color', colorValue);
        localStorage.setItem('accent-color', colorValue);
   });
}
function updateColor() {
const savedColor = localStorage.getItem('accent-color')
if (savedColor) {
    document.documentElement.style.setProperty('--accent-color', savedColor);
  colorPicker.value = savedColor;
   }
}
 updateColor()
});