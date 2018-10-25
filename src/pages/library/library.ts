import { Component, OnInit } from '@angular/core';
import {Quote} from '../../data/quote.interface';

import quotes from '../../data/quotes';
import {QuotesPage} from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesPage = QuotesPage;
  quotesCollection : { category: string, quotes: Quote[], icon: string }[];

  ngOnInit()  {
    this.quotesCollection = quotes;
  }
}
