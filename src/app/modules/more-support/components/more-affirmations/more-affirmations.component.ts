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
  rubberBandOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-more-affirmations',
  templateUrl: './more-affirmations.component.html',
  styleUrls: ['./more-affirmations.component.scss'],
  animations: [
    rotateInDownLeftOnEnterAnimation({ anchor: 'enter' }),
    zoomInDownOnEnterAnimation({ anchor: 'enterLetterAnim1' }),
    fadeInOnEnterAnimation({ anchor: 'enterLetterAnim2' }),
    zoomInUpOnEnterAnimation({ anchor: 'enterLetterAnim3' }),
    rollInAnimation({ anchor: 'letterAnim1' }),
    zoomInLeftAnimation({ anchor: 'letterAnim2' }),
    rubberBandAnimation({ anchor: 'letterAnim3' }),
    hueRotateAnimation({ anchor: 'hueLetter', duration: 5000 }),
    flashAnimation({ anchor: 'flash' }),
    rubberBandOnEnterAnimation({ anchor: 'btnEnter', delay: 12500 }),
    fadeInOnEnterAnimation({ anchor: 'btnEnterFadeIn', delay: 12500, duration: 500 })
  ]
})
export class MoreAffirmationsComponent implements OnInit {
  private static counter = 0;
  animationState = false;
  hueState = false;
  flashState = false;

  private randomSkills = [
    {
      text1: 'Ich bin willkommen',
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
      text2: 'Ich habe das Recht anderen mitzuteilen',
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
      text1: 'Sich Ablenken',
      text2: 'Portraitiere einen Gegenstand, ein Tier oder einen Menschen',
      text3: 'im Detail...'
    },   {
      text1: 'Sich Ablenken',
      text2: 'Mache etwas für jemand anderen,',
      text3: 'unterstütze andere...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Schreib eine Wort-Kette. allein oder zusammen mit einem Freund. Das',
      text3: 'letzte wort der vorhergehenden Kette is jeweils das erste Wort der neuen Kette...'
    },   {
      text1: 'Sich Ablenken',
      text2: 'Mache Männchen aus Ton oder Knetgummi und werfe sie gegen',
      text3: 'die Wand oder auf den Boden...'
    },
    {
      text1: 'Sich selbst beruhigen mithilfe von Sinneseindrücken',
      text2: 'Nimm einen gegenstand in Deine Hand. Berühre ihn,',
      text3: 'fühle ihn an und schaue ihn an...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Höre Dir ausgesprochene fröhliche Musik an,',
      text3: 'zum Beispiel aus einem Kinderlieder-Album...'
    },
    {
      text1: 'Den Augenblick Verbessern',
      text2: 'Umarame ein Kissen oder einen',
      text3: 'Teddybär...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Kaufe Tempara-Farbe (Flüssigfarbe in grossen Töpfen) und grosse Papierbögen',
      text3: 'Male grosse Pfützen und Klekse...'
    },   {
      text1: 'Akzeptieren',
      text2: 'Atme tief. Lege oder setze Dich bequem hin. beobachte, wie Dein Bauch sich bewegt,',
      text3: 'währen Du atmest. Mache zehn atemzüge. Ausatmen länger dauern als das Einatmen...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Entspanne Dich.',
      text3: 'Lass es Dir gut gehen, lese die Affirmationen...'
    },   {
      text1: 'Den augenblick verbessern',
      text2: 'Hüpfe auf einem Bett',
      text3: 'Mache Luftsprünge, lache ganz herzhaft...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'renne so schnell wie Du kannst und so lange Du kannst',
      text3: 'Laufe 15 Kilometer...'
    },   {
      text1: 'Sich Ablenken',
      text2: 'Orden die Musik auf Deinem Computer. Sortiere die Musik',
      text3: 'nach Genre, Künstler oder alphabetisch...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Putze Dein Zimmer, Deine Wohnung oder Dein Haus',
      text3: 'gründlich. wie viel Zeit brauchst Du dazu?'
    },
    {
      text1: 'Den Augenblick Verbessern',
      text2: 'Zähle alle Primzahlen auf',
      text3: 'Baue eine neue Web Applikation...'
    },
     {
      text1: 'Sich Ablenken',
      text2: 'Mach etwas was Dir gefällt! Zum Beispiel:',
      text3: 'Male, stricke, mache Seife oder Kerzen...'
    },
    {
      text1: 'Ablenken',
      text2: 'Singe ein Kinderlied,',
      text3: 'vorzugsweise eines mit Gesten und Gebärden...'
    },   {
      text1: 'Sich Ablenken',
      text2: 'Bitte auf eine konstruktive Art udn Weise um Hilfe',
      text3: 'Mache einen langen Spaziergang...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Sage das Alphabet rückwärts auf.',
      text3: 'Lerne eine neue Sprache, Technologie...'
    },   {
      text1: 'Sich Ablenken',
      text2: 'Lerne die Reihenfolge der Tasten',
      text3: 'auf Deiner Tastatur auswendig...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Beginne eine Kissenschlacht mit jemand',
      text3: 'anderem oder kämpfe gegen eine Wand...'
    },   {
      text1: 'Den Augenblick Verbessern',
      text2: 'Mache eine Fantasiereise, (eine geliebte Person zu treffen',
      text3: 'oder an einem schönen Strand auf den Maldiven zu liegen...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Bau ein neues Programm, lerne JavaScript',
      text3: 'schaue Dir einen Film an...'
    },
    {
      text1: 'Sich selbst beruhigen mithilfe von Sinneseindrücken',
      text2: 'Säge ein Brett und nimm den Geruch',
      text3: 'des Sägemehls wahr...'
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
    this.text1 = this.randomSkills[MoreAffirmationsComponent.counter].text1.split('');
    this.text2 = this.randomSkills[MoreAffirmationsComponent.counter].text2.split('');
    this.text3 = this.randomSkills[MoreAffirmationsComponent.counter++].text3.split('');
    if (MoreAffirmationsComponent.counter === 36) {
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
