const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const successBtn = $(".btn.btn--success");
const errorBtn = $(".btn.btn--error");

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    const autoRemoveToast = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    toast.onclick = function (e) {
      if (e.target.closest(".toast__close-btn")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveToast);
      }
    };

    const icons = {
      success: "fa-solid fa-circle-check",
      info: "fa-solid fa-info-circle",
      error: "fa-solid fa-circle-exclamation",
    };
    const icon = icons[type];
    const duration_delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", `toast-${type}`);
    toast.style.animation = `slideFromLeftSide ease 0.5s, fadeOut linear 1s ${duration_delay}s forwards`;

    toast.innerHTML = `
        <div class="toast__icon">
            <i class=${icon}></i>
        </div>
        <div class="toast__body">
            <div class="title">${title}</div>
            <div class="content">${message}</div>
        </div>
        <div class="toast__close-btn">
            <i class="fa-solid fa-xmark"></i>
        </div>`;
    main.appendChild(toast);
  }
}

successBtn.onclick = function () {
  toast({
    title: "Success",
    message: "Bạn đã đăng ký thành công tại Quang Nguyễn",
    type: "success",
    duration: 3000,
  });
};

errorBtn.onclick = function () {
  toast({
    title: "Error",
    message: "Có lỗi, vui lòng liên hệ quản trị viên",
    type: "error",
    duration: 3000,
  });
};
