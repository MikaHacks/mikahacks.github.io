window.onload = (e) => {
    const loader = document.querySelector(".loader");
    loader.className += "hidden";

    //Theme toggle
    let darkmode = localStorage.getItem('darkmode');
    const enableDarkmode = () => {
        document.querySelectorAll('*').forEach((e) => {
            e.classList.add('darkmode')
        });

        localStorage.setItem('darkmode', 'enabled');
        document.getElementById('theme-toggle').innerHTML = 'Light';
    }

    const dissableDarkmode = () => {
        document.querySelectorAll('*').forEach((e) => {
            e.classList.remove('darkmode')
        });

        localStorage.setItem('darkmode', 'dissabled');
        document.getElementById('theme-toggle').innerHTML = 'Dark';
    }

    if (darkmode === 'enabled') {
        enableDarkmode();
    }

    document.getElementById('theme-toggle').addEventListener('click', function () {
        darkmode = localStorage.getItem('darkmode');
        if (darkmode !== 'enabled') {
            enableDarkmode();
        } else {
            dissableDarkmode();
        }
    })
}
