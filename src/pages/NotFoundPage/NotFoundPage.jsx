import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";

import NotFoundImg from "../../shared/images/404.png";

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
        <img lazy="true" src={NotFoundImg} alt="Not Found Page" />
        <div>after 3 seconds you will be directed to the Home Page</div>
      </section>
    </HtmlMainMarkup>
  );
};

export default NotFoundPage;
