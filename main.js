const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const msg = document.getElementById('msg');

function showMsg(text){
  msg.textContent = text;
  if(!text) return;
  setTimeout(()=>{ msg.textContent = ''; }, 2200);
}

function existingNames(){
  return Array.from(list.querySelectorAll('li')).map(li=>li.textContent.trim().toLowerCase());
}

function addTask(){
  const raw = input.value || '';
  const name = raw.trim();
  if(!name){ showMsg('Boş vəzifə əlavə etmək olmaz'); return; }

  const names = existingNames();
  if(names.includes(name.toLowerCase())){ showMsg('Eyni addan artıq var'); return; }

  const li = document.createElement('li');
  li.textContent = name;

  li.addEventListener('dblclick', ()=>{
    li.remove();
    showMsg('User silindi');
  });

  list.appendChild(li);
  input.value = '';
  input.focus();
  showMsg('User Əlavə olundu');
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter'){ addTask(); } });
input.focus();