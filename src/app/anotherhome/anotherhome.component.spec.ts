import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherhomeComponent } from './anotherhome.component';

describe('AnotherhomeComponent', () => {
  let component: AnotherhomeComponent;
  let fixture: ComponentFixture<AnotherhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
