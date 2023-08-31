import Album from "./components/Album";
import Jumbotron from "./components/Jumbotron";

function App() {
  const cond= "This is test";

  let jambotron_data={
    content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, placeat. Tenetur fugit blanditiis id itaque explicabo quas necessitatibus reiciendis, ipsum animi veritatis pariatur obcaecati et praesentium voluptate deleniti a expedita.",
    title:"TITLE_NAME"
  }
  return (
    
    <div className="bg-light">
    <main role="main">
    {cond == "This a is test" && "This is test"}
      <Jumbotron data={jambotron_data}/>

      <Album/>
    </main>
    </div>
  );
}
export default App;