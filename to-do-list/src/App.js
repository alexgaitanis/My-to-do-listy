import logo from './logo.svg';
import './Styles.css';
import './main';



function App() {
  return (
    <div className = "App">
        <head>
          <title>Task List 2021</title>

          <link rel="stylesheet" href="Styles.css" />
        </head>
        <body>

          <header>
            <h1>My to-dos</h1>
            <form id="new-task-form">
              <input
                      type="text"
                      name="new-task-input"
                      id="new-task-input"
                      placeholder="Create a new to-do" />
              <input
                      type="submit"
                      id="new-task-submit"
                      value="+" />
            </form>
          </header>
          <main>
            <section class="task-list">

              <div id="tasks">
              </div>
            </section>
          </main>

          <script src="main.js"></script>
        </body>
    </div>
  );
}

export default App;
