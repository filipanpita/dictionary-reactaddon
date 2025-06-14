import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App 📖</header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          Coded by Filipa Pita, {" "}
          <a
            href="https://github.com/filipanpita/dictionary-reactaddon"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on GitHub
          </a>
        </small>
      </footer>
    </div>
  );
}
