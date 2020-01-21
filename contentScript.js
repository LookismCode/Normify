let options;
chrome.storage.sync.get({
	on: false,
    name: 'Technology and Philosophy Forum',
    description: 'Technology.NET- Technology, Philosophy and Political Discussion',
    logoUrl: 'https://cdn0.iconfinder.com/data/icons/abstract-electronics/64/cloud_technology-512.png',
    smallLogoUrl: 'https://image.flaticon.com/icons/svg/2471/2471463.svg'
}, function(r){options=r});


document.addEventListener('DOMContentLoaded', event => {
	if (!options.on) {
		return
	}

	document.title = options.name;
	
	var header = document.querySelector("#header > div > div > div > a > img");
	header.src = options.logoUrl;
	header.alt = options.name;

	var description = document.querySelector("#top > div.p-body > div > div.p-body-header > div > a");
	description.innerHTML = options.description;
	var smallLogo = document.getElementsByClassName("p-nav-smallLogo");

	if(smallLogo){
		smallLogo[0].getElementsByTagName('img')[0].src = options.smallLogoUrl;
	}

	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = options.logoUrl;
	document.getElementsByTagName('head')[0].appendChild(link);

	document.getElementsByClassName("message-signature")

	for (let element of document.getElementsByClassName("message-signature")){
		element.style.display="none";
		element.parentNode.removeChild(element)	   
	}

	var spoiler1 = '<div class="bbCodeSpoiler"><button type="button" class="bbCodeSpoiler-button button" data-xf-click="toggle" data-xf-init="tooltip" data-original-title="Click to reveal or hide spoiler" id="js-XFUniqueId69"><span class="button-text"><span>Show</span></span></button><div class="bbCodeSpoiler-content" tabindex="-1"><div class="bbCodeBlock bbCodeBlock--spoiler"><div class="bbCodeBlock-content">';


	var spoiler1 = '<div class="bbCodeSpoiler"><button type="button" class="bbCodeSpoiler-button button" data-xf-click="toggle" data-xf-init="tooltip" data-original-title="Click to reveal or hide spoiler" id="';

	var spoiler2 = '"><span class="button-text"><span>Show</span></span></button><div class="bbCodeSpoiler-content" tabindex="-1"><div class="bbCodeBlock bbCodeBlock--spoiler"><div class="bbCodeBlock-content">';

	var spoiler3 = '</div></div></div></div>';

	var comments = document.getElementsByClassName('message-content'); 
	

	for (let i in comments) {
		try {
			var images =  comments[i].getElementsByTagName('img');
			for (let j in images) {
				try{
					if (images[j].classList.contains('normified')){
						continue
					} 
					images[j].classList.add('normified');
					var text = spoiler1 + "js-XFUniqueId" + i + j + spoiler2 + images[j].outerHTML + spoiler3;
					images[j].parentNode.insertAdjacentHTML("afterend", text);
					images[j].parentNode.removeChild(images[j])
				}
				catch(err){
					console.warn(err)
					continue
				}
			}

		}
		catch(err){continue}
	}
})
