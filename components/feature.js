import SbEditable from "storyblok-react";

export default class extends React.Component {
  render() {
    return (
      <SbEditable content={this.props.content}>
        <div className="feature util__flex-eq">
          <h2>{this.props.content.name}</h2>
        </div>
      </SbEditable>
    );
  }
}
