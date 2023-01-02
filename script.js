const biodata = {
    nama: "Tanvir Mahtab",
    umur: 17,
    email: "mtanvirmahtab354@gmail.com",
    hobi: [
        'Coding', 'Badminton', 'Main Game',
    ],
}

document.getElementById("nama").innerHTML = biodata.nama;
document.getElementById("umur").innerHTML = biodata.umur;
document.getElementById("email").innerHTML = biodata.email;

const hobbyElement = document.getElementById('hobby');

const hobbies = [];

for (hobi of biodata.hobi) {
    const elementHobi = `<li>${hobi}</li>`;
    hobbies.push(elementHobi);
}

hobbyElement.innerHTML = hobbies.join('');


