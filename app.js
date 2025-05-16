document.getElementById('campus-select').addEventListener('change', handleCampusChange);

const representatives = {
    "Dearborn": [
    { name: "Alan Matzelt", email: "alcmatzelt1@aol.com" },
    { name: "Alyse Derry", phone: "517-292-9183", email: "alysela.badie@gmail.com" },
    { name: "Alyson Zajac", email: "alysomething@msn.com" },
    { name: "Amra Kaliman", email: "amrakal5@sbcglobal.net" },
    { name: "Anissa Hackett", phone: "313-522-6696", email: "anissahackett@gmail.com" },
    { name: "Anna Capling", email: "annajosuma@ymail.com" },
    { name: "Becky Smola", phone: "734-693-3076", email: "rebeccasmola1984@gmail.com" },
    { name: "Bretton Buccilli", phone: "248-444-5431", email: "bretton.buccilli@gmail.com" },
    { name: "Erika Montgomery", email: "montgomery113@ymail.com" },
    { name: "Herb Lorentz", email: "jrsice2@gmail.com" },
    { name: "Jodie Osseili", email: "osseilij@yahoo.com" },
    { name: "Linda Powell", email: "landjp90@hotmail.com" },
    { name: "Makayla Burke", phone: "734-626-8701", email: "burkexoh@gmail.com" },
    { name: "Marissa Kobmann", email: "mkobmann1@yahoo.com" },
    { name: "Michelle Barnett", phone: "850-728-8746", email: "michelle.p.barnett@gmail.com" },
    { name: "Michella Vincent", phone: "313-585-1858", email: "michella.vincent@yahoo.com" },
    { name: "Renee Mowery", email: "remo1327@yahoo.com" },
    { name: "Sarah Brock", phone: "313-402-7109", email: "sarah.brock.612@gmail.com" },
    { name: "Sarah Phillips", email: "sarahphillips.m@gmail.com" }
  ],
  "Royal Oak": [
    { name: "Carol Sharp", shift: "Day", unit: "RN", phone: "248-729-3730", email: "Sharp48348@gmail.com" },
    { name: "Christine Baker", shift: "Night", unit: "RN", email: "chrstnpetri@yahoo.com" },
    { name: "Christine Young", shift: "Night", unit: "RN", email: "chrstnpetri@yahoo.com" },
    { name: "Claire Steffes", shift: "Day", unit: "RN", phone: "248-787-0171", email: "Claireniehaus@yahoo.com" },
    { name: "Elisse Beausoleil", shift: "Day", unit: "RN", phone: "248-320-8035", email: "elissea@gmail.com" },
    { name: "Emily Bogart", shift: "Day", unit: "NP", email: "embogart@gmail.com" },
    { name: "Emmy Castillon", shift: "Day", unit: "RN", email: "Emmylynncoronel@gmail.com" },
    { name: "Jacquelyn Whitmore", shift: "Day", unit: "RN", phone: "734-837-3291", email: "Jczarn01@outlook.com" },
    { name: "Jill Judkins", shift: "Day", unit: "RN", phone: "248-224-1494", email: "timjudkins@comcast.net" },
    { name: "Judie Laverdiere", unit: "RN", email: "Judie.laverdiere@gmail.com" },
    { name: "Judy Hayes", shift: "Day", unit: "RN", email: "Lucykayla2@yahoo.com" },
    { name: "Julie Hicks", phone: "248-840-0325", email: "Juliemhicks123@yahoo.com" },
    { name: "Kalisha Young", shift: "Night", unit: "RN", phone: "586-747-0107", email: "kyoung102989@gmail.com" },
    { name: "Katelyn Savage", shift: "Day", unit: "RN", phone: "586-819-9421", email: "Krsavage0@gmail.com" },
    { name: "Linda Plunkett", shift: "Day", unit: "RN", email: "Busyrnc28@gmail.com" },
    { name: "Lindsey Dye", shift: "Day", unit: "RN", email: "Linds9867@yahoo.com" },
    { name: "Lori Greenlee", shift: "Day", unit: "RN", phone: "586-651-1266", email: "lagreenlee71@gmail.com" },
    { name: "Michael Brown", shift: "Day", unit: "RN", email: "Michael.browning.rn@hotmail.com" },
    { name: "Michelle Dewilde", shift: "Day", unit: "RN", phone: "810-938-3138", email: "michelledewilde@yahoo.com" },
    { name: "Natalie Richmond", shift: "Day", unit: "RN", phone: "248-873-7373", email: "littlemissrichmond@gmail.com" },
    { name: "Rachael Patton", shift: "Day", unit: "RN", email: "Rachael.patton@icloud.com" },
    { name: "Rachel Szadyr", shift: "Day", unit: "RN", phone: "248-408-8946", email: "szadyrr@gmail.com" },
    { name: "Sarah Johnson", shift: "Day", unit: "RN", phone: "586-604-4432", email: "sarah.johnson7170@gmail.com"},
    { name: "Sargon Mikho", shift: "Day", unit: "RN", phone: "586-567-1995", email: "s.mikho@icloud.com" },
    { name: "Sharon McCombs", shift: "Night", unit: "RN", phone: "313-530-9195", email: "Smrn714@gmail.com" },
    { name: "Stephanie Leneway", shift: "Day", unit: "RN", phone: "248-854-4527", email: "Stephann3@mac.com" },
    { name: "Steven Darvill", shift: "Day", unit: "NP", phone: "248-709-6473", email: "stevendarvill88@gmail.com" },
    { name: "William Lootens", shift: "Night", unit: "RN", email: "billyonair@aol.com" },
    { name: "Yvonne Marchesseault", shift: "Day", unit: "RN", email: "Fifimarch@yahoo.com" },
    { name: "Zak Shugart", shift: "Day", unit: "RN", email: "Zak.shugart@gmail.com" },
  ],
  "Troy": [
    { name: "Amy Held", phone: "248-703-2246", email: "ymaheld@gmail.com" },
    { name: "Amy Holcomb", email: "amyholcomb1015@gmail.com" },
    { name: "Angela Oltean", email: "angela.emory44@yahoo.com" },
    { name: "Ashley Kraft", email: "ashbroski@gmail.com" },
    { name: "Barb Douglas", phone: "248-565-6594", email: "bdouglas78@icloud.com" },
    { name: "Brenda Tesnar", shift: "Night", phone: "248-895-5738", email: "Beetesnar71@gmail.com" },
    { name: "Christy Finn", phone: "586-855-1247", email: "cfinn1980@sbcglobal.net" },
    { name: "Devon Timmerman", email: "timmerman.nursing@gmail.com" },
    { name: "Donna Bazinski", email: "dmbazinski@yahoo.com" },
    { name: "Doreen Gwinn", email: "gwinns2000@gmail.com" },
    { name: "Eileen Blodgett", email: "eblodg312@icloud.com" },
    { name: "Eric Frazer", email: "Efrazer329@yahoo.com" },
    { name: "Ethan Tolentino", email: "will.tolentino@corewellhealth.org" },
    { name: "Jacob Allen", email: "acobgallen1992@gmail.com" },
    { name: "Jeff Hamm", email: "Lhamm4575@gmail.com" },
    { name: "Jennifer Trevino", email: "leperconos@yahoo.com" },
    { name: "Jessica Hendershot", email: "Hendershot.jessica@gmail.com" },
    { name: "JoAnna Sturm", email: "sturm1002@gmail.com" },
    { name: "Joanna Randall", email: "Jovi1125@gmail.com" },
    { name: "Joanne Highfield", email: "mrsbh@yahoo.com" },
    { name: "Julie Marshall", email: "Wyjamrn@sbcglobal.net" },
    { name: "Karen Shubring", email: "kschub60@gmail.com" },
    { name: "Katherine Wallace", phone: "248-404-8084", email: "gr8chi@aol.com" },
    { name: "Lisa Funke", email: "funkelisa80@yahoo.com" },
    { name: "Marley Shook", title: "Nurse Practitioner", phone: "586-567-3122", email: "marleyshook313@gmail.com" },
    { name: "Mary Kulha", email: "arykulha@hotmail.com" },
    { name: "Melinda (Mindy) Martone", email: "Amamabear3@gmail.com" },
    { name: "Sarah Stiegler", email: "sadie.stiegler@gmail.com" },
    { name: "Suzi Carbone", phone: "586-944-4520", email: "spcarbone3@gmail.com" },
    { name: "Vincent Tucker", email: "vincent.tucker@hotmail.com" },
    ],

  "Farmington Hills": [
    { name: "Amy Blunden", email: "anblunden@gmail.com" },
    { name: "Anita Dixon", email: "anitadixon6589@yahoo.com" },
    { name: "Bianca Sword", phone: "734-635-9997", email: "bbkubicki@gmail.com" },
    { name: "Chau Tran Yang", phone: "248-860-2434", email: "cmeyang@me.com" },
    { name: "Debbie Miracle", phone: "313-333-3296", email: "miraclefour@sbcglobal.net" },
    { name: "Erin Gossett", phone: "734-645-8278", email: "Nurseerin2012@yahoo.com" },
    { name: "Hanna Byrnes", email: "hannambyrnes@gmail.com" },
    { name: "Kate Oakford", email: "Koakford@gmail.com" },
    { name: "Kelly Kinney", email: "Kellybelle79@gmail.com" },
    { name: "Lisa Alvord", email: "Mommy42265@yahoo.com" },
    { name: "Liz Sergison", email: "lizsergison@yahoo.com" },
    { name: "Misty Croteau", phone: "734-658-0815", email: "mcroteau84@gmail.com" },
    { name: "Sarah Barker", phone: "586-610-4847", email: "lynnsarah812@gmail.com" }
  ],
  "Grosse Pointe": [
    { name: "Bill Braasch", email: "williambraasch@hotmail.com" },
    { name: "Giulia Heiden", phone: "586-443-3566", email: "giulia.calimazzo@gmail.com" },
    { name: "Holly Kowal", phone: "313-418-2405", email: "lonemirage02@gmail.com" },
    { name: "Jody Woodley", phone: "586-212-8398", email: "jlynnwoodley@yahoo.com" },
    { name: "Samantha Parisi", phone: "586-322-4085", title: "<em>Lenox Campus</em>", email: "samantharn92@gmail.com" },
    { name: "Stephanie Brooks", title: "<em>Lenox Campus</em>", email: "sbrooks827@yahoo.com" }
  ],
  "Wayne": [
    { name: "Amanda Layne", email: "alayne824@gmail.com" },
    { name: "Carol Goscinski", email: "carolgoscinskirn@gmail.com" },
    { name: "Danielle Caldwell", email: "daniellepiechota@gmail.com" },
    { name: "Heather Mauree Feathers", email: "hmandalis@yahoo.com" },
    { name: "Jason Frantangelo", phone: "734-624-8172", email: "tangelo411@gmail.com" },
    { name: "Lisa Rich", email: "l.rich3@yahoo.com" },
    { name: "Mandy O’Rourke", email: "morourke516@yahoo.com" },
    { name: "Natalie Lunsford", phone: "734-250-4073", email: "natrn91@wowway.com" },
    { name: "Tracy Barr", email: "morkielu@yahoo.com" },
  ],
  "Southfield": [
    { name: "Amy Pinneo", phone: "313-445-0710", email: "helmamy13@gmail.com" },
    { name: "Jana Nicol Weinert", email: "Jnb904@hotmail.com" },
    { name: "Katie Wilson", title: "Flex RN", phone: "313-400-6424", email: "kwilso65@emich.edu" },
    { name: "Lindsey Paulick", phone: "248-245-6273", email: "lindseypaulickRN@hotmail.com" },
    { name: "Meredith Corseti", phone: "248-376-7712", email: "millermeredith@hotmail.com" },
    { name: "Misty Gorman", email: "misty12472@yahoo.com" },
    { name: "Roseanne Ritzman", email: "ritzman1123@gmail.com" },
  ],
  "Taylor": [
    { name: "Allison Lorentz", phone: "734-718-5366", email: "jrsice1@gmail.com" },
    { name: "Brittany DeJohn", email: "brittanydejon610@gmail.com" },
    { name: "Heather Vorhoff", email: "Heather.vorhoff@yahoo.com" },
    { name: "Kate Seidel", email: "kwainman@aol.com" },
    { name: "Michelle Wood", title: "Nurse Practitioner", email: "mpwood.mpw@gmail.com" },
    { name: "Mike Gumbis", email: "Mlgumbis02@yahoo.com" },
    { name: "Nancy Sannno", email: "Nsanno1@yahoo.com" },
    { name: "Tavena Dysart", email: "Tavena_dysart@yahoo.com" },
  ],
  "Trenton": [
    { name: "Andrew Boucher", email: "atboucher@hotmail.com" },
    { name: "Cari York", phone: "313-300-3523", email: "Dougcupcake@sbcglobal.net" },
    { name: "Deborah Lyles", phone: "313-549-7249", email: "Deblyles21@yahoo.com" },
    { name: "Keli Wludyka", phone: "313-268-7768", email: "Kwludyka@wowway.com" },
    { name: "Kerri Donovan", phone: "734-925-1162", email: "Kerridonovan5@gmail.com" },
    { name: "Thomas Bellman", email: "tbellman411@hotmail.com" },
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
      ${rep.unit ? `<div class="unit-badge">${rep.unit}</div>` : ''}
      ${rep.shift === 'Day' ? `<div class="shift-badge" title="Day Shift"><span class="icon">☀️</span></div>` : ''}
      ${rep.shift === 'Night' ? `<div class="shift-badge" title="Night Shift"><span class="icon">🌙</span></div>` : ''}
      <div class="rep-name">
        <strong>${rep.name}</strong>
      </div>
      ${rep.title ? `<div class="rep-title">${rep.title}</div>` : ''}
      <div class="rep-buttons">
        ${rep.phone ? `
          <a href="tel:${rep.phone.replace(/-/g, '')}" class="phone-button">Call</a>
          <a href="sms:${rep.phone.replace(/-/g, '')}" class="text-button">Text</a>
        ` : ''}
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
