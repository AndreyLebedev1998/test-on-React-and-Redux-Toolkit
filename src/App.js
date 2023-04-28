import { useSelector, useDispatch } from "react-redux";
import { setStep, setCorrectly } from "./store/questionSlice";
import "./App.css";

const questions = [
  {
    title: "React - это ...?",
    options: [
      "Фреймворк для создания UI",
      "Библиотека для создания UI",
      "Платформа для создания UI",
      "Утилита для создания UI",
    ],
    correctly: 1,
  },
  {
    title: "Что такое компонент React",
    options: ["Приложение", "Часть приложения или страницы", "Не знаю"],
    correctly: 1,
  },
  {
    title: "Какой метод отвечает за вывод информации через React JS компонент?",
    options: ["ReactDOM", "print", "react", "render", "console"],
    correctly: 3,
  },
  {
    title: "Как много компонентов может быть на сайте?",
    options: [
      "Не более 50",
      "Не более 300",
      "Не более 10",
      "Не более 100",
      "Неограниченное количество",
    ],
    correctly: 4,
  },
  {
    title: "Какая компания разработала React JS?",
    options: ["Facebook", "Twitter", "GitHub", "Google", "Amazon"],
    correctly: 0,
  },
];

function App() {
  const step = useSelector((state) => state.step);
  const correctly = useSelector((state) => state.correctly);

  const dispatch = useDispatch();

  const question = questions[step];

  return (
    <div className="App">
      <h1>Тест по React</h1>
      <div className="container">
        {step !== questions.length ? (
          <>
            <h2>{question.title}</h2>
            <ul>
              {question.options.map((el, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      dispatch(setStep());
                      if (index === question.correctly) {
                        dispatch(setCorrectly());
                      }
                    }}
                  >
                    {el}
                  </li>
                );
              })}
            </ul>
            <h2>{step + 1}/5</h2>
          </>
        ) : (
          <>
            <h2>Вы набрали {correctly} правильных ответов</h2>
            <a href="/">
              <button>Попробовать ещё</button>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
