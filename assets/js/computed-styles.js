function getComputedDimensions() {
    document.querySelectorAll('[data-computed-style]').forEach((element) => {
        const prop = element.getAttribute('data-computed-style').split(', ');
        const name = element.getAttribute('data-computed-style-name');
        let target = element;
        prop.forEach((p) => {
            let value = window.getComputedStyle(element, null).getPropertyValue(p);
            if (element.hasAttribute('data-computed-style-root')) {
                target = document.documentElement;
            }
            if (element.hasAttribute('data-computed-style-unitless')) {
                value = parseInt(value);
            }
            target.style.setProperty(`--${name}-${p}`, value);
        });
    });
}

window.addEventListener('resize', () => {
    getComputedDimensions();
});

document.addEventListener('DOMContentLoaded', () => {
	getComputedDimensions();
});