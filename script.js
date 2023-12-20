document.getElementById('submit').addEventListener('click', function() {
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate) {
        const dateOfBirth = new Date(birthdate);
        const horoscope = getHoroscope(dateOfBirth);
        document.getElementById('result').textContent = 'Votre signe astrologique est : ' + horoscope;
    } else {
        document.getElementById('result').textContent = 'Veuillez entrer votre date de naissance.';
    }
});

function getHoroscope(dateOfBirth) {
    const zodiacSigns = {
        'Capricorne': new Date(dateOfBirth.getFullYear(), 0, 20),
        'Verseau': new Date(dateOfBirth.getFullYear(), 1, 19),
        'Poissons': new Date(dateOfBirth.getFullYear(), 2, 20),
        'Bélier': new Date(dateOfBirth.getFullYear(), 3, 20),
        'Taureau': new Date(dateOfBirth.getFullYear(), 4, 21),
        'Gémeaux': new Date(dateOfBirth.getFullYear(), 5, 21),
        'Cancer': new Date(dateOfBirth.getFullYear(), 6, 23),
        'Lion': new Date(dateOfBirth.getFullYear(), 7, 23),
        'Vierge': new Date(dateOfBirth.getFullYear(), 8, 23),
        'Balance': new Date(dateOfBirth.getFullYear(), 9, 23),
        'Scorpion': new Date(dateOfBirth.getFullYear(), 10, 22),
        'Sagittaire': new Date(dateOfBirth.getFullYear(), 11, 22)
    };

    let zodiac = '';

    // Determine the zodiac sign
    Object.keys(zodiacSigns).forEach(sign => {
        if (dateOfBirth < zodiacSigns[sign]) {
            if (!zodiac) zodiac = sign;
        }
    });

    // If the date is later than all zodiac signs, it is Capricorn
    return zodiac || 'Capricorne';
}

// Usage example:
const userBirthDate = new Date(1990, 2, 15); // 15 mars 1990
const userHoroscope = getHoroscope(userBirthDate);
console.log('Votre signe astrologique est :', userHoroscope);