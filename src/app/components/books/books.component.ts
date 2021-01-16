import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  listTitle: string;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const listName = this.activatedRoute.snapshot.paramMap.get('name');

    this.bookService.getAllBooks(listName).subscribe((listDetail) => {
      this.listTitle = listDetail['results']['list_name'];
      this.books = listDetail['results']['books'];
    });
  }

}
