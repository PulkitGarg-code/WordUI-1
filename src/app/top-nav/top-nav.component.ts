import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopNavComponent {
  searchPlaceholder = 'Search'

  changePlaceholder(isSearch: boolean) {
    this.searchPlaceholder = isSearch ? "Search for word" : "Search";
  }
}
