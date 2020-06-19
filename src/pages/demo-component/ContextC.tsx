import React from 'react';
import {ThemeContext} from "./Context";

class ContextC extends React.Component<any, any> {

    render() {
        return (
            <div>
                <p>ContextC theme:</p>
                {/* 消费者 */}
                <ThemeContext.Consumer>{value => <span style={{color: value}}>{value}</span>}</ThemeContext.Consumer>
            </div>
        );
    }
}

class ContextB extends React.Component<any, any> {
    render() {
        return (
            <div>
                <p>ContextB</p>
                <ThemeContext.Consumer>{value => <span style={{color: value}}>{value}</span>}</ThemeContext.Consumer>
                <ContextC/>
            </div>
        );
    }
}

class ContextA extends React.Component<any, any> {
    render() {
        return (
            <div>
                <p>ContextA</p>
                <ThemeContext.Consumer>{value => <span style={{color: value}}>{value}</span>}</ThemeContext.Consumer>
                <ContextB/>
            </div>
        );
    }
}
export default ContextA;
