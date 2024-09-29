import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentprochildComponent } from './contentprochild.component';

describe('ContentprochildComponent', () => {
  let component: ContentprochildComponent;
  let fixture: ComponentFixture<ContentprochildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentprochildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentprochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
