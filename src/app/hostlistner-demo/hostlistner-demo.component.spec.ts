import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistnerDemoComponent } from './hostlistner-demo.component';

describe('HostlistnerDemoComponent', () => {
  let component: HostlistnerDemoComponent;
  let fixture: ComponentFixture<HostlistnerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostlistnerDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostlistnerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
