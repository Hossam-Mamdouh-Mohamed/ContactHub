const filterButtons = document.querySelectorAll(".portfolio-filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            const category = item.dataset.category;

            if (filter === "all" || category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('[role="menuitem"]');
window.addEventListener('scroll', () => {

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(
        `a[href="#${currentSection}"]`
    );

    if (activeLink) {
        activeLink.classList.add('active');
    }

    if (window.scrollY > 200)
        document.getElementById('scroll-to-top').classList.remove('opacity-0', 'invisible');
    else
        document.getElementById('scroll-to-top').classList.add('opacity-0', 'invisible');
});


document.getElementById('scroll-to-top').addEventListener('click', function () {
    window.scrollTo(0, 0);
});


document.getElementById('settings-toggle').addEventListener('click', function () {

    const settingsSidebar = document.getElementById('settings-sidebar');

    if (settingsSidebar.classList.contains('translate-x-full')) {
        settingsSidebar.classList.remove('translate-x-full');
    }
    else {
        settingsSidebar.classList.add('translate-x-full');
    }
});

document.getElementById('close-settings').addEventListener('click', function () {
    document.getElementById('settings-sidebar').classList.add('translate-x-full');
});

const savedFont=localStorage.getItem('fontType');
if(savedFont){
    document.body.style.fontFamily =savedFont;
}

//font options
const fontOptions = document.querySelectorAll('.font-option');

fontOptions.forEach(font => {

    font.addEventListener('click', () => {
        const fontType = font.getAttribute('data-font');
        document.body.style.fontFamily = fontType;
        localStorage.setItem('fontType',fontType);
    });

});

//dark and light mode
document.getElementById('theme-toggle-button').addEventListener('click', function () {
    const htmltag = document.documentElement;

    if (htmltag.classList.contains('dark')) {
        htmltag.classList.remove('dark');
    }
    else {
        htmltag.classList.add('dark');
    }
});


// colors 
const themes = [
    {
        primary: "#3B82F6",
        secondary: "#2563EB",
        accent: "#DBEAFE"
    },

    {
        primary: "#10B981",
        secondary: "#059669",
        accent: "#D1FAE5"
    }, 

    {
        primary: "#EF4444",
        secondary: "#DC2626",
        accent: "#FEE2E2"
    }, 

    {
        primary: "#F59E0B",
        secondary: "#D97706",
        accent: "#FEF3C7"
    }, 
    {
        primary: "#8B5CF6",
        secondary: "#7C3AED",
        accent: "#EDE9FE"
    },

    {
        primary: "#EC4899",
        secondary: "#DB2777",
        accent: "#FCE7F3"
    }
];

const savedTheme = JSON.parse(localStorage.getItem("theme"));

if (savedTheme) {
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    document.documentElement.style.setProperty("--color-primary", theme.primary);
    document.documentElement.style.setProperty("--color-secondary", theme.secondary);
    document.documentElement.style.setProperty("--color-accent", theme.accent);
}

const colorsGrid = document.getElementById("theme-colors-grid");

themes.forEach(theme => {
    const button = document.createElement("button");

    button.className = "w-12 h-12 rounded-full";
    button.style.backgroundColor = theme.primary;

    button.addEventListener("click", () => {
        applyTheme(theme);
        localStorage.setItem("theme", JSON.stringify(theme));
    });

    colorsGrid.appendChild(button);
});

//reset button
document.getElementById('reset-settings').addEventListener('click',function(){
    localStorage.clear();
    window.location.href = window.location.href;
});
