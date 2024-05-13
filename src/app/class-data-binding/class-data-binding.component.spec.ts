import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDataBindingComponent } from './class-data-binding.component';

describe('ClassDataBindingComponent', () => {
  let component: ClassDataBindingComponent;
  let fixture: ComponentFixture<ClassDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
