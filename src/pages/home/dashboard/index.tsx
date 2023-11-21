import { useEffect, useState } from "react";
import Button from "../../../components/shared/Button";
import { Note } from "../../../interface";

const HomePage = () => {
  const [data, setData] = useState<Note[]>([
    // {
    //   id: 1,
    //   user: {
    //     id: null,
    //     firstName: "Aracely ayala",
    //     lastName: "ayal",
    //     email: "aya@exam2ple.com",
    //     password: "",
    //     role: "USER",
    //     enabled: true,
    //     username: "aya@exam2ple.com",
    //     authorities: [
    //       {
    //         authority: "USER",
    //       },
    //     ],
    //     accountNonExpired: true,
    //     accountNonLocked: true,
    //     credentialsNonExpired: true,
    //   },
    //   userIdTransient: null,
    //   category: "Comportamiento Humano",
    //   title: "El aprendizaje",
    //   description: "Apuntes sobre la clase el aprendizaje y del psicoanálisis ",
    //   file: "https://i.ibb.co/9n2R7DR/Whats-App-Image-2023-10-25-at-3-04-19-PM-2.jpg",
    //   notifications: [],
    // },
  ]);

  useEffect(() => {
    (async () => {
      const storedToken = localStorage.getItem("accessToken");
      const res = await fetch(
        "https://biqueroo-production.up.railway.app/publication",
        {
          headers: { Authorization: "Bearer " + storedToken },
        }
      );
      const dataRes: Note[] = await res.json();
      if (dataRes) setData(dataRes);
    })();
  }, []);

  return (
    <div className="w-full p-6 md:p-12 gap-6">
      <div className="w-full justify-end flex max-w-7xl mx-auto mb-6">
        <Button>Crear</Button>
      </div>

      <div className="w-full flex flex-wrap gap-6 max-w-7xl mx-auto justify-center items-center">
        {data.map((i, index) => (
          <Card key={index} data={i} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

const Card = ({ data }: { data: Note }) => {
  const [emg, setEmg] = useState<string>();

  return (
    <div className="w-full max-w-md bg-gray-100 rounded-lg p-6 h-max md:w-[410px]">
      <p className="font-semibold text-gray-600">{data.category}</p>
      <p className="font-semibold text-3xl">{data.title}</p>
      <p className="text-gray-700">{data.description}</p>

      <div className="w-full h-[160px] bg-white mt-3 rounded-lg overflow-hidden">
        <img
          onClick={() => setEmg("/")}
          src={data.file}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex mt-3 w-full justify-end">
        <div className="dropdown relative">
          {emg ? (
            <img src={emg} alt="Like emoji" />
          ) : (
            <button
              type="button"
              className="p-3 bg-white rounded-full text-primary"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
              </svg>
            </button>
          )}

          <div className="dropdown-menu absolute hidden -left-[160px] -top-[68px] pb-2 text-gray-700 w-max">
            <figure className="flex w-full">
              <img
                onClick={() => setEmg("/like.gif?raw=1")}
                src="/like.gif?raw=1"
                alt="Like emoji"
              />
              <img
                onClick={() => setEmg("/love.gif?raw=1")}
                src="/love.gif?raw=1"
                alt="Love emoji"
              />
              <img
                onClick={() => setEmg("/haha.gif?raw=1")}
                src="/haha.gif?raw=1"
                alt="Haha emoji"
              />
              <img
                onClick={() => setEmg("/wow.gif?raw=1")}
                src="/wow.gif?raw=1"
                alt="Wow emoji"
              />
              <img
                onClick={() => setEmg("/sad.gif?raw=1")}
                src="/sad.gif?raw=1"
                alt="Sad emoji"
              />
              <img
                onClick={() => setEmg("/angry.gif?raw=1")}
                src="/angry.gif?raw=1"
                alt="Angry emoji"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
