var loginClicked = 0;

function toggleSidebar() {   
	var sidebar = document.getElementById("mySidebar");    
	if(loginClicked == 1){
		sidebar.innerHTML = sidebar.innerHTML.replace('<a>Loans</a><a>Finance</a><a>Debt</a>', '');
		loginClicked--;
	}
	sidebar.style.display = (sidebar.style.display === "none" || sidebar.style.display === "") ? "block" : "none";
}

function closeSidebar() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
	document.getElementById("mySidebar").style.display = "none";
}

function loginClick() {
	window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
	var sidebar = document.getElementById("mySidebar");
	if (!sidebar.innerHTML.includes('Loans') && !sidebar.innerHTML.includes('Finance') && !sidebar.innerHTML.includes('Debt')) {
		sidebar.querySelector('a').insertAdjacentHTML('afterend', '<a>Loans</a><a>Finance</a><a>Debt</a>');
		loginClicked++;
	}
	sidebar.style.display = (sidebar.style.display === "none" || sidebar.style.display === "") ? "block" : "none";
}