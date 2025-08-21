import React, { type ReactNode } from 'react';
import styles from './card.module.css';

/**
 * Card tag properties
 */
interface ICardProps {
    children: ReactNode;
    className?: string;
    styles?: React.CSSProperties;
}
const Card: React.FC<ICardProps> = ({children, className='', styles={}}) => {
    return(
        <div
            className={className}
            style={styles}
        >
            {children}
        </div>
    );
}

export default Card;
