import { StatusBar } from 'expo-status-bar';
import { HomeView } from './src/screens/home/home.view';

export default function App() {
  return (
    <>
      <HomeView />
      <StatusBar style="auto" />
    </>
  );
}
