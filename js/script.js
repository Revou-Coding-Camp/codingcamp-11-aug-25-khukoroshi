// Smooth scroll
document.querySelectorAll('header nav a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id=a.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Live current time
function tickTime(){
  const now = new Date();
  const s = now.toLocaleString('en-GB', { hour12:false, timeZoneName:'short' });
  document.getElementById('timeNow').textContent = "Current time: " + s;
}
setInterval(tickTime, 1000); tickTime();

// Update hero title
function setHeroName(nama){
  const heroTitle = document.querySelector('.hero h1');
  if(nama){
    heroTitle.textContent = `Hi ${nama}, Welcome To Website`;
  } else {
    heroTitle.textContent = "Hi Harfi, Welcome To Website";
  }
}

// Popup logic
const popup = document.getElementById("namePopup");
const popupInput = document.getElementById("popupName");
const popupBtn = document.getElementById("popupBtn");

window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("userName");

  if(savedName){
    popup.style.display = "none"; // sembunyikan popup
    setHeroName(savedName);
  } else {
    popup.style.display = "flex"; // tampilkan popup
  }
});

popupBtn.addEventListener("click", () => {
  const nama = popupInput.value.trim();
  if(nama){
    localStorage.setItem("userName", nama);
    setHeroName(nama);
    popup.style.display = "none";
  } else {
    alert("Masukkan nama terlebih dahulu!");
  }
});



// Smooth scroll
document.querySelectorAll('header nav a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id=a.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Live current time
function tickTime(){
  const now = new Date();
  const s = now.toLocaleString('en-GB', { hour12:false, timeZoneName:'short' });
  document.getElementById('timeNow').textContent = "Current time: " + s;
}
setInterval(tickTime, 1000); tickTime();

// Update preview box
function updatePreview(){
  const nama = document.getElementById('nama').value.trim() || '–';
  const tgl  = document.getElementById('tgl').value || '–';
  const jk   = document.querySelector('input[name="jk"]:checked')?.value || '–';
  const pesan= document.getElementById('pesan').value.trim() || '–';

  document.getElementById('outNama').textContent = nama;
  document.getElementById('outTgl').textContent  = tgl ? new Date(tgl).toLocaleDateString('id-ID') : '–';
  document.getElementById('outJk').textContent   = jk;
  document.getElementById('outPesan').textContent= pesan;
}

// Auto preview as user types
['nama','tgl','pesan'].forEach(id=>{
  document.getElementById(id).addEventListener('input', updatePreview);
});
document.querySelectorAll('input[name="jk"]').forEach(r=>{
  r.addEventListener('change', updatePreview);
});
updatePreview();
