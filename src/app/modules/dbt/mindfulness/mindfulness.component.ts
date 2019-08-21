import { Component, OnInit, Injectable } from '@angular/core';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { MindfulnessBottomSheetComponent } from '../mindfulness-bottom-sheet/mindfulness-bottom-sheet.component';
import { Router } from '@angular/router';


export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
              public isLoading = false) {}
}

export class DynamicDatabase {
  dataMap = new Map<string, string[]>([
    ['Achtsamkeit spielt in der DBT eine zentrale Rolle!',
    [`Wir wissen, dass Achtsamkeitsübungen helfen, körperlichen und seelischen Stress zu vermindern.
    Achtsamkeit ist die Basis aller Skills! Nur wenn Sie wahrnehmen, dass Sie z.B. unter Hochspannung
     stehen, können Sie Stresstoleranzskills einsetzen.`,
    ]],
    ['Was lernen Sie durch Achtsamkeitsübungen?', [
      `Durch Achtsamkeitsübungen lernen Sie, bestimmte Fähigkeiten einzusetzen.
      Es geht um Ihre Fähigkeit, etwas wahrzunehmen, etwas zu beschreiben und an etwas teilzunehmen.
      Das nennen wir WAS-Fertigkeiten.`,
    ]],
  ]);

  rootLevelNodes: string[] = ['Achtsamkeit spielt in der DBT eine zentrale Rolle!', 'Was lernen Sie durch Achtsamkeitsübungen?'];


  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}

@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>,
              private _database: DynamicDatabase) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.onChange.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }


  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }


  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this._database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) {
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++, count++) {}
        this.data.splice(index + 1, count);
      }

      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 1000);
  }
}

@Component({
  selector: 'app-mindfulness',
  templateUrl: './mindfulness.component.html',
  styleUrls: ['./mindfulness.component.scss'],
  providers: [ DynamicDatabase ]
})
export class MindfulnessComponent implements OnInit {
  constructor(database: DynamicDatabase, private bottomSheet: MatBottomSheet,
              private router: Router) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  ngOnInit() {
  }

  firstMindfulness() {
    this.bottomSheet.open(MindfulnessBottomSheetComponent, {
      data: { key: 'first'},
    });
  }

  secondMindfulness() {
    this.bottomSheet.open(MindfulnessBottomSheetComponent, {
      data: { key: 'second'},
    });
  }

  moreMindfulness() {
    this.router.navigate(['/more-mindfulness']);
  }

}
