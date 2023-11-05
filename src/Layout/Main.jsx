import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="">
            <div className='w-11/12 mx-auto font-Space  '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;