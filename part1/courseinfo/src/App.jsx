const Curso=(props)=>{
  console.log(props)
  return(
    <div>
      <h1>{props.curso[0].name}</h1>
      {props.curso[0].parts.map((parts,index)=>(
        <p key={index}>
          {parts.name} {parts.exercises}
        </p>
      ))}
      <p>Number of exercises {props.curso[0].parts[0].exercises+props.curso[0].parts[1].exercises+props.curso[0].parts[2].exercises}</p>
      </div>
  )
}



 const App = () => {
    const curso=[
      {
      name:'Half Stack application development',
      parts:[
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        },
      ]
    }
      
    ]
  
  return (
    <div>
    <Curso curso={curso}/>
    </div>
  )
}

export default App