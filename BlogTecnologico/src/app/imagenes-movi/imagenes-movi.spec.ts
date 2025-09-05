import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesMovi } from './imagenes-movi';

describe('ImagenesMovi', () => {
  let component: ImagenesMovi;
  let fixture: ComponentFixture<ImagenesMovi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenesMovi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenesMovi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
