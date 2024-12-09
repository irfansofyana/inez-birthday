import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { Message } from './components/Message';
import { Wishes } from './components/Wishes';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Wishes />
      <Gallery />
      <Message />
    </div>
  );
}

export default App;