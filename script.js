const rooms = {
  1600: {
    chapter: 'Die erste Herberge',
    period: '1600',
    question: 'Was wissen wir über Wiens frühe Herbergen?',
    image: 'assets/rooms/optimized/1600-first-night.jpg',
    traces: [
      {x:72,y:63,label:'Das Bett',title:'Ein Platz für die Nacht',text:'Ein eigenes Gästezimmer war keine Selbstverständlichkeit. In frühen Gasthäusern lagen Schlafen, Essen und Versorgung eng beieinander.'},
      {x:32,y:56,label:'Waschschüssel',title:'Waschen ohne Badezimmer',text:'Fließendes Wasser im Zimmer kam erst viel später. Waschschüssel und Krug gehörten deshalb zur einfachen Grundausstattung.'},
      {x:13,y:72,label:'Reisetruhe',title:'Reisen mit dem Nötigsten',text:'Wer unterwegs war, transportierte Kleidung und persönliche Dinge in robusten Truhen. Reisen dauerte lange und war anstrengend.'}
    ],
    hotel: 'Hotel Stefanie',
    title: 'An diesem Ort werden seit 1600 Gäste beherbergt.',
    lead: 'Am heutigen Standort des Hotel Stefanie ist seit 1600 ein Beherbergungsbetrieb nachweisbar. In der Urkunde wird ein „Gastgeb“, also ein Herbergswirt, genannt. Wie die Räume damals aussahen, ist nicht überliefert.',
    facts: [
      'Die erste urkundliche Erwähnung stammt vom 8. Juli 1600.',
      'Der spätere Gasthof trug den Namen „Zur Weißen Rose“.',
      'Aus dem Gastbetrieb entwickelte sich über viele Umbauten das heutige Hotel Stefanie.'
    ],
    source: 'https://www.hotelstefanie.wien/en/hotel-vienna/oldest-hotel-vienna.html',
    accuracy: 'Illustrative Rekonstruktion. Der Gastbetrieb am Standort ist seit 1600 belegt; die genaue Ausstattung des damaligen Zimmers ist nicht erhalten.',
    colors: ['#f5aa9d','#f7e5c6','#17484a']
  },
  1873: {
    chapter: 'Weltausstellung & Hotelboom',
    period: '1873',
    question: 'Was erwarteten Gäste von einem Luxushotel?',
    image: 'assets/rooms/optimized/1873-grand-arrival.jpg',
    traces: [
      {x:35,y:62,label:'Fauteuil',title:'Wohnen wie im Palais',text:'Das Imperial war ursprünglich ein Palais. Der neue Hotelbetrieb übernahm Räume und Ausstattung, die internationale Gäste beeindrucken sollten.'},
      {x:70,y:45,label:'Doppeltür',title:'Vom Palais zum Hotel',text:'Das Gebäude war ursprünglich das Palais Württemberg. 1873 wurden seine großen Räume für ein Luxushotel adaptiert.'},
      {x:17,y:32,label:'Vorhang',title:'Inszenierte Ankunft',text:'Schwere Textilien, kräftige Farben und repräsentative Salons machten schon das Ankommen zu einem gesellschaftlichen Ereignis.'}
    ],
    hotel: 'Hotel Imperial',
    title: 'Drei Tage vor der Weltausstellung eröffnet das Imperial.',
    lead: 'Am 28. April 1873 wurde aus dem Palais Württemberg das Hotel Imperial. Es richtete sich an wohlhabende internationale Gäste und machte den Prunk eines Adelspalais zum Hotelerlebnis.',
    facts: [
      'Die Weltausstellung gilt als Beginn des modernen Wiener Städtetourismus.',
      'Statt der erwarteten 20 Millionen kamen rund 7,3 Millionen Besucherinnen und Besucher.',
      'Börsenkrach und Cholera überschatteten das Ereignis – viele neue Bauten und Infrastrukturen blieben.'
    ],
    source: 'https://www.wien.info/de/reiseinfos/hotels-unterkunft/hotelboom-weltausstellung-434930',
    highlight: 'Laut Hotelchronik besuchte Kaiser Franz Joseph das Imperial regelmäßig. Dort traf er unter anderem Otto von Bismarck, König Milan von Serbien und den dänischen Kronprinzen.',
    highlightTitle: 'Begegnungen im Hotel Imperial',
    highlightSource: 'https://www.marriott.com/de/hotels/vieil-hotel-imperial-a-luxury-collection-hotel-vienna/history/',
    accuracy: 'Illustrative Rekonstruktion nach der Umwandlung des Palais Württemberg in das Hotel Imperial und der Hotelkultur der Ringstraßenzeit.',
    colors: ['#e83924','#f7e5c6','#075bd8']
  },
  1900: {
    chapter: 'Das Hotel wird Treffpunkt',
    period: '1848–1866',
    question: 'Warum kamen auch Wienerinnen und Wiener ins Hotel?',
    image: 'assets/rooms/optimized/1900-hotel-city.jpg',
    traces: [
      {x:24,y:69,label:'Kaffeehaustisch',title:'Das Hotel wird Treffpunkt',text:'Auch Menschen, die nicht übernachteten, kamen zum Kaffee, zu Sitzungen oder Veranstaltungen ins Haus.'},
      {x:74,y:60,label:'Veranstaltungssaal',title:'Ein öffentlicher Ort',text:'Hotels boten Säle für Konzerte, Vereinsabende und politische Treffen. Sie waren ein Stück Stadt im Haus.'},
      {x:75,y:14,label:'Fotoatelier',title:'Tageslicht für die Fotografie',text:'Im oberen Geschoß lag ein großes Glaswandatelier. Das natürliche Licht war für die damalige Fotografie entscheidend.'}
    ],
    hotel: 'Grand Hotel National',
    title: 'Hier wurde nicht nur geschlafen.',
    lead: 'Das Grand Hotel National war nicht nur zum Übernachten da. Es hatte ein Kaffeehaus, Veranstaltungssäle und ein Fotoatelier. Deshalb kamen auch Wienerinnen und Wiener ins Haus.',
    facts: [
      'Auf jeder Etage gab es Badezimmer, Trinkwasser und Toiletten. Eine Dampfmaschine versorgte das Haus mit warmem und kaltem Wasser.',
      'Konzerte, Vereinsabende und politische Treffen fanden direkt im Hotel statt.',
      'Das große Glaswand-Fotoatelier auf dem Dach ist bis heute erhalten.'
    ],
    source: 'https://magazin.wienmuseum.at/das-grand-hotel-national-in-der-taborstrasse',
    highlight: 'Am 17. März 1866 entstanden im gläsernen Dachatelier berühmte Porträts von Kaiserin Elisabeth. Laut einem zeitgenössischen Bericht lenkte eine Katze ihren Hund „Houseguard“ ab – deshalb schaut er auf den Bildern so aufmerksam.',
    highlightTitle: 'Im Fotoatelier des Grand Hotel National',
    highlightSource: 'https://magazin.wienmuseum.at/das-grand-hotel-national-in-der-taborstrasse',
    accuracy: 'Illustrative Raumkomposition nach den belegten Bereichen Kaffeehaus, Veranstaltungssaal und Glaswand-Fotoatelier des Grand Hotel National.',
    colors: ['#f7e5c6','#17484a','#f5aa9d']
  },
  1938: {
    chapter: 'NS-Zeit: Das Hotel wird enteignet',
    period: '1938',
    question: 'Was geschah mit dem Hotel ab 1938?',
    image: 'assets/rooms/optimized/1938-rupture.jpg',
    traces: [
      {x:40,y:67,label:'Leerer Sessel',title:'Das öffentliche Leben bricht ab',text:'Mit der Verfolgung jüdischer Eigentümer, Vereine und Gäste verschwanden auch vertraute soziale Räume.'},
      {x:27,y:55,label:'Geschlossenes Buch',title:'Enteignung wird Verwaltung',text:'Die sogenannte „Arisierung“ wurde mit Akten, Verträgen und Behörden organisiert. Der Raub bekam eine bürokratische Form.'},
      {x:34,y:31,label:'Leerer Haken',title:'Was fehlt, erzählt auch etwas',text:'Nicht jedes Ereignis hinterlässt einen Gegenstand. Manchmal zeigt gerade ein leerer Platz, dass Menschen vertrieben wurden.'}
    ],
    hotel: 'Grand Hotel National',
    title: '1938 wird das Grand Hotel National enteignet.',
    lead: 'Nach dem „Anschluss“ 1938 wurde das Grand Hotel National im Besitz von Isidor Guttmann „arisiert“, also unter nationalsozialistischer Herrschaft enteignet.',
    facts: [
      '„Arisierung“ bedeutete die systematische Enteignung jüdischer Eigentümerinnen und Eigentümer.',
      'Betroffen waren auch das Kaffeehaus sowie jüdische Vereine, die im Haus ihren Sitz hatten.',
      '1957 wurde das Haus restituiert. Der Hotelbetrieb konnte sich danach nicht mehr dauerhaft etablieren.'
    ],
    source: 'https://magazin.wienmuseum.at/das-grand-hotel-national-in-der-taborstrasse',
    accuracy: 'Illustrative Interpretation. Das leere Zimmer macht den historischen Bruch sichtbar; es ist keine dokumentarische Aufnahme von 1938.',
    colors: ['#131715','#f7e5c6','#e83924']
  },
  1955: {
    chapter: 'Design der 1950er-Jahre',
    period: '1950er',
    question: 'Wie sah ein modernes Wiener Hotel damals aus?',
    image: 'assets/rooms/optimized/1955-new-beginning.jpg',
    traces: [
      {x:60,y:67,label:'Sessel',title:'Eine neue Formensprache',text:'Schlanke Beine, klare Linien und kräftige Farben lösten die schwere Vorkriegsästhetik ab.'},
      {x:48,y:70,label:'Nierentisch',title:'Modern, aber gemütlich',text:'Neue Materialien und runde Formen wirkten leicht, frisch und anders als vor dem Krieg.'},
      {x:82,y:43,label:'Hotelbar',title:'Seit den 1950ern erhalten',text:'Die Bar des Hotel Prinz Eugen hat ihre Gestaltung aus den 1950er-Jahren bis heute weitgehend bewahrt.'}
    ],
    hotel: 'Hotel Prinz Eugen',
    title: 'So sah Wiener Hotelmoderne in den 1950ern aus.',
    lead: 'Das Hotel Prinz Eugen ist ein besonders markantes Beispiel für die Wiener Hotelgestaltung der Wirtschaftswunderjahre. Seine Bar sieht bis heute fast so aus wie in den 1950ern.',
    facts: [
      'WienTourismus nennt das Haus ein besonders markantes Beispiel der Wiener Wirtschaftswunderjahre.',
      'Die schlichte Fassade steht für die klare Formensprache der Zeit.',
      'Die Hotelbar hat sich laut WienTourismus seit den 1950er-Jahren kaum verändert.'
    ],
    source: 'https://www.wien.info/de/kunst-kultur/architektur/mid-century-modern-415842',
    accuracy: 'Illustrative Rekonstruktion, orientiert an der bis heute weitgehend erhaltenen 1950er-Jahre-Hotelbar des Hotel Prinz Eugen.',
    colors: ['#f5aa9d','#075bd8','#f7e5c6']
  },
  1991: {
    chapter: 'Kunst zieht ins Hotel ein',
    period: '1991 bis heute',
    question: 'Wie wurde aus einer Pension ein persönliches Kunsthotel?',
    image: 'assets/rooms/optimized/today-every-room.jpg',
    traces: [
      {x:24,y:69,label:'Designsessel',title:'Kein Zimmer von der Stange',text:'Individuelle Möbel ersetzen die vollkommen einheitliche Hotelausstattung. Das Zimmer bekommt eine eigene Haltung.'},
      {x:54,y:34,label:'Kunstwerk',title:'Kunst im Alltag',text:'Zeitgenössische Kunst hängt nicht in einem getrennten Ausstellungsraum. Sie wird Teil des Wohnens auf Zeit.'},
      {x:53,y:62,label:'Bücher und Lampe',title:'Ein bewohnter Raum',text:'Persönliche Gegenstände, Bücher und unterschiedliche Leuchten lassen Hotelzimmer weniger anonym wirken.'}
    ],
    hotel: 'Altstadt Vienna',
    title: '1991 eröffnet Otto E. Wiesenthal das Altstadt Vienna.',
    lead: 'Otto E. Wiesenthal war beruflich viel unterwegs und kannte viele Hotels, die für ihn austauschbar wirkten. In einer ehemaligen Pension in der Kirchengasse eröffnete er 1991 sein eigenes Haus – mit 24 Zimmern und seiner Kunstsammlung.',
    facts: [
      'Zum Start hatte das Hotel 24 Zimmer. Im Lauf der Jahre wuchs es auf 62 individuell gestaltete Zimmer und Suiten.',
      'Wiesenthals Kunstsammlung war von Anfang an Teil des Hauses – nicht in einem eigenen Museumsraum, sondern dort, wo die Gäste wohnen.',
      'Heute gestalten Künstlerinnen, Designer und Architekturbüros einzelne Zimmer des gewachsenen Hotels.'
    ],
    source: 'https://www.altstadt.at/geschichte/',
    accuracy: 'Illustrative Interpretation der Wiener Kunsthotel-Idee. Das dargestellte Zimmer bildet kein konkretes Zimmer des Altstadt Vienna ab.',
    colors: ['#075bd8','#e83924','#f7e5c6']
  }
};

const years = ['1600','1900','1873','1938','1955','1991'];
const discoveries = new Map(years.map(year => [year,new Set()]));
const roomTakeaways = {
  de:{1600:'Seit 1600 ist hier Beherbergung belegt. Wie die frühen Räume aussahen, wissen wir nicht.',1900:'Das Grand Hotel National war Unterkunft, technisches Experiment und öffentlicher Treffpunkt zugleich.',1873:'Die Weltausstellung löste einen Hotelboom aus. Das Imperial machte ein ehemaliges Palais zum Luxushotel.',1938:'Die NS-Verfolgung traf nicht nur den Eigentümer. Sie zerstörte auch Vereine und öffentliches Leben im Haus.',1955:'Am Prinz Eugen lässt sich konkrete Hotelgestaltung der 1950er-Jahre bis heute ablesen.',1991:'Im Altstadt Vienna wurden Kunstsammlung, individuelle Zimmer und Hotelalltag bewusst miteinander verbunden.'},
  en:{1600:'Lodging has been documented here since 1600. We do not know what the earliest rooms looked like.',1900:'Grand Hotel National was accommodation, a technical experiment and a public meeting place at once.',1873:'The World’s Fair triggered a hotel boom. The Imperial turned a former palace into a luxury hotel.',1938:'Nazi persecution affected more than the owner. It also destroyed associations and public life inside the building.',1955:'Hotel Prinz Eugen still reveals what Viennese hotel design looked like in the 1950s.',1991:'At Altstadt Vienna, an art collection, individual rooms and everyday hotel life were deliberately brought together.'},
  fr:{1600:'Un hébergement est attesté ici depuis 1600. On ignore à quoi ressemblaient les premières chambres.',1900:'Le Grand Hotel National était à la fois un hébergement, une expérience technique et un lieu de rencontre public.',1873:'L’Exposition universelle déclenche un boom hôtelier. L’Imperial transforme un ancien palais en hôtel de luxe.',1938:'La persécution nazie ne touche pas seulement le propriétaire. Elle détruit aussi les associations et la vie publique dans l’immeuble.',1955:'L’Hotel Prinz Eugen permet encore de voir à quoi ressemblait le design hôtelier viennois des années 1950.',1991:'À l’Altstadt Vienna, collection d’art, chambres individuelles et vie quotidienne de l’hôtel sont réunies.'}
};
const sourceNames = {
  de:{1600:'Hotel Stefanie · Hausgeschichte',1900:'Wien Museum Magazin',1873:'WienTourismus · Hotelboom 1873',1938:'Wien Museum Magazin',1955:'WienTourismus · Mid-Century Modern',1991:'Altstadt Vienna · Hausgeschichte'},
  en:{1600:'Hotel Stefanie · Hotel history',1900:'Wien Museum Magazine',1873:'Vienna Tourist Board · 1873 hotel boom',1938:'Wien Museum Magazine',1955:'Vienna Tourist Board · Mid-Century Modern',1991:'Altstadt Vienna · Hotel history'},
  fr:{1600:'Hotel Stefanie · Histoire de l’hôtel',1900:'Magazine du Wien Museum',1873:'Office de tourisme de Vienne · Boom hôtelier de 1873',1938:'Magazine du Wien Museum',1955:'Office de tourisme de Vienne · Mid-Century Modern',1991:'Altstadt Vienna · Histoire de l’hôtel'}
};
const roomExtras = {
  en: {
    1600:{period:'1600',question:'What do we know about Vienna’s early inns?',title:'Guests have been welcomed on this site since 1600.',lead:'A lodging business has been documented on the site of today’s Hotel Stefanie since 1600. The record names a “Gastgeb”, an innkeeper. We do not know exactly what the rooms looked like.',facts:['The first known record dates from 8 July 1600.','The later inn was called “Zur Weißen Rose”.','Over many alterations, the lodging house developed into today’s Hotel Stefanie.']},
    1873:{period:'1873',hotel:'Hotel Imperial',chapter:'World’s Fair & hotel boom',question:'What did guests expect from a luxury hotel?',title:'The Imperial opens three days before the World’s Fair.',lead:'On 28 April 1873, the former Palais Württemberg became Hotel Imperial. It catered to wealthy international guests and turned the splendour of an aristocratic palace into a hotel experience.',highlightTitle:'Meetings at Hotel Imperial',highlight:'According to the hotel chronicle, Emperor Franz Joseph regularly visited the Imperial. There he met Otto von Bismarck, King Milan of Serbia and the Danish Crown Prince.'},
    1900:{period:'1848–1866',chapter:'The hotel becomes a meeting place',question:'Why did people from Vienna come here too?',lead:'The Grand Hotel National was more than a place to sleep. It had a café, event halls and a photo studio. People from Vienna came here too.',highlightTitle:'Inside the Grand Hotel National photo studio',highlight:'On 17 March 1866, famous portraits of Empress Elisabeth were made in the glass studio on the roof. A report from the time says a cat distracted her dog Houseguard. That is why he looks so alert in the pictures.'},
    1938:{period:'1938',chapter:'Nazi rule: the hotel is expropriated',question:'What happened to the hotel in 1938?',title:'In 1938, the Grand Hotel National is expropriated.',lead:'After the Nazi annexation in 1938, the Grand Hotel National, owned by Isidor Guttmann, was “Aryanised” – expropriated under National Socialist rule.'},
    1955:{period:'The 1950s',chapter:'1950s hotel design',question:'What did a modern Viennese hotel look like?',title:'This is what Viennese hotel modernism looked like in the 1950s.',lead:'Hotel Prinz Eugen is a striking example of Viennese hotel design during the post-war boom. Its bar still looks much as it did in the 1950s.',facts:['Vienna Tourist Board calls it a particularly striking hotel from the post-war boom years.','Its restrained façade reflects the clean formal language of the period.','According to Vienna Tourist Board, the hotel bar has barely changed since the 1950s.']},
    1991:{period:'1991 to today',chapter:'Art moves into the hotel',question:'How did a former guesthouse become a personal art hotel?',title:'Otto E. Wiesenthal opens Altstadt Vienna in 1991.',lead:'Otto E. Wiesenthal travelled frequently for work and knew many hotels that felt interchangeable to him. In 1991, he opened his own hotel in a former guesthouse on Kirchengasse, with 24 rooms and his art collection.',facts:['The hotel opened with 24 rooms and later grew to 62 individually designed rooms and suites.','Wiesenthal’s art collection was part of the house from the start – not in a separate museum space, but where guests stay.','Today, artists, designers and architecture studios shape individual rooms within the evolving hotel.']}
  },
  fr: {
    1600:{period:'1600',question:'Que sait-on des premières auberges de Vienne ?',title:'Des hôtes sont accueillis ici depuis 1600.',lead:'Un établissement d’hébergement est attesté à l’emplacement de l’actuel Hotel Stefanie depuis 1600. Le document mentionne un « Gastgeb », c’est-à-dire un aubergiste. On ignore à quoi ressemblaient exactement les chambres.',facts:['Le premier document connu date du 8 juillet 1600.','L’auberge porta plus tard le nom « Zur Weißen Rose ».','Au fil des transformations, l’auberge est devenue l’actuel Hotel Stefanie.']},
    1873:{period:'1873',hotel:'Hotel Imperial',chapter:'Exposition universelle & nouveaux hôtels',question:'Qu’attendait-on d’un hôtel de luxe ?',title:'L’Imperial ouvre trois jours avant l’Exposition universelle.',lead:'Le 28 avril 1873, l’ancien palais Württemberg devient l’Hotel Imperial. Il s’adresse à une clientèle internationale fortunée et transforme le faste d’un palais aristocratique en expérience hôtelière.',highlightTitle:'Rencontres à l’Hotel Imperial',highlight:'Selon la chronique de l’hôtel, l’empereur François-Joseph fréquentait régulièrement l’Imperial. Il y a notamment rencontré Otto von Bismarck, le roi Milan de Serbie et le prince héritier du Danemark.'},
    1900:{period:'1848–1866',chapter:'L’hôtel devient un lieu de rencontre',question:'Pourquoi les Viennois venaient-ils eux aussi ?',lead:'Le Grand Hotel National ne servait pas uniquement à dormir. Il abritait un café, des salles de réception et un atelier photo. Les Viennois y venaient eux aussi.',highlightTitle:'Dans l’atelier photo du Grand Hotel National',highlight:'Le 17 mars 1866, de célèbres portraits de l’impératrice Élisabeth ont été réalisés dans l’atelier vitré du toit. Un récit de l’époque raconte qu’un chat a distrait son chien Houseguard. Voilà pourquoi il semble si attentif sur les photos.'},
    1938:{period:'1938',chapter:'Sous le nazisme, l’hôtel est exproprié',question:'Qu’est-il arrivé à l’hôtel en 1938 ?',title:'En 1938, le Grand Hotel National est exproprié.',lead:'Après l’« Anschluss » de 1938, le Grand Hotel National, propriété d’Isidor Guttmann, est « aryanisé », c’est-à-dire exproprié sous le régime national-socialiste.'},
    1955:{period:'Les années 1950',chapter:'Le design hôtelier des années 1950',question:'À quoi ressemblait un hôtel viennois moderne ?',title:'Voici à quoi ressemblait la modernité hôtelière viennoise des années 1950.',lead:'L’Hotel Prinz Eugen est un exemple marquant du design hôtelier viennois des années de prospérité d’après-guerre. Son bar ressemble encore beaucoup à celui des années 1950.',facts:['L’Office de tourisme de Vienne le présente comme un exemple particulièrement marquant des années de prospérité d’après-guerre.','Sa façade sobre reflète le langage formel clair de l’époque.','Selon l’Office de tourisme de Vienne, le bar a très peu changé depuis les années 1950.']},
    1991:{period:'De 1991 à aujourd’hui',chapter:'L’art entre à l’hôtel',question:'Comment une ancienne pension est-elle devenue un hôtel d’art personnel ?',title:'Otto E. Wiesenthal ouvre l’Altstadt Vienna en 1991.',lead:'Otto E. Wiesenthal voyageait souvent pour son travail et connaissait beaucoup d’hôtels qui lui semblaient interchangeables. En 1991, il a ouvert son propre hôtel dans une ancienne pension de la Kirchengasse, avec 24 chambres et sa collection d’art.',facts:['L’hôtel ouvre avec 24 chambres, puis s’agrandit jusqu’à compter 62 chambres et suites toutes différentes.','La collection d’art de Wiesenthal faisait partie de la maison dès le début, non pas dans un musée séparé, mais là où vivent les hôtes.','Aujourd’hui, des artistes, designers et agences d’architecture conçoivent certaines chambres de cet hôtel qui s’est développé au fil du temps.']}
  }
};
const facade = document.querySelector('.facade');
const chapter = document.querySelector('.chapter');
const chapterRoom = document.querySelector('.chapter-room');
const roomPanLayer = document.querySelector('.room-pan-layer');
const traceCard = document.querySelector('.trace-card');
const traceLayer = document.querySelector('.object-traces');
const portal = document.querySelector('.window-portal');
const portalImage = portal.querySelector('img');
const finale = document.querySelector('.finale');
const soundToggle = document.querySelector('.sound-toggle');
const prologue = document.querySelector('.prologue');
const languageSelect = document.querySelector('.language-picker select');
let currentYear = '1873';
let currentLang = localStorage.getItem('hotel-wien-language') || 'de';
let soundOn = false;
let currentSoundScene = 'facade';
const audioLibrary = {
  street: makeAudio('assets/audio/vienna-tram.mp3', true, .075),
  fire: makeAudio('assets/audio/fireplace.mp3', true, .055),
  cafe: makeAudio('assets/audio/cafe.mp3', true, .06),
  wood: makeAudio('assets/audio/wood-creak.mp3', false, .22),
  paper: makeAudio('assets/audio/paper.mp3', false, .16),
  glass: makeAudio('assets/audio/glass.mp3', false, .2),
  camera: makeAudio('assets/audio/camera.mp3', false, .19)
};

function makeAudio(src, loop, volume) {
  const audio = new Audio(src);
  audio.loop = loop;
  audio.preload = loop ? 'metadata' : 'auto';
  audio.volume = volume;
  return audio;
}

function roomFor(year) {
  const base = rooms[year];
  const translated = HOTEL_I18N[currentLang].rooms?.[year];
  if (!translated) return base;
  return {...base,...translated,...roomExtras[currentLang]?.[year],traces:translated.traces.map((trace,index)=>({...base.traces[index],label:trace[0],title:trace[1],text:trace[2]}))};
}

function openRoom(year) {
  const room = roomFor(year);
  currentYear = year;
  const roomIndex = years.indexOf(year);
  const nextYear = years[(roomIndex + 1) % years.length];
  document.querySelectorAll('.window').forEach(button => button.classList.toggle('active', button.dataset.year === year));
  const ui = HOTEL_I18N[currentLang].ui;
  chapter.querySelector('.chapter-index').textContent = `${String(roomIndex + 1).padStart(2, '0')} / ${String(years.length).padStart(2, '0')} · ${room.period}`;
  chapter.querySelector('.chapter-hotel').textContent = room.hotel;
  chapter.querySelector('h1').textContent = room.title;
  chapter.querySelector('.chapter-lead').textContent = room.lead;
  chapter.querySelector('.chapter-question').textContent = room.question;
  const highlight = chapter.querySelector('.chapter-highlight');
  highlight.hidden = !room.highlight;
  highlight.open = false;
  chapter.querySelector('.chapter-more').open = false;
  if (room.highlight) {
    highlight.querySelector('strong').textContent = room.highlightTitle;
    highlight.querySelector('p').textContent = room.highlight;
    highlight.querySelector('a').textContent = ui.highlightMore;
    highlight.querySelector('a').href = room.highlightSource || room.source;
  }
  chapter.querySelector('ul').innerHTML = room.facts.map(fact => `<li>${fact}</li>`).join('');
  chapter.querySelector('.chapter-source').href = room.source;
  chapter.querySelector('.chapter-accuracy').textContent = room.accuracy;
  chapter.querySelector('.chapter-source-name').textContent = sourceNames[currentLang][year];
  chapter.querySelector('.chapter-image').src = room.image;
  traceCard.classList.remove('visible');
  roomPanLayer.classList.remove('focused');
  roomPanLayer.classList.remove('entering');
  void roomPanLayer.offsetWidth;
  roomPanLayer.classList.add('entering');
  setTimeout(() => roomPanLayer.classList.remove('entering'), 1400);
  roomPanLayer.style.setProperty('--look-x', '0px');
  roomPanLayer.style.setProperty('--look-y', '0px');
  const traceWord = currentLang === 'de' ? 'Detail' : currentLang === 'fr' ? 'Détail' : 'Detail';
  traceLayer.innerHTML = room.traces.map((trace,index) => `<button class="trace-dot" style="--x:${trace.x}%;--y:${trace.y}%;--delay:${index * .18}s" data-index="${index}" aria-label="${traceWord} ${index + 1}: ${trace.label}"><i>${index + 1}</i><span>${trace.label}</span></button>`).join('');
  chapter.querySelector('.chapter-next').textContent = roomIndex === years.length - 1 ? ui.finaleNext : `${ui.next}: ${roomFor(nextYear).hotel}`;
  chapter.querySelector('.chapter-more-label').textContent = ui.more;
  chapterRoom.style.setProperty('--room-a', room.colors[0]);
  chapterRoom.style.setProperty('--room-b', room.colors[1]);
  chapterRoom.style.setProperty('--room-c', room.colors[2]);
  chapterRoom.dataset.year = year;
  chapterRoom.classList.remove('effect-step-1','effect-step-2','effect-step-3','trace-effect-0','trace-effect-1','trace-effect-2');
  updateDiscoveryState();
  chapter.classList.add('open');
  chapter.setAttribute('aria-hidden', 'false');
  facade.setAttribute('aria-hidden', 'true');
  chapter.querySelector('.chapter-close').focus({preventScroll:true});
  setSoundScene(year);
}

function discoveryCopy(found,total) {
  if (currentLang === 'en') return found === total ? 'All three details viewed.' : `${found} of ${total} details explored`;
  if (currentLang === 'fr') return found === total ? 'Les trois détails ont été vus.' : `${found} détail${found === 1 ? '' : 's'} sur ${total} découvert${found === 1 ? '' : 's'}`;
  return found === total ? 'Alle drei Details angesehen.' : `${found} von ${total} Details entdeckt`;
}

function updateDiscoveryState() {
  const found = discoveries.get(currentYear);
  const total = roomFor(currentYear).traces.length;
  traceLayer.querySelectorAll('.trace-dot').forEach(dot => dot.classList.toggle('seen',found.has(Number(dot.dataset.index))));
  chapterRoom.classList.toggle('effect-step-1',found.size >= 1);
  chapterRoom.classList.toggle('effect-step-2',found.size >= 2);
  chapterRoom.classList.toggle('effect-step-3',found.size >= 3);
  const help = chapter.querySelector('.trace-help');
  help.id = 'trace-progress';
  help.textContent = discoveryCopy(found.size,total);
  help.classList.toggle('complete',found.size === total);
  const takeaway = chapter.querySelector('.chapter-takeaway');
  takeaway.textContent = roomTakeaways[currentLang][currentYear];
  takeaway.hidden = found.size !== total;
  const next = chapter.querySelector('.chapter-next');
  next.disabled = false;
  next.setAttribute('aria-describedby','trace-progress');
  document.querySelector(`.window[data-year="${currentYear}"]`)?.classList.toggle('complete',found.size === total);
}

traceLayer.addEventListener('click', event => {
  const button = event.target.closest('.trace-dot');
  if (!button) return;
  const trace = roomFor(currentYear).traces[Number(button.dataset.index)];
  roomPanLayer.style.setProperty('--focus-x', `${trace.x}%`);
  roomPanLayer.style.setProperty('--focus-y', `${trace.y}%`);
  roomPanLayer.classList.add('focused');
  const traceIndex = Number(button.dataset.index);
  discoveries.get(currentYear).add(traceIndex);
  chapterRoom.classList.add(`trace-effect-${traceIndex}`);
  traceCard.querySelector('small').textContent = `${roomFor(currentYear).hotel} · ${trace.label}`;
  traceCard.querySelector('h2').textContent = trace.title;
  traceCard.querySelector('p').textContent = trace.text;
  traceCard.classList.add('visible');
  updateDiscoveryState();
});

document.querySelector('.trace-close').addEventListener('click', () => {traceCard.classList.remove('visible');roomPanLayer.classList.remove('focused')});

chapterRoom.addEventListener('pointermove', event => {
  if (roomPanLayer.classList.contains('focused')) return;
  const rect = chapterRoom.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - .5) * -18;
  const y = ((event.clientY - rect.top) / rect.height - .5) * -12;
  roomPanLayer.style.setProperty('--look-x', `${x}px`);
  roomPanLayer.style.setProperty('--look-y', `${y}px`);
});
chapterRoom.addEventListener('pointerleave', () => {
  roomPanLayer.style.setProperty('--look-x', '0px');
  roomPanLayer.style.setProperty('--look-y', '0px');
});

function closeRoom() {
  chapter.classList.remove('open');
  chapter.classList.remove('from-portal');
  chapter.setAttribute('aria-hidden', 'true');
  facade.setAttribute('aria-hidden', 'false');
  document.querySelector(`.window[data-year="${currentYear}"]`).focus({preventScroll:true});
  setSoundScene('facade');
}

function enterRoom(button) {
  const room = rooms[button.dataset.year];
  const rect = button.getBoundingClientRect();
  portalImage.src = room.image;
  portal.style.setProperty('--portal-top', `${rect.top}px`);
  portal.style.setProperty('--portal-right', `${innerWidth - rect.right}px`);
  portal.style.setProperty('--portal-bottom', `${innerHeight - rect.bottom}px`);
  portal.style.setProperty('--portal-left', `${rect.left}px`);
  portal.classList.remove('opening');
  void portal.offsetWidth;
  portal.classList.add('opening');
  playDoorSound();
  setTimeout(() => {
    chapter.classList.add('from-portal');
    openRoom(button.dataset.year);
    portal.classList.remove('opening');
  }, 780);
}

document.querySelectorAll('.window').forEach(button => button.addEventListener('click', () => enterRoom(button)));
document.querySelector('.chapter-close').addEventListener('click', closeRoom);
document.querySelector('.chapter-next').addEventListener('click', () => {
  if (currentYear === years[years.length - 1]) {
    chapter.classList.remove('open');
    chapter.setAttribute('aria-hidden', 'true');
    finale.classList.add('open');
    finale.setAttribute('aria-hidden', 'false');
    playFinaleSound();
    return;
  }
  const next = years[(years.indexOf(currentYear) + 1) % years.length];
  openRoom(next);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && chapter.classList.contains('open')) closeRoom();
});

function centerFacade() {
  facade.scrollLeft = 0;
  facade.scrollTop = 0;
}

let facadeDrag = null;

facade.addEventListener('pointerdown', event => {
  if (event.button !== 0 || event.target.closest('button, a, select, label')) return;
  facadeDrag = {
    pointerId:event.pointerId,
    x:event.clientX,
    y:event.clientY,
    left:facade.scrollLeft,
    top:facade.scrollTop
  };
  facade.classList.add('is-dragging');
  facade.setPointerCapture(event.pointerId);
});

facade.addEventListener('pointermove', event => {
  if (!facadeDrag || event.pointerId !== facadeDrag.pointerId) return;
  facade.scrollLeft = facadeDrag.left - (event.clientX - facadeDrag.x);
  facade.scrollTop = facadeDrag.top - (event.clientY - facadeDrag.y);
});

function stopFacadeDrag(event) {
  if (!facadeDrag || event.pointerId !== facadeDrag.pointerId) return;
  facadeDrag = null;
  facade.classList.remove('is-dragging');
  if (facade.hasPointerCapture(event.pointerId)) facade.releasePointerCapture(event.pointerId);
}

facade.addEventListener('pointerup', stopFacadeDrag);
facade.addEventListener('pointercancel', stopFacadeDrag);
window.addEventListener('resize', centerFacade);

function applyLanguage(lang) {
  currentLang = HOTEL_I18N[lang] ? lang : 'de';
  localStorage.setItem('hotel-wien-language', currentLang);
  document.documentElement.lang = currentLang;
  languageSelect.value = currentLang;
  document.querySelectorAll('.prologue-languages button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === currentLang)));
  const ui = HOTEL_I18N[currentLang].ui;
  document.querySelector('.facade-title span').textContent = ui.subtitle;
  document.querySelector('.facade-help').textContent = matchMedia('(max-width: 760px)').matches ? ui.drag : ui.choose;
  document.querySelector('.facade-intro strong').textContent = ui.introTitle;
  document.querySelector('.facade-intro p').textContent = ui.introText;
  document.querySelector('.prologue-copy>p').textContent = ui.prologueKicker;
  document.querySelector('.prologue-copy h1').textContent = ui.prologueTitle;
  document.querySelector('.prologue-copy>strong').textContent = ui.prologuePromise;
  document.querySelector('.prologue-copy>span').textContent = ui.prologueBody;
  document.querySelector('[data-sound="on"]').textContent = ui.startSound;
  document.querySelector('[data-sound="off"]').textContent = ui.startSilent;
  document.querySelector('.chapter-close').textContent = ui.back;
  document.querySelector('.trace-help').textContent = ui.traces;
  traceLayer.setAttribute('aria-label', ui.detailsLabel);
  document.querySelector('.chapter-source').textContent = ui.source;
  document.querySelector('.source-label').textContent = ui.sourceLabel;
  document.querySelector('.finale-copy>p').textContent = ui.finaleKicker;
  document.querySelector('.finale-copy h1').textContent = ui.finaleTitle;
  document.querySelector('.finale-copy>strong').textContent = ui.finaleLine;
  document.querySelector('.finale-home').textContent = ui.back;
  document.querySelector('.finale-replay').textContent = ui.replay;
  soundToggle.querySelector('span').textContent = soundOn ? ui.soundOn : ui.soundOff;
  document.querySelectorAll('.window').forEach(button => {
    const year = button.dataset.year;
    const room = roomFor(year);
    button.querySelector('span').textContent = room.chapter;
    if (year === '1900') button.querySelector('b').textContent = ui.around1900;
    if (year === '1991') button.querySelector('b').textContent = ui.today;
  });
  if (chapter.classList.contains('open')) openRoom(currentYear);
}

languageSelect.addEventListener('change', event => applyLanguage(event.target.value));
document.querySelectorAll('.prologue-languages button').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
applyLanguage(currentLang);

const sceneAmbience = {facade:'street',1600:'fire',1900:'cafe',1873:'street',1938:null,1955:'cafe',1991:null,finale:'street'};

function stopAmbience() {
  ['street','fire','cafe'].forEach(name => {
    const audio = audioLibrary[name];
    audio.pause();
    audio.currentTime = 0;
  });
}

function setSoundScene(scene) {
  currentSoundScene = String(scene);
  stopAmbience();
  if (!soundOn || document.hidden) return;
  const name = sceneAmbience[currentSoundScene];
  if (!name) return;
  const audio = audioLibrary[name];
  if (name === 'street') audio.currentTime = Math.min(8, Math.max(0, audio.duration || 8));
  audio.play().catch(() => {});
}

function setSound(next) {
  soundOn = next;
  soundToggle.setAttribute('aria-pressed', String(soundOn));
  const ui = HOTEL_I18N[currentLang].ui;
  soundToggle.querySelector('span').textContent = soundOn ? ui.soundOn : ui.soundOff;
  setSoundScene(currentSoundScene);
}

function playOneShot(name, rate=1) {
  if (!soundOn || !audioLibrary[name]) return;
  const sound = audioLibrary[name].cloneNode();
  sound.volume = audioLibrary[name].volume;
  sound.playbackRate = rate;
  sound.play().catch(() => {});
}

function playDoorSound(){ playOneShot('wood', .92); }
function playTraceSound(index) {
  const map = {
    1600:['wood','paper','wood'],
    1900:['glass','paper','camera'],
    1873:['wood','wood','paper'],
    1938:[null,'paper',null],
    1955:['wood','glass','glass'],
    1991:['wood','paper','paper']
  };
  const sound = map[currentYear]?.[index];
  if (sound) playOneShot(sound, .96 + index * .025);
}
function playFinaleSound(){ setSoundScene('finale'); }

soundToggle.addEventListener('click',()=>setSound(!soundOn));
traceLayer.addEventListener('click',event=>{const dot=event.target.closest('.trace-dot');if(dot)playTraceSound(Number(dot.dataset.index))});
document.querySelector('.finale-home').addEventListener('click',()=>{finale.classList.remove('open');finale.setAttribute('aria-hidden','true');facade.setAttribute('aria-hidden','false');setSoundScene('facade')});
document.querySelector('.finale-replay').addEventListener('click',()=>{finale.classList.remove('open');finale.setAttribute('aria-hidden','true');facade.setAttribute('aria-hidden','false');facade.classList.remove('replay');void facade.offsetWidth;facade.classList.add('replay');setSoundScene('facade')});

document.querySelectorAll('.prologue-start').forEach(startButton => startButton.addEventListener('click', () => {
  setSound(startButton.dataset.sound === 'on');
  setSoundScene('facade');
  prologue.classList.add('leaving');
  facade.removeAttribute('inert');
  facade.setAttribute('aria-hidden', 'false');
  soundToggle.hidden = false;
  document.body.classList.add('waking');
  requestAnimationFrame(centerFacade);
  setTimeout(() => document.body.classList.add('house-awake'), 1500);
  setTimeout(() => {prologue.hidden = true}, 1100);
}));

document.addEventListener('visibilitychange', () => setSoundScene(currentSoundScene));
