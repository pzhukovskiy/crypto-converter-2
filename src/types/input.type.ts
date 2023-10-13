export interface InputProps {
    onFilter: (searchText: string) => void; // Define onFilter as a function that takes a string as an argument and returns void
}

export interface InputSelectProps {
    onFilterOptionChange: (option: string) => void;
}