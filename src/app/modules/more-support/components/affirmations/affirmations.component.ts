import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const AFFIRMATIONS = [
  'AFFIRMATIONS.AFFIRMATION1',
  'AFFIRMATIONS.AFFIRMATION2',
  'AFFIRMATIONS.AFFIRMATION3',
  'AFFIRMATIONS.AFFIRMATION4',
  'AFFIRMATIONS.AFFIRMATION5',
  'AFFIRMATIONS.AFFIRMATION6',
  'AFFIRMATIONS.AFFIRMATION7',
  'AFFIRMATIONS.AFFIRMATION8',
  'AFFIRMATIONS.AFFIRMATION9',
  'AFFIRMATIONS.AFFIRMATION10',
  'AFFIRMATIONS.AFFIRMATION11',
  'AFFIRMATIONS.AFFIRMATION12',
  'AFFIRMATIONS.AFFIRMATION13',
  'AFFIRMATIONS.AFFIRMATION14',
  'AFFIRMATIONS.AFFIRMATION15',
  'AFFIRMATIONS.AFFIRMATION16',
  'AFFIRMATIONS.AFFIRMATION17',
  'AFFIRMATIONS.AFFIRMATION18',
  'AFFIRMATIONS.AFFIRMATION19',
  'AFFIRMATIONS.AFFIRMATION20',
  'AFFIRMATIONS.AFFIRMATION21',
  'AFFIRMATIONS.AFFIRMATION22',
  'AFFIRMATIONS.AFFIRMATION23',
  'AFFIRMATIONS.AFFIRMATION24',
  'AFFIRMATIONS.AFFIRMATION25',
  'AFFIRMATIONS.AFFIRMATION26',
  'AFFIRMATIONS.AFFIRMATION27',
  'AFFIRMATIONS.AFFIRMATION28',
  'AFFIRMATIONS.AFFIRMATION29',
  'AFFIRMATIONS.AFFIRMATION30',
  'AFFIRMATIONS.AFFIRMATION31',
  'AFFIRMATIONS.AFFIRMATION32',
  'AFFIRMATIONS.AFFIRMATION33',
  'AFFIRMATIONS.AFFIRMATION34',
  'AFFIRMATIONS.AFFIRMATION35',
  'AFFIRMATIONS.AFFIRMATION36',
  'AFFIRMATIONS.AFFIRMATION37',
  'AFFIRMATIONS.AFFIRMATION38',
  'AFFIRMATIONS.AFFIRMATION39',
  'AFFIRMATIONS.AFFIRMATION40',
  'AFFIRMATIONS.AFFIRMATION41',
  'AFFIRMATIONS.AFFIRMATION42',
  'AFFIRMATIONS.AFFIRMATION43',
  'AFFIRMATIONS.AFFIRMATION44',
  'AFFIRMATIONS.AFFIRMATION45',
  'AFFIRMATIONS.AFFIRMATION46',
  'AFFIRMATIONS.AFFIRMATION47',
  'AFFIRMATIONS.AFFIRMATION48',
  'AFFIRMATIONS.AFFIRMATION49',
  'AFFIRMATIONS.AFFIRMATION50',
  'AFFIRMATIONS.AFFIRMATION51',
  'AFFIRMATIONS.AFFIRMATION52',
  'AFFIRMATIONS.AFFIRMATION53',
  'AFFIRMATIONS.AFFIRMATION54',
  'AFFIRMATIONS.AFFIRMATION55',
  'AFFIRMATIONS.AFFIRMATION56',
  'AFFIRMATIONS.AFFIRMATION57',
  'AFFIRMATIONS.AFFIRMATION58',
  'AFFIRMATIONS.AFFIRMATION59',
  'AFFIRMATIONS.AFFIRMATION60',
  'AFFIRMATIONS.AFFIRMATION61',
  'AFFIRMATIONS.AFFIRMATION62',
  'AFFIRMATIONS.AFFIRMATION63',
  'AFFIRMATIONS.AFFIRMATION64',
  'AFFIRMATIONS.AFFIRMATION65',
  'AFFIRMATIONS.AFFIRMATION66',
  'AFFIRMATIONS.AFFIRMATION67',
  'AFFIRMATIONS.AFFIRMATION68',
  'AFFIRMATIONS.AFFIRMATION69',
  'AFFIRMATIONS.AFFIRMATION70',
  'AFFIRMATIONS.AFFIRMATION71',
  'AFFIRMATIONS.AFFIRMATION72',
  'AFFIRMATIONS.AFFIRMATION73',
  'AFFIRMATIONS.AFFIRMATION74',
  'AFFIRMATIONS.AFFIRMATION75',
  'AFFIRMATIONS.AFFIRMATION76',
  'AFFIRMATIONS.AFFIRMATION77',
  'AFFIRMATIONS.AFFIRMATION78',
  'AFFIRMATIONS.AFFIRMATION79',
  'AFFIRMATIONS.AFFIRMATION80',
  'AFFIRMATIONS.AFFIRMATION81',
  'AFFIRMATIONS.AFFIRMATION82',
  'AFFIRMATIONS.AFFIRMATION83',
  'AFFIRMATIONS.AFFIRMATION84',
  'AFFIRMATIONS.AFFIRMATION85',
  'AFFIRMATIONS.AFFIRMATION86',
  'AFFIRMATIONS.AFFIRMATION87',
  'AFFIRMATIONS.AFFIRMATION88',
  'AFFIRMATIONS.AFFIRMATION89',
  'AFFIRMATIONS.AFFIRMATION90',
  'AFFIRMATIONS.AFFIRMATION91',
  'AFFIRMATIONS.AFFIRMATION92',
  'AFFIRMATIONS.AFFIRMATION93',
  'AFFIRMATIONS.AFFIRMATION94',
  'AFFIRMATIONS.AFFIRMATION95',
  'AFFIRMATIONS.AFFIRMATION96',
  'AFFIRMATIONS.AFFIRMATION97',
  'AFFIRMATIONS.AFFIRMATION98',
  'AFFIRMATIONS.AFFIRMATION99',
  'AFFIRMATIONS.AFFIRMATION100',
  'AFFIRMATIONS.AFFIRMATION101',
  'AFFIRMATIONS.AFFIRMATION102',
  'AFFIRMATIONS.AFFIRMATION103',
  'AFFIRMATIONS.AFFIRMATION104',
  'AFFIRMATIONS.AFFIRMATION105',
  'AFFIRMATIONS.AFFIRMATION106',
  'AFFIRMATIONS.AFFIRMATION107',
  'AFFIRMATIONS.AFFIRMATION108',
  'AFFIRMATIONS.AFFIRMATION109',
  'AFFIRMATIONS.AFFIRMATION110',
  'AFFIRMATIONS.AFFIRMATION111',
  'AFFIRMATIONS.AFFIRMATION112',
  'AFFIRMATIONS.AFFIRMATION113',
  'AFFIRMATIONS.AFFIRMATION114',
  'AFFIRMATIONS.AFFIRMATION115',
  'AFFIRMATIONS.AFFIRMATION116',
  'AFFIRMATIONS.AFFIRMATION117',
  'AFFIRMATIONS.AFFIRMATION118',
  'AFFIRMATIONS.AFFIRMATION119',
  'AFFIRMATIONS.AFFIRMATION120',
  'AFFIRMATIONS.AFFIRMATION121',
  'AFFIRMATIONS.AFFIRMATION122',
  'AFFIRMATIONS.AFFIRMATION123',
  'AFFIRMATIONS.AFFIRMATION124',
  'AFFIRMATIONS.AFFIRMATION125',
  'AFFIRMATIONS.AFFIRMATION126',
  'AFFIRMATIONS.AFFIRMATION127',
  'AFFIRMATIONS.AFFIRMATION128',
  'AFFIRMATIONS.AFFIRMATION129',
  'AFFIRMATIONS.AFFIRMATION130',
  'AFFIRMATIONS.AFFIRMATION131',
  'AFFIRMATIONS.AFFIRMATION132',
  'AFFIRMATIONS.AFFIRMATION133',
  'AFFIRMATIONS.AFFIRMATION134',
  'AFFIRMATIONS.AFFIRMATION135',
  'AFFIRMATIONS.AFFIRMATION136',
  'AFFIRMATIONS.AFFIRMATION137',
  'AFFIRMATIONS.AFFIRMATION138',
  'AFFIRMATIONS.AFFIRMATION139',
  'AFFIRMATIONS.AFFIRMATION140',
  'AFFIRMATIONS.AFFIRMATION141',
  'AFFIRMATIONS.AFFIRMATION142',
  'AFFIRMATIONS.AFFIRMATION143',
  'AFFIRMATIONS.AFFIRMATION144',
  'AFFIRMATIONS.AFFIRMATION145',
  'AFFIRMATIONS.AFFIRMATION146',
  'AFFIRMATIONS.AFFIRMATION147',
  'AFFIRMATIONS.AFFIRMATION148',
  'AFFIRMATIONS.AFFIRMATION149',
  'AFFIRMATIONS.AFFIRMATION150',
  'AFFIRMATIONS.AFFIRMATION151',
  'AFFIRMATIONS.AFFIRMATION152',
  'AFFIRMATIONS.AFFIRMATION153',
  'AFFIRMATIONS.AFFIRMATION154',
  'AFFIRMATIONS.AFFIRMATION155',
  'AFFIRMATIONS.AFFIRMATION156',
  'AFFIRMATIONS.AFFIRMATION157',
  'AFFIRMATIONS.AFFIRMATION158',
  'AFFIRMATIONS.AFFIRMATION159',
  'AFFIRMATIONS.AFFIRMATION160',
];

@Component({
  selector: 'app-affirmations',
  templateUrl: './affirmations.component.html',
  styleUrls: ['./affirmations.component.scss']
})
export class AffirmationsComponent implements OnInit {
  private static counter = 0;

  public color = '';
  public affirmation = '';

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.affirmation = this.selectRandomAffirmation();
  }

  newAffirmation(): void {
    this.affirmation = this.selectRandomAffirmation();
    // this.color = this.colorList[Math.floor(Math.random() * this.colorList.length)];
    this.color = this.getRandomColor();
  }

  selectRandomAffirmation(): string {
      if (AffirmationsComponent.counter === AFFIRMATIONS.length) {
        AffirmationsComponent.counter = 0;
      }
      return AFFIRMATIONS[AffirmationsComponent.counter++];
  }


    getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

}