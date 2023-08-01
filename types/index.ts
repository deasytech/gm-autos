import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: string;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
  
  export interface HomeProps {
    searchParams: FilterProps;
  }
  
  export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
  }
  
  export interface OptionProps {
    title: string;
    value: string;
  }
  
  export interface CustomFilterProps<T> {
    options: OptionProps[];
    setFilter: (selected: T) => void;
  }
  
  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (pageNumber: number) => void;
  }