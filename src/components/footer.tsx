export default function Footer() {
    return (
          <footer className="fixed bottom-0 left-0 w-full bg-white py-3 shadow-md">
            <div className="flex justify-around">
              <button className="flex flex-col items-center text-base">
                <span><img src="/home.svg"/></span>
                Home
              </button>
              <button className="flex flex-col items-center text-base">
                <span><img src="/at-symbol.svg"/></span>
                Feeds
              </button>
              <button className="flex flex-col items-center text-base">
                <span><img src="/signal.svg"/></span>
                Trends
              </button>
              <button className="flex flex-col items-center text-base">
                <span><img src="/user.svg"/></span>
                MyPage
              </button>
            </div>
          </footer>
      );
}