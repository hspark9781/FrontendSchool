const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const dim = document.querySelector(".dim");
const focusableEl = modal.querySelectorAll("a, button, input");
const firstEl = focusableEl[0];
const lastEl = focusableEl[focusableEl.length - 1];


function openModal() {
    // console.log("모달열림");
    modal.classList.add("active");
    document.documentElement.style.overflow = "hidden";
    // firstEl.focus();
}

function closeModal() {
    // console.log("모달닫힘");
    modal.classList.remove("active");
    document.documentElement.style.overflow = "auto";
}

function handleTab(e) {
  // e.key : 누른 key 정보를 반환
  // console.log(e.key);

  // shift 키를 누른 정보를 boolean 값으로 반환
  // console.log(e.shiftKey);

  // activeElement : 현재 포커스를 받고 있는 요소 반환
    const activeEl = document.activeElement;
    if(e.key === "Tab") {
        if(e.shiftKey) {
            // tab + shift
            if(activeEl === firstEl) {
                e.preventDefault();
                lastEl.focus();
            }
        } else {
            // tab
            if(activeEl === lastEl) {
                e.preventDefault();
                firstEl.focus();
            }
        }
    }

}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
dim.addEventListener("click", closeModal);

firstEl.addEventListener("keydown", handleTab);
lastEl.addEventListener("keydown", handleTab);

window.addEventListener('keydown', (e) => {
    // modal.classList.contains('active') : active 클래스의 포함여부를 boolean 값으로 반환

    if (modal.classList.contains('active') && e.key === 'Escape') {
        closeModal();
    }
});
