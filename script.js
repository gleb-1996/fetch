// Реализация с помощью более современных интрументов, как async/await и fetch

$('form #login').click(function() {

    let username = $('#username').val();
    let password = $('#password').val();

    if (username === '' || password === '') {
        alert('Пожалуйста, введите данные.');
    } else {
        authenticationUser(username, password);
    }

});

async function authenticationUser(username, password) {

    let url = 'https://raw.githubusercontent.com/gleb-1996/test-db/mainxczcx/users.json';
    let coincidences = 0;
    let message;

    let response = await fetch(url);

    if (response.ok) {
        let users = await response.json();

        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === username && users[i].userPassword === password) {
                coincidences++;
                message = `Пользователь ${users[i].userName} успешно аутентифицирован.`;
                alert(message);
                document.location.href = 'lk.html';
            }
        }

        if (coincidences === 0) {
            message = `Пользователь ${username} не был аутентифицирован.`;
            alert(message);
        }
    } else {
        message = `Ошибка: ${response.status}`;
        alert(message);
    }

}
