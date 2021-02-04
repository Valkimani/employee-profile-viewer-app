import React from 'react';
import "../styles/PageLoad.css";

class PageLoad extends React.Component {
    render (){
        return(
             
            <div className="pagecontent">
            
            <div className="pageload">
                <div className="c0 c1 c2 c3 c4 c5 c6 c7 c8 c9">
                    {this.props.loadBar >= 0 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
                <div className="c1 c2 c3 c4 c5 c6 c7 c8 c9">
                    {this.props.pageloadBar >= 1 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
                <div className="c2 c3 c4 c5 c6 c7 c8 c9">
                    {this.props.pageloadBar >= 2 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
                <div className="c3 c4 c5 c6 c7 c8 c9">
                    {this.props.pageloadBar >= 3 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
                <div className="c4 c5 c6 c7 c8 c9">
                    {this.props.pageloadBar >= 4 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
                <div className="c5 c6 c7 c8 c9">
                    {this.props.pageloadBar >= 5 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
                <div className="c6 c7 c8 c9">
                    {this.props.pageloadBar >= 6 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
                <div className="c7 c8 c9">
                    {this.props.pageloadBar >= 7 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
                <div className="c8 c9">
                    {this.props.pageloadBar >= 8 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
                <div className="c9">
                    {this.props.pageloadBar >= 9 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                </div>
            </div>
        </div>
    );
        }
};

export default PageLoad;