const body= document.querySelector("body"),
     sidebar= body.querySelector(".sidebar"),
     toggle= body.querySelector(".toggle"),
     searchBtn= body.querySelector(".search-box"),
     modeSwitch= body.querySelector(".mode"),
     toggleSwitch= body.querySelector(".toggle-switch"),
     modeText= body.querySelector(".mode-text");


     toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("close");
     });

     modeSwitch.addEventListener("click",()=>{
        body.classList.toggle("dark");
        body.classList.contains("dark") ? modeText.innerText="Koyu" : modeText.innerText="Açık";
     });
    
    
    
    
