import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export const AboutWin = () => {
  const { abOpen } = useSelector((state) => state.desktop);
  const { locked, booted } = useSelector((state) => state.wallpaper);
  const [open, setOpen] = useState(
    true && import.meta.env.MODE != "development",
  );
  const [timer, setTimer] = useState(
    localStorage.getItem("closeAbout") == "true" ? 0 : 5,
  );
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const action = () => {
    setOpen(false);
    localStorage.setItem("closeAbout", true);
    dispatch({ type: "DESKABOUT", payload: false });
  };

  useEffect(() => {
    if (timer > 0 && !locked && booted) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer, locked, booted]);

  return open || abOpen ? (
    <div className="aboutApp qyx-about floatTab dpShad">
      <div className="content p-6">
        <p className="qyx-eyebrow">{t("concept.status")}</p>
        <h1 className="text-xl font-semibold">{t("concept.title")}</h1>
        <p>{t("concept.description")}</p>
        <p>
          <a
            href="https://github.com/blueedgetechno/win11React"
            target="_blank"
            rel="noreferrer"
          >
            {t("concept.upstream")}
          </a>
        </p>
        <p>
          <a
            href="https://github.com/nykeybanks/patent_2026.10.26_concept/blob/master/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            {t("concept.license")}
          </a>
        </p>
        <p className="qyx-about-links">
          <a
            href="https://github.com/nykeybanks/patent_2026.10.26_concept"
            target="_blank"
            rel="noreferrer"
          >
            {t("concept.repository")}
          </a>
          <a
            href="https://github.com/nykeybanks/patent_2026.10.26_concept/issues"
            target="_blank"
            rel="noreferrer"
          >
            {t("concept.issues")}
          </a>
        </p>

        <p>{t("about.notmicrosoft")}</p>
        <p>
          {t("about.alsonot")}&nbsp;
          <a
            target="_blank"
            href="https://www.microsoft.com/en-in/windows-365"
            rel="noreferrer"
          >
            Windows 365 cloud PC
          </a>
          .
        </p>
        <p>{t("about.microsoftcopywrite")}.</p>
      </div>
      <div className="okbtn px-6 py-4">
        <button type="button" disabled={timer > 0} onClick={action}>
          {t("about.understand")}{" "}
          {timer > 0 ? <span>{`( ${timer} )`}</span> : null}
        </button>
      </div>
    </div>
  ) : null;
};
