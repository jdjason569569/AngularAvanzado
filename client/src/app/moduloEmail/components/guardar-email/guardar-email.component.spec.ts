import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarEmailComponent } from './guardar-email.component';

describe('GuardarEmailComponent', () => {
  let component: GuardarEmailComponent;
  let fixture: ComponentFixture<GuardarEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
