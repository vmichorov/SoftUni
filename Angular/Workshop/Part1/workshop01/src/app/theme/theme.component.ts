import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { ITheme } from '../shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  themes: ITheme[] = [];

  constructor(private contentService: ContentService) {
    this.fetchThemes();
  }

  fetchThemes(): void {
    this.themes = [];
    this.contentService
      .loadThemes()
      .subscribe((themes) => (this.themes = themes));
  }
}
