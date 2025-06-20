import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobRow() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm relative ">
      <div className="absolute top-4 cursor-pointer right-4">
        <FontAwesomeIcon className="size-4 text-gray-400" icon={faHeart} />
      </div>
      <div className="flex grow gap-4">
        <div className="content-center">
          <img
            className="size-12"
            src="https://m.media-amazon.com/images/I/51rttY7a+9L._h1_.png"
          />
        </div>
        <div className="grow sm:flex">
          <div className="grow">
            <div className="text-gray-500 text-sm">Spotify</div>
            <div className="font-bold text-lg mb-1">Product design</div>
            <div className="text-gray-400 text-sm">
              Remote &middot; New York, US &middot; Full-time
            </div>
          </div>
          <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
        </div>
      </div>
    </div>
  );
}
