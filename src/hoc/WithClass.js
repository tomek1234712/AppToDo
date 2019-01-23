import React, {
    Component
} from 'react';

const withClass = (WrappedComponent, className) => {
    const withClass = class extends Component {
        render() {
            return ( <
                div className = {
                    className
                } >
                <
                WrappedComponent ref = {
                    this.props.forwardedRef
                } { ...this.props
                }
                /> </
                div >
            )
        }
    }


    return React.forwardRef((props, ref) => {
        return <withClass { ...props
        }
        forwardRef = {
            ref
        }
        />
    });
}

export default withClass;