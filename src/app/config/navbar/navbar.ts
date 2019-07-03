import { iMenu } from "../../helper/interfaces/navbar/iMenu";
import { iDropdownItem } from 'src/app/helper/interfaces/navbar/iDropdownItem';

export const NavbarMenuConfiguration: iMenu[] = [
    {
        url: null,
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
        url: null,
        hasDropdown: false,
        dropdownType: null,
        name: 'About',
        isActive: false,
        animationIndex: null,
    },
    {
        url: 'https://snowcrows.typeform.com/to/slCMX4',
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
        url: null,
    },
    {
        name: 'Mesmer',
        iconUrl: './assets/icons/mesmer-flat.png',
        url: null,
    },
    {
        name: 'Necromancer',
        iconUrl: './assets/icons/necromancer-flat.png',
        url: null,
    },
    {
        name: 'Engineer',
        iconUrl: './assets/icons/engineer-flat.png',
        url: null,
    },
    {
        name: 'Ranger',
        iconUrl: './assets/icons/ranger-flat.png',
        url: null,
    },
    {
        name: 'Thief',
        iconUrl: './assets/icons/thief-flat.png',
        url: null,
    },
    {
        name: 'Guardian',
        iconUrl: './assets/icons/guardian-flat.png',
        url: null,
    },
    {
        name: 'Revenant',
        iconUrl: './assets/icons/revenant-flat.png',
        url: null,
    },
    {
        name: 'Warrior',
        iconUrl: './assets/icons/warrior-flat.png',
        url: null,
    }
];

export const NavbarDropdownItemClassGuides: iDropdownItem[] = [
    {
        name: 'Elementalist',
        iconUrl: './assets/icons/elementalist-flat.png',
        url: null,

    },
    {
        name: 'Mesmer',
        iconUrl: './assets/icons/mesmer-flat.png',
        url: null,
    },
    {
        name: 'Necromancer',
        iconUrl: './assets/icons/necromancer-flat.png',
        url: null,
    },
    {
        name: 'Engineer',
        iconUrl: './assets/icons/engineer-flat.png',
        url: null,
    },
    {
        name: 'Ranger',
        iconUrl: './assets/icons/ranger-flat.png',
        url: null,
    },
    {
        name: 'Thief',
        iconUrl: './assets/icons/thief-flat.png',
        url: null,
    },
    {
        name: 'Guardian',
        iconUrl: './assets/icons/guardian-flat.png',
        url: null,
    },
    {
        name: 'Revenant',
        iconUrl: './assets/icons/revenant-flat.png',
        url: null,
    },
    {
        name: 'Warrior',
        iconUrl: './assets/icons/warrior-flat.png',
        url: null,
    }
];

export const NavbarDropdownItemFractals: iDropdownItem[] = [
    {
        name: 'Potions & Sigils',
        iconUrl: null,
        url: null,
    }
];

export const NavbarDropdownItemCommunity: iDropdownItem[] = [
    {
        name: 'Our Public Discord',
        iconUrl: null,
        hasBorderBottom: true,
        externalUrl: 'https://discord.gg/qTs63YH',
    },
    {
        name: 'Raid Training',
        iconUrl: null,
        hasBorderBottom: true,
        url: null
    },
    {
        name: 'ArcDPS',
        iconUrl: null,
        externalUrl: 'https://www.deltaconnected.com/arcdps/',
    },
    {
        name: 'ArcDPS Mechanics Plugin',
        iconUrl: null,
        hasBorderBottom: true,
        externalUrl: 'http://martionlabs.com/arcdps-mechanics-log-plugin/',
    },
    {
        name: 'DPS Report',
        iconUrl: null,
        externalUrl: 'https://dps.report/',
    },
    {
        name: 'Elite Insights Parser',
        iconUrl: null,
        externalUrl: 'https://github.com/baaron4/GW2-Elite-Insights-Parser',
    },
    {
        name: 'GW2 Raidar',
        iconUrl: null,
        externalUrl: 'https://www.gw2raidar.com/',
    },
    {
        name: 'Discord Log Bot',
        iconUrl: null,
        externalUrl: 'https://github.com/aytiel/PHTM-b0t/tree/gw2-uploader',
    }
];