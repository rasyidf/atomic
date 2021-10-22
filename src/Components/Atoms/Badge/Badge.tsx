import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
    text: string;
}

const Badge: React.FC<BadgeProps> = ({
    text,
    ...attributes
}): JSX.Element => {
    return (
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1"  {...attributes}>
            {text}
        </span>
    );
};

export default Badge;

