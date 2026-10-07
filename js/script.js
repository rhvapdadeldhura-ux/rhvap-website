(function(){
  const root=document.documentElement;
  const toggle=document.getElementById("languageToggle");
  const saved=localStorage.getItem("rhvap-language")||"ne";

  function applyLanguage(lang){
    root.lang=lang;
    document.querySelectorAll("[data-ne][data-en]").forEach(el=>{
      el.textContent=el.dataset[lang];
    });
    if(toggle) toggle.textContent=lang==="ne"?"English":"नेपाली";
    localStorage.setItem("rhvap-language",lang);
  }

  if(toggle){
    toggle.addEventListener("click",()=>applyLanguage(root.lang==="ne"?"en":"ne"));
  }
  applyLanguage(saved);
})();