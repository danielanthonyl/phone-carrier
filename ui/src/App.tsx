import { Text } from './components';
import { Layout } from './components/Layout';

function App() {
  return (
    <div className="App">
      <Text color="black" weight="bold" variant="caption">
        hello world
      </Text>
      <Text color="red" weight="regular" variant="footnote">
        hello world
      </Text>
      <Text color="grey" weight="bold" variant="subhead">
        hello world
      </Text>
      <Text color="green" weight="regular" variant="callout">
        hello world
      </Text>
      <Text color="white" weight="bold" variant="body">
        hello world
      </Text>
      <Text color="black" weight="regular" variant="headline">
        hello world
      </Text>
      <Text color="black" weight="bold" variant="largeTitle">
        hello world
      </Text>
      <Layout></Layout>
    </div>
  );
}

export default App;
