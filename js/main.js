document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");
	const navBtn = document.querySelector(".navbar-toggler");
	const footerSpan = document.querySelector(".footer-year");
	const backToTopBtn = document.querySelector(".back-to-top-btn");

	function navShadowHandle() {
		if (window.scrollY >= 5) {
			nav.classList.add("nav-shadow-bg");
			backToTopBtn.classList.remove("hide");
		} else {
			nav.classList.remove("nav-shadow-bg");
			backToTopBtn.classList.add("hide");
		}
	}
	function navBtnClickShadowHandle() {
		if (!navBtn.classList.contains("collapsed")) {
			nav.classList.add("nav-shadow-bg");
		} else if (window.scrollY <= 5) {
			nav.classList.remove("nav-shadow-bg");
		}
	}
	function backToTopBtnHandle() {
		document.location.href = "#home";
	}
	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navList.classList.remove("show");
		})
	);
	function handleFooterYear() {
		const year = new Date().getFullYear();
		footerSpan.innerText = year;
	}
	handleFooterYear();
	window.addEventListener("scroll", navShadowHandle);
	navBtn.addEventListener("click", navBtnClickShadowHandle);
	backToTopBtn.addEventListener("click", backToTopBtnHandle);
});
