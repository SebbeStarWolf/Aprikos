
// Hämta alla input-fält och textarea
const inputs = document.querySelectorAll('.contactForm .inputBox input, .contactForm .inputBox textarea');

// Loopa igenom varje input-fält och textarea
inputs.forEach(input => {
    // Lyssna efter focus-event (när användaren klickar i fältet)
    input.addEventListener('focus', () => {
        // Om värdet i fältet är tomt
        if (input.value === '') {
            // Använd stil för fält med fokus eller giltigt värde
            input.nextElementSibling.style.color = '#e91e63';
            input.nextElementSibling.style.fontSize = '12px';
            input.nextElementSibling.style.transform = 'translateY(-20px)';
        }
    });

    // Lyssna efter input-event (när användaren skriver)
    input.addEventListener('input', () => {
        // Om värdet inte är tomt
        if (input.value !== '') {
            // Återgå till ursprunglig stil och gör texten osynlig
            input.nextElementSibling.style.color = 'transparent';
            input.nextElementSibling.style.fontSize = '16px';
            input.nextElementSibling.style.transform = 'translateY(0)';
        } else {
            // Om värdet är tomt
            // Använd stil för fält med fokus eller giltigt värde
            input.nextElementSibling.style.color = '#e91e63';
            input.nextElementSibling.style.fontSize = '12px';
            input.nextElementSibling.style.transform = 'translateY(-20px)';
        }
    });
});

