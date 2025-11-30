const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const msg = document.getElementById('msg');

function showMsg(text){
  msg.textContent = text;
  if(!text) return;
  setTimeout(() => { msg.textContent = ''; }, 2000);
}

function existingNames(){
  return Array.from(list.querySelectorAll('li span'))
    .map(li => li.textContent.trim().toLowerCase());
}

function addTask(){
  const raw = input.value.trim();
  if(!raw){ showMsg("Boş tapşırıq olmaz"); return; }

  const names = existingNames();
  if(names.includes(raw.toLowerCase())){
    showMsg("Bu task artıq var");
    return;
  }

  const li = document.createElement('li');

  const text = document.createElement('span');
  text.textContent = raw;

  text.addEventListener('click', ()=>{
    text.classList.toggle('completed');
  });

  li.addEventListener('dblclick', ()=>{
    li.remove();
    showMsg("Task silindi");
  });

  li.appendChild(text);
  list.appendChild(li);

  input.value = '';
  input.focus();
  showMsg("Task əlavə olundu");
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', e => { if(e.key === 'Enter') addTask(); });
