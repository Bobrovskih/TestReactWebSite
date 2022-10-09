import React from 'react';

export default function SecondSection() {
  return (
    <div className="first-section-container">
      <div className="first-section-container__first-header">
        <p className="first-section-container__first-header-text">UT aliquip ex ea commodo consequat</p>
      </div>
      <div className="first-section-container__block-1">
        <img className="first-section-container__block-1__Photo-1" src={Photo1} alt="photo1" />
        <div className="first-section-container__block-1__text-1">
          <p className="first-section-container__block-1__text-1__header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="first-section-container__block-1__text-1__content-1">
            Incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur
          </p>
          <p className="first-section-container__block-1-text-1__content-2">
            Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <img className="first-section-container__block-1__Photo-2" src={Photo2} alt="photo2" />
        <div className="first-section-container__block-1__text-2">
          <p className="first-section-container__block-1__text-2__header"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p className="first-section-container__block-1__text-2__content-1">
            Incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="first-section-container__block-1__text-2__content-2">
            Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
}
