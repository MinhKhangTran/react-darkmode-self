import React from "react";
import articles from "./data";
import Article from "./Article";

// LocalStorage
const getLocalStorage = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

export default function App() {
  const [theme, setTheme] = React.useState(getLocalStorage());

  React.useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((oldTheme) => {
      let theme = "light-theme";
      if (oldTheme === "light-theme") {
        theme = "dark-theme";
      }
      return theme;
    });
  };
  return (
    <div>
      <header className="mt-8 flex w-11/12 md:w-2/3 mx-auto justify-between">
        <h1 className="overreact text-xl md:text-2xl font-bold">Overreact</h1>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-full font-semibold tracking-wider"
        >
          Toggle
        </button>
      </header>

      {articles.map((article) => {
        return <Article key={article.id} {...article} />;
      })}
    </div>
  );
}
