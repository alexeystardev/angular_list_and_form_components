import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBlockComponent } from './count-block.component';

describe('CountBlockComponent', () => {
  let component: CountBlockComponent;
  let fixture: ComponentFixture<CountBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
