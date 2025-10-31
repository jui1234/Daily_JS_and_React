import React from "react";

class ErrorBoundryWrapper extends React.Component{
    constructor(props){//initale
    super(props)//inharit all the properties from component
    this.state={hasError:false};
    }


static getDerivedStateFromError(error){
    return {hasError:true}
}

static compoenetDidCatch(error,info){
    console.log("error",error)
    console.log("info",info)
}

render(){
    if(this.state.hasError){
        <div>fallbackerror</div>
        alert("error occured")
    }
    return this.props.children;
}
}

export default ErrorBoundryWrapper;