
/* ===== FIX MENU v1.14.6 ===== */
(function(){
  if(window.__SIAP_MENU_FIX_1146__) return;
  window.__SIAP_MENU_FIX_1146__ = true;

  const drawer = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("menuBackdrop");
  const closeBtn = document.getElementById("menuCloseBtn");

  if(!drawer) return;

  const triggers = [
    document.getElementById("shellMenuV1151"),
    document.getElementById("desktopMenuButton"),
    document.getElementById("hamburger")
  ].filter(Boolean);

  function setExpanded(open){
    triggers.forEach(btn=>btn.setAttribute("aria-expanded", open ? "true" : "false"));
  }

  function openMenu(){
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden","false");

    if(backdrop){
      backdrop.classList.add("open","show");
      backdrop.setAttribute("aria-hidden","false");
    }

    document.body.classList.add("menu-open");
    setExpanded(true);

    window.setTimeout(()=>{
      if(closeBtn) closeBtn.focus();
    },80);
  }

  function closeMenu(){
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden","true");

    if(backdrop){
      backdrop.classList.remove("open","show");
      backdrop.setAttribute("aria-hidden","true");
    }

    document.body.classList.remove("menu-open");
    setExpanded(false);
  }

  function toggleMenu(){
    if(drawer.classList.contains("open")) closeMenu();
    else openMenu();
  }

  triggers.forEach(btn=>{
    btn.addEventListener("click",function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      toggleMenu();
    },true);
  });

  if(closeBtn){
    closeBtn.addEventListener("click",function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      closeMenu();
    },true);
  }

  if(backdrop){
    backdrop.addEventListener("click",function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      closeMenu();
    },true);
  }

  drawer.addEventListener("click",function(e){
    const item=e.target.closest(".drawer-item");
    if(item){
      window.setTimeout(closeMenu,60);
    }
  });

  document.addEventListener("keydown",function(e){
    if(e.key==="Escape") closeMenu();
  });

  closeMenu();
})();
/* ===== END FIX MENU v1.14.6 ===== */
