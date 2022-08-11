import { Input } from './components/Input';
import { Layout } from './components/Layout';
import { Select } from './components/Select';

function App() {
  return (
    <div className="App">
      <Select
        renderContent={[
          { id: '1', value: 'Fale Mais 30' },
          { id: '2', value: 'Fale Mais 120' },
        ]}
      />
      <Input placeholder="hey hey" />
      <Layout></Layout>
    </div>
  );
}

export default App;
