
document.querySelectorAll('.copy').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const text = btn.parentElement.querySelector('p:last-child').innerText;
    navigator.clipboard.writeText(text);
    btn.innerText = "✓";
    setTimeout(() => btn.innerText = "📋", 1000);
  });
});
