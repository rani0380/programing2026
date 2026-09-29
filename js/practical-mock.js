(() => {
  'use strict';
  const exams = window.practicalMockExams;
  const storageKey = 'practical-mock-v1';
  const root = document.getElementById('mockApp');
  const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = (value, mode) => {
    const clean = String(value || '').trim().replace(/\s+/g, ' ');
    return mode === 'keyword' ? clean.toUpperCase() : clean;
  };
  let records = {};
  let storageAvailable = true;
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) records = stored;
  } catch (_) { storageAvailable = false; }
  let examIndex = -1;
  let questionIndex = 0;
  const exam = () => exams[examIndex];
  function state() {
    const id = exam().id;
    const old = records[id];
    if (!old || typeof old !== 'object' || !Array.isArray(old.answers)) records[id] = { answers: [], submitted: false };
    return records[id];
  }
  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify(records)); }
    catch (_) { storageAvailable = false; }
    document.getElementById('mockStorageNotice').hidden = storageAvailable;
  }
  function answerAt(index) { return typeof state().answers[index] === 'string' ? state().answers[index] : ''; }
  function isCorrect(index) {
    const question = exam().questions[index];
    if (!question.answers) {
      const mark = state().marks?.[index];
      return typeof mark === 'boolean' ? mark : null;
    }
    return question.answers.some(answer => normalize(answer, question.mode) === normalize(answerAt(index), question.mode));
  }
  function totals() {
    const answered = exam().questions.filter((_, index) => answerAt(index).trim()).length;
    const correct = exam().questions.filter((_, index) => isCorrect(index) === true).length;
    const pending = exam().questions.filter((_, index) => isCorrect(index) === null).length;
    return { answered, correct, pending, score: Math.round(correct / exam().questions.length * 100) };
  }
  function resultLabel() {
    const result = totals();
    return state().submitted ? `정답 ${result.correct} / ${exam().questions.length} · ${result.score}점${result.pending ? ` (임시) · 직접 채점 ${result.pending}문항 남음` : ' · 채점 완료'}` : `답안 작성 ${result.answered} / ${exam().questions.length}`;
  }
  const pageUrl = page => `../images/practical-mock/page-${page}.webp`;
  function originalPage(page, label, lazy = false) {
    return `<figure class="mock-original"><figcaption>${escapeHtml(label)} · PDF ${page}쪽 <a href="${pageUrl(page)}" target="_blank" rel="noopener">큰 이미지로 보기</a></figcaption><img src="${pageUrl(page)}" width="990" height="1530" alt="${escapeHtml(label)}: 첨부 PDF ${page}쪽 원문 스캔. 일부 가장자리 글자가 잘려 있을 수 있습니다." ${lazy ? 'loading="lazy"' : ''}></figure>`;
  }
  function setUrl(id) {
    const url = new URL(location.href);
    if (id) url.searchParams.set('exam', id); else url.searchParams.delete('exam');
    history.replaceState(null, '', url);
  }
  function renderList() {
    examIndex = -1; setUrl(null);
    root.innerHTML = `<div class="mock-intro"><h2 tabindex="-1" id="mockTitle">PDF 원문 모의고사 4회분</h2><p>1·2·4회는 각 12문항, 3회는 13문항으로 총 49문항입니다. 제출 후 원문 정답·해설을 확인하세요.</p><p>확인 가능한 단답형은 자동 채점합니다. SQL·결과표 등은 원문 해설을 보고 직접 채점합니다.</p></div><div class="mock-cards">${exams.map((item, index) => {
      const record = records[item.id];
      const submitted = record?.submitted === true;
      const answered = Array.isArray(record?.answers) ? item.questions.filter((_, i) => typeof record.answers[i] === 'string' && record.answers[i].trim()).length : 0;
      return `<section class="mock-card"><span class="practice-label">첨부 PDF 원문</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p><p class="mock-meta">${item.questions.length}문항 · 자동 ${item.questions.filter(q=>q.answers).length} / 직접 ${item.questions.filter(q=>!q.answers).length}문항 채점</p><p class="mock-state">${submitted ? '제출 완료 · 결과를 확인하세요' : answered ? `${answered}문항 작성 · 이어서 풀 수 있습니다` : '아직 시작하지 않았습니다'}</p><button class="practice-button primary" data-open="${index}">${submitted ? '결과 보기' : answered ? '이어서 풀기' : '시험 시작'}</button></section>`;
    }).join('')}</div><p class="source-note">${escapeHtml(window.practicalMockSource)}</p>`;
    document.getElementById('mockStorageNotice').hidden = storageAvailable;
  }
  function openExam(index) {
    examIndex = index; questionIndex = 0;
    state(); setUrl(exam().id); renderExam();
  }
  function renderExam() {
    const current = exam(); const record = state();
    root.innerHTML = `<div class="mock-toolbar"><button class="practice-button" data-action="list">회차 목록</button><span>${escapeHtml(current.title)} · ${current.questions.length}문항</span></div><div class="mock-workspace"><aside class="practice-sidebar"><h2>${escapeHtml(current.title)}</h2><p id="mockProgress" class="mock-progress" role="status">${resultLabel()}</p><div class="mock-numbers" id="mockNumbers" aria-label="문제 번호"></div><p class="practice-note">${record.submitted ? '초록: 정답 · 주황: 오답 · 노랑: 직접 채점 대기. 번호를 눌러 원문 해설과 비교하세요.' : '문제 번호를 눌러 이동할 수 있습니다. 작성한 답안은 자동 저장됩니다. 정답·해설은 제출 후 공개됩니다.'}</p>${record.submitted ? '<button class="practice-button" data-action="retry">이 회차 다시 풀기</button>' : '<div class="practice-actions"><button class="practice-button primary" data-action="submit">답안 제출·채점</button><button class="practice-button" data-action="retry">이 회차 다시 풀기</button></div>'}</aside><section class="practice-content mock-question" id="mockQuestion" tabindex="-1"></section></div><p class="source-note">${escapeHtml(window.practicalMockSource)} 문항별 동일 배점으로 정답 수를 100점으로 환산하고 반올림합니다. 직접 채점이 남아 있으면 임시 점수입니다. 부분 점수는 적용하지 않으며 공식 시험 배점과 다릅니다.</p>`;
    renderNumbers(); renderQuestion();
    document.getElementById('mockStorageNotice').hidden = storageAvailable;
  }
  function renderNumbers() {
    document.getElementById('mockNumbers').innerHTML = exam().questions.map((_, index) => {
      const status = state().submitted ? isCorrect(index) === null ? 'pending' : isCorrect(index) ? 'correct' : 'incorrect' : answerAt(index).trim() ? 'answered' : '';
      const label = {correct:'정답',incorrect:'오답 또는 미응답',pending:'직접 채점 대기',answered:'작성 완료'}[status] || '미작성';
      return `<button class="mock-number ${status}" data-question="${index}" aria-current="${index === questionIndex}" aria-label="${index+1}번 ${label}">${index+1}</button>`;
    }).join('');
  }
  function renderQuestion() {
    const question = exam().questions[questionIndex]; const submitted = state().submitted;
    const mark = isCorrect(questionIndex);
    const inputHelp = question.answers ? `${question.inputHint || '원문에서 요구하는 답을 입력하세요.'} ${question.mode === 'keyword' ? 'SQL 키워드 대소문자는 구분하지 않습니다.' : '대소문자를 구분합니다.'} 앞뒤 공백과 연속 공백·줄바꿈은 무시합니다.` : 'SQL문·결과표·여러 항목은 줄바꿈하여 작성하세요. 이 문항은 제출 후 원문 해설과 대조해 직접 채점합니다.';
    const review = submitted ? `<div class="answer-feedback ${mark === null ? '' : mark ? 'correct' : 'incorrect'}"><strong>${mark === null ? '원문 해설과 대조하여 직접 채점하세요.' : mark ? '정답입니다.' : '오답 또는 미응답입니다.'}</strong>${question.answers ? `<p>정답: <code>${escapeHtml(question.answers[0])}</code></p><p>아래 원문 해설에서 풀이 과정을 확인하세요.</p>` : `<p>원문이 잘려 판단할 수 없다면 ‘채점 보류’로 남겨 두세요.</p><div class="practice-actions"><button class="practice-button" data-mark="correct" aria-pressed="${mark === true}">정답으로 표시</button><button class="practice-button" data-mark="incorrect" aria-pressed="${mark === false}">오답으로 표시</button><button class="practice-button" data-mark="pending" aria-pressed="${mark === null}">채점 보류</button></div>`}</div><details class="mock-solutions"><summary>문제 ${questionIndex+1} 원문 정답·해설 보기 (${question.solutions.length}쪽)</summary>${question.solutions.map(page=>originalPage(page,`${exam().title} 정답·해설`,true)).join('')}</details>` : '';
    document.getElementById('mockQuestion').innerHTML = `<span class="question-count">문제 ${questionIndex+1} / ${exam().questions.length} · ${escapeHtml(question.category)} · ${question.answers ? '자동 채점' : '직접 채점'}</span><h2 id="questionTitle" tabindex="-1">원문에서 ${questionIndex+1}번 문제를 풀어 보세요.</h2><p class="answer-help">페이지의 표·코드·그림을 원문 그대로 표시합니다. 같은 쪽의 다른 문제도 함께 보일 수 있습니다.</p><div class="mock-reading">${originalPage(question.page,`${exam().title} 문제 원문`)}<div class="mock-answer-column"><label class="answer-label" for="mockAnswer">${submitted ? '제출한 답안' : '나의 답안'}</label><textarea class="answer-input" id="mockAnswer" aria-describedby="mockAnswerHelp" autocomplete="off" spellcheck="false" ${submitted ? 'readonly' : ''}>${escapeHtml(answerAt(questionIndex))}</textarea><p class="answer-help" id="mockAnswerHelp">${escapeHtml(inputHelp)}</p><div class="question-navigation"><button class="practice-button" data-action="previous" ${questionIndex === 0 ? 'disabled' : ''}>이전 문제</button>${questionIndex < exam().questions.length-1 ? '<button class="practice-button" data-action="next">다음 문제</button>' : submitted ? '<button class="practice-button" data-action="list">회차 목록</button>' : '<button class="practice-button primary" data-action="submit">답안 제출·채점</button>'}</div></div></div>${review}`;
  }
  root.addEventListener('input', event => {
    if (event.target.id !== 'mockAnswer' || state().submitted) return;
    state().answers[questionIndex] = event.target.value; save(); renderNumbers();
    document.getElementById('mockProgress').textContent = `답안 작성 ${totals().answered} / ${exam().questions.length}`;
  });
  root.addEventListener('click', event => {
    const button = event.target.closest('button'); if (!button) return;
    if (button.dataset.mark && state().submitted && !exam().questions[questionIndex].answers) {
      if (!state().marks || typeof state().marks !== 'object') state().marks = {};
      state().marks[questionIndex] = button.dataset.mark === 'pending' ? null : button.dataset.mark === 'correct';
      save(); renderNumbers(); renderQuestion();
      document.getElementById('mockProgress').textContent = resultLabel();
      document.querySelector(`[data-mark="${button.dataset.mark}"]`).focus(); return;
    }
    if (button.dataset.open !== undefined) { openExam(Number(button.dataset.open)); document.getElementById('questionTitle').focus(); return; }
    if (button.dataset.question !== undefined) { questionIndex = Number(button.dataset.question); renderNumbers(); renderQuestion(); document.getElementById('questionTitle').focus(); return; }
    const action = button.dataset.action;
    if (action === 'list') { renderList(); document.getElementById('mockTitle').focus(); return; }
    if (action === 'previous' || action === 'next') {
      questionIndex += action === 'previous' ? -1 : 1; renderNumbers(); renderQuestion(); document.getElementById('questionTitle').focus();
    }
    if (action === 'submit') {
      const remaining = exam().questions.length - totals().answered;
      if (!confirm(`${remaining ? `아직 ${remaining}문항을 작성하지 않았습니다. ` : ''}답안을 제출하고 채점할까요? 제출 후에는 답안을 수정할 수 없습니다.`)) return;
      state().submitted = true; save(); renderExam(); document.getElementById('mockProgress').setAttribute('role','status'); document.getElementById('mockQuestion').focus();
    }
    if (action === 'retry') {
      if (!confirm('이 회차의 답안과 결과를 지우고 다시 풀까요? 다른 회차와 개념 학습 기록은 유지됩니다.')) return;
      records[exam().id] = {answers: [], submitted: false}; questionIndex=0; save(); renderExam(); document.getElementById('questionTitle').focus();
    }
  });
  const requested = new URLSearchParams(location.search).get('exam');
  const index = exams.findIndex(item => item.id === requested);
  if (index >= 0) openExam(index); else renderList();
})();
