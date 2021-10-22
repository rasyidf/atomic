import React from "react";

interface AlertsProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    description: string,
    show: boolean,
    showClose: boolean,
}

const Alerts: React.FC<AlertsProps> = ({
    title,
    description,
    show,
    showClose,
    ...attributes
}): JSX.Element => {
    const [showAlert, setShowAlert] = React.useState(show);
    return (
        <>
            {showAlert ? (
                <div
                    className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-lightBlue-500"
                >
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize">{title}</b> {description}
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => setShowAlert(false)}
                    >
                        {showClose ? <span>×</span> : null}
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default Alerts;
