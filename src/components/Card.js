// const todoTitle = "Call Family";
// const todoDesc = "Elitr est magna sed ipsum et et ipsum. Labore rebum amet accusam tempor gubergren et no. Consetetur et ipsum dolor.";
const current = new Date();
  const Crntdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  function MyFunction(props){
    return  <div className='Card'>
                      <h3 className='cardTitle'> {props.todoTitle}</h3>
                      <p className='cardDesc'>{props.todoDesc}</p>
                      <p className='cardFooter'>{Crntdate}</p>
                </div>
  }
  export default MyFunction;