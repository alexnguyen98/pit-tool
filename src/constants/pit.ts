import { QuestionT, SubjectType } from '../types';

export const PIT_QUESTIONS: QuestionT[] = [
  {
    id: 0,
    subject: SubjectType.PIT,
    question: 'O odstoupení z funkce člena orgánu obchodní korporace platí, že',
    img: null,
    options: [
      {
        text:
          'funkce končí uplynutím 14 dnů od doručení oznámení příslušnému orgánu, neschválí-li příslušný orgán obchodní korporace na žádost odstupujícího jiný okamžik zániku funkce',
        correct: false,
      },
      {
        text:
          'funkce končí uplynutím jednoho měsíce od doručení oznámení příslušnému orgánu, neschválí-li příslušný orgán obchodní korporace na žádost odstupujícího jiný okamžik zániku funkce',
        correct: true,
      },
      {
        text: 'člen orgánu nesmí ze své funkce odstoupit v době, která je pro obchodní korporaci nevhodná',
        correct: true,
      },
      {
        text: 'vyloučit člena orgánu lze i bez rozhodnutí soudu',
        correct: false,
      },
    ],
  },
  {
    id: 1,
    subject: SubjectType.PIT,
    question: 'Ústavní soud',
    img: null,
    options: [
      {
        text: 'Rozhoduje o zrušení zákonů nebo jejich jednotlivých ustanovení, jsou-li v rozporu s jinými zákony',
        correct: false,
      },
      {
        text: 'Rozhoduje o ústavní žalobě Senátu proti prezidentu republiky',
        correct: true,
      },
      {
        text:
          'Rozhoduje o ústavních stížnostech fyzických osob proti pravomocnému rozhodnutí a jinému zásahu orgánů veřejné moci do jim ústavně zaručených základních práv a svobod',
        correct: true,
      },
      {
        text:
          'Rozhoduje o tom, zda rozhodnutí o rozpuštění politické strany nebo jiné rozhodnutí týkající se činnosti politické strany je ve shodě se zákony ČR',
        correct: true,
      },
    ],
  },
  {
    id: 2,
    subject: SubjectType.PIT,
    question: 'Odškodnění duševních útrap je',
    img: null,
    options: [
      {
        text: 'je druhem ztížení společenského uplatnění',
        correct: false,
      },
      {
        text: 'druh náhrady škody',
        correct: true,
      },
      {
        text: 'je upraveno jako samostatný nárok na náhradu škody v Občanském zákoníku',
        correct: true,
      },
      {
        text: 'je druhem bolestného',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    subject: SubjectType.PIT,
    question: 'Všechny předpoklady vzniku škody jsou',
    img: null,
    options: [
      {
        text: 'újma na jednání a protiprávní jednání',
        correct: false,
      },
      {
        text: 'právní jednání, škoda a příčinná souvislost',
        correct: false,
      },
      {
        text: 'kauzální nexus, zavinění a škoda',
        correct: true,
      },
      {
        text: 'škoda a příčinná souvislost',
        correct: false,
      },
    ],
  },
  {
    id: 4,
    subject: SubjectType.PIT,
    question: 'Právo spojené s právem duševního vlastnictví je',
    img: null,
    options: [
      {
        text: 'patentové právo',
        correct: false,
      },
      {
        text: 'obchodní jméno a doména',
        correct: true,
      },
      {
        text: 'hospodářská soutěž',
        correct: true,
      },
      {
        text: 'obchodní tajemství',
        correct: true,
      },
    ],
  },
  {
    id: 5,
    subject: SubjectType.PIT,
    question: 'Základní kapitál obchodní korporace',
    img: null,
    options: [
      {
        text: 'je souhrnem všech vkladů',
        correct: true,
      },
      {
        text: 'představuje účast společníka v obchodní korporaci a práva a povinnosti z toho plynoucí',
        correct: false,
      },
      {
        text: 'se oceňuje znaleckým posudkem',
        correct: false,
      },
      {
        text: 'lze úročit a vyplácet z něj úroky',
        correct: false,
      },
    ],
  },
  {
    id: 6,
    subject: SubjectType.PIT,
    question: 'Základní kapitál u akciové společnosti musí být minimálně',
    img: null,
    options: [
      {
        text: '1 Kč',
        correct: false,
      },
      {
        text: 'není přesně určen',
        correct: false,
      },
      {
        text: 'společnost lze založit i bez základního kapitálu',
        correct: false,
      },
      {
        text: '2000000Kč',
        correct: true,
      },
    ],
  },
  {
    id: 7,
    subject: SubjectType.PIT,
    question: 'Způsoby náhrady škody jsou',
    img: null,
    options: [
      {
        text: 'peníze',
        correct: true,
      },
      {
        text: 'uvedení v předešlý stav',
        correct: true,
      },
      {
        text: 'výplata zisku',
        correct: false,
      },
      {
        text: 'přiměřené zadostiučinění',
        correct: true,
      },
    ],
  },
  {
    id: 8,
    subject: SubjectType.PIT,
    question: 'Právo Duševního vlastnictví v současnosti platném zákoně není upraveno v následujícím zákoně',
    img: null,
    options: [
      {
        text: 'Obchodní zákoník',
        correct: true,
      },
      {
        text: 'O ochranných známkách',
        correct: false,
      },
      {
        text: 'Autorský zákon',
        correct: false,
      },
      {
        text: 'Zákon o vynálezech, průmyslových vzorech a zlepšovacích návrzích',
        correct: false,
      },
    ],
  },
  {
    id: 9,
    subject: SubjectType.PIT,
    question: 'Živností není',
    img: null,
    options: [
      {
        text: 'fotografování',
        correct: false,
      },
      {
        text: 'provozování stánku s občerstvením',
        correct: false,
      },
      {
        text: 'herectví',
        correct: true,
      },
      {
        text: 'provozování autoškoly',
        correct: false,
      },
    ],
  },
  {
    id: 10,
    subject: SubjectType.PIT,
    question: 'Pracovní vztah uzavřený smlouvou na dobu určitou',
    img: null,
    options: [
      {
        text: 'může být neomezeně znovu prodlužován',
        correct: false,
      },
      {
        text: 'může být opakován nanejvýš dvakrát',
        correct: true,
      },
      {
        text: 'mezi stejnými smluvními stranami nesmí přesáhnout dobu 3 let',
        correct: true,
      },
      {
        text: 'mezi stejnými smluvními stranami nesmí přesáhnout dobu 5 let',
        correct: false,
      },
    ],
  },
  {
    id: 11,
    subject: SubjectType.PIT,
    question: 'Návrh na zápis do obchodního rejstříku v akciové společnosti podepisuje',
    img: null,
    options: [
      {
        text: 'všichni členové představenstva',
        correct: true,
      },
      {
        text: 'všichni jednatelé',
        correct: false,
      },
      {
        text: 'jednatel',
        correct: false,
      },
      {
        text: 'všichni společníci',
        correct: false,
      },
    ],
  },
  {
    id: 12,
    subject: SubjectType.PIT,
    question: 'Podle živnostenského zákona je vždy překážkou pro získání živnosti Vyberte jednu z nabízených možností',
    img: null,
    options: [
      {
        text: 'nedostatečný základní kapitál',
        correct: false,
      },
      {
        text: 'nedostatečná odborná způsobilost',
        correct: false,
      },
      {
        text: 'zamítnutí povolení od úřadu',
        correct: false,
      },
      {
        text: 'trestní minulost',
        correct: true,
      },
    ],
  },
  {
    id: 13,
    subject: SubjectType.PIT,
    question: 'Podnikatel při jednání a podepisování může ke svému jménu připojit',
    img: null,
    options: [
      {
        text: 'pravdivé dodatky charakterizující jeho místo podnikání',
        correct: true,
      },
      {
        text: 'pravdivé dodatky charakterizující jeho osobu',
        correct: true,
      },
      {
        text: 'pravdivé dodatky charakterizující jeho obchodní závod',
        correct: true,
      },
      {
        text: 'pravdivé dodatky charakterizující jím vykonávané činnosti',
        correct: true,
      },
    ],
  },
  {
    id: 14,
    subject: SubjectType.PIT,
    question: 'Pracovní smlouva musí ze zákona obsahovat',
    img: null,
    options: [
      {
        text: 'místo výkonu práce',
        correct: true,
      },
      {
        text: 'vnitřní předpisy firmy',
        correct: false,
      },
      {
        text: 'pracovní dobu',
        correct: false,
      },
      {
        text: 'výši odměny za práci',
        correct: false,
      },
    ],
  },
  {
    id: 15,
    subject: SubjectType.PIT,
    question: 'Orgány EU jsou',
    img: null,
    options: [
      {
        text: 'Rada Evropy',
        correct: false,
      },
      {
        text: 'Soudní dvůr Evropské unie',
        correct: true,
      },
      {
        text: 'Rada Evropské unie',
        correct: true,
      },
      {
        text: 'Evropská rada',
        correct: true,
      },
    ],
  },
  {
    id: 16,
    subject: SubjectType.PIT,
    question: 'Vynález v ČR, aby mohl být udělen, musí být',
    img: null,
    options: [
      {
        text: 'nový',
        correct: true,
      },
      {
        text: 'průmyslově využitelný',
        correct: true,
      },
      {
        text: 'užitečný',
        correct: false,
      },
      {
        text: 'musí obsahovat vynálezeckou činnost',
        correct: true,
      },
    ],
  },
  {
    id: 17,
    subject: SubjectType.PIT,
    question: 'Patentové nároky mohou být',
    img: null,
    options: [
      {
        text: 'závislé nároky',
        correct: true,
      },
      {
        text: 'procesní nároky (tzv. method claim)',
        correct: true,
      },
      {
        text: 'nezávislé nároky',
        correct: true,
      },
      {
        text: 'nároky závislé na jiném nezávislém patentu',
        correct: false,
      },
    ],
  },
  {
    id: 18,
    subject: SubjectType.PIT,
    question: 'Licence na dobu neurčitou má výpovědní dobu',
    img: null,
    options: [
      {
        text: '3 měsíce',
        correct: false,
      },
      {
        text: '1 rok',
        correct: true,
      },
      {
        text: '6 měsíců',
        correct: false,
      },
      {
        text: '2 roky',
        correct: false,
      },
    ],
  },
  {
    id: 19,
    subject: SubjectType.PIT,
    question: 'Pramenem práva není',
    img: null,
    options: [
      {
        text: 'Mezinárodní smlouva',
        correct: false,
      },
      {
        text: 'Právní stát',
        correct: true,
      },
      {
        text: 'Právní obyčej',
        correct: false,
      },
      {
        text: 'Soudní rozhodnutí',
        correct: false,
      },
    ],
  },
  {
    id: 20,
    subject: SubjectType.PIT,
    question: 'U výhradní licence platí, že',
    img: null,
    options: [
      {
        text: 'nemusí mít písemnou formu',
        correct: false,
      },
      {
        text: 'po dobu trvání licence nesmí být poskytována třetí osobě',
        correct: true,
      },
      {
        text: 'autor poskytované licence nemá možnost sám její předmět užívat',
        correct: true,
      },
      {
        text: 'může být pouze úplatná',
        correct: false,
      },
    ],
  },
  {
    id: 21,
    subject: SubjectType.PIT,
    question: 'Základní kapitál u společnosti s ručením omezeným musí být minimálně',
    img: null,
    options: [
      {
        text: '1 Kč',
        correct: true,
      },
      {
        text: 'není přesně určen',
        correct: false,
      },
      {
        text: 'společnost lze založit i bez základního kapitálu',
        correct: false,
      },
      {
        text: '2 000 000 Kč',
        correct: false,
      },
    ],
  },
  {
    id: 22,
    subject: SubjectType.PIT,
    question: 'Společnost se zakládá',
    img: null,
    options: [
      {
        text: 'Zakladatelskou listinou',
        correct: true,
      },
      {
        text: 'Společenskou smlouvou',
        correct: true,
      },
      {
        text: 'Valnou hromadou',
        correct: false,
      },
      {
        text: 'Rozhodnutím jediného jednatele',
        correct: false,
      },
    ],
  },
  {
    id: 23,
    subject: SubjectType.PIT,
    question: 'Minimální doba trvání ochrany majetkových práv autora autorského díla podle Bernské úmluvy je',
    img: null,
    options: [
      {
        text: '50 let',
        correct: true,
      },
      {
        text: '60 let',
        correct: false,
      },
      {
        text: '70 let',
        correct: false,
      },
      {
        text: '40 let',
        correct: false,
      },
    ],
  },
  {
    id: 24,
    subject: SubjectType.PIT,
    question: 'Mezi primární právo EU patří',
    img: null,
    options: [
      {
        text: 'smlouvy o fungování EU',
        correct: true,
      },
      {
        text: 'nařízení',
        correct: false,
      },
      {
        text: 'mezinárodní smlouvy',
        correct: true,
      },
      {
        text: 'směrnice',
        correct: false,
      },
    ],
  },
  {
    id: 25,
    subject: SubjectType.PIT,
    question: 'Pro volné živnosti',
    img: null,
    options: [
      {
        text: 'je podmínkou provozování živnosti odborná způsobilost uvedená v přiloze živnostenského zákona',
        correct: false,
      },
      {
        text: 'je podmínkou provozování živnosti odborná způsobilost uvedená v živnostenském zákoně',
        correct: false,
      },
      {
        text: 'je povinností mít stanoveného odpovědného zástupce',
        correct: false,
      },
      {
        text: 'není jako podmínka provozování živnosti odborná způsobilost stanovena',
        correct: true,
      },
    ],
  },
  {
    id: 26,
    subject: SubjectType.PIT,
    question: 'Právní norma se skládá z',
    img: null,
    options: [
      {
        text: 'Propozice',
        correct: false,
      },
      {
        text: 'Depozice',
        correct: false,
      },
      {
        text: 'Dispozice',
        correct: true,
      },
      {
        text: 'Sankce',
        correct: true,
      },
    ],
  },
  {
    id: 27,
    subject: SubjectType.PIT,
    question: 'Podnikatel má povinnost vést účetnictví',
    img: null,
    options: [
      {
        text: 'od provedení první finanční operace v rámci podnikání',
        correct: false,
      },
      {
        text:
          'tak, aby účetní závěrka sestavená na jeho základě podávala věrný a poctivý obraz předmětu účetnictví a finanční situace účetní jednotky',
        correct: true,
      },
      {
        text: 'v rozsahu a způsobem stanoveným v zákoně č. 89/2012 Sb., občanském zákoníku',
        correct: false,
      },
      {
        text: 'proto aby se vyhnul postihům stanoveným upraveným zákonem č. 418/2011 Sb., o trestní odpovědnosti',
        correct: false,
      },
    ],
  },
  {
    id: 28,
    subject: SubjectType.PIT,
    question: 'Pokud zaměstnavatel a zaměstnanec uzavřou pracovní smlouvu ústní formou',
    img: null,
    options: [
      {
        text: 'smlouva je bez dalšího platná',
        correct: false,
      },
      {
        text: 'smlouva je platná, ale zaměstnavatel porušil své povinnosti',
        correct: true,
      },
      {
        text: 'smlouva je absolutně neplatná',
        correct: false,
      },
      {
        text: 'hledí se na smlouvu, jako by nikdy nevznikla',
        correct: false,
      },
    ],
  },
  {
    id: 29,
    subject: SubjectType.PIT,
    question: 'Věcná působnost autorského zákona - Autorské dílo - je',
    img: null,
    options: [
      {
        text: 'Zvukový a zvukově obrazový záznam',
        correct: true,
      },
      {
        text: 'Databáze',
        correct: true,
      },
      {
        text: 'Počítačový program',
        correct: true,
      },
      {
        text: 'Ochranná známka',
        correct: false,
      },
    ],
  },
  {
    id: 30,
    subject: SubjectType.PIT,
    question: 'Software patent',
    img: null,
    options: [
      {
        text: 'V EU není možné získat',
        correct: true,
      },
      {
        text: 'Lze jej získat v USA',
        correct: true,
      },
      {
        text: 'V EU je možné získat',
        correct: false,
      },
      {
        text: 'V EU je možné jej získat pouze pokud se jedná o počítačem implementovaný vynález',
        correct: true,
      },
    ],
  },
  {
    id: 31,
    subject: SubjectType.PIT,
    question: 'Vynálezecká činnost podle zákona o vynálezech',
    img: null,
    options: [
      {
        text: 'představuje něco nad rámec odborné dovednosti',
        correct: false,
      },
      {
        text: 'je činnost směřující k vytvoření vynálezu',
        correct: false,
      },
      {
        text: 'je soustavná činnost směřující k vytvoření vynálezu',
        correct: false,
      },
      {
        text: 'pro odborníka nevyplývá zřejmým způsobem ze stavu techniky',
        correct: true,
      },
    ],
  },
  {
    id: 32,
    subject: SubjectType.PIT,
    question: 'Pro obchodní firmu platí',
    img: null,
    options: [
      {
        text: 'obchodní firma může být generické označení',
        correct: true,
      },
      {
        text: 'je jménem, pod kterým je podnikatel zapsán do obchodního rejstříku',
        correct: true,
      },
      {
        text: 'podnikatel může mít dvě obchodní firmy',
        correct: false,
      },
      {
        text: 'na některé podnikatele se ustanovení OZ o obchodní firmě nevztahují',
        correct: true,
      },
    ],
  },
  {
    id: 33,
    subject: SubjectType.PIT,
    question: 'Podle §2106 NOZ, je-li vadné plnění podstatným porušením smlouvy, má kupující právo',
    img: null,
    options: [
      {
        text: 'na přiměřenou slevu z kupní ceny',
        correct: true,
      },
      {
        text: 'na odstranění vady opravou věci,',
        correct: true,
      },
      {
        text: 'odstoupit od smlouvy',
        correct: true,
      },
      {
        text: 'na odstranění vady dodáním nové věci bez vady nebo dodáním chybějící věci',
        correct: true,
      },
    ],
  },
  {
    id: 34,
    subject: SubjectType.PIT,
    question: 'Počítačovému programu v EU není možné',
    img: null,
    options: [
      {
        text: 'Poskytnout ochranu prostřednictvím autorského práva',
        correct: false,
      },
      {
        text: 'Poskytnout ochranu prostřednictvím patentu',
        correct: true,
      },
      {
        text: 'Poskytnout ochranu prostřednictvím užitného vzoru',
        correct: true,
      },
      {
        text: 'Poskytnout ochranu prostřednictvím průmyslovému',
        correct: true,
      },
    ],
  },
  {
    id: 35,
    subject: SubjectType.PIT,
    question: 'Za podnikatele se považuje vždy',
    img: null,
    options: [
      {
        text: 'Osoba zapsaná v speciálním seznamu',
        correct: false,
      },
      {
        text: 'Osoba zapsaná v obchodním rejstříku',
        correct: true,
      },
      {
        text: 'Osoba zapsaná v speciálním rejstříku',
        correct: false,
      },
      {
        text: 'Osoba provozující zemědělskou výrobu',
        correct: false,
      },
    ],
  },
  {
    id: 36,
    subject: SubjectType.PIT,
    question: 'Koncesované živnosti se dělí na',
    img: null,
    options: [
      {
        text: 'Řemeslné',
        correct: false,
      },
      {
        text: 'Jednotlivé živnosti podle přílohy 3 živnostenského zákona',
        correct: true,
      },
      {
        text: 'Vázané',
        correct: false,
      },
      {
        text: 'Volné',
        correct: false,
      },
    ],
  },
  {
    id: 37,
    subject: SubjectType.PIT,
    question: 'Jako užitný vzor nelze chránit',
    img: null,
    options: [
      {
        text: 'Způsoby výroby nebo pracovní činnosti',
        correct: true,
      },
      {
        text: 'Objevy, vědecké teorie a matematické metody',
        correct: true,
      },
      {
        text: 'Technické řešení, které přesahuje rámec pouhé technické dovednosti',
        correct: false,
      },
      {
        text: 'Technická řešení, které jsou v rozporu s obecnými zájmy',
        correct: true,
      },
    ],
  },
  {
    id: 38,
    subject: SubjectType.PIT,
    question: 'Podnikový vynález',
    img: null,
    options: [
      {
        text: 'zaměstnavatel má 6 měsíců od vyrozumění (k uplatnění vynálezu),teprve poté zaměstnanec může vynález využít',
        correct: false,
      },
      {
        text: 'autor má právo na přiměřenou odměnu (avšak se této odměny nemůže domáhat před soudem)',
        correct: false,
      },
      {
        text: 'autor má právo na přiměřenou odměnu (může se této odměny domáhat před soudem)',
        correct: true,
      },
      {
        text: 'patří zaměstnavateli',
        correct: true,
      },
    ],
  },
  {
    id: 39,
    subject: SubjectType.PIT,
    question: 'Podle občanského zákoníku je osobou blízkou',
    img: null,
    options: [
      {
        text: 'kdokoliv koho písemně určím',
        correct: false,
      },
      {
        text: 'můj manžel nebo manželka',
        correct: true,
      },
      {
        text: 'můj právní zástupce',
        correct: false,
      },
      {
        text: 'můj bratr nebo sestra',
        correct: true,
      },
    ],
  },
  {
    id: 40,
    subject: SubjectType.PIT,
    question: 'Osobní působnost autorského zákona se netýká',
    img: null,
    options: [
      {
        text: 'vynálezců',
        correct: true,
      },
      {
        text: 'autorů',
        correct: false,
      },
      {
        text: 'výkonných umělců',
        correct: false,
      },
      {
        text: 'programátorů',
        correct: false,
      },
    ],
  },
  {
    id: 41,
    subject: SubjectType.PIT,
    question: 'Soustavnost podnikání znamená',
    img: null,
    options: [
      {
        text: 'Příležitostní vykonávání výdělečných aktivit',
        correct: false,
      },
      {
        text: 'Nahodilé vykonávání výdělečných aktivit',
        correct: false,
      },
      {
        text: 'Sezónní vykonávání výdělečných aktivit',
        correct: true,
      },
      {
        text: 'Každodenní vykonávání výdělečných aktivit',
        correct: true,
      },
    ],
  },
  {
    id: 42,
    subject: SubjectType.PIT,
    question: 'Účinek patentu představuje',
    img: null,
    options: [
      {
        text: 'zákaz patent využívat po celém světě',
        correct: false,
      },
      {
        text: 'právo zakázat ostatním vynález využívat',
        correct: true,
      },
      {
        text: 'právo na 20 let bez konkurence',
        correct: false,
      },
      {
        text: 'právo požadovat náhradu od toho, kdo po zveřejnění patentu ve věstníku vynález bez povolení využíval',
        correct: true,
      },
    ],
  },
  {
    id: 43,
    subject: SubjectType.PIT,
    question: 'Bernská úmluva upravuje',
    img: null,
    options: [
      {
        text: 'Ochranné známky',
        correct: false,
      },
      {
        text: 'Duševní vlastnictví obecně',
        correct: false,
      },
      {
        text: 'Průmyslová práva',
        correct: false,
      },
      {
        text: 'Autorská práva',
        correct: true,
      },
    ],
  },
  {
    id: 44,
    subject: SubjectType.PIT,
    question: 'Průmyslový vzor je',
    img: null,
    options: [
      {
        text: 'Způsob právní ochrany designu výrobku',
        correct: true,
      },
      {
        text: 'Způsob ochrany průmyslového řešení nebo použitého materiálu',
        correct: false,
      },
      {
        text: 'Způsob patentové ochrany (tzv. soft patent)',
        correct: false,
      },
      {
        text: 'Způsob ochrany software',
        correct: false,
      },
    ],
  },
  {
    id: 45,
    subject: SubjectType.PIT,
    question: 'U smlouvy o dílo je cena stanovena',
    img: null,
    options: [
      {
        text: 'odkazem na rozpočet',
        correct: true,
      },
      {
        text: 'stanovení ceny není podmínkou pro uzavření smlouvy',
        correct: false,
      },
      {
        text: 'pevnou částkou',
        correct: true,
      },
      {
        text: 'odhadem',
        correct: true,
      },
    ],
  },
  {
    id: 46,
    subject: SubjectType.PIT,
    question: 'Litigačním procesem není',
    img: null,
    options: [
      {
        text: 'Mediace',
        correct: true,
      },
      {
        text: 'Arbitráž',
        correct: false,
      },
      {
        text: 'Exekuční řízení',
        correct: true,
      },
      {
        text: 'Soudní řízení',
        correct: false,
      },
    ],
  },
  {
    id: 47,
    subject: SubjectType.PIT,
    question: 'Pro nakladatelskou licenční smlouvu platí, že',
    img: null,
    options: [
      {
        text:
          'je-li smlouva uzavřena na určitý počet rozmnoženin, zaniká licence jejich rozebráním, nedohodnou-li se strany do 6 měsíců od rozebrání jinak',
        correct: true,
      },
      {
        text: 'neuzavírá se pro fotografické dílo',
        correct: false,
      },
      {
        text: 'na licenci se primárně hledí jako na licenci výhradní',
        correct: false,
      },
      {
        text: 'autor má právo na neomezenou autorskou korekturu, pokud tak učiní před vydáním díla',
        correct: false,
      },
    ],
  },
  {
    id: 48,
    subject: SubjectType.PIT,
    question: 'Licence nemůže být poskytnuta k',
    img: null,
    options: [
      {
        text: 'právům průmyslově využitelným',
        correct: false,
      },
      {
        text: 'právům příbuzným právům autorským',
        correct: false,
      },
      {
        text: 'právům obchodně využitelným',
        correct: false,
      },
      {
        text: 'právům autorským',
        correct: false,
      },
      {
        text: 'žádná z uvedených',
        correct: true,
      },
    ],
  },
  {
    id: 49,
    subject: SubjectType.PIT,
    question: 'Promlčení',
    img: null,
    options: [
      {
        text: 'soud k promlčení nepřihlíží',
        correct: false,
      },
      {
        text: 'je uplatněno pouze k námitce',
        correct: true,
      },
      {
        text: 'soud k promlčení přihlíží z úřední povinnosti',
        correct: false,
      },
      {
        text: 'promlčení je úkon, který je zákonem zakázán, protože je v rozporu s dobrými mravy',
        correct: false,
      },
    ],
  },
  {
    id: 50,
    subject: SubjectType.PIT,
    question: 'Živností není',
    img: null,
    options: [
      {
        text: 'vzdělávání na školách',
        correct: true,
      },
      {
        text: 'provozování STK',
        correct: true,
      },
      {
        text: 'provozování pohřebišť',
        correct: true,
      },
      {
        text: 'výroba lihovin',
        correct: false,
      },
    ],
  },
  {
    id: 51,
    subject: SubjectType.PIT,
    question: 'Mezi všeobecné podmínky pro udělení živnostenského oprávnění patří',
    img: null,
    options: [
      {
        text: 'Svéprávnost',
        correct: true,
      },
      {
        text: 'Bezúhonnost',
        correct: true,
      },
      {
        text: 'Odborná způsobilost podnikatele nebo jeho odpovědného zástupce',
        correct: false,
      },
      {
        text: 'Podnikatel se neúčastní insolvenčního řízení',
        correct: false,
      },
    ],
  },
  {
    id: 52,
    subject: SubjectType.PIT,
    question: 'Minimální doba trvání ochrany majetkových práv autora autorského díla podle Autorského zákona je',
    img: null,
    options: [
      {
        text: '60',
        correct: false,
      },
      {
        text: '70',
        correct: true,
      },
      {
        text: '50',
        correct: false,
      },
      {
        text: '40',
        correct: false,
      },
    ],
  },
  {
    id: 53,
    subject: SubjectType.PIT,
    question: 'Vklad',
    img: null,
    options: [
      {
        text: 'je u a. s. účetní nebo jmenovitou hodnotou akcie',
        correct: true,
      },
      {
        text: 'může mít formu práce nebo služby',
        correct: false,
      },
      {
        text: 'je synonymum pro základní kapitál',
        correct: false,
      },
      {
        text: 'musí být vždy splacen v penězích',
        correct: false,
      },
    ],
  },
  {
    id: 54,
    subject: SubjectType.PIT,
    question: 'Právo duševního vlastnictví obsahuje následující podoblasti',
    img: null,
    options: [
      {
        text: 'Obchodní právo',
        correct: false,
      },
      {
        text: 'Autorská práva',
        correct: true,
      },
      {
        text: 'Průmyslová práva',
        correct: true,
      },
      {
        text: 'Soutěžní právo',
        correct: true,
      },
    ],
  },
  {
    id: 55,
    subject: SubjectType.PIT,
    question: 'Počítačový program je',
    img: null,
    options: [
      {
        text: 'dílo literální',
        correct: true,
      },
      {
        text: 'v zásadě chráněn Bernskou úmluvou',
        correct: true,
      },
    ],
  },
  {
    id: 56,
    subject: SubjectType.PIT,
    question: 'Výpověď bez udání důvodu může předložit',
    img: null,
    options: [
      {
        text: 'vždy musí být udán důvod',
        correct: false,
      },
      {
        text: 'pouze zaměstnavatel',
        correct: false,
      },
      {
        text: 'zaměstnanec i zaměstnavatel',
        correct: false,
      },
      {
        text: 'pouze zaměstnanec',
        correct: true,
      },
    ],
  },
  {
    id: 57,
    subject: SubjectType.PIT,
    question: 'Obchodní společností není',
    img: null,
    options: [
      {
        text: 'veřejná obchodní společnost',
        correct: false,
      },
      {
        text: 'komanditní společnost',
        correct: false,
      },
      {
        text: 'akciová společnost',
        correct: false,
      },
      {
        text: 'společnost s ručením omezeným',
        correct: false,
      },
      {
        text: 'svěřenecký fond',
        correct: true,
      },
    ],
  },
  {
    id: 58,
    subject: SubjectType.PIT,
    question: 'Účinnost',
    img: null,
    options: [
      {
        text: 'nabývá právní předpis dnem vyhlášení ve Sbírce zákonů',
        correct: false,
      },
      {
        text: 'v její první den právní předpis zakládá, mění nebo ruší právní vztahy',
        correct: true,
      },
      {
        text: 'v její první den se stává právní předpis součástí právního řádu',
        correct: false,
      },
      {
        text: 'se stanoví v posledním ustanovení příslušného předpisu',
        correct: true,
      },
    ],
  },
  {
    id: 59,
    subject: SubjectType.PIT,
    question: 'Mezi práva společníka obchodní korporace patří',
    img: null,
    options: [
      {
        text: 'právo na informace',
        correct: true,
      },
      {
        text: 'právo na vypořádací podíl',
        correct: true,
      },
      {
        text: 'právo na podíl na zisku',
        correct: true,
      },
      {
        text: 'právo na podíl na likvidačním zůstatku',
        correct: true,
      },
    ],
  },
  {
    id: 60,
    subject: SubjectType.PIT,
    question: 'Platnost',
    img: null,
    options: [
      {
        text: 'se stanoví v posledním ustanovení příslušeného předpisu',
        correct: false,
      },
      {
        text: 'v její první den se stává právní předpis součástí právního řádu ',
        correct: true,
      },
      {
        text: 'nabývá právní předpis dnem vyhlášení ve Sbírce zákonu',
        correct: true,
      },
      {
        text: 'v její první den právní předpis zakládá mění nebo ruší právní vztahy',
        correct: false,
      },
    ],
  },
  {
    id: 61,
    subject: SubjectType.PIT,
    question: 'U Prekluze',
    img: null,
    options: [
      {
        text: 'právo v čase vzniká',
        correct: false,
      },
      {
        text: 'prekluze je jiný název pro promlčení',
        correct: false,
      },
      {
        text: 'právo v čase zaniká',
        correct: true,
      },
      {
        text: 'soud k prekluzi přihlíží z úřední povinnosti',
        correct: true,
      },
    ],
  },
  {
    id: 62,
    subject: SubjectType.PIT,
    question: 'Princip teritoriality se dá označit tak, že',
    img: null,
    options: [
      {
        text: 'lidé si nesou své právo',
        correct: false,
      },
      {
        text: 'každý stát si upravuje právo na svém území',
        correct: true,
      },
      {
        text: 'stát chrání cizince podle jejich práva',
        correct: false,
      },
      {
        text: 'každá země upravuje své právo jinak',
        correct: true,
      },
    ],
  },
  {
    id: 63,
    subject: SubjectType.PIT,
    question: 'Mezi znaky podnikání ve smyslu občanského zákoníku nepatří',
    img: null,
    options: [
      {
        text: 'dosahování zisku',
        correct: false,
      },
      {
        text: 'samostatnost',
        correct: false,
      },
      {
        text: 'dělení odpovědnosti',
        correct: true,
      },
      {
        text: 'vedení účetnictví',
        correct: true,
      },
    ],
  },
  {
    id: 64,
    subject: SubjectType.PIT,
    question:
      'Soukromoprávní vztahy mezinárodního práva soukromého mají vztah k jinému státu. Jde tedy o vztah s mezinárodním prvkem a jedná se o',
    img: null,
    options: [
      {
        text: 'Skutečnosti právně významné pro vznik a existenci právního vztahu',
        correct: true,
      },
      {
        text: 'Subjekt právního vztahu',
        correct: true,
      },
      {
        text: 'Subjektivní stránku právního vztahu',
        correct: false,
      },
      {
        text: 'Předmět právního vztahu',
        correct: true,
      },
    ],
  },
  {
    id: 65,
    subject: SubjectType.PIT,
    question: 'Vyberte jednu z nabízených možností:',
    img: null,
    options: [
      {
        text: 'Nařízení Evropského parlamentu a rady, známe jako Brusel II.',
        correct: false,
      },
      {
        text: 'Nařízení Evropského parlamentu a rady, známé jako Brusel I.',
        correct: true,
      },
      {
        text: 'Nařízení Evropského parlamentu a rady, známe jako Řím I.',
        correct: false,
      },
      {
        text: 'Nařízení Evropského parlamentu a rady, známe jako Řím II.  ',
        correct: false,
      },
    ],
  },
  {
    id: 66,
    subject: SubjectType.PIT,
    question: 'Mezi absolutní majetková práva nepatří',
    img: null,
    options: [
      {
        text: 'držba',
        correct: false,
      },
      {
        text: 'vlastnictví',
        correct: false,
      },
      {
        text: 'věcná práva k věci cizí',
        correct: false,
      },
      {
        text: 'závazky či práva vyplývající ze smluv',
        correct: true,
      },
    ],
  },
];
