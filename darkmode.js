let darkmode = localStorage.getItem('darkmode');
const Themeswitch = document.getElementById('theme-switch')

const enableDarkmode = () =>{
    document.body.classList.add('darkmode')
    localStorage.setItem ('darkmode', 'active')
}

const disableDarkmode = () =>{
    document.body.classList.remove('darkmode')
    localStorage.setItem ('darkmode', null)
}

if (darkmode === "active") enableDarkmode();

Themeswitch.addEventListener ("click",()=>{
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode () : disableDarkmode ();
})