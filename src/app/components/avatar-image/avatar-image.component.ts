import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AvatarImageType } from './avatar-image-type.enum';

@Component({
  selector: 'app-avatar-image',
  templateUrl: './avatar-image.component.html',
  styleUrls: ['./avatar-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AvatarImageComponent {
  @Input() public imageSrc = '';
  @Input() public avatarImageType: AvatarImageType = AvatarImageType.Rounded;
}
