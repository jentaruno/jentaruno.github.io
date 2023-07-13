import React, {ReactNode} from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div
            className="bg-gradient-to-b from-orange-700 to-orange-700/60 rounded-3xl drop-shadow-lg text-white text-center p-6 md:p-12">
            {children}
        </div>
    );
};

export default Container;
