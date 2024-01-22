import chilly_stew from "./img/chilly_stew.jpeg";
import pizza from "./img/pizza.jpeg";
import curry_rice from "./img/curry_rice.jpeg";
import jollof_rice from "./img/jollof_rice.jpeg";
import spag from "./img/spag.jpeg";
import pancake from "./img/pancake.jpeg";

function App() {
  const menuhandler = () => {
    const menu = document.getElementById("menu");
    const check = menu.classList.contains("hidden");
    if (check) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  return (
    <div className="text-gray-600 font-serif  md:grid md:grid-cols-6">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="hover:text-blue-900">
                <h1
                  className="font-bold uppercase p-4
                 "
                >
                  FOOD MENU
                </h1>
              </a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                id="menuicon"
                onClick={menuhandler}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <ul className="mt-6 hidden md:block" id="menu">
            <li className="text-gray-900 font-bold py-2">
              <a
                href="/"
                className="px-4 flex justify-end border-r-4 border-red-700 "
              >
                <span>HOME</span>
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            </li>
            <li className="py-2">
              <a
                href="/"
                className="px-4 flex justify-end  border-r-4 border-white"
              >
                <span>ABOUT</span>
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </a>
            </li>
            <li className="py-2">
              <a
                href="/"
                className="px-4 flex justify-end  border-r-4 border-white"
              >
                <span>CONTACT </span>
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main
        className="px-16 py-6 bg-gray-300 md:col-span-5 "
        style={{ minHeight: "100vh" }}
      >
        <div className="text-blue-800 flex justify-center md:justify-end">
          <a
            href="/"
            className="rounded-full uppercase bg-transparent font-bold cursor-pointer py-2 px-3  md:border-2 border-black hover:bg-black hover:text-white transition ease-out duration-500"
          >
            LOGIN
          </a>
          <a
            href="/"
            className="ml-3 rounded-full uppercase bg-transparent font-bold cursor-pointer py-2 px-3  md:border-2 border-black hover:bg-black hover:text-white"
          >
            SIGN UP
          </a>
        </div>

        <header>
          <h2 className="text-gray-900 text-5xl font-semibold">Food Recipes</h2>
          <h3 className="text-2xl font-semibold">view all below</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b-2 border-black">
            Latest recipes
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded overflow-hidden shadow-lg relative hover:shadow-2xl">
              <img
                src={chilly_stew}
                alt="stew"
                className="w-full h-40 sm:h-52 object-cover"
              />
              <div className="m-3">
                <span className="font-bold text-xl">5 bean chilly steew</span>
                <span className="block text-md text-gray-450">
                  Recipe by mario
                </span>
              </div>
              <div className="bg-orange-100 uppercase rounded-full p-2 absolute top-0 mt-2 ml-2 flex">
                <svg
                  className="w-6 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span>25 mins</span>
              </div>
            </div>

            <div className="bg-white rounded overflow-hidden shadow-lg relative hover:shadow-2xl">
              <img
                src={curry_rice}
                alt="stew"
                className="w-full h-40 sm:h-52 object-cover"
              />
              <div className="m-3">
                <span className="font-bold text-xl">CURRY RICE</span>
                <span className="block text-md text-gray-450">
                  Recipe by mario
                </span>
              </div>
              <div className="bg-orange-100 uppercase rounded-full p-2 absolute top-0 mt-2 ml-2 flex">
                <svg
                  className="w-6 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>35 mins</span>
              </div>
            </div>

            <div className="bg-white rounded overflow-hidden shadow-lg relative hover:shadow-2xl">
              <img
                src={pancake}
                alt="stew"
                className="w-full h-40 sm:h-52 object-cover"
              />
              <div className="m-3">
                <span className="font-bold text-xl">PANCAKE</span>
                <span className="block text-md text-gray-450">
                  Recipe by mario
                </span>
              </div>
              <div className="bg-orange-100 uppercase rounded-full p-2 absolute top-0 mt-2 ml-2 flex">
                <svg
                  className="w-6  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>20 mins</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b-2 border-black">
            Most Popular recipes
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded overflow-hidden shadow-lg relative hover:shadow-2xl">
              <img
                src={jollof_rice}
                alt="stew"
                className="w-full h-40 sm:h-52 object-cover"
              />
              <div className="m-3">
                <span className="font-bold text-xl">JOLLOF RICE</span>
                <span className="block text-md text-gray-450">
                  Recipe by mario
                </span>
              </div>
              <div className="bg-orange-100 uppercase rounded-full p-2 absolute top-0 mt-2 ml-2 flex">
                <svg
                  className="w-6 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span>40 mins</span>
              </div>
            </div>

            <div className="bg-white rounded overflow-hidden shadow-lg relative hover:shadow-2xl">
              <img
                src={pizza}
                alt="stew"
                className="w-full h-40 sm:h-52 object-cover"
              />
              <div className="m-3">
                <span className="font-bold text-xl">PIZZA</span>
                <span className="block text-md text-gray-450">
                  Recipe by mario
                </span>
              </div>
              <div className="bg-orange-100 uppercase rounded-full p-2 absolute top-0 mt-2 ml-2 flex">
                <svg
                  className="w-6 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>15 mins</span>
              </div>
            </div>

            <div className="bg-white rounded overflow-hidden shadow-lg relative hover:shadow-2xl">
              <img
                src={spag}
                alt="stew"
                className="w-full h-40 sm:h-52 object-cover"
              />
              <div className="m-3">
                <span className="font-bold text-xl">SPAGEHTTI</span>
                <span className="block text-md text-gray-450">
                  Recipe by mario
                </span>
              </div>
              <div className="bg-orange-100 uppercase rounded-full p-2 absolute top-0 mt-2 ml-2 flex">
                <svg
                  className="w-6  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>20 mins</span>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="bg-orange-100 text-black rounded-full uppercase  font-bold cursor-pointer mt-6 py-2 px-3 transform hover:scale-125 hover:bg-opacity-65 transition ease-out duration-500">
              load more
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
