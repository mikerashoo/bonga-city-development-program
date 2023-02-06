import React from "react";
import { Activity } from "react-bootstrap-icons";

const CustomDivider = () => {
    return (
        <div className="text-center text-first font-bold my-4 flex justify-items-center items-center w-full">
            <div className="flex-1">
                <hr className="text-green" />
            </div>
            <Activity className="inline" color="green" size={30} />
            <div className="flex-1">
                <hr />
            </div>
        </div>
    );
};

export default CustomDivider;
