import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentproparentComponent } from './contentproparent.component';

describe('ContentproparentComponent', () => {
  let component: ContentproparentComponent;
  let fixture: ComponentFixture<ContentproparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentproparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentproparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
