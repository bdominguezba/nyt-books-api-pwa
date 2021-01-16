import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BestSellerList } from '../models/best-seller-list.interface';
import { Book } from '../models/book.interface';

const API_KEY = 'Mhpc5MAbXlNBycqQD85SeXKvVXAIEm8l';

@Injectable({
  providedIn: 'root'
})
export class BookService {



  constructor(private http: HttpClient) { }

  getAllBestSellersLists(): Observable<BestSellerList[]> {
    return this.http.get<BestSellerList[]>('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=' + API_KEY);
  }

  getAllBooks(list: string): Observable<any> {
    return this.http.get('https://api.nytimes.com/svc/books/v3/lists/current/' + list + '.json?api-key=' + API_KEY);
  }

  getBookReview(bookName: string) {
    return this.http.get('https://api.nytimes.com/svc/books/v3/reviews.json?title=' + bookName + '&api-key=' + API_KEY);
  }
}
