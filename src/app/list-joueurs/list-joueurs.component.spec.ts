import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJoueursComponentComponent } from './list-joueurs-component.component';

describe('ListJoueursComponentComponent', () => {
  let component: ListJoueursComponentComponent;
  let fixture: ComponentFixture<ListJoueursComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJoueursComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJoueursComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
