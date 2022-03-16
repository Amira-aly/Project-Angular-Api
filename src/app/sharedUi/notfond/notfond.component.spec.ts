import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfondComponent } from './notfond.component';

describe('NotfondComponent', () => {
  let component: NotfondComponent;
  let fixture: ComponentFixture<NotfondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
