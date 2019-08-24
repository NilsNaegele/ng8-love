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
  selector: 'app-random-skills',
  templateUrl: './random-skills.component.html',
  styleUrls: ['./random-skills.component.scss'],
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
export class RandomSkillsComponent implements OnInit {
  private static counter = 0;
  animationState = false;
  hueState = false;
  flashState = false;

  private randomSkills = [
    {
      text1: 'Sich Ablenken',
      text2: 'Tanze verrückt zu wilder Musik.',
      text3: 'Schreibe einen Artikel oder Buch...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Ruf einen Freund an und sprich über irgend etwas anderes.',
      text3: 'Du kannst beispielsweise fragen, was Dein Freund heute gemacht hat...'
    },   {
      text1: 'Pro & Contra Abwägen',
      text2: 'Erstelle eine Pro & Contra Liste für das Tolerieren unangenehmer Zustände',
      text3: 'und eine weitere Liste für das Nicht-Tolerieren unangenehmer Zustände...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'einatmen 1, ausatmen 1. einatmen 2, ausatmen 2...',
      text3: 'Zähle bis 10, und dann wieder zurück auf Null...'
    },   {
      text1: 'Sich Ablenken',
      text2: 'Zerreisse ein Leintuch',
      text3: 'oder ein ausgetragenes Hemd...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Schreib ein Kapitel eines Buches',
      text3: 'von Hand ab...'
    },   {
      text1: 'Den Augenblick verbessern',
      text2: 'Tröste Dich selbst. Erlaube Dir,',
      text3: 'schwach zu sein...'
    },
    {
      text1: 'Akzeptieren',
      text2: 'Entscheide Dich, die Dinge so zu akzeptieren,',
      text3: 'wie sie sind, wieder und wieder...'
    },
    {
      text1: 'Sich Ablenken',
      text2: 'Renne eine Treppe rauf und runter.',
      text3: 'Trainiere für einen Marathon...'
    },
     {
      text1: 'Sich Ablenken',
      text2: 'zerreisse ein telefonbuch oder',
      text3: 'ein Magazin in kleine Stücke...'
    },
    {
      text1: 'Akzeptieren',
      text2: 'Schreibe Deine Gedanken und gefühle auf,',
      text3: 'wie sie Dir grad durch den Kopf gehen...'
    },   {
      text1: 'Sich Ablenken',
      text2: 'Schreibe einen Brief an eine Person, auf die Du wütend bist oder die',
      text3: 'Dich traurig gemacht hat. Schicke diesen Brief nicht ab...'
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

  text1 = 'Sich Ablenken'.split('');
  text2 = 'Blase Ballons auf und versuche,'.split('');
  text3 = ' sie so schnell wie möglich zu zerplatzen...'.split('');

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
    this.text1 = this.randomSkills[RandomSkillsComponent.counter].text1.split('');
    this.text2 = this.randomSkills[RandomSkillsComponent.counter].text2.split('');
    this.text3 = this.randomSkills[RandomSkillsComponent.counter++].text3.split('');
    if (RandomSkillsComponent.counter === 36) {
        RandomSkillsComponent.counter = 0;
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
