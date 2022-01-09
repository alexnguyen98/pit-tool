import { QuestionT, SubjectType } from '../types';

export const KAB_QUESTIONS: QuestionT[] = [
  {
    id: 0,
    subject: SubjectType.KAB,
    question: null,
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
        correct: true,
      },
    ],
  },
  {
    id: 2,
    subject: SubjectType.KAB,
    question: null,
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
];
