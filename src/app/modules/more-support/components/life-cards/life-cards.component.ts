import { Component, OnInit } from '@angular/core';

import {
  zoomInOnEnterAnimation,
  zoomInUpOnEnterAnimation,
  zoomInDownOnEnterAnimation,
  zoomInRightOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-life-cards',
  templateUrl: './life-cards.component.html',
  styleUrls: ['./life-cards.component.scss'],
  animations: [
    zoomInOnEnterAnimation({ anchor: 'enter1', delay: 1500 }),
    zoomInUpOnEnterAnimation({ anchor: 'enter2', delay: 2000 }),
    zoomInDownOnEnterAnimation({ anchor: 'enter3', delay: 3000 }),
    zoomInRightOnEnterAnimation({ anchor: 'enter4', delay: 500 })
  ]
})
export class LifeCardsComponent implements OnInit {

  members: {title: string,subtitle: string,content: string,url: string}[] = [
    {
      title: 'Wer loslässt hat die Hände frei für Neues...',
      subtitle: 'Celui qui lache prise a les mains libres pour du nouveaux...',
      content: 'Who let\'s go has her hands free for new experiences...',
      url: 'https://cdn-images-1.medium.com/max/2600/1*2KzZuyvJ500HA0mB4nBemA.jpeg'},
    {title: 'Verunsicherung steht am Anfang von Veränderung...',
    subtitle: 'L\'insecurite es au debut du changement...',
    content: 'Insecurity is at he beginning of change...',
    url: 'http://transcendlc.com/wp-content/uploads/2018/06/overcoming-organizational-change-challenges.jpg'},
    {title: 'OFFENE Türen anstatt vor verschlossenen zu warten.',
    subtitle: 'Je prende des portes OUVERTES,au lieu d\'attendre devant des portes fermees.',
    content: 'I walk through OPEN doors instead of waiting in front of locked ones.',
    // tslint:disable-next-line: max-line-length
    url: 'https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/28be909/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2Fopendoorfw.png'},
    {
    title: 'Wer einen Berg besteigt darf auch mal Pausen machen.',
    subtitle: 'Qui monte une montagne a le droit de prendre des pauses.',
    content: 'Who climbs a mountain is allowed to take a break.',
    url: 'http://www.climbstation.com/uploads/5/1/3/4/5134929/2415193_orig.jpg'},
    {
      title: 'Ich bin WERTVOLL, einfach weil ich bin.',
      subtitle: 'Je suis PRECIEUX, juste par ce que je suis.',
      content: 'I am VALUABLE, just because I am.',
      url: 'https://www.incimages.com/uploaded_files/image/970x450/getty_130409767_9707269704500134_62062.jpg'},
    {
      title: 'Einen Schritt zurückgehen,um weiterzukommen.',
      subtitle: 'Parfois je dois reculer d\'un pas pour que j\'avances.',
      content: 'Sometimes I must step back,to advance further.',
      url: 'https://guardian.ng/wp-content/uploads/2016/12/One-step-back-two-steps-forward.jpg'},
    {
      title: 'Erstmal anfangen! Los geht\'s.',
      subtitle: 'Debuter, puis ca marches.',
      content: 'Just start! 1,2,3 take-off',
      url: 'https://www.foerderland.de/fileadmin/_processed_/csm_innovationen_starten_Fotolia_165926133_Subscription_XXL_5260253835.jpg'},
    {
      title: 'Ich gehe auf eine Entdeckungsreise!',
      subtitle: 'Je vais prendre un voyage de decouverte.',
      content: 'I am starting a discovery voyage.',
      url: 'https://www.silverkris.com/wp-content/uploads/2018/05/Nature-and-Adventure-1920x1069-960x530.jpg'},
    {
      title: 'Worauf meine AUFMERKSAMKEIT richte, verstärke ich.',
      subtitle: 'Sur quoi je pose ma concentration, j\'amplifie',
      content: 'Whatever I focus on, I make bigger.',
      url: 'https://www.ecophon.com/globalassets/media/images/product-family-images/152319-time-to-focus-on-visual-acoustics-570x472.jpg'},
    {
      title: 'Beim Losgehen kommt die Kraft.',
      subtitle: 'Quand je commence, l\'energie me vient.',
      content: 'When I start, the energy comes.',
      url: 'https://www.york.ac.uk/media/study/courses/postgraduate/physics/hero%20-%20fusion%20energy.jpg'},
    {
      title: 'Ich sorge gut für mich.',
      subtitle: 'Je prends soins de moi.',
      content: 'I take good care of myself.',
      url: 'https://yogacollective.dk/media/603/tr%C3%83%C2%A6et_silhouette-2512805_1920.jpg'},
    {
      title: 'Ich würdige was mir gelungen ist.',
      subtitle: 'J\'honneur ce que je fais.',
      content: 'I honor what I have done.',
      url: 'https://cdn.pixabay.com/photo/2018/07/19/22/34/heart-3549572_960_720.jpg'},
    {
      title: 'Ich habe Angst und tu\'s trotzdem.',
      subtitle: 'J\'ai peur et le fait quand meme.',
      content: 'I am afraid and go ahead and do it.',
      url: 'https://suitsandsneakers.co.za/wp-content/uploads/2018/01/Be-Brave.jpg'},
    {
      title: 'Es wird alles GUT.',
      subtitle: 'Tout va bien se passer.',
      content: 'Everything will be alright.',
      url: 'https://miro.medium.com/max/4800/1*_mE258TO4SvcP2NLP-GgUg.jpeg'},
    {
      title: 'Desto LANGSAMER, desto SCHNELLER.',
      subtitle: 'Plus LENTEMENT devient plus RAPIDEMENT.',
      content: 'The SLOWER, the FASTER.',
      url: 'http://media.tastorona.su/img/turtle.png'},
    {
      title: 'Ich übe meinen Mund aufmachen.',
      subtitle: 'Je m\'entraines a ouvrir ma bouche.',
      content: 'I pratice to open my mouth.',
      url: 'https://www.scienceabc.com/wp-content/uploads/2018/11/open-mouth.jpg'},
    {
      title: 'Singen tut gut.',
      subtitle: 'Chanter fait du bien.',
      content: 'Singing is fun.',
      url: 'https://www.singtotheworld.com/images/sttw/sing-to-the-world-karaoke.jpg'},
      {
        title: 'Auch Umwege sind Wege zum Ziel.',
        subtitle: 'Detours menent aussi au bute.',
        content: 'Detours also lead to the goal.',
        // tslint:disable-next-line: max-line-length
        url: 'https://content-static.upwork.com/blog/uploads/sites/4/2017/11/07002354/Blog-A-New-Goal-Setting-Framework-For-A-Team-That-Blog-Doesn%E2%80%99t-Work-on-Projects-Together-645x285.jpg'},
        {
          title: 'Sei Jung, sei Frei, sei glücklich.',
          subtitle: 'Soit jeune, soit libre, soit heureux.',
          content: 'Be young, be free, be happy!',
          // tslint:disable-next-line: max-line-length
          url: 'https://images.squarespace-cdn.com/content/v1/5846edc029687f12c605e286/1545159281595-HO0QTFNIB4BJE5WUB908/ke17ZwdGBToddI8pDm48kI61XDo-jJ-sjA_ZJc9X-skUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcMLQC_TC-OErCrYjiwLgLpBJIcUeoPqgJNyF3RS3oQ9_8TvmpZewYzj7N3XCNkayK/I%E2%80%99ll+show+you+a+peek+at+a+few+others+we+have.+But+my+climbing%2C+bouncing+boy%E2%80%A6+he+has+a+huge+amount+of+energy.+He+wants+to+jump+and+climb%2C+wrestle%E2%80%A6+kick+things.+And+if+I+don%E2%80%99t+give+him+a+safe+place+to+do+that%E2%80%A6+guess+what%E2%80%A6+he%E2%80%99s+jumping%2C+climbing+and+kicking+me+and+his+sister.+NOT+an+option.+Today+I%E2%80%99m+going+to+talk+about+my+Lily+and+River+climber.+It%E2%80%99s+AMAZING.+++I%E2%80%99m+all+about+open+ended+toys.+This+is+that.+There%E2%80%99s+not+one+way+to+use+it.+The+slide+can+be+at+a+million+levels.+It+can+also+be+a+playdough+table%2C+a+place+to+play+cars%2C+a+ramp%E2%80%A6+and+then+flip+it+over+it%E2%80%99s+a+rock+climbing+wall+or+a+ramp+with+obstacles.+I+didn%E2%80%99t+discover+this+on+my+own.+I+put+the+toy+out%E2%80%A6+and+then+just+let+Charlie+do+WHATEVER+the+heck+he+wanted+with+it.+I+love+that+it+can+be+a+climber%2C+or+it+can+turn+into+a+fort%2C+a+ladder+for+his+stuffed+puppy+to+climb.+It%E2%80%99s+AMAZING.++Highly+highly+recommend+this+toy+as+an+indoor+playground%2C+climber%2C+slide%E2%80%A6+and+so+much+more.++I+have+a+15%25+off+code%2C+so+don%E2%80%99t+forget+to+use+xolauren+when+you+checkout%21'},
      ];

  constructor() { }

  ngOnInit() {
  }

}
