import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const imgPath = environment.imgPath;
@Pipe({
  name: 'image'
})


export class ImagePipe implements PipeTransform {

  transform(value: string): string {
    // console.log(value,'texto img');
    if (!value) {
      // console.log('../../assets/images/no-image-banner.jpg');
      return '../../assets/images/no-image-banner.jpg';
    }

    return imgPath+value;
  }

}
