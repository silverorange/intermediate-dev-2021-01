import React from 'react';

export function LanguageButtons({ languages, languageHandler }) {
  const langs = [...languages, 'All'];

  const clickHandler = (e) => {
    languageHandler(e.currentTarget.value);
  };
  return (
    <div className="button__container">
      {languages.length > 0 &&
        langs.map((lang) => (
          <input
            className="button"
            type="button"
            onClick={clickHandler}
            key={lang}
            value={lang}
          />
        ))}
    </div>
  );
}
