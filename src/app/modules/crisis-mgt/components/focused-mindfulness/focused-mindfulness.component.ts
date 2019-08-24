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
  selector: 'app-focused-mindfulness',
  templateUrl: './focused-mindfulness.component.html',
  styleUrls: ['./focused-mindfulness.component.scss'],
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
    rubberBandOnEnterAnimation({ anchor: 'btnEnter', delay: 6500 }),
    fadeInOnEnterAnimation({ anchor: 'btnEnterFadeIn', delay: 6500, duration: 500 })
  ]
})
export class FocusedMindfulnessComponent implements OnInit {
  private static counter = 0;
  animationState = false;
  hueState = false;
  flashState = false;

  private focusedMindfulness = [
    {
      text1: 'Nenne 4 grüne Dinge, die Du gerade siehst...'
    },
    {
      text1: 'Finde ein Wort für jeden Buchstaben Deines Namens...'
    },
    {
      text1: 'Nenne 3 Farben, die Du magst...'
    },
    {
      text1: 'Nenne 3 Filme, die Dir gefallen...'
    },
    {
      text1: 'Sage "ich liebe Dich" in 4 verschieden Sprachen...'
    },
    {
      text1: 'Nenne 3 Musiker oder Bands, die Dir gefallen...'
    },
    {
      text1: 'Nenne 5 Verkehrsschilder...'
    },
    {
      text1: 'Nenne 4 Geräusche, die Du gerade hörst...'
    },
    {
      text1: 'Nenne 5 Süssigkeiten...'
    },
    {
      text1: 'Nenne 3 Flüsse...'
    },
    {
      text1: 'Nenne 3 TV-Serien, die Du magst..'
    },
    {
      text1: 'Nenne 3 Lieblings-gerichte oder Nahrungsmittel...'
    },
    {
      text1: 'Nenne 5 Städte deines Heimatlandes...'
    },
    {
      text1: 'Nenne 5 Städte...'
    },
    {
      text1: 'Nenne 4 weisse Dinge, die Du gerade siehst...'
    },
    {
      text1: 'Nenne 5 Fruchtsorten...'
    },
    {
      text1: 'Nenne 3 Bücher, die Dir gefallen...'
    },
    {
      text1: 'Benenne Deine Finger...'
    },
    {
      text1: 'Nenne 5 Fischarten...'
    },
    {
      text1: 'Nenne 4 Fremdpsrachen, die Du gerne sprechen würdest...'
    },
    {
      text1: 'Nenne 5 Seen...'
    },
    {
      text1: 'Nenne 5 blaue Dinge, die Du gerade siehst...'
    },
    {
      text1: 'Nenne 3 berge...'
    },
    {
      text1: 'Nenne 5 Säugetiere...'
    },
    {
      text1: 'Nenne 3 roze Dinge, die Du gerade siehst...'
    },
    {
      text1: 'Nenne 3 Zeitschriften, die Du magst...'
    },
    {
      text1: 'Nenne 5 Gefühle...'
    },
    {
      text1: 'Nenne 5 Musikinstrumente...'
    },
    {
      text1: 'nenne 5 Disney-Figuren...'
    },
    {
      text1: 'Nenne 3 Handy-Marken...'
    },
    {
      text1: 'Nenne 4 Blumenarten...'
    },
    {
      text1: 'Nenne 5 Körperteile...'
    },
    {
      text1: 'Nenne 4 Automarken...'
    },
    {
      text1: 'Nenne 5 Farben, die Du gerade siehst...'
    },
    {
      text1: 'Nenne 4 Staaten in Europa..'
    },
    {
      text1: 'Nenne 5 Gemüsesorten...'
    },
    {
      text1: 'Nenne 5 Vogelarten...'
    },
    {
      text1: 'Nenne 4 US-Staaten...'
    },
    {
      text1: 'Nenne 5 Konsonanten...'
    },
    {
      text1: 'Nenne 3 berühmte Leute, die Du gerne kennen lernen würdest...'
    },
    {
      text1: 'Nenne 4 Kontinente...'
    },
    {
      text1: 'Nenne 5 Vogelarten...'
    },
    {
      text1: 'Nenne 5 Gegenstände, die Du gerade siehst...'
    },
    {
      text1: 'Nenne 4 Blumenarten...'
    },
    {
      text1: 'Nenne 4 weisse Dinge, die Du gerade siehst...'
    }
  ];

   text1 = 'Wie viele Zähne hast Du?'.split('');

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
    this.text1 = this.focusedMindfulness[FocusedMindfulnessComponent.counter++].text1.split('');
    if (FocusedMindfulnessComponent.counter === 36) {
      FocusedMindfulnessComponent.counter = 0;
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
