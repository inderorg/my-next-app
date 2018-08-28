import Components from "../components/index";
import Layout from "../components/Layout";
import StoryblokService from "../utils/StoryblokService";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: props.page.data.story.content };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);

    return {
      page: await StoryblokService.get("cdn/stories/home")
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    return (
      <Layout settings={this.props.settings.data.story}>
        {Components(this.state.pageContent)}
      </Layout>
    );
  }
}
