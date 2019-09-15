import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  skillKnown: string;
  activity: string;
  skillAvailable: string;
  skillApplied: string;
  effective: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {activity: '1. Puzzles', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
  {activity: '2. Computerspiel (Welches?), Programmieren (Sprache?)', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
  {activity: '3. Lesen (Was lesen Sie?)', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
  {activity: '4. Ein Instrument spielen (Welches?)', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
  {activity: '5. Sport: a. Laufen b. Fahrrad c. Wandern, Walken d. Schwimmen e. Tanzen f. Reiten g. Volleyball h. Fitness Studio i. Boxen j. Krafttraining k. eigenes Beispiel:', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
  {activity: '6. Flippern', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
  {activity: '7. Haushaltsarbeit: a. Bügeln b. Putzen c. Holz hacken d. Etwas reparieren e. Aufräumen f. Wäsche waschen g. Kochen h. eigenes Beispiel:', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
  {activity: '8. Basteln', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
  {activity: '9. Malen, etwas bemalen (z. B. mit Windowcolors, ,ein Bild, einen Blumentopf, ein Mandala, ein T-Shirt)', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
  {activity: '10. Singen', skillKnown: 'Ja / Nein', skillAvailable: 'Ja / Nein', skillApplied: '0 1 2 3 4', effective:  '0 1 2 3 4'},
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-skills-collection',
  templateUrl: './skills-collection.component.html',
  styleUrls: ['./skills-collection.component.scss']
})
export class SkillsCollectionComponent implements OnInit {
  displayedColumns: string[] = ['activity', 'skillKnown', 'skillAvailable', 'skillApplied', 'effective'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}