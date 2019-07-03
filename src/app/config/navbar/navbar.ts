import { iMenu } from "../../helper/interfaces/navbar/iMenu";
import { iDropdownItem } from 'src/app/helper/interfaces/navbar/iDropdownItem';

export const NavbarMenuConfiguration: iMenu[] = [
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

export const NavbarDropdownItemRaidBuilds: iDropdownItem[] = [
    {
        name: 'Elementalist',
        iconUrl: './assets/icons/elementalist-flat.png',

    },
    {
        name: 'Mesmer',
        iconUrl: './assets/icons/mesmer-flat.png',
    },
    {
        name: 'Necromancer',
        iconUrl: './assets/icons/necromancer-flat.png',
    },
    {
        name: 'Engineer',
        iconUrl: './assets/icons/engineer-flat.png',
    },
    {
        name: 'Ranger',
        iconUrl: './assets/icons/ranger-flat.png',
    },
    {
        name: 'Thief',
        iconUrl: './assets/icons/thief-flat.png',
    },
    {
        name: 'Guardian',
        iconUrl: './assets/icons/guardian-flat.png',
    },
    {
        name: 'Revenant',
        iconUrl: './assets/icons/revenant-flat.png',
    },
    {
        name: 'Warrior',
        iconUrl: './assets/icons/warrior-flat.png',
    }
]