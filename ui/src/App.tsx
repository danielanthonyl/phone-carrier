import { Button } from './components/Button';
import { Input } from './components/Input';
import { Layout } from './components/Layout';
import { Select } from './components/Select';

function App() {
  return (
    <div style={{ background: 'white' }}>
      <Select
        renderContent={[
          { id: '1', value: 'Fale Mais 30' },
          { id: '2', value: 'Fale Mais 120' },
        ]}
      />
      <Input placeholder="hey hey" />
      <Button title="okeyzson" variant="default" />
      <Layout></Layout>
    </div>
  );
}

export default App;
