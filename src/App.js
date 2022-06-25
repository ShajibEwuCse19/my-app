import MyFunction from "./components/Card";
function App(){
    return <div>
        <h1 className="headingStyle"> Todo App</h1>
        <MyFunction  todoTitle = "Call Mother" todoDesc= "This is desc1"/>
        <MyFunction  todoTitle = "Call Father" todoDesc= "This is desc2"/>
        <MyFunction  todoTitle = "Call Brother" todoDesc= "This is desc2"/>
    </div>
}

export default App;