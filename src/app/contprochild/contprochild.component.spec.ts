import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContprochildComponent } from './contprochild.component';

describe('ContprochildComponent', () => {
  let component: ContprochildComponent;
  let fixture: ComponentFixture<ContprochildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContprochildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContprochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
