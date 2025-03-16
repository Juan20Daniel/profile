import { useGetOrientation } from '@hooks/useGetOrientation';
import './main.css';

const Font = ({children}) => {
  const { orientation } = useGetOrientation();
  return (
    <main className={`${orientation}`}>
      {children}
    </main>
  );
}

export default Font;