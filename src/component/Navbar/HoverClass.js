import React, {Component} from "react";

class HoverClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHovered : false,
        };
    }

    handleMouseEnter  = () => {
        this.setState({isHovered : true});
    }

    handleMouseLeave = () => {
        this.setState({isHovered : false});
    }

    render() {
        const {children, HoverClassName  } = this.props;
        const { isHovered } = this.state;

        const enhancedChildren = React.Children.map(children, child => 
            React.cloneElement(child, {
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                className: isHovered ? `${child.props.className} ${HoverClassName}` : child.props.className || '',
            })    
        );
        return <>{enhancedChildren}</>
    }


}

export default HoverClass;