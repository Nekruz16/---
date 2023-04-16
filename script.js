// Получаем кнопки и блоки контента
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const content1 = document.getElementById("content-1");
const content2 = document.getElementById("content-2");
const content3 = document.getElementById("content-3");
const content4 = document.getElementById("content-4");

// Добавляем обработчик события клика на каждую кнопку
btn1.addEventListener("click", function() {
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
});

btn2.addEventListener("click", function() {
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  content4.style.display = "none";
});

btn3.addEventListener("click", function() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
  content4.style.display = "none";
});

btn4.addEventListener("click", function() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "block";
});
const copyButton = document.getElementById("copy-button");
const referralLink = document.getElementById("referral-link");

copyButton.addEventListener("click", function() {
  const range = document.createRange();
  range.selectNode(referralLink);
  window.getSelection().addRange(range);

  try {
    document.execCommand("copy");
    console.log("Скопировано в буфер обмена: " + referralLink.textContent);
  } catch (err) {
    console.log("Не удалось скопировать ссылку: ", err);
  }

  window.getSelection().removeAllRanges();
});
