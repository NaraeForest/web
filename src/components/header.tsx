import { FaPlus } from "react-icons/fa";

export default function Head() {
    return (
        <>
        <div className="container">
            <header className="header">
                <h1>Home</h1>
                <button className="addButton">+</button>
            </header>
        </div>

        <style jsx>{`
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16px;
                width: 100%;
            }
        
            h1 {
                font-size: 24px;
                font-weight: bold;
            }

            .addButton {
                font-size: 24px;
            }
        `}</style>
        </>
    );
};