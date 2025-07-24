
let current = 1;
const total = 10;
function updateProgress() {
  const progress = document.getElementById('progress');
  const percent = ((current - 1) / total) * 100;
  progress.style.width = `${percent}%`;
}
function nextQuestion() {
  document.querySelector(`[data-id="${current}"]`).classList.remove('active');
  current++;
  updateProgress();
  document.querySelector(`[data-id="${current}"]`).classList.add('active');
}
function success() {
  document.querySelector(`[data-id="${current}"]`).classList.remove('active');
  updateProgress();
  document.getElementById('result-success').style.display = 'block';
}
function fail() {
  document.querySelector(`[data-id="${current}"]`).classList.remove('active');
  updateProgress();
  document.getElementById('result-fail').style.display = 'block';
}
function restartQuiz() {
  document.querySelectorAll('.kviz-question').forEach(q => q.classList.remove('active'));
  document.getElementById('result-success').style.display = 'none';
  document.getElementById('result-fail').style.display = 'none';
  current = 1;
  document.querySelector('[data-id="1"]').classList.add('active');
  updateProgress();
}
updateProgress();
