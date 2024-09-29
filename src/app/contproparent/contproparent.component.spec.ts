import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContproparentComponent } from './contproparent.component';

describe('ContproparentComponent', () => {
  let component: ContproparentComponent;
  let fixture: ComponentFixture<ContproparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContproparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContproparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
