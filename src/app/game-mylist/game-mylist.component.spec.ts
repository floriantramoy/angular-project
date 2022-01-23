import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMylistComponent } from './game-mylist.component';

describe('GameListComponent', () => {
  let component: GameMylistComponent;
  let fixture: ComponentFixture<GameMylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
