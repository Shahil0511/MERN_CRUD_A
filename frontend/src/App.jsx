import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form"
function App() {
  return (
    <div className="container-fluid" style={{padding:0}}>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
