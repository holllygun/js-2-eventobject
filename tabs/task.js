let tabs = document.querySelectorAll(".tab")
let tabsArray = Array.from(tabs)
let contents = document.querySelectorAll(".tab__content")


tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        if (!tab.classList.contains("tab_active")) {
            tabs.forEach((t) => t.classList.remove("tab_active"));
            tab.classList.add("tab_active")
            contents.forEach((content) => {
                content.classList.remove("tab__content_active")
            })
            
            let index = tabsArray.indexOf(tab); 
            contents[index].classList.add("tab__content_active")}
    })
})


