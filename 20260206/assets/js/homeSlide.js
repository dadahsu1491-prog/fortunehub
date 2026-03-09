// ===== Slider JS =====
let full = document.querySelector("main#home .full");
let x = 0;
const total = full.children.length;
const intervalTime = 2500;

// 更新 slider 函數
function updateSlider() {
full.style.transform = `translateX(-${x * 100}%)`;
}

// 點擊箭頭
document.getElementById("prev").addEventListener("click", () => {
    x--;
    if (x < 0) x = total - 1;
    updateSlider();
    resetInterval();
});

document.getElementById("next").addEventListener("click", () => {
    x++;
    if (x >= total) x = 0;
    updateSlider();
    resetInterval();
});

// 自動播放
let slideRun = setInterval(() => {
    if (x >= total) x = 0;
    updateSlider();
    x++;
}, intervalTime);

// 點擊箭頭後重置 interval
function resetInterval() {
    clearInterval(slideRun);
    slideRun = setInterval(() => {
        x++;
        if (x >= total) x = 0;
        updateSlider();
    }, intervalTime);
}

//YEAR 函數自動換年份
document.getElementById("year").textContent = new Date().getFullYear();