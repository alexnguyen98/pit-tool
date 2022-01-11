import { QuestionT, SubjectType, QuestionType } from '../types';

export const KAB_QUESTIONS: QuestionT[] = [
  {
    id: 0,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Na obrázku je znázorněna vnitřní struktura jedné blokové šifry. O jaký algoritmus se jedná? ',
    img: '/img/kab-1.png',
    options: [
      {
        text: 'RC4',
        correct: false,
      },
      {
        text: 'A5',
        correct: false,
      },
      {
        text: 'Serpent',
        correct: false,
      },
      {
        text: 'RC6',
        correct: true,
      },
      {
        text: 'AES',
        correct: false,
      },
      {
        text: 'DES',
        correct: false,
      },
    ],
  },
  {
    id: 1,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'Základem asymetrických kryptosystémů je těžký matematický problém. Do této kategorie problémů nepatří a ke konstrukci kryptosystémů nelze použít:',
    img: null,
    options: [
      {
        text: 'problém rozkladu celých čísel',
        correct: false,
      },
      {
        text: 'problém přirozeného logaritmu na uzavřené hyperbole',
        correct: true,
      },
      {
        text: 'problém diskrétního logaritmu na eliptických křivkách',
        correct: false,
      },
      {
        text: 'problém převodu NP-úplného problému na P-neúplný',
        correct: true,
      },
      {
        text: 'problém diskrétního logaritmu',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Na obrázku je znázorněn',
    img: '/img/kab-2.png',
    options: [
      {
        text: 'jedna runda algoritmu AES',
        correct: false,
      },
      {
        text: 'model proudové šifry',
        correct: false,
      },
      {
        text: 'model RSA',
        correct: false,
      },
      {
        text: 'model proudové šifry',
        correct: false,
      },
      {
        text: 'model elektronického podpisu',
        correct: false,
      },
      {
        text: 'model iterované blokové šifry',
        correct: true,
      },
    ],
  },
  {
    id: 3,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Které(-á) z následujících tvrzení o třídách P a NP jsou pravdivá:',
    img: null,
    options: [
      {
        text: 'je dokázáno, že P=NP',
        correct: false,
      },
      {
        text: 'je dokázáno, že P je podmnožinou NP',
        correct: false,
      },
      {
        text: 'je dokázáno, že P je nadmnožinou NP',
        correct: false,
      },
      {
        text: 'je dokázáno, že P je nadmnožinou NP',
        correct: false,
      },
      {
        text: 's velkou pravděpodobností se NP=2P, ale prokázáno to není',
        correct: false,
      },
      {
        text: 'neexistuje matematický důkaz vztahu P a NP',
        correct: true,
      },
    ],
  },
  {
    id: 4,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Výhodou režimu ECB je:',
    img: null,
    options: [
      {
        text: 'odolnost proti modifikaci bloku',
        correct: false,
      },
      {
        text: 'schopnost realizovat proudovou šifru',
        correct: false,
      },
      {
        text: 'odolnost proti cut-and-paste utoku',
        correct: false,
      },
      {
        text: 'jednoduchá paralelizace dešifrování',
        correct: true,
      },
      {
        text: 'závislost po sobě jdoucích bloků ŠT',
        correct: false,
      },
      {
        text: 'jednoduchá paralelizace šifrování',
        correct: true,
      },
    ],
  },
  {
    id: 5,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Proces ověření oprávnění přístupu k systémovým zdrojům lze označit slovem:',
    img: null,
    options: [
      {
        text: 'nepopiratelnost',
        correct: false,
      },
      {
        text: 'autentizace',
        correct: false,
      },
      {
        text: 'důvěryhodnost',
        correct: false,
      },
      {
        text: 'integrita',
        correct: false,
      },
      {
        text: 'autorizace',
        correct: true,
      },
      {
        text: 'utajení',
        correct: false,
      },
      {
        text: 'zabezpečení',
        correct: false,
      },
    ],
  },
  {
    id: 6,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Ukončit platnost certifikátu X.509 před dosažením data v poli "Not After" lze',
    img: null,
    options: [
      {
        text: 'pomocí protokolu ESP',
        correct: false,
      },
      {
        text: 'nelze',
        correct: false,
      },
      {
        text: 'roztrháním, spálením nebo jinou fyzickou destrukcí originálu certifikátu',
        correct: false,
      },
      {
        text: 'pomocí protokolu OCSP',
        correct: true,
      },
      {
        text: 'doporučeným dopisem na ČTÚ (Český telekomunikační úřad)',
        correct: false,
      },
      {
        text: 'pomocí seznamu CRL',
        correct: true,
      },
    ],
  },
  {
    id: 7,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Kryptologie',
    img: null,
    options: [
      {
        text: 'zkoumá odolnost a zranitelnost kryptosystém',
        correct: false,
      },
      {
        text: 'je návrh a konstrukce kryptografických algoritmů a způsoby jejich využívání',
        correct: false,
      },
      {
        text: 'se zabývá metodami získáváni otevřeného textu z textu šifrového bez znalosti klíče',
        correct: false,
      },
      {
        text: 'není ani jedna z uvedených možností',
        correct: false,
      },
      {
        text: 'je vědní obor zahrnující kryptografii a kryptoanalýzu',
        correct: true,
      },
    ],
  },
  {
    id: 8,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Která operace v rámci jedné rundy je z hlediska bezpečnosti DESu nejdůležitější?',
    img: null,
    options: [
      {
        text: 'prohazování polovin bloků mezi rundam',
        correct: false,
      },
      {
        text: 'přičítání klíčů v K-boxu',
        correct: false,
      },
      {
        text: 'promíchávání v X-boxu',
        correct: false,
      },
      {
        text: 'permutace P-boxu',
        correct: false,
      },
      {
        text: 'substituce S-boxu',
        correct: true,
      },
      {
        text: 'všechny operace jsou stejně důležité',
        correct: false,
      },
    ],
  },
  {
    id: 9,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'Mějme funkci T(n) = 4n^3 + 175n^2 + 2^n + 10n + 99999999, která popisuje časovou složitost řešení nějakého problému. Vyberte ekvivalentní zápis časové složitosti této funkce pomocí O notace (shora neostře ohraničená).',
    img: null,
    options: [
      {
        text: 'jiná správná odpověď',
        correct: false,
      },
      {
        text: 'O(1)',
        correct: false,
      },
      {
        text: 'O(n)',
        correct: false,
      },
      {
        text: 'O(n^3)',
        correct: false,
      },
      {
        text: 'O(n^2)',
        correct: false,
      },
      {
        text: 'O(2^n)',
        correct: true,
      },
    ],
  },
  {
    id: 10,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'Mějme funkci T(n) = 15n3 + 175n^2 + 20n + 100000, která popisuje časovou složitost řešení nějakého problému. Vyberte ekvivalentní zápis časové složitosti této funkce pomocí O notace (shora neostře ohraničená).',
    img: null,
    options: [
      {
        text: 'jiná správná odpověď',
        correct: false,
      },
      {
        text: 'O(1)',
        correct: false,
      },
      {
        text: 'O(n)',
        correct: false,
      },
      {
        text: 'O(n^3)',
        correct: true,
      },
      {
        text: 'O(n^2)',
        correct: false,
      },
      {
        text: 'O(10^n)',
        correct: false,
      },
    ],
  },
  {
    id: 11,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Elektronicky podepsat lze',
    img: null,
    options: [
      {
        text: 'všechny dokumenty MS Office od verze 2007',
        correct: false,
      },
      {
        text: 'pouze textové dokumenty fotmátu TXT',
        correct: false,
      },
      {
        text: 'pouze textové dokumenty fotmátu TXT',
        correct: false,
      },
      {
        text: 'pouze emaily bez přílohy (podle RFC 822)',
        correct: false,
      },
      {
        text: 'všechna digitální data',
        correct: true,
      },
    ],
  },
  {
    id: 12,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Kryptografie',
    img: null,
    options: [
      {
        text: 'zkoumá odolnost a zranitelnost kryptosystémů',
        correct: false,
      },
      {
        text: 'je návrh a konstrukce kryptografických algoritmů a způsoby jejich využívání',
        correct: true,
      },
      {
        text: 'se zabývá metodami získáváni otevřeného textu z textu šifrového bez znalosti klíče',
        correct: false,
      },
      {
        text: 'není ani jedna z uvedených možností',
        correct: false,
      },
      {
        text: 'je vědní obor zahrnující kryptologii a kryptoanalýzu',
        correct: false,
      },
    ],
  },
  {
    id: 13,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Šifrování hovorů v GSM se děje pomocí algoritmu',
    img: null,
    options: [
      {
        text: 'E0',
        correct: false,
      },
      {
        text: 'A0',
        correct: false,
      },
      {
        text: 'RC4',
        correct: false,
      },
      {
        text: 'A3',
        correct: false,
      },
      {
        text: 'A5',
        correct: true,
      },
      {
        text: 'A8',
        correct: false,
      },
    ],
  },
  {
    id: 14,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Operace SubBytes plní v algoritmu AES stejnou roli, jako blok <ZVOLTE> v algoritmu DES',
    img: null,
    options: [
      {
        text: 'X-box',
        correct: false,
      },
      {
        text: 'P-box',
        correct: false,
      },
      {
        text: 'IN-box',
        correct: false,
      },
      {
        text: 'K-box',
        correct: false,
      },
      {
        text: 'E-box',
        correct: false,
      },
      {
        text: 'S-box',
        correct: true,
      },
    ],
  },
  {
    id: 15,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Šifrování symetrickým algoritmem je v porovnání se asymetrickým:',
    img: null,
    options: [
      {
        text: 'srovnatelně rychlé',
        correct: false,
      },
      {
        text: 'přibližně 100x rychlejší',
        correct: true,
      },
      {
        text: 'Asymetrické a sym. kryptosystémy nelze z tohoto hlediska srovnávat',
        correct: false,
      },
      {
        text: 'přibližně dvakrát rychlejší',
        correct: false,
      },
      {
        text: 'přibližně 100x pomalejší',
        correct: false,
      },
      {
        text: 'přibližně dvakrát pomalejší',
        correct: false,
      },
    ],
  },
  {
    id: 16,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Vernamova šifra',
    img: null,
    options: [
      {
        text: 'je výpočetně bezpečná',
        correct: false,
      },
      {
        text: 'se používá v asymetrické kryptografii',
        correct: false,
      },
      {
        text: 'byla prolomena v roce 1917',
        correct: false,
      },
      {
        text: 'je nepodmíněně bezpečná',
        correct: true,
      },
      {
        text: 'je prolomitelná pouze kvantovým počítačem',
        correct: false,
      },
      {
        text: 'je dodnes bezpečná',
        correct: true,
      },
    ],
  },
  {
    id: 19,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'O jaký typ útoku se jedná, pokud má útočník k dispozici: ŠT, šifrovací algoritmus, kryptoanalytikem vybrané OT spolu s odpovídajícími zašifrovanými ŠT ',
    img: null,
    options: [
      {
        text: 'útok se znalostí vybraných OT a ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí adaptivních vybraných OT ',
        correct: false,
      },
      {
        text: 'útok se znalostí ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných OT ',
        correct: true,
      },
      {
        text: 'útok se znalostí ŠT a OT ',
        correct: false,
      },
    ],
  },
  {
    id: 20,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Algoritmus DSA lze použít k: ',
    img: null,
    options: [
      {
        text: 'šifrování ',
        correct: false,
      },
      {
        text: 'výměně klíčů',
        correct: false,
      },
      {
        text: 'podepisování ',
        correct: true,
      },
      {
        text: 'šifrování a podepisování ',
        correct: false,
      },
      {
        text: 'šifrování, podepisování a výměně klíčů ',
        correct: false,
      },
    ],
  },
  {
    id: 21,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Které operace v DESu jsou z hlediska důležitosti nejméně důležité?',
    img: null,
    options: [
      {
        text: 'permutace P-boxu ',
        correct: false,
      },
      {
        text: 'počáteční permutace - IP ',
        correct: true,
      },
      {
        text: 'všechny operace jsou stejně důležité ',
        correct: false,
      },
      {
        text: 'koncová permutace - IP^-1 ',
        correct: true,
      },
      {
        text: 'substituce v S-boxu ',
        correct: false,
      },
      {
        text: 'prohození levé a pravé poloviny bloku po skončení poslední rundy ',
        correct: true,
      },
    ],
  },
  {
    id: 22,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Mezi postranní kanály využívané v kryptoanalýze nepatří: ',
    img: null,
    options: [
      {
        text: 'Časová analýza (Timing analysis) ',
        correct: false,
      },
      {
        text: 'Elektromagnetická analýza (Radiation monitoring) ',
        correct: false,
      },
      {
        text: 'Sociální inženýrství (Social engineering) ',
        correct: true,
      },
      {
        text: 'Analýza chyb (Fault analysis) ',
        correct: false,
      },
      {
        text: 'Odběrová analýza (Power monitoring) ',
        correct: false,
      },
    ],
  },
  {
    id: 23,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Na obrázku je znázorněna: ',
    img: '/img/kab-3.png',
    options: [
      {
        text: 'proudová šifra E0 ',
        correct: false,
      },
      {
        text: 'bloková šifra AES ',
        correct: false,
      },
      {
        text: 'hashovací funkce SHA-1',
        correct: false,
      },
      {
        text: 'bloková šifra RC6 ',
        correct: false,
      },
      {
        text: 'proudová šifra A5 ',
        correct: true,
      },
      {
        text: 'bloková šifra A8 ',
        correct: false,
      },
    ],
  },
  {
    id: 24,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Algoritmus znázorněný na obrázku v každém kroku vygeneruje: ',
    img: '/img/kab-3.png',
    options: [
      {
        text: '3 bity proudu klíče ',
        correct: false,
      },
      {
        text: '3 bajty proudu klíče ',
        correct: false,
      },
      {
        text: '2 bity proudu klíče ',
        correct: false,
      },
      {
        text: '128 bitů proudu klíče ',
        correct: false,
      },
      {
        text: '1 bajt proudu klíče ',
        correct: false,
      },
      {
        text: '1 bit proudu klíče ',
        correct: true,
      },
    ],
  },
  {
    id: 25,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Doporučení IEEE 802.1x se v praxi využívá: ',
    img: null,
    options: [
      {
        text: 'jako autentizační mechanismus v bezdrátových sítích standardu IEEE 802.11 ',
        correct: true,
      },
      {
        text: 'v lokáních sítích realizovaných technologií ADSL ',
        correct: false,
      },
      {
        text: 'v mobilních sítích 2. generace pro autentizaci účastníků ',
        correct: false,
      },
      {
        text: 'jiná správná odpověď ',
        correct: false,
      },
      {
        text: 'v mobilních sítích 3. generace pro šifrování hovorů ',
        correct: false,
      },
      {
        text: 'jako AAA protokol v bezdrátových sítích IEEE 802.16 ',
        correct: false,
      },
    ],
  },
  {
    id: 26,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Alice digitálně podepisuje zprávu pro Boba. Podpis provede: ',
    img: null,
    options: [
      {
        text: 'předložením otisku zprávy certifikační autoritě, která vytvoří digitální podpis ',
        correct: false,
      },
      {
        text: 'zašifrováním otisku zprávy privátním klíčem Alice ',
        correct: true,
      },
      {
        text: 'zašifrováním celé zprávy veřejným klíčem Alice ',
        correct: false,
      },
      {
        text: 'zašifrováním otisku zprávy veřejným klíčem Boba ',
        correct: false,
      },
      {
        text: 'zašifrováním otisku zprávy privátním klíčem Boba ',
        correct: false,
      },
      {
        text: 'předložením celé zprávy certifikační autoritě, která vytvoří digitální podpis ',
        correct: false,
      },
    ],
  },
  {
    id: 27,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'Co, a jak se autentizuje při přihlášení mobilního telefonu do GSM sítě? Pro zjednodušení si pod pojmem GSM síť představte všechny páteřní subsystémy, které tvoří jádro sítě (např. HLR/VLR, MSC, AuC). ',
    img: null,
    options: [
      {
        text: 'SIM karta vůči GSM síti ',
        correct: true,
      },
      {
        text: 'mobilní stanice (telefon) vůči GSM síti ',
        correct: false,
      },
      {
        text: 'GSM síť vůči mobilní stanici (telefonu) ',
        correct: false,
      },
      {
        text: 'GSM síť vůči SIM kartě ',
        correct: false,
      },
      {
        text: 'účastník vůči GSM síti ',
        correct: false,
      },
      {
        text: 'GSM síť vůči účastníkovi ',
        correct: false,
      },
    ],
  },
  {
    id: 28,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Na obrázku je znázorněn ',
    img: '/img/kab-4.png',
    options: [
      {
        text: 'model Diffie-Hellmanova algoritmu ',
        correct: false,
      },
      {
        text: 'model proudové šifry ',
        correct: false,
      },
      {
        text: 'obecný tvar Feistelovy šifry ',
        correct: true,
      },
      {
        text: 'model RSA ',
        correct: false,
      },
      {
        text: 'jedna runda algoritmu AES ',
        correct: false,
      },
      {
        text: 'model elektronického podpisu ',
        correct: false,
      },
    ],
  },
  {
    id: 29,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Na obrázku je znázorněna vnitřní struktura jedné blokové šifry. O jaký algoritmus se jedná ?',
    img: '/img/kab-5.png',
    options: [
      {
        text: 'AES ',
        correct: false,
      },
      {
        text: 'RC4 ',
        correct: false,
      },
      {
        text: 'DES ',
        correct: true,
      },
      {
        text: 'Serpent  ',
        correct: false,
      },
      {
        text: 'A5 ',
        correct: false,
      },
      {
        text: 'RC6 ',
        correct: false,
      },
    ],
  },
  {
    id: 30,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Na obrázku je znázorněna vnitřní struktura jedné blokové šifry. O jaký algoritmus se jedná ? ',
    img: '/img/kab-6.png',
    options: [
      {
        text: 'AES ',
        correct: false,
      },
      {
        text: 'DES  ',
        correct: false,
      },
      {
        text: 'Serpent  ',
        correct: false,
      },
      {
        text: 'RC6  ',
        correct: false,
      },
      {
        text: 'RC4 ',
        correct: false,
      },
      {
        text: 'MARS ',
        correct: true,
      },
    ],
  },
  {
    id: 31,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Bezpečnost algoritmu RSA je založena na obtížnosti řešení problému ',
    img: null,
    options: [
      {
        text: 'ECDLP ',
        correct: false,
      },
      {
        text: 'IFP ',
        correct: true,
      },
      {
        text: 'DSP ',
        correct: false,
      },
      {
        text: 'NSA ',
        correct: false,
      },
      {
        text: 'DLP ',
        correct: false,
      },
      {
        text: 'ECDH ',
        correct: false,
      },
    ],
  },
  {
    id: 32,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'Pro autentizaci se v bezdrátových sítích IEEE 802.16 (WiMAX) mezi klientem a bezdrátovým přístupovým bodem používá protokol: ',
    img: null,
    options: [
      {
        text: 'Kerberos ',
        correct: false,
      },
      {
        text: 'ESP ',
        correct: false,
      },
      {
        text: 'CHAP ',
        correct: false,
      },
      {
        text: 'Radius ',
        correct: false,
      },
      {
        text: 'Tacacs+',
        correct: false,
      },
      {
        text: 'EAP ',
        correct: true,
      },
    ],
  },
  {
    id: 33,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Algoritmus 3DES podporuje klíče o délce (bitů) ',
    img: null,
    options: [
      {
        text: '112',
        correct: false,
      },
      {
        text: '168',
        correct: true,
      },
      {
        text: '64',
        correct: false,
      },
      {
        text: '128',
        correct: false,
      },
      {
        text: '56',
        correct: false,
      },
      {
        text: '256',
        correct: false,
      },
    ],
  },
  {
    id: 34,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question:
      'Nejstarší protokol pro zabezpečení bezdrátových sítí 802.11 využívá šifrovací algoritmus <DOPLŇTE název algoritmu>. Pozn.: Na velikosti písmen v odpovědi nezáleží. ',
    img: null,
    options: [
      {
        text: 'RC4',
        correct: true,
      },
    ],
  },
  {
    id: 35,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question: 'Nejstarší protokol pro zabezpečení bezdrátových sítí 802.11 se jmenuje <DOPLŇTE zkratku velkými písmeny>. ',
    img: null,
    options: [
      {
        text: 'WEP',
        correct: true,
      },
    ],
  },
  {
    id: 36,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question:
      'Protokol TKIP pro zabezpečení bezdrátových sítí 802.11 využívá šifrovací algoritmus <DOPLŇTE název algoritmu>. Pozn.: Na velikosti písmen v odpovědi nezáleží. ',
    img: null,
    options: [
      {
        text: 'RC4',
        correct: true,
      },
    ],
  },
  {
    id: 37,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question: 'Délka výstupu hashovací funkce SHA-512 je <DOPLŇTE> bitů. ',
    img: null,
    options: [
      {
        text: '512',
        correct: true,
      },
    ],
  },
  {
    id: 38,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question: 'Délka výstupu hashovací funkce SHA-256 je <DOPLŇTE> bitů. ',
    img: null,
    options: [
      {
        text: '256',
        correct: true,
      },
    ],
  },
  {
    id: 39,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question: 'Délka výstupu hashovací funkce MD5 je <DOPLŇTE> bitů. ',
    img: null,
    options: [
      {
        text: '128',
        correct: true,
      },
    ],
  },
  {
    id: 40,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question: 'Kolik rund má algoritmus AES pro délku klíče 256 bitů? ',
    img: null,
    options: [
      {
        text: '14',
        correct: true,
      },
    ],
  },
  {
    id: 41,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question: 'Kolik rund má algoritmus AES pro délku klíče 128 bitů? ',
    img: null,
    options: [
      {
        text: '10',
        correct: true,
      },
    ],
  },
  {
    id: 42,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question:
      'Protokol pro šifrování dat v bezdrátových sítích 802.11 založený na proudové šifře RC4 a pracující s dynamickými klíči se jmenuje <DOPLŇTE zkratku velkými písmeny>. ',
    img: null,
    options: [
      {
        text: 'TKIP',
        correct: true,
      },
    ],
  },
  {
    id: 43,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question: 'Délka výstupu hashovací funkce SHA-1 je <DOPLŇTE> bitů. ',
    img: null,
    options: [
      {
        text: '160',
        correct: true,
      },
    ],
  },
  {
    id: 44,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Proces ověření identity nějaké entity se nazývá: ',
    img: null,
    options: [
      {
        text: 'nepopíratelnost ',
        correct: false,
      },
      {
        text: 'autentizace ',
        correct: true,
      },
      {
        text: 'důvěryhodnost ',
        correct: false,
      },
      {
        text: 'integrita ',
        correct: false,
      },
      {
        text: 'autorizace ',
        correct: false,
      },
      {
        text: 'utajení ',
        correct: false,
      },
    ],
  },
  {
    id: 45,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Standard AES podporuje klíče délky (bitů) ',
    img: null,
    options: [
      {
        text: '>1024 ',
        correct: false,
      },
      {
        text: '1024 ',
        correct: false,
      },
      {
        text: '512',
        correct: false,
      },
      {
        text: '384 ',
        correct: false,
      },
      {
        text: '256 ',
        correct: true,
      },
      {
        text: '192 ',
        correct: true,
      },
      {
        text: '168 ',
        correct: false,
      },
      {
        text: '128 ',
        correct: true,
      },
      {
        text: '64 ',
        correct: false,
      },
    ],
  },
  {
    id: 46,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Která bloková šifra má počet rund závislý na velikosti bloku? ',
    img: null,
    options: [
      {
        text: 'Rijndael  ',
        correct: true,
      },
      {
        text: 'Blowfish  ',
        correct: false,
      },
      {
        text: 'DES  ',
        correct: false,
      },
      {
        text: 'RC6  ',
        correct: false,
      },
      {
        text: 'Serpent  ',
        correct: false,
      },
      {
        text: 'MARS  ',
        correct: false,
      },
    ],
  },
  {
    id: 47,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Na obrázku je znázorněna:',
    img: '/img/kab-7.png',
    options: [
      {
        text: 'obecné schéma hashovací funkce  ',
        correct: true,
      },
      {
        text: 'standardizovaná procedura el. podpisu  ',
        correct: false,
      },
      {
        text: 'obecné schéma asymetrického algoritmu  ',
        correct: false,
      },
      {
        text: 'jiná správná odpověď  ',
        correct: false,
      },
      {
        text: 'obecné schéma iterované blokové šifry  ',
        correct: false,
      },
      {
        text: 'obecné schéma autentizačního protokolu  ',
        correct: false,
      },
    ],
  },
  {
    id: 48,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Operace SubBytes v algoritmu AES realizuje ',
    img: null,
    options: [
      {
        text: 'Viniérovu šifru ',
        correct: false,
      },
      {
        text: 'transpozici s neúplnou tabulkou  ',
        correct: false,
      },
      {
        text: 'polyalfabetickou substituční šifru ',
        correct: false,
      },
      {
        text: 'afinní substituční šifru  ',
        correct: true,
      },
      {
        text: 'transpozici s úplnou tabulkou a heslem  ',
        correct: false,
      },
      {
        text: 'afinní transpoziční šifru  ',
        correct: false,
      },
    ],
  },
  {
    id: 49,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'IPsec umožňuje autentizaci pomocí ',
    img: null,
    options: [
      {
        text: 'PSK  ',
        correct: true,
      },
      {
        text: 'RSA ',
        correct: false,
      },
      {
        text: 'certifikátů X.509 ',
        correct: true,
      },
      {
        text: 'AES  ',
        correct: false,
      },
      {
        text: 'HMAC-MD5  ',
        correct: false,
      },
      {
        text: 'HMAC-SHA1  ',
        correct: false,
      },
    ],
  },
  {
    id: 50,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Odolnost vůči získání jiné předlohy (2nd preimage resistance) znamená, že: ',
    img: null,
    options: [
      {
        text: `je výpočetně nemožné systematicky vytvářet dva libovolné různé vstupní texty x a x' pro které platí, že x != x' a zároveň h(x)=h(x') `,
        correct: false,
      },
      {
        text: 'žádná z uvedených odpovědí není správná  ',
        correct: false,
      },
      {
        text: `je výpočetně nemožné nalézt ke vstupu x druhý vstup x' takový, že x' != x a zároveň h(x')=h(x) `,
        correct: true,
      },
      {
        text: `Nelze najít předobraz x' takový, že h(x')=y, když známe pouze h a y y neznáme x' `,
        correct: false,
      },
      {
        text: `je obtížné nalézt x a y taková, že x !=y a zároveň H(x) a H(y) se liší jen v malém počtu bitů `,
        correct: false,
      },
    ],
  },
  {
    id: 51,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'Při šifrované komunikaci s použitím symetrického algoritmu mezi N subjekty bez použití dalších technologií pro distribuci klíčů je potřeba <DOPLŇTE> různých klíčů. Pozn.: Předpokládejte, že pro komunikace mezi dvojící účastníků A,B (A->B a B->A) se použije vždy stejný klíč. ',
    img: null,
    options: [
      {
        text: '2N ',
        correct: false,
      },
      {
        text: 'N(N-1) ',
        correct: false,
      },
      {
        text: ' N(N-1)/2 ',
        correct: true,
      },
      {
        text: '2N-2 ',
        correct: false,
      },
      {
        text: 'N2 ',
        correct: false,
      },
      {
        text: '1024 ',
        correct: false,
      },
    ],
  },
  {
    id: 52,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Informace o použitých kryptografických algoritmech a klíčích je u protokolu IPsec uchovávána v: ',
    img: null,
    options: [
      {
        text: 'RLP  ',
        correct: false,
      },
      {
        text: 'SPD ',
        correct: false,
      },
      {
        text: 'ESP ',
        correct: false,
      },
      {
        text: 'SPI  ',
        correct: false,
      },
      {
        text: 'SAD  ',
        correct: true,
      },
    ],
  },
  {
    id: 53,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Příkladem aktivního útoku na kryptosystém je ',
    img: null,
    options: [
      {
        text: 'útok se znalostí vybraných OT a ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí adaptivních vybraných OT ',
        correct: true,
      },
      {
        text: 'útok se znalostí ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných OT ',
        correct: false,
      },
      {
        text: 'útok se znalostí ŠT a OT ',
        correct: false,
      },
    ],
  },
  {
    id: 54,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'Jak je u protokolu WEP zajištěna integrita přenášených dat proti úmyslným změnám? (jedna odpověď) Poznámka: ověřována je pomocí CRC32, ale zajištěna není nijak',
    img: null,
    options: [
      {
        text: 'pomocí protokolu EAP-TLS ',
        correct: false,
      },
      {
        text: 'pomocí protokolu TKIP ',
        correct: false,
      },
      {
        text: 'není zajištěna ',
        correct: true,
      },
      {
        text: 'pomocí algoritmu CRC32 ',
        correct: false,
      },
      {
        text: 'pomocí protokolu CHAP ',
        correct: false,
      },
      {
        text: 'pomocí algoritmu MIC ',
        correct: false,
      },
    ],
  },
  {
    id: 55,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question: 'Entropie kryptosystému AES, který používá největší možný klíč je <DOPLŇTE ČÍSLO> bitů. ',
    img: null,
    options: [
      {
        text: '256',
        correct: true,
      },
    ],
  },
  {
    id: 56,
    subject: SubjectType.KAB,
    type: QuestionType.OPEN,
    question: 'Entropie kryptosystému DES je <DOPLŇTE ČÍSLO> bitů. ',
    img: null,
    options: [
      {
        text: '56',
        correct: true,
      },
    ],
  },
  {
    id: 57,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Které podmínky musí být splněny, aby Vernamova šifra byla absolutně bezpečnám kryptosystémem? ',
    img: null,
    options: [
      {
        text: 'klíč lze použít maximálně třikrát za rok ',
        correct: false,
      },
      {
        text: 'jiná správná odpověď ',
        correct: true,
      },
      {
        text: 'klíč musí být minimálně o polovinu kratší než délka OT ',
        correct: false,
      },
      {
        text: 'klíč musí být generován v certifikovaném SW na zabezpečeném počítači ',
        correct: false,
      },
      {
        text: 'klíč musí znát pouze odesílatel příjemce a cerfikační autorita ',
        correct: false,
      },
    ],
  },
  {
    id: 58,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Informace o tom, které pakety mají být zabezpečeny je u protokolu IPsec uchovávána v ',
    img: null,
    options: [
      {
        text: 'RLP',
        correct: false,
      },
      {
        text: 'SPD',
        correct: true,
      },
      {
        text: 'ESP',
        correct: false,
      },
      {
        text: 'SPI',
        correct: false,
      },
      {
        text: 'SAD',
        correct: false,
      },
    ],
  },
  {
    id: 59,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Algoritmus RSA lze použít k: ',
    img: null,
    options: [
      {
        text: 'pouze podepisování ',
        correct: false,
      },
      {
        text: 'šifrování a podepisování ',
        correct: true,
      },
      {
        text: 'pouze šifrování ',
        correct: false,
      },
      {
        text: 'šifrování, podepisování a výměně klíčů ',
        correct: false,
      },
      {
        text: 'výměně klíčů a šifrování ',
        correct: false,
      },
      {
        text: 'pouze výměně klíčů ',
        correct: false,
      },
    ],
  },
  {
    id: 60,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Protokol CCSP (Change Cipher Specification Protocol) má u TLS 1.0 na starosti',
    img: null,
    options: [
      {
        text: 'výměnu klíčů',
        correct: false,
      },
      {
        text: 'kompresi přenášených dat',
        correct: false,
      },
      {
        text: 'ohlášení změny používaných algoritmů a klíčů',
        correct: true,
      },
      {
        text: 'šifrování přenášených dat',
        correct: false,
      },
      {
        text: 'dojednání šifrovacích algoritmů',
        correct: false,
      },
      {
        text: 'hlášení chyb',
        correct: false,
      },
    ],
  },
  {
    id: 61,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Protokol IKE zajišťuje',
    img: null,
    options: [
      {
        text: 'šifrování uživatelských dat',
        correct: false,
      },
      {
        text: 'ochranu proti replay útokům',
        correct: false,
      },
      {
        text: 'autentizaci přenášených dat',
        correct: false,
      },
      {
        text: 'se dnes již nepoužívá',
        correct: false,
      },
      {
        text: 'výměnu klíčů pro protokoly AH a ESP',
        correct: true,
      },
    ],
  },
  {
    id: 62,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Diffie-Hellmanův algoritmus lze použít k',
    img: null,
    options: [
      {
        text: 'a.	šifrování',
        correct: false,
      },
      {
        text: 'b.	výměně klíčů',
        correct: true,
      },
      {
        text: 'c.	šifrování, podepisování a výměně klíčů',
        correct: false,
      },
      {
        text: 'd.	šifrování a podepisování',
        correct: false,
      },
      {
        text: 'e.	podepisování',
        correct: false,
      },
    ],
  },
  {
    id: 63,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Která tvrzení jsou pravdivá o protokolu CHAP',
    img: null,
    options: [
      {
        text: 'autentizace může probíhat kdykoliv během spojení',
        correct: true,
      },
      {
        text: 'autentizace zahajuje server',
        correct: true,
      },
      {
        text: 'autentizace zahajuje klient',
        correct: false,
      },
      {
        text: 'jedná se o protokol typu výzva-odpověd',
        correct: true,
      },
      {
        text: 'heslo se přenáší v otevřeném tvaru',
        correct: false,
      },
      {
        text: 'autentizace probíhá pouze na počátku spojení',
        correct: false,
      },
    ],
  },
  {
    id: 64,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Kerberos je',
    img: null,
    options: [
      {
        text: 'aplikace pro elektronický podpis',
        correct: false,
      },
      {
        text: 'steganografický systém',
        correct: false,
      },
      {
        text: 'kryptografické API ve Windows 7',
        correct: false,
      },
      {
        text: 'program pro prolomení protokolu WEP',
        correct: false,
      },
      {
        text: 'síťový autentizační systém',
        correct: true,
      },
      {
        text: 'aplikace pro odposlech zabezpečené komunikace',
        correct: false,
      },
    ],
  },
  {
    id: 65,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Nepopiratelnost',
    img: null,
    options: [
      {
        text: 'je zajištěno šifrovacími kryptografickými algoritmy',
        correct: false,
      },
      {
        text: 'je proces ověření identity entity (člověk, program, systém)',
        correct: false,
      },
      {
        text: 'je stav, kdy subjekt nemůže důvěryhodně popřít své minulé požadavky nebo činy',
        correct: true,
      },
      {
        text: 'je zajištění stavu, kdy je informace dosažitelná pouze autorizovaným subjektům',
        correct: false,
      },
      {
        text: 'má dvě různé formy: verifikaci a identifikaci',
        correct: false,
      },
    ],
  },
  {
    id: 66,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Algoritmus Whirlpool je',
    img: null,
    options: [
      {
        text: 'symetrická bloková šifra',
        correct: false,
      },
      {
        text: 'autentizační protokol',
        correct: false,
      },
      {
        text: 'hashovací funkce',
        correct: true,
      },
      {
        text: 'autorizační protokol',
        correct: false,
      },
      {
        text: 'standardizovaná procedura el. podpisu',
        correct: false,
      },
      {
        text: 'jiná správná odpověď',
        correct: false,
      },
    ],
  },
  {
    id: 67,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Protokol RLP (Record Layer Protocol) má u SSL/TLS na starosti',
    img: null,
    options: [
      {
        text: 'kompresi přenášených dat',
        correct: true,
      },
      {
        text: 'šifrování přenášených dat',
        correct: true,
      },
      {
        text: 'dojednání šifrovacích algoritmů',
        correct: false,
      },
      {
        text: 'hlášení chyb',
        correct: false,
      },
      {
        text: 'ohlášení změny používaných algoritmů a klíčů',
        correct: false,
      },
      {
        text: 'výměnu klíčů',
        correct: false,
      },
    ],
  },
  {
    id: 68,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Protokol RLP (record Layer Protocol) neřeší',
    img: null,
    options: [
      {
        text: 'ohlášení změny používaných algoritmů a klíčů',
        correct: true,
      },
      {
        text: 'výměnu klíčů',
        correct: true,
      },
      {
        text: 'hlášení chyb',
        correct: true,
      },
      {
        text: 'dojednání šifrovacích algoritmů',
        correct: true,
      },
      {
        text: 'kompresi přenášených dat',
        correct: false,
      },
      {
        text: 'šifrování přenášených dat',
        correct: false,
      },
    ],
  },
  {
    id: 69,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Která tvrzení jsou pravdivá o protokolu PAP (Password authentication protocol)',
    img: null,
    options: [
      {
        text: 'autentizace může probíhat kdykoliv během spojení',
        correct: false,
      },
      {
        text: 'autentizace zahajuje server',
        correct: false,
      },
      {
        text: 'autentizace zahajuje klient',
        correct: true,
      },
      {
        text: 'jedná se o protokol typu výzva-odpověď',
        correct: false,
      },
      {
        text: 'heslo se přenáší v otevřeném tvaru',
        correct: true,
      },
      {
        text: 'autentizace probíhá pouze na počátku spojení',
        correct: true,
      },
    ],
  },
  {
    id: 70,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Prokázání totožnosti se odborně nazývá ',
    img: null,
    options: [
      {
        text: 'šifrování ',
        correct: false,
      },
      {
        text: 'šikana policejního státu ',
        correct: false,
      },
      {
        text: 'nepopiratelnost ',
        correct: false,
      },
      {
        text: 'biometrika ',
        correct: false,
      },
      {
        text: 'autorizace ',
        correct: false,
      },
      {
        text: 'autentizace ',
        correct: true,
      },
    ],
  },
  {
    id: 71,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'Schopnost systému zajišťující, že přenášená informace nebyla zničena, ztracena nebo modifikována, respektive detekce takovéto změny se nazývá ',
    img: null,
    options: [
      {
        text: 'zabezpečení ',
        correct: false,
      },
      {
        text: 'důvěryhodnost ',
        correct: false,
      },
      {
        text: 'utajení ',
        correct: false,
      },
      {
        text: 'autentizace ',
        correct: false,
      },
      {
        text: 'nepopiratelnost ',
        correct: false,
      },
      {
        text: 'integrita ',
        correct: true,
      },
      {
        text: 'autorizace  ',
        correct: false,
      },
    ],
  },
  {
    id: 72,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Protokol TKIP používá klíče dlouhé ',
    img: null,
    options: [
      {
        text: '2048',
        correct: false,
      },
      {
        text: '40',
        correct: false,
      },
      {
        text: '1024',
        correct: false,
      },
      {
        text: '128',
        correct: true,
      },
      {
        text: '64',
        correct: false,
      },
      {
        text: '256',
        correct: false,
      },
    ],
  },
  {
    id: 73,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Jak je u protokolu WPA zajištěna integrita přenášených dat proti úmyslným změnám? ',
    img: null,
    options: [
      {
        text: 'Pomocí algoritmu MIC ',
        correct: true,
      },
      {
        text: 'není zajištěna ',
        correct: false,
      },
      {
        text: 'pomocí protokolu CHAP ',
        correct: false,
      },
      {
        text: 'pomocí protokolu TKIP ',
        correct: false,
      },
      {
        text: 'pomocí algoritmu CRC32 ',
        correct: false,
      },
      {
        text: 'pomocí protokolu EAP-TLS ',
        correct: false,
      },
    ],
  },
  {
    id: 74,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Jak je u protokolu WPA2(IEEE 802.11i) zajištěna integrita přenášených dat proti úmyslným změnám? ',
    img: null,
    options: [
      {
        text: 'Pomocí algoritmu CRC32 ',
        correct: false,
      },
      {
        text: 'není zajištěna ',
        correct: false,
      },
      {
        text: 'pomocí protokolu CCMP ',
        correct: true,
      },
      {
        text: 'pomocí protokolu MIC ',
        correct: false,
      },
      {
        text: 'pomocí algoritmu TKIP ',
        correct: false,
      },
      {
        text: 'pomocí protokolu EAP-TLS ',
        correct: false,
      },
    ],
  },
  {
    id: 75,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Nevýhodou režimu ECB je: ',
    img: null,
    options: [
      {
        text: 'velké šíření chyb ',
        correct: false,
      },
      {
        text: 'složitost implementace ',
        correct: false,
      },
      {
        text: 'nemožnost paralelizace šifrování ',
        correct: false,
      },
      {
        text: 'odolnost proti modifikaci bloku ŠT ',
        correct: true,
      },
      {
        text: 'nemožnost paralelizace šifrování ',
        correct: false,
      },
      {
        text: 'pomocí protokolu EAP-TLS ',
        correct: false,
      },
      {
        text: 'možnost realizace cut-and-paste útoku ',
        correct: true,
      },
    ],
  },
  {
    id: 76,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Bezpečnost algoritmu DSA (Digital Signature Algorithm) je založena na obtížnosti řešení problému:',
    img: null,
    options: [
      {
        text: 'NSA ',
        correct: false,
      },
      {
        text: 'IFP ',
        correct: false,
      },
      {
        text: 'DLP ',
        correct: true,
      },
      {
        text: 'RSA ',
        correct: false,
      },
      {
        text: 'ECDH ',
        correct: false,
      },
      {
        text: 'ECDLP ',
        correct: false,
      },
    ],
  },
  {
    id: 77,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Který z následujících režimů činnosti se používá pro autentizaci zpráv? ',
    img: null,
    options: [
      {
        text: 'ECB  ',
        correct: false,
      },
      {
        text: 'OFB  ',
        correct: false,
      },
      {
        text: 'CRT  ',
        correct: false,
      },
      {
        text: 'žádný  ',
        correct: true,
      },
      {
        text: 'CBC ',
        correct: false,
      },
      {
        text: 'CFB ',
        correct: false,
      },
    ],
  },
  {
    id: 78,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Kryptoanalýza ',
    img: null,
    options: [
      {
        text: 'se zabývá metodami získávání otevřeného textu z textu šifrového bez znalosti klíče   ',
        correct: true,
      },
      {
        text: 'není ani jedna z uvedených možností ',
        correct: false,
      },
      {
        text: 'zkoumá odolnost a zranitelnost kryptosystémů ',
        correct: true,
      },
      {
        text: 'je návrh a konstrukce kryptografických algoritmů a způsoby jejich využívání   ',
        correct: false,
      },
      {
        text: 'je vědní obor zahrnující kryptografii a kryptoanalýzu  ',
        correct: false,
      },
    ],
  },
  {
    id: 79,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'O jaký typ útoku se jedná, pokud má útočník k dispozici: ŠT, šifrovací algoritmus, jeden nebo více párů OT-ŠT svázaných klíčem K ',
    img: null,
    options: [
      {
        text: 'útok se znalostí vybraných OT a ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí adaptivních vybraných OT ',
        correct: false,
      },
      {
        text: 'útok se znalostí ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných OT ',
        correct: false,
      },
      {
        text: 'útok se znalostí ŠT a OT ',
        correct: true,
      },
    ],
  },
  {
    id: 80,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'Prozkoumejte obrázek a rozhodněte o tom, kde jsou uloženy informace o tom, který algoritmus a klíč se má použít pro zabezpečení konkrétního spojení u protokolu IPsec. ',
    img: '/img/kab-8.png',
    options: [
      {
        text: 'B',
        correct: false,
      },
      {
        text: 'D',
        correct: false,
      },
      {
        text: 'C',
        correct: false,
      },
      {
        text: 'A',
        correct: true,
      },
    ],
  },
  {
    id: 81,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Jaký je nejbezpečnější způsob zajištění integrity u protokolu WPA2 (IEEE 802.11i)? ',
    img: null,
    options: [
      {
        text: 'pomocí protokolu AES-CCMP ',
        correct: true,
      },
      {
        text: 'pomocí CRC32 ',
        correct: false,
      },
      {
        text: 'pomocí algoritmu MIC ',
        correct: false,
      },
      {
        text: 'pomocí protokolu TKIP ',
        correct: false,
      },
      {
        text: 'pomocí protokolu EAP-ECB ',
        correct: false,
      },
      {
        text: 'pomocí CRC64 ',
        correct: false,
      },
    ],
  },
  {
    id: 82,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Co mají AES a DES společné? ',
    img: null,
    options: [
      {
        text: 'oba algoritmy je možné v režimu OFB provozovat jako proudovou šifru ',
        correct: true,
      },
      {
        text: 'oba algoritmy mají 16 rund ',
        correct: false,
      },
      {
        text: 'oba algoritmy jsou odolné proti lineární kryptoanalýze ',
        correct: false,
      },
      {
        text: 'oba algoritmy jsou blokové šifry ',
        correct: true,
      },
      {
        text: 'oba algoritmy jsou šifry Feistelova typu ',
        correct: false,
      },
      {
        text: 'nemají společného nic ',
        correct: false,
      },
    ],
  },
  {
    id: 83,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Algoritmus ECDH nelze použít k (zvolte nejvýstižnější odpověď): ',
    img: null,
    options: [
      {
        text: 'výměně klíčů ',
        correct: false,
      },
      {
        text: 'šifrování, podepisování a výměně klíčů ',
        correct: false,
      },
      {
        text: 'šifrování ',
        correct: false,
      },
      {
        text: 'podepisování ',
        correct: false,
      },
      {
        text: 'šifrování a podepisování ',
        correct: true,
      },
    ],
  },
  {
    id: 84,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'O jaký typ útoku se jedná, pokud má útočník k dispozici: ŠT, šifrovací algoritmus ',
    img: null,
    options: [
      {
        text: 'útok se znalostí ŠT ',
        correct: true,
      },
      {
        text: 'útok se znalostí ŠT a OT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných OT a ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných PT ',
        correct: false,
      },
      {
        text: 'útok se znalostí adaptivních vybraných OT ',
        correct: false,
      },
    ],
  },
  {
    id: 85,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question:
      'O jaký typ útoku se jedná, pokud má útočník k dispozici: Šifrovací algoritmus, kryptoanalytikem vybrané OT spolu s odpovídajícími zašifrovanými ŠT, údajné ŠT zvolené kryptoanalytikem a k nim příslušející dešifrované OT ',
    img: null,
    options: [
      {
        text: 'útok se znalostí vybraných OT a ŠT ',
        correct: true,
      },
      {
        text: 'útok se znalostí vybraných ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí adaptivních vybraných OT ',
        correct: false,
      },
      {
        text: 'útok se znalostí ŠT ',
        correct: false,
      },
      {
        text: 'útok se znalostí vybraných OT ',
        correct: false,
      },
      {
        text: 'útok se znalostí ŠT a OT ',
        correct: false,
      },
    ],
  },
  {
    id: 86,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Vernamova šifra je absolutně bezpečná, protože: ',
    img: null,
    options: [
      {
        text: 'je založena na problému GCP (Chorionic Gonadotropic Probability), který nelze řešit ani kvantovým počítačem ',
        correct: false,
      },
      {
        text: 'její jednotkový odstup je větší než délka ŠT ',
        correct: true,
      },
      {
        text: 'klíč musí být generován v certifikovaném SW na zabezpečeném počítači ',
        correct: false,
      },
      {
        text: 'obtížnost jejího prolomení leží ve třídě složitosti BQP (Bounded Quantum Polynomial) ',
        correct: false,
      },
      {
        text: 'ji vymysleli v Rusku ',
        correct: false,
      },
      {
        text: 'i v případě dešifrování, kdy vzniklý OT dává smysl, se nemusí jednat o jediný možný smysluplný text ',
        correct: true,
      },
    ],
  },
  {
    id: 87,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'V každé rundě AES se odehrávají následující operace: ',
    img: null,
    options: [
      {
        text: 'AddRoundKey ',
        correct: true,
      },
      {
        text: 'MultiplyConstant ',
        correct: false,
      },
      {
        text: 'SubBytes ',
        correct: true,
      },
      {
        text: 'RandomKeyMix ',
        correct: false,
      },
      {
        text: 'MixColumns ',
        correct: true,
      },
      {
        text: 'ShiftRow ',
        correct: true,
      },
    ],
  },
  {
    id: 88,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Mezi nejpoužívanější proudové šifry patří algoritmy RC4 a A5. Která tvrzení jsou pravdivá? ',
    img: null,
    options: [
      {
        text: 'RC4 vygeneruje v jednom kroku 1 bit proudu klíče  ',
        correct: false,
      },
      {
        text: 'A5 vygeneruje v každém kroku 1 bit proudu klíče  ',
        correct: true,
      },
      {
        text: 'A5 vygeneruje v každém kroku 3 bity proudu klíče  ',
        correct: false,
      },
      {
        text: 'A5 vygeneruje v každém kroku 8 bitů proudu klíče  ',
        correct: false,
      },
      {
        text: 'RC4 vygeneruje v jednom kroku 128 bitů proudu klíče  ',
        correct: false,
      },
      {
        text: 'A5 vygeneruje v každém kroku 128 bitů proudu klíče  ',
        correct: false,
      },
    ],
  },
  {
    id: 89,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Kerchhoffův princip ',
    img: null,
    options: [
      {
        text: 'již dnes neplatí  ',
        correct: false,
      },
      {
        text: 'lze obejít pomocí kvantových počítačů ',
        correct: false,
      },
      {
        text: 'platí pouze pro symetrické algoritmy ',
        correct: false,
      },
      {
        text: 'platí dodnes  ',
        correct: true,
      },
      {
        text: 'platí pouze pro asymetrické algoritmy ',
        correct: false,
      },
    ],
  },
  {
    id: 90,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Steganografie je ',
    img: null,
    options: [
      {
        text: 'vlastnost systému, kdy subjekt nemůže důvěryhodně popřít své minulé požadavky nebo činy  ',
        correct: false,
      },
      {
        text: 'vědní obor zahrnující kryptografii a kryptoanalýzu  ',
        correct: false,
      },
      {
        text: 'schopnost systému chránit přístup k systémovým zdrojům  ',
        correct: false,
      },
      {
        text: 'návrh a konstrukce kryptografických algoritmů a způsoby jejich využívání  ',
        correct: false,
      },
      {
        text: 'věda o skrývání existence zprávy a nikoliv nutně obsahu vlastní zprávy  ',
        correct: true,
      },
    ],
  },
  {
    id: 91,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Jedním ze základních bloků hashovací funkce je kompresní funkce. Kompresní funkci obvykle realizujeme pomocí: ',
    img: null,
    options: [
      {
        text: 'generátory náhodných posloupností ',
        correct: false,
      },
      {
        text: 'proudové šifry  ',
        correct: false,
      },
      {
        text: 'blokové šifry ',
        correct: true,
      },
      {
        text: 'nelineární booleovské funkce ',
        correct: true,
      },
      {
        text: 'HMAC  ',
        correct: false,
      },
      {
        text: 'CMAC ',
        correct: false,
      },
    ],
  },
  {
    id: 92,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Šifrování asymetrickým algoritmem je v porovnání se symetrickým: ',
    img: null,
    options: [
      {
        text: 'srovnatelně rychlé',
        correct: false,
      },
      {
        text: 'přibližně 100x rychlejší',
        correct: false,
      },
      {
        text: 'Asymetrické a sym. kryptosystémy nelze z tohoto hlediska srovnávat',
        correct: false,
      },
      {
        text: 'přibližně dvakrát rychlejší',
        correct: false,
      },
      {
        text: 'přibližně 100x pomalejší',
        correct: true,
      },
      {
        text: 'přibližně dvakrát pomalejší',
        correct: false,
      },
    ],
  },
  {
    id: 93,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Certifikát standardu X.509v3 obsahuje ',
    img: null,
    options: [
      {
        text: 'Privátní klíč certifikační autority ',
        correct: false,
      },
      {
        text: 'Veřejný klíč majitele certifikátu ',
        correct: true,
      },
      {
        text: 'Privátní klíč majitele certifikátu ',
        correct: false,
      },
      {
        text: 'Datum a čas platnosti certifikátu ',
        correct: true,
      },
      {
        text: 'Veřejný klíč certifikační autority ',
        correct: false,
      },
      {
        text: 'Ani jednu z uvedených položek neobsahuje ',
        correct: false,
      },
    ],
  },
  {
    id: 94,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Ve kterých případech je vhodné použít pro vytvoření VPN technologii SSL/TLS? ',
    img: null,
    options: [
      {
        text: 'když chceme zrealizovat remote-access VPN ',
        correct: true,
      },
      {
        text: 'když postačuje nižší úroveň zabezpečení přenosu uživatelského jména/hesla ',
        correct: false,
      },
      {
        text: 'když potřebujeme tunelovat aplikační protokoly používající UDP ',
        correct: false,
      },
      {
        text: 'když chceme zrealizovat site-to-site VPN ',
        correct: false,
      },
      {
        text: 'když se uživatel připojuje z různých sítí, které nejsou pod naší správou ',
        correct: true,
      },
      {
        text: 'když jde o permanentní připojení z jedné lokality ',
        correct: false,
      },
    ],
  },
  {
    id: 95,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Které výroky o protokolech DTLS a SSL jsou pravdivé? ',
    img: null,
    options: [
      {
        text: 'používají stejný transportní protokol ',
        correct: false,
      },
      {
        text: 'k odvození klíčů používají hashovací funkce MD5 a SHA-1 ',
        correct: false,
      },
      {
        text: 'jsou standardizovány v dokumentech RFC ',
        correct: true,
      },
      {
        text: 'jejich součástí je "Alert Protocol" ',
        correct: false,
      },
      {
        text: 'podporují eliptické kryptosystémy (např. ECDH) ',
        correct: true,
      },
      {
        text: 'na odvození klíčů se podílí obě komunikující strany ',
        correct: true,
      },
    ],
  },
  {
    id: 96,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Která tvrzení o "DHCP snoopingu" jsou pravdivá: ',
    img: null,
    options: [
      {
        text:
          'je to útok, kdy útočník vytvoří falešný DHCP server, kterým může klientům vnutit špatné síťové parametry (např. jinou výchozí bránu) ',
        correct: false,
      },
      {
        text: 'je ochrana proti útoku MAC flooding ',
        correct: false,
      },
      {
        text: 'nastavuje se na směrovačích ',
        correct: false,
      },
      {
        text: 'je útok realizovatelný pouze v bezdrátových sítích ',
        correct: false,
      },
      {
        text: 'nastavuje se na přepínačích ',
        correct: true,
      },
      {
        text: 'je to metoda obrany proti DHCP spoofingu  ',
        correct: true,
      },
    ],
  },
  {
    id: 97,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Které výroky o PGP certifikátech a X.509 certifikátech jsou pravdivé ',
    img: null,
    options: [
      {
        text: 'U PGP neobsahují certifikáty žádný podpis ',
        correct: false,
      },
      {
        text: 'PGP certifikát může obsahovat více podpisů ',
        correct: true,
      },
      {
        text: 'X.509 certifikáty nemají žádnou centrální autoritu  ',
        correct: false,
      },
      {
        text: 'U PGP si uživatelé podepisují vzájemně své certifikáty ',
        correct: true,
      },
      {
        text: 'PGP certifikáty nemají žádnou centrální autoritu  ',
        correct: true,
      },
      {
        text: 'X.509 certifikát může obsahovat více podpisů  ',
        correct: false,
      },
    ],
  },
  {
    id: 98,
    subject: SubjectType.KAB,
    type: QuestionType.QUESTION,
    question: 'Kdo se účastní 4-way handshaku? ',
    img: null,
    options: [
      {
        text: 'autentizátor ',
        correct: true,
      },
      {
        text: 'certifikační autorita ',
        correct: false,
      },
      {
        text: 'proxy server ',
        correct: false,
      },
      {
        text: 'suplikant ',
        correct: true,
      },
      {
        text: 'autentizační server ',
        correct: false,
      },
      {
        text: 'směrovač ',
        correct: false,
      },
    ],
  },
];
