import { Component, OnInit } from '@angular/core';

export interface CardInterface {
  imgSrc: string;
  title: string;
  description: string;
  button: string;
}

@Component({
  selector: 'app-live-well',
  templateUrl: './live-well.component.html',
  styleUrls: ['./live-well.component.scss']
})
export class LiveWellComponent implements OnInit {

  cardList: CardInterface[]  = [
    {
      imgSrc: 'https://img5.goodfon.com/wallpaper/nbig/9/91/purple-sunset-romantic-love-heart-hands-liubov-ruki-serdtse.jpg',
      title: 'Ich sorge gut für mich.',
      description: `I take good care of myself. Je prend soins de moi.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://i.etsystatic.com/12917347/r/il/c805fc/1771819357/il_fullxfull.1771819357_pt6n.jpg',
      title: 'Ich nehme mir die Zeit die ich brauche.',
      description: `I take the time I require. Je prends le temps qu'il me faut.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://cdn.mindful.org/Meditation_Goleman.jpg?q=80&fm=jpg&fit=crop&w=1400&h=875',
      title: 'Leben ist jetzt.',
      description: `Live in the present. Vie dans le moment.`,
      button: 'Gut Leben ist die beste rache.'
    },
    {
      imgSrc: 'https://media.mnn.com/assets/images/2017/09/man-running.jpg.653x0_q80_crop-smart.jpg',
      title: 'Bewegung macht mich glücklich.',
      description: `Moving makes me happy. Le sport me rend heuereux.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://www.dictionary.com/e/wp-content/uploads/2016/02/1000x700-empathy-vs-sympathy.jpg',
      title: 'Ich höre erst mal zu wenn ich andere verstehen will.',
      description: `I listen if I want to understand others. J'ecoute si je veux comprendre les autres.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'http://pimnosis.com/wp-content/uploads/2016/10/top-of-the-mountain-1280x640.jpg',
      title: 'Das ziehe ich jetzt durch, Plan A. Mich kann nichts aufhalten.',
      description: `I will push through to completion. Plan A. Perseverance. J'y vais jusce qu'au bout.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      // tslint:disable-next-line: max-line-length
      imgSrc: 'https://www.lechzuers.com/app/uploads/2014/07/snow-and-safety-conference-lech-zuers-arlbergclech-zuers-tourismus3-1920x1080.jpg',
      title: 'Ich bin jetzt in Sicherheit. Alles ist gut. Die beste Verteidigung ist Angriff.',
      description: `I am safe. All is well. Offense is the best defense. Je suis en securite. Tout va bien.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://www.yourtrainingedge.com/wp-content/uploads/2018/10/letting_go.png',
      title: 'Wer losslässt hat die Hände frei für Neues.',
      description: `Let go and you will have hands free for the new. Lache prise et tu aura les mains vides pour du nouveaux.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://www.dreamhost.com/blog/wp-content/uploads/2017/07/Boost-SEO-on-WordPress-750x375.jpg',
      title: 'Verunsicherung steht am Anfang von Veränderung.',
      description: `Insecurity is at the beginning of change. L'insecurite est au debut du changement.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },{
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },
    {
      imgSrc: '',
      title: '',
      description: ``,
      button: ''
    },

  ];

  constructor() { }

  ngOnInit() {
    // for (let i = 1; i <= 10; i++) {
    //   this.cardList.push({
    //     imgSrc: 'http://via.placeholder.com/200',
    //     title: 'Card No. ' + i,
    //     description:
    //       'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
    //       This module provides Angular developers with component layout features using a custom Layout API, \
    //       mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
    //   });
    // }
  }

}
