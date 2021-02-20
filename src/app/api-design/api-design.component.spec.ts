import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDesignComponent } from './api-design.component';

describe('ApiDesignComponent', () => {
  let component: ApiDesignComponent;
  let fixture: ComponentFixture<ApiDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
