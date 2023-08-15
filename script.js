//event
document.getElementById('login-btn').addEventListener('click', function () {
    //user email
    const userEmailElement = document.getElementById('input-email');
    const userEmail = userEmailElement.value;
    //user password
    const userPasswordElement = document.getElementById('input-pass');
    const userPassword = userPasswordElement.value;

    //login into the bank
    if (userEmail === 'budu@gmail.com' && userPassword === '12345') {
        window.location.href='index-2.html';
    } else (
        alert('toi password bhule gesos !! tore tejjo koyra dilam')
    )

});