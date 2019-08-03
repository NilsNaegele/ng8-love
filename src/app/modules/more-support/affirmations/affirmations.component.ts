import { Component, OnInit } from '@angular/core';

const AFFIRMATIONS = [
  'Ich bin zufrieden und glücklich.',
  'Ich bin willkommen.',
  'Ich genüge mir immer.',
  'Ich bin ein liebenswerter Mensch.',
  'Ich brauche nichts zu tun um geliebt zu werden.',
  'Ich bin unschuldig.',
  'Ich bin wertvoll.',
  'Ich habe ein Recht auf meine Meinung.',
  'Ich habe ein Recht auf meine Gefühle.',
  'In mir finde ich alles was ich brauche.',
  'Ich bin ein Gewinner.',
  'Ich liebe mich wie ich bin.',
  'Ich brauche keine Schuldgefühle zu haben.',
  'Ich darf meine Wut ausdrücken.',
  'Ich bin nicht für alles verantwortlich.',
  `Ich habe das Recht: 'Ich weiss es nicht' zu sagen.`,
  `Ich habe das Recht 'Nein' zu sagen und muss mich dafür nicht rechtfertigen.`,
  'Ich habe das Recht andere um etwas zu bitten.',
  'Ich darf an mich gerichtete Bitten abschlagen.',
  'Ich habe das Recht anderen mitzuteilen wenn diese mich schlecht behandeln.',
  'Ich darf unzumutbare Anforderungen zurückweisen.',
  'Ich brauche meinen Stolz und Würde nicht verletzen zu lassen.',
  'Ich darf Fehler machen und mich irren.',
  'Ich brauche nicht von allen bewundert oder gemocht werden für alles was ich tue.',
  'Ich bin talentiert.',
  'Ich bin gut im Teilen.',
  'Ich verbessere mich ständig.',
  'Es gibt keine andere Person, die ich lieber wäre, als ich selbst.',
  'Alles, was ich mir wünsche, ist bereits in mir.',
  'Ich verdiene das Beste.',
  'Ich fühle mich besser und besser.',
  'Es gibt eine Menge, worauf ich stolz sein kann.',
  'Ich bin dafür geschaffen, Erfolg zu haben! Das ist in meiner Seelen-DNA.',
  'Heute werde ich ruhig und voller Vertrauen sein.',
  'Es gefällt mir am Morgen aufzuwachen und einen neuen Tag zu begrüssen.',
  'Es ist schön, so viele Menschen um mich zu haben, die mich dabei unterstützen, meinen Weg zu gehen.',
  'Ich kann mit schwierigen Situationen umgehen.',
  'Ich habe Vertrauen in mich selbst.',
  'Ich sehe mich selbst als schön, intelligent und voller Selbstvertrauen und so sehen mich auch die anderen.',
  'Ich bin schön.',
  'Mein Selbstvertrauen wird jeden Tag stärker.',
  'Ich bin kreativ.',
  'Ich geniesse die einzelnen Momente meines Lebens.',
  'Ich habe die Freiheit, mein Leben so zu leben, wie ich es möchte.',
  'Ich bin aufrichtig mir selbst und anderen gegenüber.',
  'Ich bin talentiert und intelligent.',
  'Ich nehme mich selbst ernst.',
  'Ich achte gut auf mich.',
  'Ich kann im Jetzt Dinge ändern, die ich ändern möchte.',
  'Ich übernehme Verantwortung für mein Leben.',
  'Ich bin wertvoll, unabhängig davon, wie ich mich gerade fühle.',
  'Ich gestalte mein Leben nach meinen Vorstellungen.',
  'Ich sehe das Gute in den Menschen um mich.',
  'Ich weiss, dass ich nicht perfekt bin und es nie sein werde, aber ich mag mich genau so, wie ich bin.',
  'Ich bin nett zu mir selbst.',
  'Ich kann Spass haben und das Leben geniessen.',
  'Ich bin ausgeruht und erholt.',
  'Ich bin in der Lage, meine Gefühle angemessen auszudrücken.',
  'Ich bin dankbar für all das Gute in meinem Leben.',
  'Ich bin okay.',
  'Ich bewege mich entschlossen und mit Selbstvertrauen.',
  'Ich bin eine liebende und fürsorgliche Person.',
  'Ich bewege mich in eine positive Richtung und komme meinen Zielen näher.',
  'Ich mag meine Gefühle.',
  'Ich wertschätze mich selbst.',
  'Ich bin gut genug.',
  'Ich vertraue mir.',
  'Ich tue mein Bestes und das ist gut.',
  'Ich verfüge über Ausdauer und Beharrlichkeit.',
  'Ich kann es geniessen unter Menschen zu sein, und Kontakt zu haben.',
  'Ich mag meinen Körper.',
  'Ich fühle mich ruhig und sicher.',
  'Alles was ich brauche, steht mir zur Verfügung.',
  'Ich bestimme, wie ich leben möchte.',
  'Ich tue immer mein Bestes.',
  'Mein Leben hat einen Sinn.',
  'Ich kenne meinen Wert.',
  'Ich bin entspannt.',
  'Ich versuche so gut wie ich kann, weise Entscheidungen zu treffen.',
  'Ich bin nett.',
  'Ich kann meine Träume verwirklichen.',
  'Ich will leben.',
  'Ich geniesse den Prozess des lernens, um all das zu erreichen, was ich mir vorgenommen habe.',
  'Ich glaube an mich selbst.',
  'Ich möchte leben.',
  'Ich habe Vertrauen.',
  'Ich nutze meine Möglichkeiten und Chancen.',
  'Ich bin gerne hier.',
  'Ich werde von Tag zu Tag stärker.',
  'Ich kann selbst entscheiden, was ich tun möchte.',
  'Ich entscheide mich, Dinge zu tun, die mir ein gutes Gefühl geben.',
  `Ich habe mich für mein Leben und meinen Weg entschieden und bin bereit,
  alles Nötige zu tun, um meine Ziele zu verwirklichen und glücklich zu werden.`,
  'Ich höre auf mich selbst.',
  'Es ist schön zu leben.',
  'Ich fühle mich ruhig und sicher Tag für Tag.',
  'Ich akzeptiere alle meine Gefühle als Teil von mir.',
  'Ich folge meinen Träumen.',
  'Ich bin dankbar für all das, was mir gegeben wurde.',
  'Alles was das Leben mir zu bieten hat, ist wundervoll und es ist mein täglicher Entscheid, das Schöne zu geniessen.',
  'Ich bin intelligent.',
  'Ich bin geschätzt.',
  'Ich habe die Kontrolle über mein Leben.',
  'Ich bin fair und aufrichtig gegenüber anderen.',
  'Heute ist mein Tag. Es gibt keinen anderen Menschen oder äussere Ereignisse, die diesen Tag ruinieren könnten.',
  'Ich mag mich.',
  'Ich sorge für Menschen, die mir etwas bedeuten und zeige ihnen, dass ich sie liebe und wertschätze.',
  'Ich akzeptiere mich selbst hier und jetzt.',
  'Ich bin ein guter Freund.',
  'Ich habe Zugang zu einer erstaunlichen und beeindruckenden Welt.',
  'Ich bin mutig.',
  'Ich treffe meine Entscheidungen und ich mag meine Entscheidungen.',
  'Ich wähle Liebe und Vertrauen.',
  'Ich mag Dinge, die mir ein gutes Gefühl geben.',
  'Ich wertschätze den Moment.',
  'Ich mache alles so gut ich nur kann.',
  'Ich verdiene es glücklich zu sein.',
  'Ich akzeptiere mich, so wie ich bin und ich mag mich.',
  'Ich bin geliebt.',
  'Ich liebe mich selbst.',
  'Ich habe Vertrauen in die Zukunft.',
  'Ich bin liebenswert.',
  'Ich erlaube mir selbst, grosse Träume zu haben.',
  'Ich liebe mich, genau so wie ich bin.',
  'Heute fühle ich mich gut.',
  'Ich habe Freunde, die mich mögen und die sich für mich interessieren - und ich mag meine Freunde und interessiere mich für sie.',
  'Ich bin gut, genau so wie ich bin.',
  'Heute wird alles gut gehen, ich fühle mich gut.',
  'Ich bin voller Energie.',
  'Heute ist der erste Tag vom Rest meines Lebens und ich kann die Richtung bestimmen.',
  'Ich fühle Vertrauen und Ausgeglichenheit.',
  'Ich halte meinen Kopf hoch.',
  'Ich geniesse das Leben.',
  'Es gibt keinen Ort, an dem ich lieber wäre.',
  'Jetzt ist ein neuer Moment.',
  'In meinem Leben und in mir selbst gibt es Stabilität.',
  'Es gefällt mir, andere zu unterstützen.',
  'Ich geniesse es gut auszusehen.',
  'Ich bin ruhig und entspannt.',
  'Mir stehen viele Möglichkeiten offen und ich treffe die bestmöglichsten Entscheidungen.',
  'Ich achte darauf, was ich möchte.',
  'Ich bin stark körperlich, psychisch und emotional.',
  'Ich bin ein guter Freund.',
  'Jetzt ist ein neuer Moment.',
  'Ich bleibe abstinent, egal was passiert.',
  'Ich habe meinen Helden gefunden, der bin ich.',
  'Ich bin mein bester Freund.',
  'Ich kann alles machen, was ich will.',
  'Ich mache dass wovor ich am meisten Angst habe, und dominiere meine Angst.',
  'Ich bin selbstsicher.',
  'Ich habe Selbstvertrauen.',
  'Ich habe Selbstwert.',
  'Ich liebe mich und akzeptiere mich wie ich bin.',
  'Ich fühle mich gut, ich darf mich gut fühlen.'
];

@Component({
  selector: 'app-affirmations',
  templateUrl: './affirmations.component.html',
  styleUrls: ['./affirmations.component.scss']
})
export class AffirmationsComponent implements OnInit {
  private static counter = 0;
  affirmation = '';

  constructor() { }

  ngOnInit() {
    this.affirmation = this.selectRandomAffirmation();
  }

  newAffirmation(): void {
    this.affirmation = this.selectRandomAffirmation();
  }

  selectRandomAffirmation(): string {
      if (AffirmationsComponent.counter === AFFIRMATIONS.length) {
        AffirmationsComponent.counter = 0;
      }
      return AFFIRMATIONS[AffirmationsComponent.counter++];
  }

}
