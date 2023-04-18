import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";

import css from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <HtmlMainMarkup>
      <section className={css.section_wrapper}>
        <img
          src="src\shared\images\Welcome.png"
          alt="Welcome"
          width={800}
          height={800}
        />
      </section>
    </HtmlMainMarkup>
  );
};

export default MainPage;
