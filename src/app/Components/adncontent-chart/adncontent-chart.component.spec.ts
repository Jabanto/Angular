import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADNcontentChartComponent } from './adncontent-chart.component';

describe('ADNcontentChartComponent', () => {
  let component: ADNcontentChartComponent;
  let fixture: ComponentFixture<ADNcontentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADNcontentChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADNcontentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
