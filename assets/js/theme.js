// Inspired by https://www.section.io/engineering-education/adding-dark-theme-to-your-site

const prefersDark = matchMedia('(prefers-color-scheme: dark)');
let theme = localStorage.getItem('data-theme');

if(prefersDark.matches && (!theme || theme === 'null')) {
	changeTheme('dark');
} else {
	changeTheme(localStorage.getItem('data-theme'));
}

function changeTheme(theme) {
	document.documentElement.setAttribute("data-theme", theme);
	localStorage.setItem("data-theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
	if(prefersDark.matches && (!theme || theme === 'null')) {
		document.querySelector('[name="theme"][value="dark"]').checked = true;
	} else {
		document.querySelector('[name="theme"][value="'+theme+'"]').checked = true;
	}

	document.querySelectorAll('[name="theme"]').forEach((choice) => {
		choice.addEventListener('change', () => {
			changeTheme(choice.value);
		});
	});
});