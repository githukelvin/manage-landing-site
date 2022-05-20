const PriNav= document.querySelector('.prinav');
const navToggle = document.querySelector('.ham');

navToggle.addEventListener('click', () =>{
	 const visibility =PriNav.getAttribute("data-visible");
     if(visibility === "false"){
        PriNav.setAttribute('data-visible', true); 
        navToggle.setAttribute("aria-expanded", true);
    }
    else if(visibility === "true"){
        PriNav.setAttribute('data-visible', false); 
        navToggle.setAttribute("aria-expanded", false);

    }



});