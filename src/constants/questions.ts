import { QuestionT } from '../types';

export const MAX_QUESTIONS = 25;

export const QUESTIONS: QuestionT[] = [
  {
    id: 0,
    question: 'O odstoupení z funkce člena orgánu obchodní korporace platí, že',
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
    question: 'Ústavní soud',
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
    question: 'Odškodnění duševních útrap je',
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
    question: 'Všechny předpoklady vzniku škody jsou',
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
    question: 'Právo spojené s právem duševního vlastnictví je',
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
    question: 'Základní kapitál obchodní korporace',
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
    question: 'Základní kapitál u akciové společnosti musí být minimálně',
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
    question: 'Způsoby náhrady škody jsou',
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
    question: 'Právo Duševního vlastnictví v současnosti platném zákoně není upraveno v následujícím zákoně',
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
    question: 'Živností není',
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
    question: 'Pracovní vztah uzavřený smlouvou na dobu určitou',
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
    question: 'Návrh na zápis do obchodního rejstříku v akciové společnosti podepisuje',
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
    question: 'Podle živnostenského zákona je vždy překážkou pro získání živnosti Vyberte jednu z nabízených možností',
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
    question: 'Podnikatel při jednání a podepisování může ke svému jménu připojit',
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
    question: 'Pracovní smlouva musí ze zákona obsahovat',
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
    question: 'Orgány EU jsou',
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
    question: 'Vynález v ČR, aby mohl být udělen, musí být',
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
    question: 'Patentové nároky mohou být',
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
    question: 'Licence na dobu neurčitou má výpovědní dobu',
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
    question: 'Pramenem práva není',
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
    question: 'U výhradní licence platí, že',
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
    question: 'Základní kapitál u společnosti s ručením omezeným musí být minimálně',
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
    question: 'Společnost se zakládá',
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
    question: 'Minimální doba trvání ochrany majetkových práv autora autorského díla podle Bernské úmluvy je',
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
    question: 'Mezi primární právo EU patří',
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
    question: 'Pro volné živnosti',
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
    question: 'Právní norma se skládá z',
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
    question: 'Podnikatel má povinnost vést účetnictví',
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
    question: 'Pokud zaměstnavatel a zaměstnanec uzavřou pracovní smlouvu ústní formou',
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
    question: 'Věcná působnost autorského zákona - Autorské dílo - je',
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
    question: 'Software patent',
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
    question: 'Vynálezecká činnost podle zákona o vynálezech',
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
    question: 'Pro obchodní firmu platí',
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
    question: 'Podle §2106 NOZ, je-li vadné plnění podstatným porušením smlouvy, má kupující právo',
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
    question: 'Počítačovému programu v EU není možné',
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
    question: 'Za podnikatele se považuje vždy',
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
    question: 'Koncesované živnosti se dělí na',
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
    question: 'Jako užitný vzor nelze chránit',
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
    question: 'Podnikový vynález',
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
    question: 'Podle občanského zákoníku je osobou blízkou',
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
    question: 'Osobní působnost autorského zákona se netýká',
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
    question: 'Soustavnost podnikání znamená',
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
    question: 'Účinek patentu představuje',
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
    question: 'Bernská úmluva upravuje',
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
    question: 'Průmyslový vzor je',
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
    question: 'U smlouvy o dílo je cena stanovena',
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
    question: 'Litigačním procesem není',
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
    question: 'Pro nakladatelskou licenční smlouvu platí, že',
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
    question: 'Licence nemůže být poskytnuta k',
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
    question: 'Promlčení',
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
    question: 'Živností není',
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
    question: 'Mezi všeobecné podmínky pro udělení živnostenského oprávnění patří',
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
    question: 'Minimální doba trvání ochrany majetkových práv autora autorského díla podle Autorského zákona je',
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
    question: 'Vklad',
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
    question: 'Právo duševního vlastnictví obsahuje následující podoblasti',
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
    question: 'Počítačový program je',
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
    question: 'Výpověď bez udání důvodu může předložit',
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
    question: 'Obchodní společností není',
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
    question: 'Účinnost',
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
    question: 'Mezi práva společníka obchodní korporace patří',
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
    question: 'Platnost',
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
    question: 'U Prekluze',
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
    question: 'Princip teritoriality se dá označit tak, že',
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
    question: 'Mezi znaky podnikání ve smyslu občanského zákoníku nepatří',
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
    question:
      'Soukromoprávní vztahy mezinárodního práva soukromého mají vztah k jinému státu. Jde tedy o vztah s mezinárodním prvkem a jedná se o',
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
    question: 'Vyberte jednu z nabízených možností:',
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
    question: 'Mezi absolutní majetková práva nepatří',
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
