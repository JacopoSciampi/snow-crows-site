import { iMenu } from "../helper/interfaces/iMenu";

export const navbarMenuConfiguration: iMenu[] = [
    {
        url: 'benchmarks',
        hasDropdown: false,
        dropdownType: null,
        name: 'Benchmarks',
        isActive: false
    },
    {
        url: null,
        hasDropdown: true,
        dropdownType: 1,
        name: 'Raid builds',
        isActive: false
    },
    {
        url: null,
        hasDropdown: true,
        dropdownType: 2,
        name: 'Class guides',
        isActive: false
    },
    {
        url: null,
        hasDropdown: true,
        dropdownType: 3,
        name: 'Fractals',
        isActive: false
    },
    {
        url: null,
        hasDropdown: true,
        dropdownType: 4,
        name: 'Community',
        isActive: false
    },
    {
        url: 'about',
        hasDropdown: false,
        dropdownType: null,
        name: 'About',
        isActive: false
    },
    {
        url: 'recruitment',
        hasDropdown: false,
        dropdownType: null,
        name: 'Recruitment',
        isActive: false
    }
];