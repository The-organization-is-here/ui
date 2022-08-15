import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCardInfoComponent } from './get-card-info.component';

describe('GetCardInfoComponent', () => {
  let component: GetCardInfoComponent;
  let fixture: ComponentFixture<GetCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCardInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
