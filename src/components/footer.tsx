export default function Footer() {
    return(
        <div className="footercontainer flex justify-center">
        <footer className="footer fixed bottom-0 w-full flex justify-around bg-white py-3 shadow-md">
        <button className="text-base">Home</button>
        <button className="text-base">Feeds</button>
        <button className="text-base">Trends</button>
        <button className="text-base">MyPage</button>
        </footer>
    </div>
    );
}