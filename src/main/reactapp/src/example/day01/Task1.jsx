// REACT 실습1 : Task1과 Profile 컴포넌트를 완성하시오.

// Fecth 이용하여 서버로 부터 받은 데이터/자료 
const data = [
  {
    name: 'Hedy Lamarr',
    imageUrl:'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Grace Hopper',
    imageUrl: 'https://i.pravatar.cc/150?img=48'
  }
];

export default function Task1( props ){
  
  return (<> 
    <Profile user = {data[0]} />
    <Profile user = {data[1]} />
  </>)
}   // func end

function Profile( props ) {
  
  return (<> 
    <div> {props.user.name} </div>
    <div> <img src={props.user.imageUrl} /> </div>
    </> );
}   // func end
