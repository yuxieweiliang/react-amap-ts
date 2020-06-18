import React, { memo, useContext } from 'react';
import { ThemeContext } from './Context';

const ContextFCC =  memo(function ContextFCA() {
    const value = useContext(ThemeContext);
    return (
        <div>
            <p>ContextC theme:</p>
            {/* 消费者 */}
            <span style={{color: value}}>{value}</span>
        </div>
    );
})

const ContextFCB =  memo(function ContextFCA() {
    const value = useContext(ThemeContext);
    return (
        <div>
            <p>ContextC theme:</p>
            {/* 消费者 */}
            <span style={{color: value}}>{value}</span>
            <ContextFCC/>
        </div>
    );
})

const ContextFCA =  memo(function ContextFCA() {
    const value = useContext(ThemeContext);
    return (
        <div>
            <p>ContextC theme:</p>
            {/* 消费者 */}
            <span style={{color: value}}>{value}</span>
            <ContextFCB/>
        </div>
    );
})

export default ContextFCA;
