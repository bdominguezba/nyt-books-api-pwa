import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersListsComponent } from './best-sellers-lists.component';

describe('BestSellersListsComponent', () => {
  let component: BestSellersListsComponent;
  let fixture: ComponentFixture<BestSellersListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellersListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellersListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
