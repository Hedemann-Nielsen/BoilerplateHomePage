const modalLinks = document.getElementsByClassName('mbmenu');
        const modal = document.getElementById('menu');

        // Tilføj eventlytter til hvert link
        Array.from(modalLinks).forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Forhindrer standard linkadfærd (f.eks. navigation)
                modal.classList.remove("vis"); // Fjern "show"-klassen fra modalen
            });
        });

        //burgermenu ændres til X
        const bgMenu = document.getElementById('bg-wrapper')
        const bg1 = document.getElementById('linje1')
        const bg2 = document.getElementById('linje2')
        const bg3 = document.getElementById('linje3')

        bgMenu.addEventListener('click', () => {
            bg1.classList.toggle('bg1-active')
            bg2.classList.toggle('bg2-active')
            bg3.classList.toggle('bg3-active')
        })


        // Menuen vises
        const menu = document.getElementById('menu');
        // const openModal = document.querySelector('#openModal');
        // const closeModal = document.querySelector('#closeModal');

        openMenu.addEventListener('click', function () {
            menu.classList.toggle('vis')
            menu.classList.toggle('visikke')

        })

        window.addEventListener('click', (Event) => {
            if (Event.target.id === 'menu') {
                menu.classList.replace('vis', 'visIkke')
            }
        })