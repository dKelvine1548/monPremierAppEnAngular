import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppareilComponentComponent } from './edit-appareil-component.component';

describe('EditAppareilComponentComponent', () => {
  let component: EditAppareilComponentComponent;
  let fixture: ComponentFixture<EditAppareilComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppareilComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppareilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
