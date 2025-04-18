import DropdownMenuContext from "./DropdownMenuContext";
import { useDropdown } from "@hooks/useDropdown";
const DropdownMenuProvider = ({children}) => {
    const { elementRef, dropdown, open, close } = useDropdown();
    return (
        <DropdownMenuContext.Provider value={{
            elementRef,
            dropdown,
            open,
            close
        }}>
            {children}
        </DropdownMenuContext.Provider>
    );
}
export default DropdownMenuProvider;