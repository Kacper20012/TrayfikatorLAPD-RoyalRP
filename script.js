const data = [
  {
    kategoria: "Wykroczenia drogowe",
    emoji: "🚗",
    lista: [
      { nazwa: "Przekroczenie dozwolonej prędkości", grzywna: "500 - 1000", wiezienie: "Brak" },
      { nazwa: "Brawurowa jazda", grzywna: "1000 - 2000", wiezienie: "Brak", dodatkowe: "Konfiskata prawa jazdy" },
      { nazwa: "Jazda pod wpływem alkoholu/środków odurzających", grzywna: "1000 - 2000", wiezienie: "Brak", dodatkowe: "Konfiskata prawa jazdy" },
      { nazwa: "Przejazd na czerwonym świetle", grzywna: "500 - 1500", wiezienie: "Brak", },
      { nazwa: "Nawracanie pojazdu w miejscu niedostosowanym", grzywna: "800 - 1000", wiezienie: "Brak", },
      { nazwa: "Parkowanie w niedozwolonym miejscu", grzywna: "450 - 1000", wiezienie: "Brak", dodatkowe: "Upomnienie" },
      { nazwa: "Jazda pod prąd", grzywna: "850 - 1550", wiezienie: "Brak", },
      { nazwa: "Driftowanie w miejscu publicznym", grzywna: "1000 - 2000", wiezienie: "Brak", },
      { nazwa: "Poruszanie się uszkodzonym pojazdem", grzywna: "500 - 1000", wiezienie: "Brak", },
      { nazwa: "Stwarzanie zagrożenia w ruchu drogowym", grzywna: "1000 - 2000", wiezienie: "Brak", dodatkowe: "Konfiskata prawa jazdy" },
      { nazwa: "Niebezpieczne hamowanie", grzywna: "900 - 1300", wiezienie: "Brak", },
      { nazwa: "Spowodowanie kolizji", grzywna: "1200 - 1400", wiezienie: "Brak", },
      { nazwa: "Przechodzenie przez jezdnię w niedozwolonym miejscu", grzywna: "500 - 800", wiezienie: "Brak", },
    ]
  },
  {
    kategoria: "Przestępstwa lekkie",
    emoji: "🧯",
    lista: [
      { nazwa: "Potrącenie pieszego", grzywna: "1000 - 2500", wiezienie: "5-15 mies" },
      { nazwa: "Nieposiadaine zarejestrowanego p[ojazdu", grzywna: "1500 - 3000", wiezienie: "Brak" },
      { nazwa: "Nieposiadanie prawa jazdy", grzywna: "1500 - 3000", wiezienie: "Brak" },
      { nazwa: "Nieudzielenie pomocy", grzywna: "500 - 1200", wiezienie: "5-15 mies" },
      { nazwa: "Groźby karalne", grzywna: "750 - 1250", wiezienie: "8-15 mies" },
      { nazwa: "Obraza fukcjonariusza LAP/LASD/DOJ/AIAD", grzywna: "3000 - 5000", wiezienie: "Brak" },
      { nazwa: "Pobicie", grzywna: "500 - 1500", wiezienie: "5-15 mies" },
      { nazwa: "Prowokowanie służb publicznych", grzywna: "1500 - 3000", wiezienie: "Brak" },
      { nazwa: "Obnażanie się w miejscu publicznym", grzywna: "500 - 1000", wiezienie: "Brak" },
      { nazwa: "Noszenie maski w miejscu publicznym", grzywna: "500 - 1250", wiezienie: "Brak" },
      { nazwa: "Nieumyslne spowodowanie wypadku śmiertlenego", grzywna: "1000 - 2500", wiezienie: "5-20 mies" },
      { nazwa: "Kradzież pojazdu", grzywna: "1000 - 1250", wiezienie: "10-20 mies" },
      { nazwa: "Próba przekupstwa LAPD/LASD/DOJ/AIAD", grzywna: "3000 - 5000", wiezienie: "5-15 mies" },
      { nazwa: "Utrudnianie pracy służbom porządkowym", grzywna: "4000 - 5000", wiezienie: "Brak" },
      { nazwa: "Próba oszustwa funkcjonariusza LAPD/LASD/DOJ/AIAD", grzywna: "2500 - 5000", wiezienie: "5-10 mies" },
      { nazwa: "Ucieczka przed LAPD/LASD/DOJ/AIAD", grzywna: "1000 - 3000", wiezienie: "15-25 mies" },
      { nazwa: "Fałszywe wezwanie", grzywna: "2000 - 5000", wiezienie: "Brak" },
      { nazwa: "Mobilizacja LAPD/LASD/DOJ/AIAD", grzywna: "6100 - 8000", wiezienie: "Brak" },
      { nazwa: "Niszczenie Mienia publicznego", grzywna: "900 - 1800", wiezienie: "Brak" },
      { nazwa: "Niszczenia mienia prywatnego", grzywna: "800 - 1500", wiezienie: "Brak" },
      { nazwa: "Wtargnięcie na teren ograniczonego dostepu bez zezwolenia", grzywna: "1000 - 3000", wiezienie: "Brak" },
      { nazwa: "Pomoc w ucieczce", grzywna: "1000 - 2500", wiezienie: "5-15 mies" },
    ]
  },
  {
    kategoria: "Przestępstwa ciężkkie",
    emoji: "💣",
    lista: [
      { nazwa: "Póba zabójstwa funkcjonariusza LAPD/LASD/DOJ/AIAD", grzywna: "4000 - 5000", wiezienie: "10-25 mies", dodatkowe: "Konfiskata licencji na broń" },
      { nazwa: "Kradzież bankomatu", grzywna: "500 - 1500", wiezienie: "5-15 mies", dodatkowe: "Konfiskata licencji na broń, Konfiskata gotówki przy sobie" },
      { nazwa: "Zabójstwo obywatela", grzywna: "5000 - 10000", wiezienie: "50-100 mies", dodatkowe: "Kara śmierci/dożywocie" },
      { nazwa: "Zabójstwo funkcjonariusza LAPD/LASD/DOJ/AIAD", grzywna: "5000 - 10000", wiezienie: "50-100 mies", dodatkowe: "Kara śmierci/dożywocie" },
      { nazwa: "Porwanie", grzywna: "1500 - 3000", wiezienie: "15-25 mies", dodatkowe: "Konfiskata licencji na broń" },
      { nazwa: "Napad na bank", grzywna: "10000 - 20000", wiezienie: "15-35 mies", dodatkowe: "Konfiskata licencji na broń, Konfiskata gotówki przy sobie" },
      { nazwa: "Porwanie funkcjonariusza LAPD/LASD/DOJ/AIAD", grzywna: "4000 - 7000", wiezienie: "15-20 mies" },
      { nazwa: "Dowodzenie w grupie przestępczej", grzywna: "5000 - 15000", wiezienie: "50-100 mies" },
      { nazwa: "Napad na jubilera", grzywna: "7500 - 10000", wiezienie: "20-35 mies", dodatkowe: "Konfiskata licencji na broń, Konfiskata gotówki przy sobie" },
      { nazwa: "Przynależność do grupy przestępczej", grzywna: "5000 - 7500", wiezienie: "20-40 mies" },
      { nazwa: "Groźby bronią palną", grzywna: "5000 - 7000", wiezienie: "5-15 mies" },
      { nazwa: "Próba zabójstwa obywatela", grzywna: "3000 - 10000", wiezienie: "15-35 mies" },
      { nazwa: "Zdrada stanu", grzywna: "1000000 - 1000000", wiezienie: "99999 - 999999 mies", dodatkowe: "Rozprawa sądowa - Kara śmierci/dożywocie" },
      { nazwa: "Zamach terrorystyczny", grzywna: "75000 - 100000", wiezienie: "100-300 mies", dodatkowe: "Rozprawa sądowa" },
      { nazwa: "Napad na sklep", grzywna: "4000 - 7500", wiezienie: "10-20 mies", dodatkowe: "Konfiskata licencji na broń, Konfiskata gotówki przy sobie" },
      { nazwa: "Próba odbicia aresztowanego", grzywna: "5000 - 10000", wiezienie: "10-25 mies" },
      { nazwa: "Współudział w przestępstwie", grzywna: "5000 - 10000", wiezienie: "5-25 mies" },
      { nazwa: "Współdowodzenie w grupie przestępczej", grzywna: "5000 - 10000", wiezienie: "50-75 mies" },
    ]
  },
  {
    kategoria: "Przestępstwa kontrabanda/substancje",
    emoji: "💉",
    lista: [
    { nazwa: "Handel narkotykami twardymi", grzywna: "5000 - 7500", wiezienie: "15-35 mies", dodatkowe: "Konfiskata narkotyków, Rewizja" },
    { nazwa: "Posiadanie narkotyków miękkich", grzywna: "1200 - 2300", wiezienie: "10-35 mies", dodatkowe: "Konfiskata narkotyków, Rewizja" },
    { nazwa: "Wytwarzanie narkotyków miękkich", grzywna: "1800 - 5500", wiezienie: "5-45 mies", dodatkowe: "Konfiskata narkotyków, Rewizja" },
    { nazwa: "Wytwarzanie narkotyków twardych", grzywna: "2400 - 6500", wiezienie: "8-55 mies", dodatkowe: "Konfiskata narkotyków, Rewizja" },
    { nazwa: "Handel narkotykami miekkimi", grzywna: "1250 - 3250", wiezienie: "20-40 mies", dodatkowe: "Konfiskata narkotyków, Rewizja" },
    { nazwa: "Handel ludźmi", grzywna: "15000 - 45000", wiezienie: "75-150 mies", dodatkowe: "Rozprawa sądowa" },
    ]
  },
  {
    kategoria: "Przestępstwa związane z bronią",
    emoji: "🔫",
    lista: [
    { nazwa: "Posiadanie broni krótkiej nielegalnej", grzywna: "10000 - 12000", wiezienie: "15-35 mies", dodatkowe: "Konfiskata licencji na broń" },
    { nazwa: "Posiadanie broni krótkiej policyjnej", grzywna: "12000 - 19000", wiezienie: "20-25 mies", dodatkowe: "Konfiskata licencji na broń" },
    { nazwa: "Dystrybucja broni nielegalnej", grzywna: "17000 - 25000", wiezienie: "15-30 mies" },
    { nazwa: "Bezpodstawne użycie broni", grzywna: "800 - 2500", wiezienie: "5-10 mies", dodatkowe: "Konfiskata licencji na broń" },
    { nazwa: "Dystrybucja broni rejestrowanej", grzywna: "13000 - 25000", wiezienie: "15-30 mies", dodatkowe: "Konfiskata licencji na broń" },
    { nazwa: "Posiadanie broni bez licencji", grzywna: "10000 - 12000", wiezienie: "10-15 mies" },
    { nazwa: "Posiadanie broni długiej nielegalnej", grzywna: "10000 - 20000", wiezienie: "20-40 mies" },
  ]
  },

];

let selected = {};
let currentCategoryIndex = null;

const categoriesList = document.getElementById('categoriesList');
const cardsContainer = document.getElementById('cardsContainer');

function createCategoryButtons() {
  categoriesList.innerHTML = '';
  data.forEach((cat, ci) => {
    const el = document.createElement('div');
    el.className = 'category';
    el.innerHTML = `<div class="emoji">${cat.emoji}</div><div>${cat.kategoria}</div>`;
    el.addEventListener('click', () => {
      document.querySelectorAll('.category').forEach(n => n.classList.remove('active'));
      el.classList.add('active');
      currentCategoryIndex = ci;
      renderCards();
    });
    categoriesList.appendChild(el);
  });
}

function renderCards() {
  cardsContainer.innerHTML = '';
  if (currentCategoryIndex === null) return;
  const cat = data[currentCategoryIndex];
  cat.lista.forEach((p, pi) => {
    const id = `${currentCategoryIndex}-${pi}`;
    const card = document.createElement('div');
    card.className = 'card';

    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `<h4>${p.nazwa}</h4>
      <div class="counter">
        <button class="dec">−</button>
        <div class="count" id="count-${id}">0</div>
        <button class="inc">+</button>
      </div>`;

    const body = document.createElement('div');
    body.className = 'card-body';
    body.innerHTML =
      `<div class="row"><div class="muted">Grzywna:</div><div>$${p.grzywna}</div></div>
       <div class="row"><div class="muted">Więzienie:</div><div>${p.wiezienie || 'Brak'}</div></div>
       ${p.dodatkowe ? `<div class="extra">Dodatkowe kary: ${p.dodatkowe}</div>` : ''}`;

    header.querySelector('.inc').addEventListener('click', () => changeCount(id, +1));
    header.querySelector('.dec').addEventListener('click', () => changeCount(id, -1));

    card.appendChild(header);
    card.appendChild(body);
    cardsContainer.appendChild(card);
  });
}

function changeCount(id, delta) {
  const elCount = document.getElementById(`count-${id}`);
  let cur = parseInt(elCount.textContent, 10) || 0;
  cur = Math.max(0, cur + delta);
  elCount.textContent = cur;
  if (cur > 0) selected[id] = cur;
  else delete selected[id];
  updateTotals();
}

function parseMinFine(fineStr){
  if(!fineStr) return 0;
  const m = fineStr.match(/\d+/g);
  return m ? parseInt(m[0],10) : 0;
}

function parseMinMonths(monthStr){
  if(!monthStr) return 0;
  const m = monthStr.match(/\d+/g);
  return m ? parseInt(m[0],10) : 0;
}

function updateTotals() {
  let totalCount = 0, totalFine = 0, totalMonths = 0;

  Object.entries(selected).forEach(([id, cnt]) => {
    const [ci, pi] = id.split('-').map(Number);
    const item = data[ci].lista[pi];
    totalCount += cnt;
    totalFine += parseMinFine(item.grzywna) * cnt;
    totalMonths += parseMinMonths(item.wiezienie) * cnt;
  });

  document.getElementById('selCount').textContent = totalCount;
  document.getElementById('selFine').textContent = totalFine;
  document.getElementById('selTime').textContent = totalMonths + ' mies.';
  document.getElementById('totalCount').textContent = totalCount;
  document.getElementById('totalFine').textContent = totalFine;
  document.getElementById('totalMonths').textContent = totalMonths;
}

document.getElementById('btnClear').addEventListener('click', () => {
  document.querySelectorAll('[id^="count-"]').forEach(el=>el.textContent='0');
  for(const k in selected) delete selected[k];
  updateTotals();
});
document.getElementById('btnSummary').addEventListener('click', () => {
  alert(`Wybrane: ${document.getElementById('selCount').textContent}\nGrzywna: $${document.getElementById('selFine').textContent}\nWięzienie: ${document.getElementById('selTime').textContent}`);
});

document.getElementById('search').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    card.style.display = title.includes(q) ? '' : 'none';
  });
});

createCategoryButtons();
