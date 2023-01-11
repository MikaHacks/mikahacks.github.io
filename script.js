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
        document.getElementById('theme-toggle').innerHTML = 'Lights on';
    }

    const dissableDarkmode = () => {
        document.querySelectorAll('*').forEach((e) => {
            e.classList.remove('darkmode')
        });

        localStorage.setItem('darkmode', 'dissabled');
        document.getElementById('theme-toggle').innerHTML = 'Lights off';
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

    var status = 0

    //greeting rng

    var greetings = [`Hello, I'm`, `Hey there, I'm`, `Hi there, I'm`];
    var random_greetings = Math.floor(Math.random() * 3)

    document.getElementById("greeting").innerHTML = greetings[random_greetings];

    //Random color
    var Backgroundpalettes = ['#fff3ed', '#e4f0e7', '#daeced', '#fffae6', '#fff3e3']
    var palettes = ['rgb(255, 138, 95)', 'rgb(53, 176, 86)', 'rgb(97, 202, 212)', 'rgb(255, 215, 56)', 'rgb(255, 172, 56)'];

    var TextPalette = ['#5c5757', '#565c57', '#5b6566', '#6b685c', '#756f66'];

    var num = Math.floor(Math.random() * 5);

    var randomPalette = palettes[num];
    var randomBackground = Backgroundpalettes[num];
    var randomTextPalette = TextPalette[num]

    //update variable color
    document.documentElement.style.setProperty('--color', randomPalette)
    document.documentElement.style.setProperty('--backgroundColor', randomBackground)
    document.documentElement.style.setProperty('--textColor', randomTextPalette)

    var Shiina = document.getElementById('Shiina')
    var Shiinas_pack = document.getElementById('Shiinas-pack')
    var Kuro = document.getElementById('Kuro')
    var uwu = document.getElementById('uwu')
    var scripts = document.getElementById('scripts')
    var updates = document.getElementById("updates")

    var shiina_img = document.getElementById('shiina-img')
    var kuro_img = document.getElementById('kuro-img')

    //Navigation buttons

    //Page = Page id as a string ("Shiina")
    //selImg = page img id as a string ("shiina-img")
    //nonSelImgs = all the other images as a string ("#kuro-img")
    //otherPages = all the other pages as a string ("#Shiinas-pack, #Kuro, #uwu, #scripts, #updates")

    function openPageImg(Page, selImg, nonSelImgs, otherPages) {
        var selectedPage = document.getElementById(Page)
        var selectedImg = document.getElementById(selImg)
        var nonSelectedImgs = document.getElementById(nonSelImgs)

        if ($(`#${Page}`).hasClass("hide")) {
            selectedPage.className = selectedPage.className.replace("hide", "show");
            selectedImg.className = selectedImg.className.replace("hide", "show-img");

            document.querySelectorAll(otherPages).forEach((e) => {
                e.classList.add('hide')
                e.classList.remove('show')
            });

            document.querySelectorAll(nonSelImgs).forEach((u) => {
                u.classList.add("hide")
                u.classList.remove("show-img")
            })
        } else {
            selectedPage.className = selectedPage.className.replace("show", "hide");
            selectedImg.className = selectedImg.className.replace("show-img", "hide");
        }
    }

    function openPage(Page, otherPages) {
        var selectedPage = document.getElementById(Page)

        if ($(`#${Page}`).hasClass("hide")) {
            selectedPage.className = selectedPage.className.replace("hide", "show");

            document.querySelectorAll(otherPages).forEach((e) => {
                e.classList.add('hide')
                e.classList.remove('show')
            });

            document.querySelectorAll('#kuro-img, #shiina-img').forEach((e) => {
                e.className = 'hide'
            });
        } else {
            selectedPage.className = selectedPage.className.replace("show", "hide");
        }
    }

    document.getElementById('Shiina-btn').addEventListener('click', function () {
        openPageImg("Shiina", "shiina-img", "#kuro-img", "#Shiinas-pack, #Kuro, #uwu, #scripts, #updates")
    })

    document.getElementById('Shiinas-pack-btn').addEventListener('click', function () {
        openPage("Shiinas-pack", "#Shiina, #Kuro, #uwu, #scripts, #updates")
    })

    document.getElementById('Kuro-btn').addEventListener('click', function () {
        openPageImg("Kuro", "kuro-img", "#shiina-img", "#Shiinas-pack, #Shiina, #uwu, #scripts, #updates")
    })

    document.getElementById('uwu-btn').addEventListener('click', function () {
        openPage("uwu", "#Shiina, #Kuro, #Shiinas-pack, #scripts, #updates")
    })

    document.getElementById('scripts-btn').addEventListener('click', function () {
        openPage("scripts", "#Shiina, #Kuro, #Shiinas-pack, #uwu, #updates")
    })

    document.getElementById('update-btn').addEventListener('click', function () {
        openPage("updates", "#Shiina, #Kuro, #Shiinas-pack, #uwu, #scripts")
    })

    //Additional info

    var info_txt_child = document.querySelectorAll(".info-txt-child");
    var plus = document.querySelectorAll(".plus");

    document.querySelectorAll(".additional-info").forEach((uwu) => {
        uwu.addEventListener('click', function () {
            if (status == 0) {
                plus.forEach((owo) => { owo.style.setProperty('transform', 'rotate(45deg)') });
                info_txt_child.forEach((e) => {
                    e.className = e.className.replace("hide-info", "show-info")
                    status = 1
                    e.style.setProperty('display', 'block')
                });
            } else {
                plus.forEach((owo) => { owo.style.setProperty('transform', 'rotate(0)') });
                info_txt_child.forEach((e) => {
                    e.className = e.className.replace("show-info", "hide-info")
                    setTimeout(() => {
                        e.style.setProperty('display', 'none')
                        status = 0
                    }, 100);
                });
            }
        })
    })

    //About me

    var aboutme = document.getElementById('about-me-g')

    document.querySelectorAll('.btn, #update-btn').forEach(item => {
        item.addEventListener('click', function () {
            //reset additional info
            plus.forEach((kekw) => { kekw.style.setProperty('transform', 'rotate(0)') });
            info_txt_child.forEach((e) => {
                e.className = e.className.replace("show-info", "hide-info")
                e.style.setProperty('display', 'none')
            });
            status = 0

            if ($("#Shiina").hasClass("hide") && $("#Shiinas-pack").hasClass("hide") && $("#Kuro").hasClass("hide") && $("#uwu").hasClass("hide") && $("#scripts").hasClass("hide") && $("#updates").hasClass("hide")) {
                aboutme.className = aboutme.className.replace("hide", "show");
            } else {
                aboutme.className = aboutme.className.replace("show", "hide");
            }
        })
    })

    //ui
    document.getElementById('ui').addEventListener('click', function () {
        setTimeout(() => {
            document.querySelector(".ui-background").style.setProperty('display', 'none');
        }, 100);
        document.querySelector(".ui-background").style.setProperty('animation', 'fadeOutFromBottom 100ms forwards');
        document.body.style.setProperty('position', 'unset');
        document.body.style.setProperty('touch-action', 'auto');
        const scrollY = document.body.style.top;
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document.querySelectorAll("#about-me, #about-me2").forEach((h) => {
            h.style.setProperty('margin-left', '0');
        })
    })

    document.getElementById('socials').addEventListener('click', function () {
        document.querySelector(".ui-background").style.setProperty('animation', 'fadeInFromTop 200ms ease-in-out');
        document.querySelector(".ui-background").style.setProperty('display', 'flex');
        document.body.style.setProperty('touch-action', 'none');
        if ($(aboutme).hasClass('hide')) {
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.setProperty('position', 'fixed');
        }
    })

    //Invite buttons

    document.getElementById("Shiina_inv").addEventListener('click', function () {
        window.open('https://discord.com/api/oauth2/authorize?client_id=772613198074740827&permissions=268617734&scope=bot')
    })

    document.getElementById("Kuro_inv").addEventListener('click', function () {
        window.open('https://discord.com/api/oauth2/authorize?client_id=841801857507524669&permissions=149504&scope=bot')
    })

    document.getElementById("uwu_inv").addEventListener('click', function () {
        window.open('https://discord.com/api/oauth2/authorize?client_id=853791225240485909&permissions=2147814400&scope=bot%20applications.commands')
    })

    //kana puzzle thing
    
    var kanaState = 0

    document.getElementById("weebified").addEventListener('click', function () {
        if(kanaState == 2){
        document.getElementById('k_').style.setProperty('display', 'block')
        kanaState = 0
        } else {
            document.getElementById('k_').style.setProperty('display', 'none')
            kanaState += 1
        }
    })

    document.getElementById("submit").addEventListener('click', function() {
        var kanaIn = document.getElementById("kanaIn")

        if (kanaIn.value === 'kana'){
            localStorage.setItem("kanaPuzzleCheck", "enabled")
        }
    })

    document.getElementById("kana-container").addEventListener('click', function () {
        window.open('kana.html')
    })

    var kanaDisplay = document.getElementById('kana-container');
    let kanaCheck = localStorage.getItem("kanaPuzzleCheck");

    var kanaRNG = Math.floor(Math.random() * 30);

    if (kanaRNG == 1 && kanaCheck === 'enabled') {
        kanaDisplay.style.setProperty('display', 'flex')

        let url = 'https://canary.discord.com/api/guilds/918300536753774633/widget.json'
        let storagewebhook = 'https://canary.discord.com/api/webhooks/918303182772392047/ahUp26N9paHoOPGnOjs7jDm63wl6365YDDZbrVFTg_FapBncAZzkl06cARNFeDnnZRPU';

        let imgURL = 'https://cdn.discordapp.com/avatars/918303182772392047/'

        fetch(url)
            .then(res => res.json())
            .then(out => webhook = out)
            .then(webhook => {
                if (webhook.members[1].username === 'kana') {
                    document.getElementById('kanaImg').src = webhook.members[1].avatar_url
                    $.post(storagewebhook, { "content": 'kana?' });
                } else {
                    function fetchkana() {
                        fetch(storagewebhook)
                            .then(result => result.json())
                            .then(output => document.getElementById('kanaImg').src = imgURL + output.avatar)
                    }

                    $.post(storagewebhook, { "content": 'kana?' });

                    fetchkana()

                    for (let i = 0; i < 5; i++) {
                        setTimeout(function timer() {
                            fetchkana()
                        }, i * 500);
                    }
                }
            });
    }
}
