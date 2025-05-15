document.getElementById('campus-select').addEventListener('change', handleCampusChange);

const representatives = {
  "Royal Oak": [
    { name: "Sarah Johnson", title: "RN, _____", phone: "586-604-4432", email: "sarah.johnson7170@gmail.com"},
    { name: "Sargon Mikho", title: "RN, progressive care", phone: "586-567-1995", email: "s.mikho@icloud.com" },
    { name: "Lori Greenlee", title: "RN, FBC", phone: "586-651-1266", email: "lagreenlee71@gmail.com" },
  ],
  "Troy": [
    { name: "Katherine Wallace", phone: "248-404-8084", email: "gr8chi@aol.com" },
    { name: "Suzi Carbone", phone: "586-944-4520", email: "spcarbone3@gmail.com" },
    { name: "Marley Shook, NP", phone: "586-567-3122", email: "Marleyshook313@gmail.com" }
  ],
  "Dearborn": [
    { name: "Alan Matzelt", email: "alcmatzelt1@aol.com" },
    { name: "Alyse Derry", email: "alysela.badie@gmail.com" },
    { name: "Alyson Zajac", email: "alysomething@msn.com" },
    { name: "Amra Kaliman", email: "amrakal5@sbcglobal.net" },
    { name: "Anissa Hackett", email: "anissahackett@gmail.com" },
    { name: "Anna Capling", email: "annajosuma@ymail.com" },
    { name: "Becky Smola", phone: "734-693-3076", email: "rebeccasmola1984@gmail.com" },
    { name: "Bretton Buccilli", email: "bretton.buccilli@gmail.com" },
    { name: "Erika Montgomery", email: "montgomery113@ymail.com" },
    { name: "Herb Lorentz", email: "jrsice2@gmail.com" },
    { name: "Jodie Osseili", email: "osseilij@yahoo.com" },
    { name: "Linda Powell", email: "landjp90@hotmail.com" },
    { name: "Makayla Burke", email: "burkexoh@gmail.com" },
    { name: "Marissa Kobmann", email: "mkobmann1@yahoo.com" },
    { name: "Melissa Barnett", email: "michelle.p.barnett@gmail.com" },
    { name: "Michella Vincent", phone: "313-585-1858", email: "michella.vincent@yahoo.com" },
    { name: "Renee Mowery", email: "remo1327@yahoo.com" },
    { name: "Sarah Brock", email: "sarah.brock.612@gmail.com" },
    { name: "Sarah Phillips", email: "sarahphillips.m@gmail.com" }
  ],
  "Farmington Hills": [
    { name: "Amy Blunden", email: "anblunden@gmail.com" },
    { name: "Anita Dixon", email: "anitadixon6589@yahoo.com" },
    { name: "Bianca Sword", email: "bbkubicki@gmail.com" },
    { name: "Chau Tran Yang", email: "cmeyang@me.com" },
    { name: "Debbie Miracle", phone: "313-333-3296", email: "miraclefour@sbcglobal.net" },
    { name: "Erin Gossett", email: "Nurseerin2012@yahoo.com" },
    { name: "Hanna Byrnes", email: "hannambyrnes@gmail.com" },
    { name: "Kate Oakford", email: "Koakford@gmail.com" },
    { name: "Kelly Kinney", email: "Kellybelle79@gmail.com" },
    { name: "Lisa Alvord", email: "Mommy42265@yahoo.com" },
    { name: "Liz Sergison", email: "lizsergison@yahoo.com" },
    { name: "Misty Croteau", phone: "734-658-0815", email: "mcroteau84@gmail.com" },
    { name: "Sarah Barker", email: "lynnsarah812@gmail.com" }
  ],
  "Grosse Pointe": [
    { name: "Holly Kowal", phone: "313-418-2405", email: "lonemirage02@gmail.com" },
    { name: "Jody Woodley", phone: "586-212-8398", email: "jlynnwoodley@yahoo.com" }
  ],
  "Wayne": [
    { name: "Natalie Lunsford", phone: "734-250-4073", email: "natrn91@wowway.com" }
  ],
  "Southfield": [
    { name: "Meredith Corseti", phone: "248-376-7712", email: "millermeredith@hotmail.com" },
    { name: "Katie Wilson (Flex RN)", phone: "313-400-6424", email: "kwilso65@emich.edu" }
  ],
  "Taylor": [
    { name: "Kimberly Pavlich", phone: "313-590-5276", email: "kimberly.ann15@ymail.com" },
    { name: "Allison Lorentz", phone: "734-718-5366", email: "jrsice1@gmail.com" }
  ],
  "Trenton": [
    { name: "Keli Wludyka", phone: "313-268-7768", email: "Kwludyka@wowway.com" },
    { name: "Kerri Donovan", phone: "734-925-1162", email: "Kerridonovan5@gmail.com" },
    { name: "Cari York", phone: "313-300-3523", email: "Dougcupcake@sbcglobal.net" },
    { name: "Deb Lyles", phone: "313-549-7249", email: "Deblyles21@yahoo.com" }
  ]
};

function handleCampusChange() {
  const campus = this.value;
  const campusName = document.getElementById('campus-name');
  const repInfo = document.getElementById('rep-info');
  const repName = document.getElementById('rep-name');

  if (campus && representatives[campus]) {
    campusName.textContent = campus;
    campusName.style.display = 'block';
    repInfo.style.display = 'block';

repName.innerHTML = representatives[campus]
  .map(rep => `
    <div class="rep-card">
      <div><strong>${rep.name}</strong></div>
      ${rep.title ? `<div class="rep-title">${rep.title}</div>` : ''}
      <div>
        ${rep.phone ? `<a href="tel:${rep.phone.replace(/-/g, '')}" class="phone-button">Call</a>` : ''}
        ${rep.email ? `<a href="mailto:${rep.email}" class="email-button">Email</a>` : ''}
      </div>
    </div>
  `)
  .join('');
  } else {
    campusName.style.display = 'none';
    repInfo.style.display = 'none';
  }
}
