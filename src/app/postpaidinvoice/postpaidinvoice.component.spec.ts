import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidinvoiceComponent } from './postpaidinvoice.component';

describe('PostpaidinvoiceComponent', () => {
  let component: PostpaidinvoiceComponent;
  let fixture: ComponentFixture<PostpaidinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostpaidinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
