import { iMenu } from "../../helper/interfaces/iMenu";

export const navbarMenuConfiguration: iMenu[] = [
    {
        url: 'benchmarks',
        hasDropdown: false,
        dropdownType: null,
        name: 'Benchmarks',
        isActive: false,
        animationIndex: null,
    },
    {
        url: null,
        hasDropdown: true,
        dropdownType: 1,
        name: 'Raid builds',
        isActive: false,
        animationIndex: 0,
    },
    {
        url: null,
        hasDropdown: true,
        dropdownType: 2,
        name: 'Class guides',
        isActive: false,
        animationIndex: 1,
    },
    {
        url: null,
        hasDropdown: true,
        dropdownType: 3,
        name: 'Fractals',
        isActive: false,
        animationIndex: 2,
    },
    {
        url: null,
        hasDropdown: true,
        dropdownType: 4,
        name: 'Community',
        isActive: false,
        animationIndex: 3,
    },
    {
        url: 'about',
        hasDropdown: false,
        dropdownType: null,
        name: 'About',
        isActive: false,
        animationIndex: null,
    },
    {
        url: 'recruitment',
        hasDropdown: false,
        dropdownType: null,
        name: 'Recruitment',
        isActive: false,
        animationIndex: null,
    }
];