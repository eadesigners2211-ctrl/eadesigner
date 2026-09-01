import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
}
