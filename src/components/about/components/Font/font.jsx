import { useGetOrientation } from '@hooks/useGetOrientation';
import { Figure } from '@assets/header/figure';
import './font.css';

const Font = () =>  {
    const { orientation } = useGetOrientation();
    return (
        <>
            <div className='img-font' />
            {orientation === 'horizontal' &&
                <div className='font-left'>
                    <Figure />
                </div>
            }
        </>
    );
}
export default Font;