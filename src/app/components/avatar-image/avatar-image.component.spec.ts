import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarImageComponent } from './avatar-image.component';

describe('ProfileImageComponent', () => {
  let component: AvatarImageComponent;
  let fixture: ComponentFixture<AvatarImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
