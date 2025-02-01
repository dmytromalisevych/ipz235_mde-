let currentPage = 0;

const events = [
    {
        title: "Народження",
        text: "Я народився у чарівному місці, оточеному любов'ю та мріями. Вже тоді я відчував, що життя буде сповнене пригод!"
    },
    {
        title: "Ранні роки",
        text: "Дитинство — це безтурботні дні, коли світ здається нескінченним. Іграшки, перші друзі, незабутні літні канікули."
    },
    {
        title: "Шкільні роки",
        text: "У школі я відкрив для себе цікаві науки, творчість та... як швидко писати домашні завдання перед уроком 😄."
    },
    {
        title: "Студентство",
        text: "Найяскравіший період: нові знайомства, цікаві проекти, безсонні ночі перед іспитами, перші кроки в доросле життя."
    },
    {
        title: "Майбутнє",
        text: "Попереду ще багато цікавого! Життя — це книга, де кожна сторінка відкриває нові можливості та пригоди."
    }
];

function updatePage() {
    const contentDiv = document.getElementById("content");
    const pageNumber = document.getElementById("pageNumber");
    const totalPages = document.getElementById("totalPages");

    contentDiv.innerHTML = `<h2>${events[currentPage].title}</h2><p>${events[currentPage].text}</p>`;
    pageNumber.innerText = currentPage + 1;
    totalPages.innerText = events.length;
}

function nextPage() {
    if (currentPage < events.length - 1) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
}

updatePage();
