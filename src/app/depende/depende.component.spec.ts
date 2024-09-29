import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependeComponent } from './depende.component';

describe('DependeComponent', () => {
  let component: DependeComponent;
  let fixture: ComponentFixture<DependeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
