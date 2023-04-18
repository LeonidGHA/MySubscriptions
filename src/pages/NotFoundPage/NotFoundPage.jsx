import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";

import css from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const naigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      naigate("/");
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <HtmlMainMarkup>
      <section className={css.section_wrapper}>
        <img src="\src\shared\images\404.png" alt="" />
        <div>after 3 seconds you will be directed to the Home Page</div>
      </section>
    </HtmlMainMarkup>
  );
};

export default NotFoundPage;
