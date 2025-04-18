import { useGetSizeWindow } from './useGetSizeWindow';
export const useGetOrientation = () => {
    const { width, height } = useGetSizeWindow();

    return {
        orientation: width > height ? 'horizontal' : 'vertical'
    };
}