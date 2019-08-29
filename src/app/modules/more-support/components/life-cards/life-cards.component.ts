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

  members: {title: string, subtitle: string, content: string, url: string}[] = [
    {
      title: 'Wer loslässt hat die Hände frei für Neues...',
      subtitle: 'Celui qui lache prise a les mains libres pour du nouveaux...',
      content: 'Who let\'s go has his hands free for new experiences...',
      url: 'https://cdn-images-1.medium.com/max/2600/1*2KzZuyvJ500HA0mB4nBemA.jpeg'},
    {title: 'Verunsicherung steht am Anfang von Veränderung...',
    subtitle: 'L\'insecurite es au debut du changement...',
    content: 'Insecurity is at the beginning of change...',
    url: 'http://transcendlc.com/wp-content/uploads/2018/06/overcoming-organizational-change-challenges.jpg'},
    {title: 'OFFENE Türen anstatt vor verschlossenen zu warten.',
    subtitle: 'Je prende des portes OUVERTES, au lieu d\'attendre devant des portes fermees.',
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
      url: 'http://eviaadvisors.com/wp-content/uploads/2016/04/sea-1281780_960_720.jpg'},
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
      content: 'When I start, the energy begins.',
      url: 'https://www.york.ac.uk/media/study/courses/postgraduate/physics/hero%20-%20fusion%20energy.jpg'},
    {
      title: 'Ich sorge gut für mich.',
      subtitle: 'Je prends soins de moi.',
      content: 'I take good care of myself.',
      url: 'https://yogacollective.dk/media/603/tr%C3%83%C2%A6et_silhouette-2512805_1920.jpg'},
    {
      title: 'Ich würdige was mir gelungen ist.',
      subtitle: 'J\'honneur ce que j\'ai fais.',
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
      title: 'Ich übe meinen Mund aufzumachen.',
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
          {
            title: 'Hier bestimme ich.',
            subtitle: 'Ici c\'est moi qui commande.',
            content: 'I am in control here.',
            url: 'https://nickwignall.com/wp-content/uploads/2018/06/Assertiveness-Main.jpg'},
          {
            title: 'Ich höre auf meinen Körper. Was brauchst Du?',
            subtitle: 'Ruhe, Bewegung, Berührung, Essen, Trinken, frische Luft.',
            content: 'I listen to my body. I have everything I need.',
            // tslint:disable-next-line: max-line-length
            url: 'https://www.eposdirect.co.uk/media/post/image/h/o/how_level_of_customer_satisfaction_affected_by_the_morale_of_employees.jpg'},
          {
            title: 'Ich will meine Beziehungen pflegen.',
          subtitle: 'Je veux entretenir mes relations.',
          content: 'I take care of my relationships.',
          // tslint:disable-next-line: max-line-length
          url: 'https://www.frontstream.com/hubfs/Imported_Blog_Media/Fotolia_90588653_Subscription_Monthly_M.jpg'},
          {
          title: 'Gute Ziele sind die, die ich mit Lust und Freude angehe.',
          subtitle: 'Bonnes buttes sont celles que j\'ai envie de faire avec plaisir.',
          content: 'Good goals, are those that I do with passion and joy.',
          url: 'https://eliseblaha.typepad.com/.a/6a00d8341c71c353ef01b8d0f2e862970c-pi'},
          {
            title: 'Lass uns wieder miteinander reden.',
            subtitle: 'Vient, parlons ensemble.',
            content: 'Let\'s talk together again.',
            // tslint:disable-next-line: max-line-length
            url: 'https://cbe.ab.ca/news-centre/PublishingImages/20190508-talk-together-be-together-lead-together-student-voice-symposium-2.png'},
          {
            title: 'Ich betrachte meine Probleme aus einer anderen Perspektive.',
            subtitle: 'J\'observes mes problemes d\'un angle different.',
            content: 'I take a look at my problems from a different perspective.',
            url: 'https://inflection360.com/wp-content/uploads/2018/08/Restructuring-1-1080x675.jpg'},
          {
            title: 'Hol dir was Du brauchst.',
            subtitle: 'Prend ce dont tu as besoins.',
            content: 'Take what you need.',
            url: 'https://i.pinimg.com/originals/04/6b/3a/046b3af45a6e2927b67353b2c3696664.jpg'},
          {
            title: 'Ich darf meine Meinung auch ändern.',
            subtitle: 'Je peux changer mon avis.',
            content: 'I am allowed to change my mind.',
            url: 'http://www.coprad.cl/wp-content/uploads/2019/04/Human-Brain-Wallpaper4-1024x675.jpg'},
          {
            title: 'Gemeinsam macht es mehr Spass..',
            subtitle: 'Ensemble ca fait plus de plaisir.',
            content: 'Together it is more fun.',
            url: 'https://company.navabi.de/wp-content/uploads/2018/06/IMG_0161-1.jpg'},
          {
            title: 'Ich sehe Licht am Ende des Tunnels..',
            subtitle: 'Je voit une lumiere au bout du tunnel.',
            content: 'I see a light at the end of the tunnel.',
            url: 'https://aerielviews.files.wordpress.com/2019/02/img_4387.jpg?w=1120'},
          {
            title: 'Ich nehme mir die Zeit dankbar zu sein.',
            subtitle: 'Je prends le temps d\'etre dans la gratitude.',
            content: 'I take the time to be grateful.',
            url: 'https://cdn.mindful.org/bikenew.png?q=80&fm=jpg&fit=crop&w=1400&h=875'},
          {
            title: 'Ich würdige was mir gelungen ist.',
            subtitle: 'J\'honneur ce que j\'ai fais.',
            content: 'I honor what I have done.',
            url: 'https://cdn.pixabay.com/photo/2018/07/19/22/34/heart-3549572_960_720.jpg'},
          {
            title: 'Ich finde meinen Platz.',
            subtitle: 'J\'e prends ma place.',
            content: 'I take my place in society.',
            // tslint:disable-next-line: max-line-length
            url: 'https://bloximages.newyork1.vip.townnews.com/dentonrc.com/content/tncms/assets/v3/editorial/8/d7/8d7c6f1c-2915-598c-a599-f3d4d520d3b2/5cb515de30d37.image.jpg?resize=1200%2C789'},
          {
            title: 'Ich bin wunderbar gemacht.',
            subtitle: 'J\'ai ete fait merveilleusement.',
            content: 'I have been made wonderfully.',
            url: 'http://es.wallpaperforgirls.com/mobile/flores/fondo-de-pantalla-para-ninas-800x480-408-87baf426.jpg'},
          {
            title: 'Es gibt mehr als eine Lösung.',
            subtitle: 'Il y a plus qu\'une solution.',
            content: 'There is more than one solution',
            url: 'https://i.ytimg.com/vi/cLqjK3ddSy0/maxresdefault.jpg'},
          {
            title: 'Ich darf um Hilfe bitten.',
            subtitle: 'J\'ai le droit de demander de l\'aide.',
            content: 'I am allowed to ask for help.',
            url: 'http://www.colinnewlyn.com/wp-content/uploads/2017/11/help-2444110_1920.png'},
          {
            title: 'Ich erlaube mir nur was für mich zu tun.',
            subtitle: 'Je m\'autorise a faire quelque chose que pour moi.',
            content: 'I allow myself to only do something for me.',
            url: 'https://www.medicalnewstoday.com/content//images/articles/321/321309/socks-with-heart.jpg'},
            {
              title: 'Ich bin schon ganz OK.',
              subtitle: 'Je suis OK.',
              content: 'I am pretty OK.',
              // tslint:disable-next-line: max-line-length
              url: 'https://www.first-academy.de/wp-content/uploads/2013/04/Fotolia_88044077_Subscription_Monthly_M.jpg'},
              {
                title: 'Wichtige Entscheidungen, überschlafe ich eine Nacht.',
                subtitle: 'Des decisions importantes, je dorts une nuit.',
                content: 'Before taking important decisions, I sleep over it a night.',
                // tslint:disable-next-line: max-line-length
                url: 'https://www.babycaremag.com/wp-content/uploads/2016/01/BabyCareMag-Glowing-Baby.jpg'},
                {
                  title: 'Ich tanze als ob niemand zuschaut.',
                  subtitle: 'Je dance comme si personne ne regardes.',
                  content: 'I dance as if nobody is watching.',
                  // tslint:disable-next-line: max-line-length
                  url: 'https://qph.fs.quoracdn.net/main-qimg-995e1689eea9b8780e0d000d2e2f6101.webp'},
                  {
                    title: 'Ich verabrede mich.',
                    subtitle: 'Je prends un Rdv',
                    content: 'I am going on a date.',
                    // tslint:disable-next-line: max-line-length
                    url: 'https://www.mantelligence.com/wp-content/uploads/2018/08/what-to-do-on-a-first-date-main.jpg'},
                  {
                    title: 'Plan A, das ziehe ich jetzt durch.',
                    subtitle: 'Plan A, j\'y vais jus ce qu\'au bout.',
                    content: 'Plan A, I will push through to completion.',
                    // tslint:disable-next-line: max-line-length
                    url: 'http://www.vllc.com.au/uploads/3/0/3/7/30371177/woman-imagining_orig.jpg'},
                  {
                    title: 'Ich nehme mir eine Auszeit.',
                  subtitle: 'Je prends de vacances.',
                  content: 'I will take a vacation.',
                  // tslint:disable-next-line: max-line-length
                  url: 'https://sites.google.com/a/saddlebrookschools.org/fl_dream_vacation/_/rsrc/1456504995669/home/beach.jpg'},
                  {
                  title: 'Du gehörst dazu.',
                  subtitle: 'Tu y fait partie.',
                  content: 'You are a part of it.',
                  url: 'https://talk.sonymobile.com/t5/image/serverpage/image-id/32281iE41D0FBF2B5FB101?v=1.0'},
                  {
                    title: 'Ich bin jetzt in Sicherheit, alles ist gut.',
                    subtitle: 'J\'y suis en securite. Tout va bien.',
                    content: 'I am safe. Everything is well.',
                    // tslint:disable-next-line: max-line-length
                    url: 'https://jacrblog.org/images/easyblog_articles/285/GettyImages-169937958.jpg'},
                  {
                    title: 'Alles zu seiner Zeit.',
                    subtitle: 'Tout a son temps.',
                    content: 'Everything at it\'s time..',
                    url: 'https://img.vidible.tv/prod/2019-03/25/5c9955ad41aecf37f744ef74/5c99561f2504206e604e5165_o_U_v1.jpg'},
                  {
                    title: 'Ich plane meinen Tag.',
                    subtitle: 'Je planifie ma journee.',
                    content: 'I plan my day.',
                    url: 'https://projectlifemastery.com/wp-content/uploads/2014/01/tips-for-achieving-your-goals-1280x720.jpg'},
                  {
                    title: 'Ich muss nicht von jedem gemocht werden.',
                    subtitle: 'Je ne dois pas etre aimer par tout le monde.',
                    content: 'I don\'t have to be liked by everybody.',
                    // tslint:disable-next-line: max-line-length
                    url: 'http://images.summitmedia-digital.com/cosmo/images/2018/04/03/main-guess-what-not-everyone-likes-to-share-food-and-heres-why-1522718243.jpg'},
                  {
                    title: 'Nein ist ein ganzer Satz.',
                    subtitle: 'Non est une phrase complete.',
                    content: 'No is a full sentence.',
                    url: 'https://www.rachelsimmons.com/wp-content/uploads/2015/08/No.jpg'},
                  {
                    title: 'Ich brauche nicht die Erwartungen anderer erfüllen.',
                    subtitle: 'je n\'ai pas a satifaire les attentes des autres.',
                    content: 'I don\'t have to fulfill the expectations of the others.',
                    url: 'https://cdn-images-1.medium.com/max/2560/1*vwHByqyQ_yy3PJmOQdaGDg.jpeg'},
                  {
                    title: 'Ich HABE etwas beizutragen. Ich bin talentiert.',
                    subtitle: 'J\'ai de quoi a contribuer, je suis talentuex.',
                    content: 'I have something to contribute, I am talented.',
                    // tslint:disable-next-line: max-line-length
                    url: 'https://media.playmobil.com/i/playmobil/70031_product_detail/Rockstar?locale=de-DE,de,*&$pdp_product_zoom_xl$&strip=true&qlt=80&fmt.jpeg.chroma=1,1,1&unsharp=0,1,1,7&fmt.jpeg.interlaced=true'},
                  {
                    title: 'Ich befreie mich von altem Ballast.',
                    subtitle: 'Je me debarasse des dechets.',
                    content: 'I free myself from old stuff.',
                    url: 'https://cdn.pixabay.com/photo/2018/07/19/22/34/heart-3549572_960_720.jpg'},
                  {
                    title: 'Ich finde meinen Platz.',
                    subtitle: 'J\'e prends ma place.',
                    content: 'I take my place in society.',
                    // tslint:disable-next-line: max-line-length
                    url: 'https://miro.medium.com/max/1200/1*W7B7Qby8SevTqG70PvIuyg.jpeg'},
                  {
                    title: 'Wenn es so nicht geht, probiere es anders.',
                    subtitle: 'Si ca marches pas comme ca, je fais autrement.',
                    content: 'If it doesn\'t work that way, do it differently.',
                    url: 'https://i1.wp.com/mxvice-en.com/wp-content/uploads/2017/04/Site-Jeffrey-Herlings-4.jpg'},
                  {
                    title: 'Was würde mir jetzt gut tun?',
                    subtitle: 'Que\'est-ce qui me fera du bien maintenant?',
                    content: 'What would do me well, now?',
                    // tslint:disable-next-line: max-line-length
                    url: 'https://madisonpsychiatricassociates.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-29-at-10.44.37-AM-1400x793.png'},
                  {
                    title: 'Was würde ich jetzt meiner bester Freundin raten?',
                    subtitle: 'Qu\'est-ce que je conseillerai a ma meilleure copine?',
                    content: 'What would I advise my best friend to do?',
                    url: 'https://www.jesuit.ie/wp-content/uploads/2016/12/jeslib-01.jpg'},
                  {
                    title: 'Ich schaffe mir Raum.',
                    subtitle: 'Je me fait de la place.',
                    content: 'I make room for myself.',
                    url: 'https://netzwerk-lebensraum.de/wp-content/uploads/2019/02/cropped-Neu.jpg'},
                    {
                      title: 'Vor wem verantworte ich mich eigentlich? Ich.',
                      subtitle: 'De qui est-ce que je me repsonsabilise? Moi.',
                      content: 'In front of whom do I responsibilize myself? Me.',
                      // tslint:disable-next-line: max-line-length
                      url: 'https://www.welt.de/img/wissenschaft/mobile101235271/4522500027-ci102l-w1024/tiger-sumatra-DW-Wissenschaft-Frankfurt-Main-jpg.jpg'},
                      {
                        title: 'Heute habe ich eine wichtige Verabredung mit mir selbst.',
                        subtitle: 'Today I have an important date with myself.',
                        content: 'Aujourd\'hui j\'ai un RDV important avec moi.',
                        // tslint:disable-next-line: max-line-length
                        url: 'http://c1.peakpx.com/wallpaper/331/877/97/sign-love-sign-hands-love-sunset-wallpaper.jpg'},
                        {
                          title: 'Heute bin ich nicht erreichbar.',
                          subtitle: 'Aujourd\'hui je suis pas joignable.',
                          content: 'Today I am not reachable.',
                          // tslint:disable-next-line: max-line-length
                          url: 'https://www.tripsavvy.com/thmb/3DIiK4HxvOxRTYo0hnp8pePHyxo=/2121x1414/filters:fill(auto,1)/man-in-hammock-near-mountains-5c1d06bd46e0fb00017d73f8.jpg'},
                          {
                            title: 'Ich lerne noch.',
                            subtitle: 'J\'apprends encore.',
                            content: 'I am still learning.',
                            // tslint:disable-next-line: max-line-length
                            url: 'https://www.thecplinstitute.ie/wp-content/uploads/2016/10/Continuous-Learning-Journey-1.jpg'},
                        ];

  constructor() { }

  ngOnInit() {
  }

}
