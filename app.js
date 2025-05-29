document.getElementById('campus-select').addEventListener('change', handleCampusChange);

const representatives = {
    "Dearborn": [
    { name: "Alyse Derry", unit: "RN", phone: "517-292-9183", email: "alyselabadie@gmail.com" },
    { name: "Alyson Zajac", unit: "RN", email: "alysomething@msn.com" },
    { name: "Amra Kaliman", unit: "RN", phone: "313-408-3809", email: "amrakal5@sbcglobal.net" },
    { name: "Anissa Hackett", unit: "RN", phone: "313-522-6696", email: "anissahackett@gmail.com" },
    { name: "Anna Capling", unit: "RN", email: "Annajousma@ymail.com" },
    { name: "Becky Smola", unit: "RN", phone: "734-693-3076", email: "rebeccasmola1984@gmail.com" },
    { name: "Bretton Buccilli", unit: "RN", phone: "248-444-5431", email: "bretton.buccilli@gmail.com" },
    { name: "Erika Montgomery", unit: "RN", email: "montgomery113@ymail.com" },
    { name: "Herb Lorentz", unit: "RN", email: "jrsice2@gmail.com" },
    { name: "Jodie Osseili", unit: "RN", email: "osseilij@yahoo.com" },
    { name: "Linda Powell", unit: "RN", email: "landjp90@hotmail.com" },
    { name: "Makayla Madrigal", unit: "RN", phone: "734-626-8701", email: "burkeexoh@gmail.com" },
    { name: "Marissa Kobmann", unit: "RN", email: "mkobmann1@yahoo.com" },
    { name: "Melissa Bosman", unit: "RN", phone: "313-204-4800", email: "Melissasbosman@gmail.com" },
    { name: "Melissa Pace", unit: "RN", phone: "734-765-1278", email: "Sweetnurse9498@gmail.com" },
    { name: "Michelle Barnett", unit: "RN", phone: "850-728-8746", email: "michelle.p.barnett@gmail.com" },
    { name: "Michella Vincent", unit: "RN", phone: "313-585-1858", email: "michella.vincent@yahoo.com" },
    { name: "Renee Mowery", unit: "RN", phone: "313-415-6216", email: "remo1327@yahoo.com" },
    { name: "Sarah Brock", unit: "RN", phone: "313-402-7109", email: "sarah.brock.612@gmail.com" },
    { name: "Sarah Phillips", unit: "RN", email: "sarahphillips.m@gmail.com" }
  ],
  "Royal Oak": [
    { name: "Carol Sharp", shift: "Day", unit: "RN", phone: "248-729-3730", email: "SHARP48348@gmail.com" },
    { name: "Christine Berry", shift: "Day", unit: "RN", email: "chrstnpetri@yahoo.com" },
    { name: "Christine Young", shift: "Night", unit: "RN", email: "cryoungctr@gmail.com" },
    { name: "Claire Steffes", shift: "Day", unit: "RN", phone: "248-787-0171", email: "Claireniehaus@yahoo.com" },
    { name: "Elisse Beausoleil", shift: "Day", unit: "RN", phone: "248-320-8035", email: "elissea@gmail.com" },
    { name: "Emily Bogart", shift: "Day", unit: "NP", email: "embogart@gmail.com" },
    { name: "Emmy Castillon", shift: "Day", unit: "RN", email: "emmycastillon1@gmail.com" },
    { name: "Jacquelyn Whitmore", shift: "Day", unit: "RN", phone: "734-837-3291", email: "Jczarn01@outlook.com" },
    { name: "Jill Judkins", shift: "Day", unit: "RN", phone: "248-224-1494", email: "timjudkins@comcast.net" },
    { name: "John P. Denomy", shift: "Day", unit: "RN", email: "jpdenomy2@gmail.com" },
    { name: "Judie Laverdiere", shift: "Day", unit: "RN", phone: "248-761-4755", email: "Judie.laverdiere@gmail.com" },
    { name: "Judy Hayes", shift: "Day", unit: "RN", email: "Lucykayla2@yahoo.com" },
    { name: "Julie Hicks", shift: "Day", phone: "248-840-0325", unit: "RN", email: "Juliemhicks123@yahoo.com" },
    { name: "Kalisha Young", shift: "Night", unit: "RN", phone: "586-747-0107", email: "kyoung102989@gmail.com" },
    { name: "Katelyn Savage", shift: "Day", unit: "RN", phone: "586-819-9421", email: "Krsavage0@gmail.com" },
    { name: "Linda Plunkett", shift: "Day", unit: "RN", phone: "313-460-2474", email: "Busyrnc28@gmail.com" },
    { name: "Lindsey Dye", shift: "Day", unit: "RN", email: "Linds9867@yahoo.com" },
    { name: "Lori Greenlee", shift: "Day", unit: "RN", phone: "586-651-1266", email: "lagreenlee71@gmail.com" },
    { name: "Michael Browning", shift: "Day", unit: "RN", phone: "586-453-6755", email: "Michael.browning.rn@hotmail.com" },
    { name: "Michelle Dewilde", shift: "Day", unit: "RN", phone: "810-938-3138", email: "michelledewilde@yahoo.com" },
    { name: "Natalie Richmond", shift: "Day", unit: "RN", phone: "248-873-7373", email: "littlemissrichmond@gmail.com" },
    { name: "Rachael Patton", shift: "Day", unit: "RN", email: "Rachael.patton@icloud.com" },
    { name: "Rachel Szadyr", shift: "Day", unit: "RN", phone: "248-408-8946", email: "szadyrr@gmail.com" },
    { name: "Sarah Johnson", shift: "Day", unit: "RN", phone: "586-604-4432", email: "sarah.johnson7170@gmail.com"},
    { name: "Sarah Lawrey", shift: "Day", unit: "RN", email: "seep_law@hotmail.com"},
    { name: "Sargon Mikho", shift: "Day", unit: "RN", phone: "586-567-1995", email: "s.mikho@icloud.com" },
    { name: "Sharon McCombs", shift: "Night", unit: "RN", phone: "313-530-9195", email: "Smrn714@gmail.com" },
    { name: "Stephanie Leneway", shift: "Day", unit: "RN", phone: "248-854-4527", email: "Stephann3@mac.com" },
    { name: "Steven Darvill", shift: "Day", unit: "NP", phone: "248-709-6473", email: "stevendarvill88@gmail.com" },
    { name: "William Lootens", shift: "Mid", unit: "RN", phone: "586-306-1833", email: "billyonair@aol.com" },
    { name: "Yvonne Marchesseault", shift: "Day", unit: "RN", site: "Ambulatory", email: "Fifimarch@yahoo.com" },
    { name: "Zak Shugart", shift: "Day", unit: "RN", email: "Zak.shugart@gmail.com" },
  ],
  "Troy": [
    { name: "Amy Held", unit: "RN", phone: "248-703-2246", email: "ymaheld@gmail.com" },
    { name: "Amy Holcomb", unit: "RN", email: "amyholcomb1015@gmail.com" },
    { name: "Angela Oltean", unit: "RN", email: "angela.emory44@yahoo.com" },
    { name: "Ashley Kraft", unit: "RN", email: "ashhbroski@gmail.com" },
    { name: "Barb Douglas", unit: "RN", phone: "248-565-6594", email: "bdouglas2421@gmail.com" },
    { name: "Brenda Tesnar", unit: "RN", shift: "Night", phone: "248-895-5738", email: "beetesnar71@gmail.com" },
    { name: "Christy Finn", unit: "RN", shift: "Day", phone: "586-855-1247", email: "cfinn1980@sbcglobal.net" },
    { name: "Dana Ches Taylor", unit: "RN", email: "dches123@gmail.com" },
    { name: "Devon Timmerman", unit: "RN", phone: "586-651-7919", email: "timmerman.nursing@gmail.com" },
    { name: "Donna Bazinski", unit: "RN", phone: "248-330-5935", email: "dmbazinski@yahoo.com" },
    { name: "Doreen Gwinn", unit: "RN", email: "gwinns2000@gmail.com" },
    { name: "Eileen Blodgett", unit: "RN", email: "eblodg312@icloud.com" },
    { name: "Eric Frazer", unit: "RN", phone: "248-396-2968", email: "Efrazer329@yahoo.com" },
    { name: "Ethan Tolentino", unit: "RN", email: "ethantolentino98@gmail.com" },
    { name: "Hanna Byrnes", site: "Ambulatory", unit: "RN", email: "hannambyrnes@gmail.com" },
    { name: "Jacob Allen", unit: "RN", email: "jacobgallen1992@gmail.com" },
    { name: "Jeff Hamm", unit: "RN", email: "Lhamm4575@gmail.com" },
    { name: "Jennifer Trevino", unit: "RN", email: "leperconos@yahoo.com" },
    { name: "Jessica Hendershot", unit: "RN", email: "Hendershot.jessica@gmail.com" },
    { name: "JoAnna Sturm", unit: "RN", email: "jsturm1002@gmail.com" },
    { name: "Joanna Randall", unit: "RN", email: "Jovi1125@gmail.com" },
    { name: "Joanne Highfield", unit: "RN", email: "mrsbh78@yahoo.com" },
    { name: "Julie Marshall", unit: "RN", shift: "Day", email: "Wyjamrn@sbcglobal.net" },
    { name: "Karen Shubring", unit: "RN", email: "kschub60@gmail.com" },
    { name: "Katherine Wallace", unit: "RN", phone: "248-404-8084", email: "gr8chi@aol.com" },
    { name: "Lisa Funke", unit: "RN", email: "funkelisa80@yahoo.com" },
    { name: "Liz Rossi", unit: "RN", email: "ayalizzy@yahoo.com" },
    { name: "Marley Shook", unit: "NP", phone: "586-567-3122", email: "marleyshook313@gmail.com" },
    { name: "Mary Kulha", unit: "RN", email: "marykulha@hotmail.com" },
    { name: "Melinda (Mindy) Martone", unit: "RN", phone: "248-410-8845", email: "Amamabear3@gmail.com" },
    { name: "Sarah Stiegler", unit: "RN", email: "sadie.stiegler@gmail.com" },
    { name: "Suzi Carbone", unit: "RN", phone: "586-944-4520", email: "Suzi_carbone@hotmail.com" },
    { name: "Vincent Tucker", unit: "RN", email: "vincent.tucker@hotmail.com" },
    ],

  "Farmington Hills": [
    { name: "Amy Blunden", unit: "RN", shift: "Day", email: "anblunden@gmail.com" },
    { name: "Anita Dixon", unit: "RN", shift: "Night", phone: "734-271-5089", email: "anitadixon6589@yahoo.com" },
    { name: "Bianca Sword", unit: "RN", shift: "Day", phone: "734-635-9997", email: "bbkubicki@gmail.com" },
    { name: "Chau Tran Yang", unit: "RN", shift: "Day", phone: "248-860-2434", email: "cmeyang@me.com" },
    { name: "Debbie Miracle", unit: "RN", shift: "Day", phone: "313-333-3296", email: "miraclefour@sbcglobal.net" },
    { name: "Erin Gossett", unit: "RN", site: "Livonia", phone: "734-645-8278", email: "Nurseerin2012@yahoo.com" },
    { name: "Hanna Byrnes", site: "Ambulatory", unit: "RN", email: "hannambyrnes@gmail.com" },
    { name: "Kate Oakford", unit: "RN", phone: "248-797-0365", email: "Koakford@gmail.com" },
    { name: "Kelly Kinney", unit: "RN", email: "Kellybelle79@gmail.com" },
    { name: "Lisa Alvord", unit: "RN", email: "Mommy42265@yahoo.com" },
    { name: "Liz Sergison", unit: "RN", email: "lizsergison@yahoo.com" },
    { name: "Misty Croteau", unit: "RN", site: "Livonia", shift: "Day", phone: "734-658-0815", email: "mcroteau84@gmail.com" },
    { name: "Sarah Barker", unit: "RN", phone: "586-610-4847", email: "lynnsarah812@gmail.com" }
  ],
  "Grosse Pointe": [
    { name: "Ashley Roberts", unit: "RN", shift: "Day", site: "Lenox", phone: "248-416-2804", email: "aroberts317@gmail.com" },
    { name: "Bill Braasch", unit: "RN", shift: "Day", phone: "313-969-0510", email: "williambraasch@hotmail.com" },
    { name: "Giulia Heiden", unit: "RN", shift: "Day", phone: "586-443-3566", email: "giulia.calimazzo@gmail.com" },
    { name: "Holly Kowal", unit: "RN", shift: "Day", phone: "313-418-2405", email: "lonemirage02@gmail.com" },
    { name: "Jody Woodley", unit: "RN", shift: "Day", phone: "586-212-8398", email: "jlynnwoodley@yahoo.com" },
    { name: "Samantha Parisi", unit: "RN", shift: "Day", site: "Lenox", phone: "586-322-4085", email: "samantharn92@gmail.com" },
    { name: "Stephanie Brooks", unit: "RN", shift: "Day", site: "Lenox", phone: "586-747-3995", email: "sbrooks827@yahoo.com" }
  ],
  "Wayne": [
    { name: "Amanda Layne", unit: "RN", phone: "734-307-6027", shift: "Day", email: "alayne824@gmail.com" },
    { name: "Carol Goscinski", unit: "RN", phone: "517-212-0165", email: "carolgoscinskirn@gmail.com" },
    { name: "Danielle Caldwell", unit: "RN", phone: "313-930-1298", email: "daniellepiechota@gmail.com" },
    { name: "Heather Maurer Feathers", unit: "RN", email: "hmandalis@yahoo.com" },
    { name: "Jason Fratangelo", unit: "RN", shift: "Day", phone: "734-624-8172", email: "tangelo411@gmail.com" },
    { name: "Lisa Rich", unit: "RN", shift: "Day", phone: "734-612-4746", email: "l.rich3@yahoo.com" },
    { name: "Mandy O’Rourke", unit: "RN", phone: "313-460-2480", email: "morourke516@yahoo.com" },
    { name: "Natalie Lunsford", unit: "RN", shift: "Day", phone: "734-250-4073", email: "natrn91@wowway.com" },
    { name: "Tracy Barr", unit: "RN", email: "morkielu@yahoo.com" },
  ],
  "Southfield": [
    { name: "Amy Pinneo", shift: "Day", unit: "RN", phone: "313-445-0710", email: "helmamy13@gmail.com" },
    { name: "Hollie Clair", unit: "RN", phone: "734-286-4222", email: "Hclinne@gmail.com" },
    { name: "Jana Nicol Weinert", shift: "Day", unit: "RN", email: "Jnb904@hotmail.com" },
    { name: "Katie Wilson", shift: "Mid", unit: "RN", site: "Flex RN", phone: "313-400-6424", email: "kwilso65@emich.edu" },
    { name: "Lindsey Paulick", unit: "RN", phone: "248-245-6273", email: "lindseypaulickRN@hotmail.com" },
    { name: "Meredith Corsetti", shift: "Night", unit: "RN", phone: "248-376-7712", email: "millermeredith@hotmail.com" },
    { name: "Misty Gorman", shift: "Day", unit: "RN", email: "misty12472@yahoo.com" },
    { name: "Roseanne Ritzman", unit: "RN", email: "ritzman1123@gmail.com" },
  ],
  "Taylor": [
    { name: "Alison Lorentz", unit: "RN", shift: "Day", phone: "734-718-5366", email: "jrsice1@gmail.com" },
    { name: "Brittany DeJohn", unit: "RN", shift: "Day", phone: "313-694-8718", textOnly: true, email: "brittanydejon610@gmail.com" },
    { name: "Heather Vorhoff", unit: "RN", shift: "Day", phone: "734-747-2369", textOnly: true, email: "Heather.vorhoff@yahoo.com" },
    { name: "Kate Seidel", unit: "RN", shift: "Day", phone: "248-790-0982", textOnly: true, email: "kwainman@aol.com" },
    { name: "Michelle Wood", unit: "NP", email: "mpwood.mpw@gmail.com" },
    { name: "Mike Gumbis", unit: "RN", shift: "Night", phone: "734-752-0916", textOnly: true, email: "Mlgumbis02@yahoo.com" },
    { name: "Nancy Sannno", unit: "RN", shift: "Night", phone: "313-415-2664", textOnly: true, email: "Nsanno1@yahoo.com" },
    { name: "Tavena Dysart", unit: "RN", shift: "Day", phone: "313-457-4245", textOnly: true, email: "Tavena_dysart@yahoo.com" },
  ],
  "Trenton": [
    { name: "Andrew Boucher", unit: "RN", email: "atboucher@hotmail.com" },
    { name: "Cari York", unit: "RN", phone: "313-300-3523", email: "Dougcupcake@sbcglobal.net" },
    { name: "Deborah Lyles", unit: "RN", phone: "313-549-7249", email: "Deblyles21@yahoo.com" },
    { name: "Keli Wludyka", unit: "RN", phone: "313-268-7768", email: "Kwludyka@wowway.com" },
    { name: "Kerri Donovan", unit: "RN", phone: "734-925-1162", email: "Kerridonovan5@gmail.com" },
    { name: "Thomas Bellman", unit: "RN", phone: "734-497-7169", email: "tbellman411@hotmail.com" },
  ]
};

// ======== CAMPUS SELECT LOGIC ========
function handleCampusChange() {
  const campus = this.value;
  const campusName = document.getElementById('campus-name');
  const campusHeader = document.getElementById('campus-header');
  const repInfo = document.getElementById('rep-info');
  const repName = document.getElementById('rep-name');

  if (campus && representatives[campus]) {
    campusName.textContent = campus;
    campusHeader.style.display = 'flex';
    repInfo.style.display = 'block';

    repName.innerHTML = representatives[campus]
      .map(rep => `
        <div class="rep-card">
          <div class="unit-badge-wrapper">
            ${rep.unit ? `
              <div class="unit-badge ${rep.unit.toUpperCase() === 'NP' ? 'unit-np' : 'unit-rn'}">
                ${rep.unit.toUpperCase()}
              </div>
            ` : ''}
            ${rep.site ? `
              <div class="rep-site">${rep.site}</div>
            ` : ''}
          </div>

          ${rep.shift === 'Day' ? `
            <div class="shift-badge" title="Day Shift"><span class="icon">☀️</span></div>
          ` : ''}
          ${rep.shift === 'Night' ? `
            <div class="shift-badge" title="Night Shift"><span class="icon">🌙</span></div>
          ` : ''}
          ${rep.shift === 'Mid' ? `
            <div class="shift-badge" title="Mid Shift"><span class="icon">☀️🌙</span></div>
          ` : ''}

          <div class="rep-name">
            <strong>${rep.name}</strong>
          </div>

          ${rep.title ? `<div class="rep-title">${rep.title}</div>` : ''}

          <div class="rep-buttons">
  ${(rep.phone && !rep.textOnly) ? `
    <a href="tel:${rep.phone.replace(/-/g, '')}" class="phone-button">Call</a>
  ` : ''}
  ${(rep.phone || rep.textOnly) ? `
    <a href="sms:${rep.phone ? rep.phone.replace(/-/g, '') : ''}" class="text-button">Text</a>
  ` : ''}
  ${rep.email ? `
    <a href="mailto:${rep.email}" class="email-button">Email</a>
  ` : ''}
</div>
        </div>
      `).join('');
  } else {
    campusName.style.display = 'none';
    repInfo.style.display = 'none';
    campusHeader.style.display = 'none';
  }
}

// ======== ESCALATION CONTACT DROPDOWN ========
document.addEventListener('DOMContentLoaded', () => {
  const campusSelect = document.getElementById('campus-select');
  if (campusSelect) {
    campusSelect.addEventListener('change', handleCampusChange);
  }

  const leaderSelect = document.getElementById('leader-select');
  const leaderContact = document.getElementById('leader-contact');

  if (leaderSelect && leaderContact) {
    leaderSelect.addEventListener('change', function () {
      const selected = this.value;
      let content = '';

      if (selected === 'trigona') {
        content = `
          <div class="rep-card">
            <div class="rep-name"><strong>Dave Trigona</strong></div>
            <div class="rep-title highlight-blue">Teamsters Joint Council 43</div>
            <div class="rep-title">IBT Health Care Division Representative</div>
            <div class="rep-buttons">
              <a href="mailto:trigona@JC43.org" class="email-button">Email</a>
            </div>
          </div>`;
      } else if (selected === 'hughes') {
        content = `
          <div class="rep-card">
            <div class="rep-name"><strong>Dave Hughes</strong></div>
            <div class="rep-title highlight-blue">Teamsters Joint Council 43</div>
            <div class="rep-title">IBT Health Care Division Representative</div>
            <div class="rep-buttons">
              <a href="mailto:hughes@JC43.org" class="email-button">Email</a>
            </div>
          </div>`;
      } else if (selected === 'johnson') {
        content = `
          <div class="rep-card">
            <div class="rep-name"><strong>Sarah Johnson</strong></div>
            <div class="rep-title highlight-blue">Teamsters Local 2024 RN</div>
            <div class="rep-title">IBT Health Care Division Representative</div>
            <div class="rep-buttons">
              <a href="tel:5866044432" class="phone-button">Call</a>
              <a href="sms:5866044432" class="text-button">Text</a>
              <a href="mailto:sarah.johnson7170@gmail.com" class="email-button">Email</a>
            </div>
          </div>`;
      } else if (selected === 'fratangelo') {
        content = `
          <div class="rep-card">
            <div class="rep-name"><strong>Jason Fratangelo</strong></div>
            <div class="rep-title highlight-blue">Teamsters Local 2024 RN </div>
            <div class="rep-title">IBT Health Care Division Representative</div>
            <div class="rep-buttons">
              <a href="tel:7346248172" class="phone-button">Call</a>
              <a href="sms:7346248172" class="text-button">Text</a>
              <a href="mailto:tangelo411@gmail.com" class="email-button">Email</a>
            </div>
          </div>`;
      }

      leaderContact.innerHTML = content;
    });
  }
});