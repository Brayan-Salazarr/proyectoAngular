import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgmMovi } from './imgm-movi';

describe('ImgmMovi', () => {
  let component: ImgmMovi;
  let fixture: ComponentFixture<ImgmMovi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgmMovi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgmMovi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
