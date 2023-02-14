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
        <ul className="container-menu">
          <li className="main-menu">
            <HomeSvg />
            Home
          </li>
          <li className="main-menu">
            <SearchSvg />
            Search
          </li>
          <li className="main-menu">
            <LibrarySvg /> Your Library
          </li>
        </ul>
      </section>
      <section className="playlist">
        <ul className="playlist-list">
          <li className="create-playlist">
            <button className="create-playlist_btn">
              <PlusSvg />
            </button>
            Create Playlist
          </li>
        </ul>
        <ul className="like">
          <li className="like-list">
            <button className="like-list_btn">
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
