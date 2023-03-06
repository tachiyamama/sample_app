// メニュー操作

// トグルリスナーを追加してクリックをリッスンする
function addToggleListener(select_id,menu_id,toggle_class)
{
    let hamburger = document.querySelector(`#${select_id}`);
    hamburger.addEventListener("click", function(event) {
        event.preventDefault();
        let menu = document.querySelector(`#${menu_id}`);
        menu.classList.toggle(`${toggle_class}`);
    });
}
document.addEventListener("turbo:load", function() {
    addToggleListener("hamburger","navbar-menu","collapse");
    addToggleListener("account","dropdown-menu","active");
});