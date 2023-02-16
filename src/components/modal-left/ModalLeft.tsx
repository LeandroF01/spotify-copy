import { HomeSvg } from "../../assets/HomeSvg";
import { SearchSvg } from "../../assets/SearchSvg";
import { LibrarySvg } from "../../assets/LibrarySvg";
import { SpotifySvg } from "../../assets/SpotifySvg";
import { PlusSvg } from "../../assets/PlusSvg";
import { LikeSvg } from "../../assets/LikeSvg";

export const ModalLeft = () => {
  return (
    <section className="modal-left">
      <SpotifySvg />
      <section className="menu">
        <ul className="menu__container">
          <li className="menu__main">
            <HomeSvg />
            Home
          </li>
          <li className="menu__main">
            <SearchSvg />
            Search
          </li>
          <li className="menu__main">
            <LibrarySvg /> Your Library
          </li>
        </ul>
      </section>
      <section className="playlist">
        <ul className="playlist__list">
          <li className="playlist__create">
            <button className="playlist__create-btn">
              <PlusSvg />
            </button>
            Create Playlist
          </li>
        </ul>
        <ul className="like">
          <li className="like__list">
            <button className="like__list-btn">
              <LikeSvg />
            </button>
            I Like You
          </li>
        </ul>
      </section>
      <footer>
        <ul>
          <li>Legal</li>
          <li>Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
          <li>Cookies</li>
        </ul>
        <button>Latin American Spanish</button>
      </footer>
    </section>
  );
};
