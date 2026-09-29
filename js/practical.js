(() => {
  'use strict';
  const lessons = window.practicalLessons;
  const storageKey = 'practical-study-v1';
  let saved = {};
  let storageAvailable = true;
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) saved = parsed;
  } catch (_) { storageAvailable = false; }
  const initialId = new URLSearchParams(location.search).get('lesson');
  let lessonIndex = Math.max(0, lessons.findIndex(l => l.id === initialId));
  let tab = 'concept';
  let questionIndex = 0;
  let stepCount = 1;
  const content = document.getElementById('practiceContent');
  const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = (value, mode) => {
    const clean = value.trim().replace(/\s+/g, ' ');
    return mode === 'keyword' ? clean.toUpperCase() : clean;
  };
  const key = () => `${lessons[lessonIndex].id}:${questionIndex}`;
  const entry = () => saved[key()] && typeof saved[key()] === 'object' ? saved[key()] : {};
  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify(saved)); }
    catch (_) { storageAvailable = false; }
    document.getElementById('storageNotice').hidden = storageAvailable;
  }
  function renderNavigation() {
    let total = 0;
    document.getElementById('lessonNav').innerHTML = lessons.map((lesson, index) => {
      const solved = lesson.questions.filter((_, q) => saved[`${lesson.id}:${q}`]?.correct === true).length;
      total += solved;
      return `<button type="button" data-lesson="${index}" aria-current="${index === lessonIndex}"><span class="lesson-number">${String(index+1).padStart(2,'0')}</span><span>${escapeHtml(lesson.title)}<small>${escapeHtml(lesson.category)} · 정답 ${solved}/${lesson.questions.length}</small></span></button>`;
    }).join('');
    document.getElementById('solvedCount').textContent = total;
    document.getElementById('totalCount').textContent = lessons.reduce((n,l) => n+l.questions.length,0);
    document.getElementById('storageNotice').hidden = storageAvailable;
  }
  function renderConcepts(lesson) {
    const sections = window.practicalConcepts[lesson.id];
    const toc = `<nav class="concept-toc" aria-label="단원 개념 목차"><strong>이 단원에서 배울 내용</strong>${sections.map((section, i) => `<a href="#concept-${lesson.id}-${i}">${i+1}. ${escapeHtml(section.title)}</a>`).join('')}</nav>`;
    return toc + sections.map((section, i) => `<section class="concept concept-detail" id="concept-${lesson.id}-${i}"><h3>${i+1}. ${escapeHtml(section.title)}</h3>${section.text ? `<p>${escapeHtml(section.text)}</p>` : ''}${section.rows ? `<div class="concept-table-wrap" role="region" aria-label="${escapeHtml(section.title)} 정리표" tabindex="0"><table class="concept-table"><caption>${escapeHtml(section.title)} 정리표</caption><thead><tr>${section.headers.map(h => `<th scope="col">${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${section.rows.map(row => `<tr>${row.map((cell, c) => c === 0 ? `<th scope="row">${escapeHtml(cell)}</th>` : `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}${section.code ? `<div class="concept-example"><h4>예제로 확인하기</h4><pre class="practice-code"><code>${escapeHtml(section.code)}</code></pre></div>` : ''}${section.tip ? `<aside class="concept-tip"><strong>꼭 확인하세요</strong><p>${escapeHtml(section.tip)}</p></aside>` : ''}</section>`).join('');
  }
  function render() {
    const lesson = lessons[lessonIndex];
    renderNavigation();
    document.getElementById('lessonCategory').textContent = `${String(lessonIndex+1).padStart(2,'0')} / ${String(lessons.length).padStart(2,'0')} · ${lesson.category}`;
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonGoal').textContent = lesson.goal;
    document.getElementById('sourceNote').textContent = `참고 주제: 첨부 수업 자료 ${lesson.source}. 개념 설명과 예제·연습문제는 수업용으로 새로 작성했습니다. 공식 기출문제나 공식 채점 기준이 아닙니다.`;
    document.querySelectorAll('[data-tab]').forEach(button => {
      const active = button.dataset.tab === tab;
      button.setAttribute('aria-selected', active);
      button.tabIndex = active ? 0 : -1;
    });
    content.setAttribute('aria-labelledby', `tab-${tab}`);
    if (tab === 'concept') {
      content.innerHTML = renderConcepts(lesson) + '<button class="practice-button primary" data-action="example">예제 따라가기</button>';
    } else if (tab === 'example') {
      content.innerHTML = `<h3>실행 흐름을 한 단계씩 따라가세요</h3><pre class="practice-code"><code>${escapeHtml(lesson.example.code)}</code></pre><ol class="trace-steps">${lesson.example.steps.slice(0, stepCount).map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol><p class="answer-help" aria-live="polite">${stepCount} / ${lesson.example.steps.length}단계</p><div class="practice-actions"><button class="practice-button" data-action="step" ${stepCount === lesson.example.steps.length ? 'disabled' : ''}>다음 단계</button><button class="practice-button" data-action="restart">처음부터 보기</button><button class="practice-button primary" data-action="practice">직접 연습하기</button></div>`;
    } else renderQuestion();
  }
  function renderQuestion() {
    const lesson = lessons[lessonIndex];
    const question = lesson.questions[questionIndex];
    const state = entry();
    const levels = ['1단계 · 개념 확인','2단계 · 적용 연습','3단계 · 응용 연습'];
    content.innerHTML = `<p class="question-count">${levels[questionIndex]} · ${questionIndex+1}/${lesson.questions.length}</p><h3>${escapeHtml(question.prompt)}</h3>${question.code ? `<pre class="practice-code"><code>${escapeHtml(question.code)}</code></pre>` : ''}<form id="answerForm"><label class="answer-label" for="answerInput">나의 답</label><textarea class="answer-input" id="answerInput" autocomplete="off" spellcheck="false" aria-describedby="answerHelp">${escapeHtml(state.answer || '')}</textarea><p class="answer-help" id="answerHelp">${question.mode === 'keyword' ? 'SQL 키워드는 대소문자를 구분하지 않습니다.' : '문자와 경로는 대소문자를 구분합니다.'} 앞뒤 공백과 연속된 공백·줄바꿈은 무시합니다.</p><div class="practice-actions"><button class="practice-button primary" type="submit">정답 확인</button><button class="practice-button" type="button" data-action="hint">힌트 보기</button><button class="practice-button" type="button" data-action="solution">정답·해설 보기</button></div></form><div id="answerFeedback" role="status" aria-live="polite">${state.correct ? '<div class="answer-feedback correct">직접 풀어 맞힌 문제입니다. 다시 연습할 수 있습니다.</div>' : ''}</div><div class="question-navigation"><button class="practice-button" data-action="previous" ${questionIndex === 0 ? 'disabled' : ''}>이전 문제</button><button class="practice-button" data-action="next">${questionIndex < lesson.questions.length-1 ? '다음 문제' : lessonIndex < lessons.length-1 ? '다음 단원' : '첫 단원으로'}</button></div>`;
  }
  function feedback(text, type = '') {
    document.getElementById('answerFeedback').innerHTML = `<div class="answer-feedback ${type}">${text}</div>`;
  }
  function switchTab(next) { tab = next; render(); }
  document.getElementById('lessonNav').addEventListener('click', event => {
    const button = event.target.closest('[data-lesson]');
    if (!button) return;
    lessonIndex = Number(button.dataset.lesson); questionIndex = 0; stepCount = 1; tab = 'concept';
    const url = new URL(location.href); url.searchParams.set('lesson', lessons[lessonIndex].id); history.replaceState(null, '', url);
    render();
    if (matchMedia('(max-width: 920px)').matches) document.getElementById('lessonPicker').open = false;
    document.getElementById('lessonTitle').focus();
  });
  document.querySelector('.practice-tabs').addEventListener('click', event => {
    const button = event.target.closest('[data-tab]');
    if (button) switchTab(button.dataset.tab);
  });
  document.querySelector('.practice-tabs').addEventListener('keydown', event => {
    const tabs = [...document.querySelectorAll('[data-tab]')];
    let index = tabs.indexOf(document.activeElement);
    if (index < 0 || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    index = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (index + (event.key === 'ArrowRight' ? 1 : 2)) % 3;
    switchTab(tabs[index].dataset.tab); tabs[index].focus();
  });
  content.addEventListener('input', event => {
    if (event.target.id !== 'answerInput') return;
    saved[key()] = {...entry(), answer: event.target.value}; save();
  });
  content.addEventListener('submit', event => {
    event.preventDefault();
    const question = lessons[lessonIndex].questions[questionIndex];
    const answer = document.getElementById('answerInput').value;
    if (!answer.trim()) { feedback('답을 입력한 뒤 확인해 주세요.'); return; }
    const correct = normalize(answer, question.mode) === normalize(question.answer, question.mode);
    saved[key()] = {...entry(), answer, correct: entry().correct === true || correct}; save(); renderNavigation();
    feedback(correct ? `<strong>정답입니다.</strong><br>${escapeHtml(question.explanation)}` : '다시 생각해 보세요. 힌트를 보거나 변수의 변화를 한 줄씩 적어 보세요.', correct ? 'correct' : 'incorrect');
  });
  content.addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    if (action === 'example' || action === 'practice') { switchTab(action); return; }
    if (action === 'step') { stepCount++; render(); return; }
    if (action === 'restart') { stepCount = 1; render(); return; }
    const lesson = lessons[lessonIndex]; const question = lesson.questions[questionIndex];
    if (action === 'hint') { feedback(`<strong>힌트</strong><br>${escapeHtml(question.hint)}`); return; }
    if (action === 'solution') { feedback(`<strong>정답: <code>${escapeHtml(question.answer)}</code></strong><br>${escapeHtml(question.explanation)}<br><small>해설 열람만으로 정답 수가 올라가지는 않습니다.</small>`); return; }
    if (action === 'previous') questionIndex--;
    if (action === 'next') {
      if (questionIndex < lesson.questions.length-1) questionIndex++;
      else { lessonIndex = (lessonIndex+1) % lessons.length; questionIndex=0; stepCount=1; tab='concept';
        const url = new URL(location.href); url.searchParams.set('lesson', lessons[lessonIndex].id); history.replaceState(null,'',url); }
    }
    render(); content.focus();
  });
  const picker = document.getElementById('lessonPicker');
  if (matchMedia('(max-width: 920px)').matches) picker.open = false;
  document.getElementById('resetPractice').addEventListener('click', () => {
    if (!confirm('이 브라우저의 실기 답안과 정답 기록을 모두 지울까요? 필기 오답노트는 유지됩니다.')) return;
    saved = {}; save(); render();
  });
  render();
})();
