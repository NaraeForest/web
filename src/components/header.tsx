import { FaPlus } from "react-icons/fa";

export default function Head() {
    return (
        <>
        <div className="headcontainer">
            <div id="title">
                <div className="title_text">
                    <h1>Home</h1>
                </div>
            </div>
            <div id="blank">``

            </div>
            <div id="parent_add">
                <a id="add" href="#">
                    <FaPlus size="1.5rem" />
                </a>
            </div>
            <style jsx>{`
                    .headcontainer{
                        display: grid;
                        grid-template-areas:
                        "title title blank add add";
                        grid-template-rows: 10vw;
                    }
                    #title{
                        position: relative;
                        grid-area: title;
                    }
                    
                    .title_text{
                        position: absolute;`
                        font-size: 3rem;
                        left: 50%;
                        top: 25%;
                        translate(-50%, -50%);
                    }

                    #blank{
                        grid-area: blank;
                    }
                    
                    #parent_add{
                        position: relative;
                        grid-area: add;
                    }

                    #add{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        translate(-50%, -50%);
                    }
                `}</style>
        </div>
        </>
    );
};