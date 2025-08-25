import p1Img1 from '@assets/proyects/proyect1/img1.jpg';
import p1Img2 from '@assets/proyects/proyect1/img2.jpg';
import p1Img3 from '@assets/proyects/proyect1/img3.jpg';
import p1Img4 from '@assets/proyects/proyect1/img4.jpg';
import p1Img5 from '@assets/proyects/proyect1/img5.jpg';
import p1Img6 from '@assets/proyects/proyect1/img6.jpg';

import p2Img1 from '@assets/proyects/proyect2/img1.jpg';
import p2Img2 from '@assets/proyects/proyect2/img2.jpg';
import p2Img3 from '@assets/proyects/proyect2/img3.jpg';
import p2Img4 from '@assets/proyects/proyect2/img4.jpg';
import p2Img5 from '@assets/proyects/proyect2/img5.jpg';
import p2Img6 from '@assets/proyects/proyect2/img6.jpg';
import p2Img7 from '@assets/proyects/proyect2/img7.jpg';

import p3Img1 from '@assets/proyects/proyect3/img1.jpg';
import p3Img2 from '@assets/proyects/proyect3/img2.jpg';
import p3Img3 from '@assets/proyects/proyect3/img3.jpg';
import p3Img4 from '@assets/proyects/proyect3/img4.jpg';
import p3Img5 from '@assets/proyects/proyect3/img5.jpg';
import p3Img6 from '@assets/proyects/proyect3/img6.jpg';
import p3Img7 from '@assets/proyects/proyect3/img7.jpg';
import p3Img8 from '@assets/proyects/proyect3/img8.jpg';
import p3Img9 from '@assets/proyects/proyect3/img9.jpg';
import p3Img10 from '@assets/proyects/proyect3/img10.jpg';
import p3Img11 from '@assets/proyects/proyect3/img11.jpg';
import p3Img12 from '@assets/proyects/proyect3/img12.jpg';

import p4Img1 from '@assets/proyects/proyect4/img1.jpg';
import p4Img2 from '@assets/proyects/proyect4/img2.jpg';
import p4Img3 from '@assets/proyects/proyect4/img3.jpg';
import p4Img4 from '@assets/proyects/proyect4/img4.jpg';
import p4Img5 from '@assets/proyects/proyect4/img5.jpg';
import p4Img6 from '@assets/proyects/proyect4/img6.jpg';
import p4Img7 from '@assets/proyects/proyect4/img7.jpg';

import p5Img1 from '@assets/proyects/proyect5/img1.jpg';
import p5Img2 from '@assets/proyects/proyect5/img2.jpg';
import p5Img3 from '@assets/proyects/proyect5/img3.jpg';
import p5Img4 from '@assets/proyects/proyect5/img4.jpg';
import p5Img5 from '@assets/proyects/proyect5/img5.jpg';
import p5Img6 from '@assets/proyects/proyect5/img6.jpg';
import p5Img7 from '@assets/proyects/proyect5/img7.jpg';
import p5Img8 from '@assets/proyects/proyect5/img8.jpg';

export const proyectImages = (proyectName) => {
    const images = {
        "guiaMedica": [
            {id:1, img:p1Img1, width:'min'},
            {id:2, img:p1Img2, width:'min'},
            {id:3, img:p1Img3, width:'min'},
            {id:4, img:p1Img4, width:'min'},
            {id:5, img:p1Img5, width:'min'},
            {id:6, img:p1Img6, width:'min'},
        ],
        "chatZone": [
            {id:1, img:p2Img1, width:'min'},
            {id:2, img:p2Img2, width:'min'},
            {id:3, img:p2Img3, width:'full'},
            {id:4, img:p2Img4, width:'full'},
            {id:5, img:p2Img5, width:'full'},
            {id:6, img:p2Img6, width:'full'},
            {id:7, img:p2Img7, width:'full'},
        ],
        "vituchsLoggistics": [
            {id:1, img:p3Img1, width:'full'},
            {id:2, img:p3Img2, width:'full'},
            {id:3, img:p3Img3, width:'full'},
            {id:4, img:p3Img4, width:'full'},
            {id:5, img:p3Img5, width:'full'},
            {id:6, img:p3Img6, width:'full'},
            {id:7, img:p3Img7, width:'full'},
            {id:8, img:p3Img8, width:'full'},
            {id:9, img:p3Img9, width:'full'},
            {id:10, img:p3Img10, width:'full'},
            {id:11, img:p3Img11, width:'full'},
            {id:12, img:p3Img12, width:'full'},
        ],
        "works": [
            {id:1, img:p4Img1, width:'min'},
            {id:2, img:p4Img2, width:'min'},
            {id:3, img:p4Img3, width:'min'},
            {id:4, img:p4Img4, width:'min'},
            {id:5, img:p4Img5, width:'min'},
            {id:6, img:p4Img6, width:'min'},
            {id:7, img:p4Img7, width:'min'},
        ],
        "generator": [
            {id:1, img:p5Img1, width:'min'},
            {id:2, img:p5Img2, width:'full'},
            {id:3, img:p5Img3, width:'full'},
            {id:4, img:p5Img4, width:'full'},
            {id:5, img:p5Img5, width:'full'},
            {id:6, img:p5Img6, width:'full'},
            {id:7, img:p5Img7, width:'full'},
            {id:8, img:p5Img8, width:'full'},
        ]
    }
    return images[proyectName];
}