function buildLinkShare() {
	document.querySelectorAll('.js-share').forEach((elmt) => {
		let deviceId = document.querySelector('[name="device"]:checked').getAttribute('id');
		let deviceText = document.querySelector('[for="'+deviceId+'"]').innerText.toLowerCase().replaceAll(' ', '%20');
		let keys = elmt.closest('.js-command').querySelector('.js-keys').innerText.replace(/(\r\n|\n|\r)/gm, "").replaceAll('+', '%20%2B%20');
		elmt.setAttribute('href', elmt.getAttribute('data-href').replace('placeholder-device', deviceText).replace('placeholder-keys', keys).replace('placeholder-url', window.location.href));
	});
}

function toggleKeys(device) {
	document.querySelectorAll('.keys[data-device="'+device+'"]').forEach((keys) => {
		keys.style.display = '';
		keys.classList.add('js-keys');
	});
	
	document.querySelectorAll('.keys[data-device]:not([data-device="'+device+'"])').forEach((keys) => {
		keys.style.display = 'none';
		keys.classList.remove('js-keys');
	});
	
	buildLinkShare();
}

let device = localStorage.getItem('data-device');

if(device) {
	document.querySelector('[name="device"][value="'+device+'"]').checked = true;
	toggleKeys(device);
} 

document.querySelectorAll('[name="device"]').forEach((choice) => {
	choice.addEventListener('change', () => {
		localStorage.setItem("data-device", choice.value);
		toggleKeys(choice.value);
	});
});

buildLinkShare();