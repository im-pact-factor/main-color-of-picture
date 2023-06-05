import { Palette } from "color-thief-react";
export function App() {
  const getRandomImageURL = () => {
    const randomInteger = Math.floor(Math.random() * 600);
    return `https://picsum.photos/id/${randomInteger}/800/800`;
  };
  const handleMouseEnter = (data: string[]) => {
    const gradient = `linear-gradient(to bottom, ${data[0]}, ${data[1]}, ${data[2]})`;
    document.body.style.background = gradient;
  };
  const handleMouseLeave = () => {
    document.body.style.background = "#fff";
  };
  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div className="grid gap-20 grid-cols-3 cursor-pointer">
        {new Array(3).fill(0).map((_, index) => {
          const imageURL = getRandomImageURL();
          return (
            <Palette
              key={index}
              src={imageURL}
              crossOrigin="anonymous"
              format="hex"
              colorCount={3}
            >
              {({ data }) => {
                return (
                  <div>
                    <img
                      key={index}
                      style={{
                        height: "400px",
                      }}
                      onMouseLeave={() => handleMouseLeave()}
                      onMouseEnter={() => handleMouseEnter(data as string[])}
                      alt="图片"
                      src={imageURL}
                    />
                  </div>
                );
              }}
            </Palette>
          );
        })}
      </div>
    </div>
  );
}
