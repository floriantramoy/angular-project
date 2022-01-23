import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModifComponent } from './game-modif.component';

describe('GameModifComponent', () => {
  let component: GameModifComponent;
  let fixture: ComponentFixture<GameModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
