const toggleSwitch = document.querySelector('#checkbox');
const logo = document.getElementById('dynamicLogo');
const modal = document.getElementById('language-modal');
const btnEn = document.getElementById('lang-en');
const btnPl = document.getElementById('lang-pl');

const translations = {
    pl: {
        "nav-home": "Strona Główna",
        "nav-info": "Informacje",
        "nav-works": "Dzieła",
        "hero-desc": "witaj, na mojej stronie internetowej",
        "social-title": "Social Media",
        "history-title": "Historia",
        "history-text": "Witam jestem monykPL mam 21lat nie śmiało publikuje swój głos i twarz na sociale może to się potem zmieni, moje hobby od dzieciaka było robić swoje gry na kartridże lub na dyskietki ale po kilku latach już wycofało się to i były płyty, strony, sklepy itp. ale marzenie dalej te same na youtube oglądałem dużo youtuberów i moje drugie marzenie jakby tamte nie udało się to zostać popularnym youtuberem i właśnie po kilku latach w 2019 wstawiłem swój pierwszy filmik który teraz jest prywatny i tamte konto usunięte bo zawierało moje imię w nazwie ale potem odkryłem że to zło i nie mogę tak robić bo ludzie będą znać moich rodziców kuzynów i tym podobne (itp.) miałem przerwę od tych sociali ale po długim trochę czasie powróciłem na youtube wstawiając mój pierwszy filmik na drugim kanale który powstał 4 czerwca 2023 roku jak dostałem po kliku dniach tysiąc wyświetleń pod nim bardzo byłem ucieszony bo nigdy takiej liczby nie widziałem za ten widziałem na youtube/tiktok ludzie robiące gameplay i nawet grałem w te gry porzuciłem nagrywanie przez to poszedłem na robienie gier/programowanie z początku robiłem w roblox na LUA uczyłem się poradników z youtube zbytnio nie umiałem po kilku nie udanych problemach udało się pierwszy kod trenowałem dalej i umiem do tej pory ale nie robię już na rolox gier przez ten surowy regulamin na temat publikowania więc przeniosłem się na jakieś inne silniki typu JavaScript, C#, CSS, HTML itp.",
        "works-title": "Dzieła",
        "barka-desc": "- Strona gdzie jest licznik do godziny 21:37 z czatem i trybem imprezowym gdzie czat się resetuje co godzinę a impreza podczas barki robi migające światło więc osoby z epilepsją nie odpalać tego oraz jak wybije ta godzina 21:37 tło zmienia się z szarego na żółte i leci konfetti po bokach ekranu a w tle leci barka remix wykop pl po tej piosence tło zmienia na szare z powrotem i znika konfetti robi następnego dnia jak wybije 21:37 to samo.",
        "melon-desc": "- Strona mojego własnego clienta minecraft MelonClient jest w fazie Beta ale da się korzystać z niego staram się go optymalizować najmocniej jak mogę żeby był najlepszym darmowym clientem pod FPS próbuje wyścignąć innych ale nie wiem czy mi się uda jeśli chcecie mnie wesprzeć możecie wejść na serwer discord który znajdzecie w zakładce \"Social Media\""
    },
    en: {
        "nav-home": "Home",
        "nav-info": "About",
        "nav-works": "Works",
        "hero-desc": "welcome to my website",
        "social-title": "Social Media",
        "history-title": "History",
        "history-text": "Hello, I am monykPL, I am 21 years old. I shyly publish my voice and face on social media, maybe that will change later. Since I was a kid, my hobby was making my own games for cartridges or floppies, but after a few years that phased out and there were CDs, websites, stores, etc., but the dream remains the same. I watched a lot of YouTubers on YouTube, and my second dream, if the first one didn't work out, was to become a popular YouTuber. And so, after a few years, in 2019, I posted my first video, which is now private, and that account was deleted because it contained my real name in the username. But then I discovered that it was bad and I shouldn't do that because people would know my parents, cousins, etc. I had a break from social media, but after a rather long time, I returned to YouTube, posting my first video on a second channel created on June 4, 2023. When I got a thousand views on it after a few days, I was very happy because I had never seen such a number before. Instead, I saw people making gameplays on YouTube/TikTok, and I even played those games. I gave up recording because of that and went into game making/programming. In the beginning, I worked in Roblox using LUA, learning from YouTube tutorials. I didn't really know how to do it, but after a few failed attempts and problems, I managed my first code. I kept practicing and I know how to do it to this day, but I don't make games on Roblox anymore due to their strict publishing regulations, so I moved to other engines/languages like JavaScript, C#, CSS, HTML, etc.",
        "works-title": "Works",
        "barka-desc": "- A website featuring a countdown to 21:37 with a chat and a party mode. The chat resets every hour, and the party during the 'Barka' song features flashing lights, so people with epilepsy should not launch it. When it hits 21:37, the background changes from gray to yellow, confetti flies on the sides of the screen, and the 'Barka remix wykop pl' plays in the background. After the song, the background turns back to gray, the confetti disappears, and the same happens the next day at 21:37.",
        "melon-desc": "- The website for my own Minecraft client, MelonClient. It is currently in Beta, but it is usable. I am trying to optimize it as much as possible to make it the best free client for FPS. I am trying to outrun others, but I don't know if I will succeed. If you want to support me, you can join the Discord server, which you can find in the 'Social Media' section."
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            elem.textContent = translations[lang][key];
        }
    });
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

btnEn.addEventListener('click', () => setLanguage('en'));
btnPl.addEventListener('click', () => setLanguage('pl'));

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme);

function updateLogoColor() {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 6) {
        logo.style.color = "#cccccc"; // Ciemny biały w nocy
    } else {
        logo.style.color = "#ffffff"; // Jasny biały w dzień
    }
}

updateLogoColor();
setInterval(updateLogoColor, 60000);
