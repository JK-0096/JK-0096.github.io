/* ss_main.js — Structure Starter site scripts
   Uses unique function names (ss_ prefix) to avoid conflicts with existing main.js
*/

document.addEventListener('DOMContentLoaded', () => {
  // add class to body so our CSS targets only ss pages
  document.body.classList.add('ss-site');

  // wire up Easter egg button if present
  const egg = document.getElementById('ss-easter-btn');
  if (egg) {
    egg.addEventListener('click', ss_showEasterEgg);
  }

  // wire up loop demo button
  const loopBtn = document.getElementById('ss-loop-btn');
  if (loopBtn) loopBtn.addEventListener('click', ss_runLoopDemo);

  // wire up sample conditional tester
  const condBtn = document.getElementById('ss-cond-btn');
  if (condBtn) condBtn.addEventListener('click', ss_checkNumber);
});

/* Easter egg: show overlay with image; click overlay to remove */
function ss_showEasterEgg() {
  const overlay = document.createElement('div');
  overlay.className = 'easter-overlay';
  overlay.id = 'ss-easter-overlay';

  const img = document.createElement('img');
  img.src = '/ITIS3135/images/ss_giga.png'; // add this image to your images folder
  img.alt = 'Easter image';

  overlay.appendChild(img);
  overlay.addEventListener('click', () => overlay.remove());
  document.body.appendChild(overlay);
}

/* Loop demo: prints numbers 1..10 into element ss-loop-output */
function ss_runLoopDemo() {
  const out = document.getElementById('ss-loop-output');
  if (!out) return;
  out.textContent = ''; // clear
  for (let i = 1; i <= 10; i++) {
    const p = document.createElement('p');
    p.textContent = `Iteration ${i}`;
    out.appendChild(p);
  }
}

/* Conditional tester: reads #ss-cond-input, writes to #ss-cond-result */
function ss_checkNumber() {
  const input = document.getElementById('ss-cond-input');
  const result = document.getElementById('ss-cond-result');
  if (!input || !result) return;
  const val = Number(input.value);
  if (input.value.trim() === '' || Number.isNaN(val)) {
    result.textContent = 'Enter a valid number.';
    return;
  }
  if (val > 0) result.textContent = 'Result: positive';
  else if (val < 0) result.textContent = 'Result: negative';
  else result.textContent = 'Result: zero';
}
