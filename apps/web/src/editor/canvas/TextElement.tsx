import { Text } from 'react-konva';

type Props = {
 x:number;
 y:number;
 text:string;
};

export default function TextElement({x,y,text}:Props){
 return <Text x={x} y={y} text={text}/>;
}
