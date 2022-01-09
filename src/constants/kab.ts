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
        correct: true,
      },
    ],
  },
];
