import React, {PureComponent} from 'react';

class Button extends PureComponent {
    render() {
        const {type, children} = this.props;
        return (
            <button type={type}>
                {children}
            </button>
        );
    }
}

export default Button