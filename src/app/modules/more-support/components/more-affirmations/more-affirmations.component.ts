import { Component, OnInit } from '@angular/core';

import {
  rotateInDownLeftOnEnterAnimation,
  rollInAnimation,
  zoomInLeftAnimation,
  zoomInDownOnEnterAnimation,
  hueRotateAnimation,
  zoomInUpOnEnterAnimation,
  rubberBandAnimation,
  flashAnimation,
  fadeInOnEnterAnimation,
  rubberBandOnEnterAnimation,
  rotateInOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-more-affirmations',
  templateUrl: './more-affirmations.component.html',
  styleUrls: ['./more-affirmations.component.scss'],
  animations: [
    rotateInDownLeftOnEnterAnimation({ anchor: 'enter' }),
    rotateInOnEnterAnimation({ anchor: 'enter1', delay: 1000}),
    zoomInDownOnEnterAnimation({ anchor: 'enterLetterAnim1' }),
    fadeInOnEnterAnimation({ anchor: 'enterLetterAnim2' }),
    zoomInUpOnEnterAnimation({ anchor: 'enterLetterAnim3' }),
    rollInAnimation({ anchor: 'letterAnim1' }),
    zoomInLeftAnimation({ anchor: 'letterAnim2' }),
    rubberBandAnimation({ anchor: 'letterAnim3' }),
    hueRotateAnimation({ anchor: 'hueLetter', duration: 500 }),
    flashAnimation({ anchor: 'flash' }),
    rubberBandOnEnterAnimation({ anchor: 'btnEnter', delay: 2250 }),
    fadeInOnEnterAnimation({ anchor: 'btnEnterFadeIn', delay: 1250, duration: 500 })
  ]
})
export class MoreAffirmationsComponent implements OnInit {
  private static counter = 0;
  animationState = false;
  hueState = false;
  flashState = false;

  private affirmations = [
    {
      text1: 'Ich bin willkommen.',
      text2: 'Ich genüge mir immer.',
      text3: 'Ich bin ein liebenswerter Mensch.'
    },
    {
      text1: 'Ich brauche nichts zu tun um geliebt zu werden.',
      text2: 'Ich bin unschuldig.',
      text3: 'Ich bin wertvoll.'
    },   {
      text1: 'Ich habe ein Recht auf meine Meinung.',
      text2: 'Ich habe ein Recht auf meine Gefühle.',
      text3: 'In mir finde ich alles was ich brauche.'
    },
    {
      text1: 'Ich bin ein Gewinner.',
      text2: 'Ich liebe mich wie ich bin.',
      text3: 'Ich brauche keine Schuldgefühle zu haben.'
    },   {
      text1: 'Ich darf meine Wut ausdrücken.',
      text2: 'Ich bin nicht für alles verantwortlich.',
      text3: 'Ich habe das Recht: "Ich weiss es nicht" zu sagen.'
    },
    {
      text1: 'Ich habe das Recht "Nein" zu sagen,',
      text2: 'und muss mich dafür nicht rechtfertigen.',
      text3: 'Ich habe das Recht andere um etwas zu bitten.'
    },   {
      text1: 'Ich darf an mich gerichtete Bitten abschlagen.',
      text2: 'Ich habe das Recht anderen mitzuteilen,',
      text3: 'wenn diese mich schlecht behandeln.'
    },
    {
      text1: 'Ich darf unzumutbare Anforderungen zurückweisen.',
      text2: 'Ich brauche meinen Stolz und Würde nicht verletzen zu lassen.',
      text3: 'Ich darf Fehler machen und mich irren.'
    },
    {
      text1: 'Ich brauche nicht von allen bewundert',
      text2: 'oder gemocht werden für alles was ich tue.',
      text3: 'Ich bin talentiert.'
    },
     {
      text1: 'Ich bin gut im Teilen.',
      text2: 'Ich verbessere mich ständig.',
      text3: 'Ich fühle mich gut. Ich darf mich gut fühlen.'
    },
    {
      text1: 'Es gibt keine andere Person, die ich lieber',
      text2: 'wäre, als ich selbst.',
      text3: 'Alles, was ich mir wünsche, ist bereits in mir.'
    },   {
      text1: 'Ich verdiene das Beste.',
      text2: 'Ich fühle mich besser und besser.',
      text3: 'Es gibt eine Menge, worauf ich stolz sein kann.'
    },
    {
      text1: 'Ich bin dafür geschaffen Erfolg zu haben!',
      text2: 'Das ist in meiner Seelen-DNA.',
      text3: 'Heute werde ich ruhig und voller Vertrauen sein.'
    },   {
      text1: 'Es gefällt mir am Morgen aufzuwachen und einen',
      text2: 'neuen Tag zu begrüssen.',
      text3: 'Ich bleibe nüchtern, für immer.'
    },
   {
      text1: 'Es ist schön so viele Menschen um mich zu haben, die mich',
      text2: 'dabei unterstützen, meinen Weg zu gehen.',
      text3: 'Ich liebe mein Leben.'
    },
    {
      text1: 'Ich wachse jeden Tag. Ich lerne jeden Tag dazu.',
      text2: 'Ich bin Zuhause angekommen. Ich fühle mich Zuhause.',
      text3: 'Ich bin glücklich und zufrieden mit mir.'
    },
    {
      text1: 'Ich kann mit schwierigen Situationen umgehen.',
      text2: 'Ich sehe mich selbst als schön, intelligen und voller Selbst-',
      text3: 'vertrauen und so sehen mich auch die anderen.'
    },
    {
      text1: 'Ich bin schön.',
      text2: 'Mein Selbstvertrauen wird jeden Tag stärker.',
      text3: 'Ich bin kreativ.'
    },
    {
      text1: 'Ich geniesse die einzelnen Momente meines Lebens.',
      text2: 'Ich habe die Freiheit, mein Leben so zu leben,',
      text3: 'wie ich es möchte.'
    },   {
      text1: 'Ich bin aufrichtig mir selbst und anderen gegenüber.',
      text2: 'Ich bin talentiert und intelligent.',
      text3: 'Ich nehme mich selbst ernst.'
    },
    {
      text1: 'Ich achte gut auf mich.',
      text2: 'Ich kann im Jetzt Dinge ändern, die ich ändern möchte.',
      text3: 'Ich übernehme Verantwortung für mein Leben.'
    },   {
      text1: 'Ich bin wertvoll, unabhängig davon, wie ich mich gerade fühle.',
      text2: 'Ich gestalte mein Leben nach meinen Vorstellungen.',
      text3: 'Ich sehe das Gute in den Menschen um mich.'
    },
    {
      text1: 'Ich weiss, dass ich nicht perfekt bin',
      text2: 'und es nie sein werde, aber ich mag mich genau so, wie ich bin.',
      text3: 'Ich bin nett zu mir selbst.'
    },   {
      text1: 'Ich kann Spass haben und das Leben geniessen.',
      text2: 'Ich bin ausgeruht und erholt.',
      text3: 'Ich bin in der Lage, meine Gefühle angemessen auszudrücken.'
    },
    {
      text1: 'Ich bin dankbar für all das Gute in meinem Leben.',
      text2: 'Ich bin OK.',
      text3: 'Ich bewege mich entschlossen und mit Selbstvertrauen.'
    },
    {
      text1: 'Ich bin eine liebende und fürsorgliche Person.',
      text2: 'Ich bewege mich in eine positive Richtung,',
      text3: 'und komme meinen Zielen näher.'
    },
     {
      text1: 'Ich mag meine Gefühle.',
      text2: 'Ich wertschätze mich selbst.',
      text3: 'Ich bin gut genug.'
    },
    {
      text1: 'Ich vertraue mir.',
      text2: 'Ich tue mein Bestes und das ist gut.',
      text3: 'Ich verfüge über Ausdauer und Beharrlichkeit.'
    },   {
      text1: 'Ich kann es geniessen unter Menschen zu sein,',
      text2: 'und Kontakt zu haben.',
      text3: 'Ich mag meinen Körper.'
    },
    {
      text1: 'Ich fühle mich ruhig und sicher.',
      text2: 'Alles was ich brauche, steht mir zur Verfügung.',
      text3: 'Ich bestimme, wie ich leben möchte.'
    },   {
      text1: 'Ich tue immer mein Bestes.',
      text2: 'Mein Leben hat einen Sinn.',
      text3: 'Ich kenne meinen Wert.'
    },
    {
      text1: 'Ich bin entspannt.',
      text2: 'ich versuche so gut wie ich kann, weise Entscheidungen zu treffen.',
      text3: 'Ich bin nett.'
    },   {
      text1: 'Ich kann meine Träume verwirklichen.',
      text2: 'Ich will leben.',
      text3: 'Ich habe eine geiles Leben.'
    },
    {
      text1: 'Ich geniesse den Prozess des lernens, um all das zu erreichen,',
      text2: 'was ich mir vorgenommen habe.',
      text3: 'Ich glaube an mich selbst.'
    },
    {
      text1: 'Ich möchte leben.',
      text2: 'Ich habe Vertrauen.',
      text3: 'Ich nutze meine Möglichkeiten und Chancen.'
    },
    {
      text1: 'Ich bin gerne hier.',
      text2: 'Ich werde von Tag zu Tag stärker.',
      text3: 'Ich kann selbst entscheiden, was ich tun möchte.'
    },
    {
      text1: 'Ich entscheide mich, Dinge zu tun, die',
      text2: 'mir ein gutes Gefühl geben.',
      text3: 'Ich grenze mich von schlechter Gesellschaft ab.'
    },
    {
      text1: 'Ich kann mich abgrenzen.',
      text2: 'Ich höre auf mich selbst.',
      text3: 'Es ist schön zu leben.'
    },
    {
      text1: 'Ich fühle mich ruhig und sicher Tag für Tag.',
      text2: 'Ich akzeptiere alle meine Gefühle als Teil von mir.',
      text3: 'Ich folge meinen Träumen.'
    },
    {
      text1: 'Ich bin dankbar für all das, was mir gegeben wurde.',
      text2: 'Alles was das Leben mir bieten zu hat, ist wundervoll und es ist',
      text3: 'mein täglicher Entscheid, das schöne zu geniessen.'
    },
    {
      text1: 'Ich bin intelligent.',
      text2: 'Ich bin geschätzt.',
      text3: 'Ich habe die Kontrolle über mein Leben.'
    },
    {
      text1: 'Ich bin fair und aufrichtig gegenüber anderen.',
      text2: 'Heute ist mein Tag. es gibt keinen anderen Menschen oder äussere',
      text3: 'Ereignisse, die diesen Tag ruinieren könnten.'
    },
    {
      text1: 'Keiner hat Macht über mich.',
      text2: 'Ich mag mich.',
      text3: 'Ich gehe liebevoll mit mir um.'
    },
    {
      text1: 'Ich sorge für Menschen, die mir etwas bedeuten und zeige ihnen,',
      text2: 'dass ich sie liebe und wertschätze.',
      text3: 'Ich akzeptiere mich selbst hier und jetzt.'
    },
    {
      text1: 'Ich bin ein guter Freund.',
      text2: 'Ich habe Zugang zu einer',
      text3: 'erstaunlichen und beeindruckenden Welt.'
    },
    {
      text1: 'Ich bin mutig.',
      text2: 'Ich treffe meine Entscheidungen und ich',
      text3: 'mag meine Entscheidungen.'
    },
    {
      text1: 'Ich wähle Liebe und Vertrauen.',
      text2: 'Ich mag Dinge, die mir ein gutes Gefühl geben.',
      text3: 'Ich wertschätze den Moment.'
    },
    {
      text1: 'Ich mache alles so gut ich nur kann.',
      text2: 'Ich verdiene es glücklich zu sein.',
      text3: 'Ich akzeptiere mich, so wie ich bin und ich mag mich.'
    },
    {
      text1: 'Ich bin geliebt.',
      text2: 'Ich liebe mich selbst.',
      text3: 'Ich habe Vertrauen in die Zukunft.'
    },
    {
      text1: 'Ich bin liebenswert.',
      text2: 'Ich erlaube mir selbst, grosse Träume zu haben.',
      text3: 'Ich liebe mich, genau so wie ich bin'
    },
    {
      text1: 'Heute fühle ich mich gut.',
      text2: 'Ich mag meine Freunde und interessiere mich für sie.',
      text3: 'Ich bin gut, genau so wie ich bin.'
    },
    {
      text1: 'Heute wird alles gut gehen, ich fühle mich gut.',
      text2: 'Ich bin voller Energie.',
      text3: 'Ich bin stark, körperlich, psychisch und emotional.'
    },
    {
      text1: 'Heute ist der erste Tag vom Rest meines Lebens und ich',
      text2: 'kann die Richtung bestimmen.',
      text3: 'Ich fühle Vertrauen und Ausgeglichenheit.'
    },
    {
      text1: 'Ich halte meinen Kopf hoch.',
      text2: 'Ich geniesse das Leben.',
      text3: 'Es gibt keinen Ort, an dem ich lieber wäre.'
    },
    {
      text1: 'Jetzt ist ein neuer Moment.',
      text2: 'In meinem Leben und in mir selbst gibt es Stabilität.',
      text3: 'Es gefällt mir, andere zu unterstützen.'
    },
    {
      text1: 'Ich geniesse es gut auszusehen.',
      text2: 'Ich bin ruhig und entspannt.',
      text3: 'Ich bin intelligent, talentiert und sehe gut aus.'
    },
    {
      text1: 'Mir stehen viele Möglichkeiten offen und ich treffe die',
      text2: 'bestmöglichsten Entscheidungen.',
      text3: 'Ich achte darauf was ich möchte.'
    },
    {
      text1: 'Ich bin stark körperlich, psychisch und emotional.',
      text2: 'Ich bin ein guter Freund.',
      text3: 'Ich bleibe abstinent, egal was passiert.'
    },
    {
      text1: 'Ich habe meinen Helden gefunden, der bin ich.',
      text2: 'Ich bin mein bester Freund.',
      text3: 'Ich kann alles machen, was ich machen will.'
    },
    {
      text1: 'Ich mache dass wovor ich am meisten Angst habe,',
      text2: 'und dominiere meine Angst.',
      text3: 'Ich bin selbstsicher.'
    },
    {
      text1: 'Ich habe Selbstvertrauen.',
      text2: 'Ich habe Selbstwert.',
      text3: 'Ich liebe mich und akzeptiere mich wie ich bin.'
    },
    {
      text1: 'Ich fühle mich gut, ich darf mich gut fühlen.',
      text2: 'Ich bin ein Rockstar.',
      text3: 'Ich kann alles machen, was ich machen will.'
    },
    {
      text1: 'Ich kann alle Software bauen.',
      text2: 'Ich denke positiv, ich werde die Welt erobern.',
      text3: 'Ich bin kein Opfer der Vergangenheit.'
    },
    {
      text1: 'Ich bin glücklich, fröhlich und frei.',
      text2: 'Ich bin phantastisch, liebevoll, intelligent und hübsch.',
      text3: 'Ich werde alle meine Ziele erreichen.'
    },
    {
      text1: 'Ich verwirkliche und werde alle meine Träume verwirklichen.',
      text2: 'Ich werde aus der Suchtkrankheit herauswachsen.',
      text3: 'Ich konzentriere mich auf Themen die mich interessieren.'
    },
    {
      text1: 'Reden ist billig, zeig mir die Taten, zeig mir den Code.',
      text2: 'Ich programmiere die ganze Zeit mit Leidenschaft.',
      text3: 'Ich bin ein Held. '
    }
    ];

  text1 = 'Ich bin zufrieden'.split('');
  text2 = 'und glücklich'.split('');
  text3 = 'mit meinem Leben.'.split('');

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
    this.text1 = this.affirmations[MoreAffirmationsComponent.counter].text1.split('');
    this.text2 = this.affirmations[MoreAffirmationsComponent.counter].text2.split('');
    this.text3 = this.affirmations[MoreAffirmationsComponent.counter++].text3.split('');
    if (MoreAffirmationsComponent.counter === 66) {
      MoreAffirmationsComponent.counter = 0;
    }
  }


  constructor() {}

  getDelay(index, lenght) {
    if (index < lenght / 2 - 2) {
      return index * 100;
    } else {
      return lenght * 100 - index * 100;
    }
  }



  ngOnInit() {}


}
