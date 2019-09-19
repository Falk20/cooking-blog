import React from 'react';

class CookingHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <headers className="cooking-header">
                <ul>
                    <li>Home</li>
                    <li>Recipe</li>
                    <li>Login</li>
                </ul>
            </headers>
        );
    }
}

export default CookingHeader;