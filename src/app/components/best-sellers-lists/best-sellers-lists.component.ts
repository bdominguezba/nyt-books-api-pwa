import { Component, OnInit } from '@angular/core';
import { BestSellerList } from 'src/app/models/best-seller-list.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-best-sellers-lists',
  templateUrl: './best-sellers-lists.component.html',
  styleUrls: ['./best-sellers-lists.component.css']
})
export class BestSellersListsComponent implements OnInit {

  bestSellerLists: BestSellerList[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBestSellersLists().subscribe((lists) => this.bestSellerLists = lists['results']);
  }

}
