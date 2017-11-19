import React, {Component} from 'react';
import PersonaInfo from './PersonaInfo';
import envConfig from '../../config/environment';

export class ShowcaseTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="showcase-tile">
                <div className="showcase-image"><img width="100%" src={envConfig() + 'images/' + this.props.tileImageURL} /></div>
                <div className="showcase-details">
                    <div className="persona-section">
                        <PersonaInfo imageLocation={this.props.imageLocation} personaName={this.props.personaName} personaRole={this.props.personaRole} />
                    </div>
                    <div className="like-section">
                        <span className={"glyphicon glyphicon-heart" + (this.props.likeStatus === "true" ? "" : "-empty")}></span>
                        <span>{this.props.likeCount}</span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ShowcaseTitle;