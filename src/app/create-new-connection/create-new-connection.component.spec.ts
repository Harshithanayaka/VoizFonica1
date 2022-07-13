import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewConnectionComponent } from './create-new-connection.component';

describe('CreateNewConnectionComponent', () => {
  let component: CreateNewConnectionComponent;
  let fixture: ComponentFixture<CreateNewConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
