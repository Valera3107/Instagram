import React from 'react';
import images from '../theme/assets/images';
import { Image } from './Image';

export class Images extends React.Component{
    render() {
        const imagesJSX = images.map(( image ) => {
           return (
              <Image
                key = {image.id}
                public = {image.public}
                src = {image.src} 
               />
           );
        });

        return <div className = 'images'>{imagesJSX}</div>
    }
}