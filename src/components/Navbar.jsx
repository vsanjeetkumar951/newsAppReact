import React from "react";
import SearchNews from "./SearchNews";

function Navbar() {
  return (
    <div
      className="main z-20 lg:flex md:flex flex-wrap justify-between items-center 
    px-4 bg-[#292F33] py-4 shadow-md sticky top-0"
    >
      <div className="left flex items-center space-x-3">
        <img
          className="w-10"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEzElEQVR4nO2dT4gcRRTGSxG9ildB8aYSD6KCtvsn86q6p3tqA3pYEFlFTZCABw8Bb2ZBISeDKB5MLh40Ih4FRcikahKj+bPJSkASPYiGTYyajYGYZDq7mSnp2VVEme7ZZGaruvr7wXefet++r15XdbOMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABwFiI9Q6R3+aTxnQtHx3b/eqqnD36be6KZ7s7Tk3uv3sN8JSsI59r4pLGPFk3QTAfWmFp6hPkKDE5hsO2O5OhgdDBHRCOiA+zB9uOVI6LXb8gS4oiJ6j+UTuN7LmGKHsTgrFhykymdJj6+BoNhcIrnYHSwByCi0+oedKCDPQAGp+hg21OxxBSNDpZ4TEJEBziqxJDlHRiyUgxZtocmiSELHSwxZCGiAwxZGLK8Y5hD1vY3r5v5k+2ha8vWzkivC4Nm+1Swt338ZsSqYPBb7yybC+0rQ9crr47a4JsXcxUYnMJgdHCKDkZEOwpOslJEtO8nWQGGLPumSRiMiJboYOzBASK6ei/dBdiD7ZsmYTD2YHmDHSy2XTbRSwV6YdHQzFxfMVfBc3Bq4i3dwoRI5KXcLx9ZFQzObn2yC4dh65lnuyPdg2Gw57dJMToYBieIaHSwk+A+OEVEY8gyiGjbhxsSQ9boI9oVTWCKhsEBHpPQwRInWfbjWCKi1+8xyRVNYA+GwQH2YHSwxB5sP44lIhpHlQFuk6r98VmM60IYnOC6EB3sJD5+AL7xvaVeTA+q+Hm8k2WqrgQRbd8ECYNHG9E+K0EH2zdBwuD/w7l+v28HR99bL6x0RI3cDlZd5iqcq7f7R/RJ64WVjiiRF/MM/pO5CpF6o38Hn7BeWOmI4sbvfQ0mUr8wV+Fcvdz/H2Mdsl5Y6Yji5Oc8g48yV+Fcb8z7qKoxlVovrnRAYXQiL6I/ZK4SRV/eRaQ6/X58nJy1XlxpWY2p64bzA3kdvI25DOf6eL8fH0bz1gssLauenMv9dJTz1sPMZYjUjrwFJPKC9SJLa+oYER7Oi+dzs7OztzKXIWo+mGdwGM4ZuWlt3+j6ojhZyO1eIr2TlQHO9eG8hWQLtV1suc5qTLWNEAdzDziEaD3EygCRfqpgnzGJ/KNC5naMCI8V7L3qM1YezC15w9aKDppEXrZefDlydUwYfVcQzaojhH6UlQnOW4/lPTKtHH4cMHFy3uPOXTJh9G1B5/b23l2sjBCpd4sWl8V1Pf6p95du2xA55PNmER4qNJdztZCdH7AyEsdf3FEc1X938zerByHlnrAbU1dMVM+P5H+Zu0zUGmdlplbbdy/n+sxgC14xuh7/uDqELVs3TBaq25sl4uTMQHH8n2jeynwgG/+J9OJaFv+PxNdGiCMmDI85JSHmViN4/9rXtDJYbWc+IUTrASJ9+oZM9kqqS6ReYz5C1LybSH1VYXMvErWeZj4zOalvy14MINLX7Bdcr5uIdCsM99/HqkIU6fs5159XwNjTtZp+Ljv8YVUkO8Eh0p9wrtp+GavmidTm6elPb7ddYyeYnNR31mr6RSK9h0iftW0QX7PUVSKlOdevh6HeYLuezpOd7gihH88uLoj0zMr7Xu6ISG0mak3Xavso21udv8cFAAAAAAAAAAAAAAAAAAAAALAK8RcV73uneIlvcwAAAABJRU5ErkJggg=="
          alt=""
        />
        <h2 className="logo font-bold text-2xl text-white text-center">
        Your News
        </h2>
      </div>
      <div className="right">
        <ul className="flex space-x-6 text-[#949789] text-[19px] justify-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">General</li>
          <li className="cursor-pointer">Business</li>
          <li className="cursor-pointer">Sports</li>
          <li className="cursor-pointer">Science</li>
          <li className="cursor-pointer">Health</li>
          <li className="cursor-pointer">Entertainment</li>
          <li className="cursor-pointer">Technology</li>
        </ul>
      </div>
      <SearchNews/>
    </div>
  );
}

export default Navbar;
