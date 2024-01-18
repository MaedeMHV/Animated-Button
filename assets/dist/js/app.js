const btn = document.querySelector(".btn");
if (btn)
  btn.addEventListener("click", (e) => {
    const X = e.clientX;
    const Y = e.clientY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const PositionTop = Y - btnTop;
    const PositionLeft = X - btnLeft;

    const span = document.createElement("span");
    span.classList.add("effect");
    span.style.top = PositionTop + "px";
    span.style.left = PositionLeft + "px";
    btn.appendChild(span);

    setTimeout(() => span.remove(), 2000);
  });
