import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCheckComponent } from './list-check.component';

describe('ListCheckComponent', () => {
  let component: ListCheckComponent;
  let fixture: ComponentFixture<ListCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
