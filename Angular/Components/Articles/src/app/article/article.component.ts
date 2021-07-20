import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article: Article = new Article('', '', '', '', false);
  @Input() articleDesc: string = '';
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  constructor() {
    this.descToShow = '';
    this.articleDescLen = 0;
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.article.description.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    if (this.imageIsShown == false) {
      this.imageIsShown = true;
      this.imageButtonTitle = 'Hide Image';
    } else {
      this.imageIsShown = false;
      this.imageButtonTitle = 'Show Image';
    }
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

  ngOnInit(): void {}
}
