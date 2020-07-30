import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomrDetailsComponent } from './customr-details.component';

describe('CustomrDetailsComponent', () => {
  let component: CustomrDetailsComponent;
  let fixture: ComponentFixture<CustomrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomrDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
