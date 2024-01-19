import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyFlashSalesComponent } from './weekly-flash-sales.component';

describe('WeeklyFlashSalesComponent', () => {
  let component: WeeklyFlashSalesComponent;
  let fixture: ComponentFixture<WeeklyFlashSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyFlashSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyFlashSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
