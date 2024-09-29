import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpinterdemoComponent } from './httpinterdemo.component';

describe('HttpinterdemoComponent', () => {
  let component: HttpinterdemoComponent;
  let fixture: ComponentFixture<HttpinterdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpinterdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpinterdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
