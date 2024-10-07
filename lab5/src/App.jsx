import "./App.css";
import Container from "./components/Container";
import PageTitle from "./components/PageTitle";
function App() {
  return (
    <div className="app-container">
      <PageTitle title="ToDo App"> </PageTitle>
      <Container></Container>
    </div>
  );
}

export default App;
