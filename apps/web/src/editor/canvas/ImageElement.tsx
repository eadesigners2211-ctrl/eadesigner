import { Image } from 'react-konva';

type Props = {
 image:any;
 x:number;
 y:number;
};

export default function ImageElement({image,x,y}:Props){
 return <Image image={image} x={x} y={y}/>;
}
