import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-mindfulness',
  templateUrl: './more-mindfulness.component.html',
  styleUrls: ['./more-mindfulness.component.scss']
})
export class MoreMindfulnessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moreGoodnessMindfulness() {
    this.router.navigate(['/more-goodness-mindfulness']);
  }

}
