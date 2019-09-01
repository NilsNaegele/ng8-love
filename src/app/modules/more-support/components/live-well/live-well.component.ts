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
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://media.mnn.com/assets/images/2017/09/man-running.jpg.653x0_q80_crop-smart.jpg',
      title: 'Bewegung macht mich glücklich.',
      description: `Moving makes me happy. Le sport me rend heureux.`,
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
      imgSrc: 'https://jonathanhowes.files.wordpress.com/2016/09/opendoor2.jpg?w=640',
      title: 'OFFENE Türen anstatt vor verschlossenen zu warten.',
      // tslint:disable-next-line: max-line-length
      description: `OPEN doors instead of waiting in front of closed ones. Je prend des portes OUVERTES au lieu d'attendre devant des portes fermees.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://cdn1.spiegel.de/images/image-1359206-860_poster_16x9-dcfm-1359206.jpg',
      title: 'Ich besteige einen Berg, ich darf Pausen machen.',
      description: `I climb a mountain, I can take a break. Je montes une montagne, je peux prendre une pause.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://media-ce-cdn.oriflame.com/-/media/CE/C7_2019/Editorials/certificate-editorial-love-nature.ashx?u=0101010000',
      title: 'Ich fühle mich gut. Ich darf mich gut fühlen.',
      description: `I feel good, I am allowed to feel good. Je me sents bien, je peux me sentir bien.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'http://starkovtattoo.spb.ru/images/500/DSC100574580.jpg',
      title: 'Ich bin WERTVOLL, einfach weil ich bin.',
      description: `I am valuable, because I am. J'ai de la valeur, juste par ce que je suis.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://miro.medium.com/max/12032/1*rTQBaBXYcBJppdeptPYHKw.jpeg',
      title: 'Ich befreie mich von altem Ballast.',
      description: `I get rid of old trash. Je me debarasse des ordures.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://www.mycustomer.com/sites/default/files/styles/banner/public/istockphoto_thinksstock_idea.jpg?itok=XSoE2N3X',
      title: 'Funktioniert nicht? Probier\'s mal anders.',
      description: `Try new ways. Si ca marche pas comme ca, fait le autrement.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      // tslint:disable-next-line: max-line-length
      imgSrc: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frajatbhageria%2Ffiles%2F2017%2F09%2Fcode-copy-1200x1200.jpg',
      title: 'Was würde mir jetzt gut tun?',
      description: `Lesen, programmieren, schlafen, bewegen, spielen, treffen, lieben...`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/50/2018/11/06110356/hero.jpg',
      title: 'Meiner besten Freundin raten?',
      description: `Recommend my best friend to do? Conseilles a ma meilleure amie?`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/08/space-walk-nasa.jpg',
      title: 'Ich schaffe mir Raum.',
      description: `I make room for myself. Je me fais de la place.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://miro.medium.com/max/12936/1*Gsb8HFe06JZCjbp5c2wikA.jpeg',
      title: 'Ich habe die Kontrolle über mein Leben.',
      description: `I have control over my life. J'ai le controle de ma vie.`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://metro.co.uk/wp-content/uploads/2019/06/SEI_73273865-e1560240508121.jpg?quality=90&strip=all',
      title: 'Heute bin ich nicht erreichbar.',
      description: `Today I am not reachable. Aujourd'hui je ne suis pas joignable`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://i.pinimg.com/originals/64/09/61/640961247107dfe08430337f5123aac7.jpg',
      title: 'Heute habe ich eine Verabredung mit mir selbst.',
      description: `Today I have a date with myself. Aujourd'hui j'ai und RDV avec moi.`,
      button: 'Living well is the beste revenge.'
    },
    {
      imgSrc: 'https://www.recoveryranch.com/wp-content/uploads/2014/09/Feel-Better-Drink-Less-with-Deep-Breathing.jpg',
      title: 'Ich halte inne und spüre meinen Atem. Es ist wunderschön.',
      description: `I stop and feel my breath. Je prends une pause et sents ma haleine.`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://www.yakimahousing.org/cache/img/f/a/2/2/5/fa225a818b3264c8b3a29f7bf5339525.jpg',
      title: 'Ich beginne wo ich bin. Ich gebrauche was ich habe. Ich tue was ich kann.',
      description: `I start where I am. I use what I have. I do what I can.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      // tslint:disable-next-line: max-line-length
      imgSrc: 'http://digitalimagemakerworld.com/images/angel-wallpaper/37621808-angel-wallpaper.jpg',
      title: 'Ich bin unschuldig. Es ist nicht meine Schuld.',
      description: `I am innocent. Je ne suis pas coupable.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://melodica.ae/wp-content/uploads/2019/03/ballet-dance.jpg',
      title: 'Ein Schritt nach dem anderen.',
      description: `One step after the other. Un pas apres l'autre.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://www.gastontagni.com/wp-content/uploads/2018/03/boxing-stance-portrait-1484x991.jpg',
      title: 'Wenn ich hinfalle, stehe ich wieder auf.',
      description: `When I fall I stand back up. Quand je tombes, je me releve.`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://miro.medium.com/max/3840/1*6q1-rTOP10j1qV9A7ACm_g.jpeg',
      title: 'Ich mache mal was neues.',
      description: `I will do something new. Je vais faire quelque chose de nouveau.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://c.pxhere.com/photos/50/89/address_book_notebook_book_notes_i_am_a_student_to_write_paper_annotation-1214265.jpg!d',
      title: 'Mein Herz spricht dann schreib ich.',
      description: `When my heart speak, I write. quand mon coeurps parle j'ecrit.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://i2.wp.com/www.lifedecided.com/wp-content/uploads/2015/12/2-steps.jpg?fit=1920%2C1200',
      title: 'Manchmal einen Schritt zurück, und zwei vorwärts.',
      description: `One step back and two forwards. Un pas en arriere est deux a l'avant.`,
      button: 'Living well is the beste revenge.'
    },
    {
      imgSrc: 'https://img.huffingtonpost.com/asset/5d0154c6210000dc18e8e3da.jpeg?ops=1778_1000',
      title: 'Alles was ich mache ist gut. Ich mache geile Sachen.',
      description: `Everything I do is good. Tous ce que je fais est bon.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://www.thewebinitiative.net/wp-content/uploads/2016/09/stockvault-rocket-launch-with-copyspace184372.jpg',
      title: 'Erstmal anfangen. Los geht\'s! Nach den Sternen greifen.',
      description: `Just start. Get it done. Commence et avance.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://adventure.com/wp-content/uploads/2017/05/Amazon-1_-1920x1080.jpg',
      title: 'Ich gehe auf eine Entdeckungsreise. Die Welt entdecken.',
      description: `I am starting a discovery tour. Je commence une aventure.`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://i.ytimg.com/vi/ArwcHjmsw3A/maxresdefault.jpg',
      title: 'Worauf ich meine Aufmerksamkeit richte verstärke ich.',
      description: `Whatever I focus on, I increase. Sur quoi je me concentre, j'amplifie.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://img2.goodfon.com/wallpaper/nbig/0/2d/molniya-ruka-sila-energiya-art.jpg',
      title: 'Beim Losgehen kommt die Kraft. Ich werde immer stärker.',
      description: `When I start the energy begins. Je commence la force me vient.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      // tslint:disable-next-line: max-line-length
      imgSrc: 'https://cdn.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2019/04/Continuous-Learning-Will-Empower-the-CEOs-of-the-Future.jpg',
      title: 'Ich lerne noch. Ich lerne ständig dazu. Ich werde immer besser.',
      description: `I learn continuously. J'apprend tous le temps.`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://www.marketing91.com/wp-content/uploads/2019/07/Self-Appraisal.jpg',
      title: 'Anerkennung tut gut. Ich erkenne mich an und erkennen andere an.',
      description: `Appraisal does well. Etre apprecier fait du bien.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      // tslint:disable-next-line: max-line-length
      imgSrc: 'https://www.amfam.com/-/media/images/amfam/articles/business/support-for-your-dream/mobile/ten-tips-for-ultimate-dream-vacation---m.jpg',
      title: 'Ich nehme mir eine Auszeit.',
      description: `I take a break. Je prends une pause.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      // tslint:disable-next-line: max-line-length
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/Community_5145200-COMMUNITY._V392937829_SX1080_.jpg',
      title: 'Du gehörst dazu.',
      description: `You are a part of it. Tu y fais partie.`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://miro.medium.com/max/11520/1*mlOqA1DZhfxuFpON9jUeBg.jpeg',
      title: 'Alles zu seiner Zeit.',
      description: `Everything at the right time. Tous a son bon temps.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://miro.medium.com/max/5984/0*Ht-z1jCKeELXaq0F',
      title: 'Ich plane meinen Tag.',
      description: `I plan my day. Je planifie ma journee.`,
      button: 'Gut Leben is die beste Rache.'
    },
    {
      imgSrc: 'https://www.thepossibility.in/wp-content/uploads/2018/03/image_1.jpg',
      title: 'Ich bin glücklich mit meinem Leben. Ich erwarte von der Zukunft viel Gutes.',
      // tslint:disable-next-line: max-line-length
      description: `I am happy to be alive and await from the future, positive events. Je suis heureux de vivre et attend de l'avenir des evenements heureux.`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://nosidebar.com/images/yourself@2x.jpg',
      title: 'Mich muss nicht jeder mögen. Ich mag auch nicht jeden.',
      // tslint:disable-next-line: max-line-length
      description: `Everybody doesn't have to like me. Í don't like everybody. Tout le monde ne doit pas m'aimer, je n'aimes pas tout le monde non plus.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://assets.rbl.ms/10650191/origin.jpg',
      title: 'NEIN ist ein vollständiger Satz. Ich sage NEIN.',
      // tslint:disable-next-line: max-line-length
      description: `NO is a complete sentence. PERIOD. Non est une phrase complete. je dis non quand j'ai envide de le dire. Je poses des limites.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      // tslint:disable-next-line: max-line-length
      imgSrc: 'https://thumbs.dreamstime.com/b/success-winner-concept-silhouette-man-standing-showi-showing-hand-to-celebrate-sunset-twilight-107062769.jpg',
      title: 'Ich brauche nicht die Erwartungen anderer zu erfüllen.',
      // tslint:disable-next-line: max-line-length
      description: `I don't have to fulfill the expectations of the others. I fulfill my expectations. Je ne dois pas resoudre les attentes des autres.`,
      button: 'Living well is the best revenge.'
    },
    {
      // tslint:disable-next-line: max-line-length
      imgSrc: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F966858872%2F0x0.jpg',
      title: 'Ich habe etwas beizutragen. Ich bin talentiert.',
      description: `I can contribute. I am talented. J'ai de quoi a contribuer. Je suis talentueux.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://www.shavers.co.uk/wordpress/wp-content/uploads/2017/09/shave-balls.jpg',
      title: 'Ich lasse mir nich alles gefallen. Ich kann ein Arschloch sein.',
      description: `I don't accept everything. I can be a dick. Je n'acceptes plus tout. Je peux etre un trou de cul.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      // tslint:disable-next-line: max-line-length
      imgSrc: 'https://images.squarespace-cdn.com/content/v1/57b33bcce6f2e1cc1c052b22/1472751905806-Z17661JS4KG722GN2836/ke17ZwdGBToddI8pDm48kIpMHekjHQeJKx--ZwjcsFAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dozIbF1Me7AzutAQ0de-0vnFVap_gX3rml4LJDTcS-LYH3bqxw7fF48mhrq5Ulr0Hg/img-hero-inspiration.jpg?format=1500w',
      title: 'Ich lerne das GUTE wahrzunehmen. Ich konzentriere mich auf das GUTE.',
      description: `I learn to see the GOOD. I focus on all the good in my life. J'apprend a voir le BON. je me concentre sur le bon.`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/01/VR-Bike-Composite.jpg',
      title: 'Ich gebe Bedeutung und schaffe Wirklichkeit.',
      description: `I give meaning and create reality. I practice non judgmental perceptions. Je donne du sens et creer la realite.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://www.avenwood.ch/wp-content/uploads/2014/12/photodune-2048572-beautiful-woman-holding-coffee-cup-m.jpg',
      title: 'Hol dir was Du brauchst.',
      description: `Take what you need. Prends ce dont tu as besoins.`,
      button: 'Gut Leben ist die beste Rache.'
    },
    {
      imgSrc: 'https://miro.medium.com/max/3840/1*D17VRV6VEAl8elnxYYjFpA.jpeg',
      title: 'Ich darf meine Meinung auch ändern',
      description: `I can change my mind. Je peux changer mon avis.`,
      button: 'Living well is the best revenge.'
    },
    {
      imgSrc: 'https://www.sterling-copiers.com/images/community.jpg',
      title: 'Gemeinsam macht es mehr Spass.',
      description: `Together it is more fun. Ensemble ca fait plus de plaisir.`,
      button: 'Bien vivre est la meilleure revanche.'
    },
    {
      imgSrc: 'https://assets3.thrillist.com/v1/image/2838337/size/gn-gift_guide_variable_c_2x.jpg',
      title: 'Ich sehe Licht am Ende des Tunnels.',
      description: `I see a light at the end of the tunnel. Je voix une lumiere au bout du tunnel.`,
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
  }

}
