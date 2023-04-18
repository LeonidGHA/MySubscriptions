import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";

import css from "./MainPage.module.scss";
import WelcomeImg from "../../shared/images/Welcome.png";

const MainPage = () => {
  return (
    <HtmlMainMarkup>
      <section className={css.section_wrapper}>
        <img src={WelcomeImg} alt="Welcome" width={800} height={800} />
      </section>
    </HtmlMainMarkup>
  );
};

export default MainPage;
