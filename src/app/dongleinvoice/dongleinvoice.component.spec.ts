import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongleinvoiceComponent } from './dongleinvoice.component';

describe('DongleinvoiceComponent', () => {
  let component: DongleinvoiceComponent;
  let fixture: ComponentFixture<DongleinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DongleinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DongleinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
