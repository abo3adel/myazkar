import { EntitySchema } from 'typeorm';
import { BaseColumnSchema } from './BaseColumnSchema';

export enum Fonts {
    Base = 'Cairo',
    Amiri = 'AmiriQuranColored',
    AmiriUnColored = 'AmiriQuran',
    Hafs = 'UthmanicHafs-Ver16',
    Tajawal = 'Tajawal-Regular',
    Mirza = 'Mirza-Regular',
    Ruqaa = 'ArefRuqaa-Regular',
}

export const ThemeColors = [
    // order by variables.css
    'primary-fall',
    'secondary',
    'tertiary',
    'success',
    'warning',
    'danger',
    'gold',
    'teal',
    'pink',
    'purple',
];

export interface User {
    id: number;
    // user
    azkarCount: number;

    // app
    lang: string;
    fontSize: number;
    fontType: Fonts | string;
    azkarFont: Fonts | string;
    theme: string;
    dark: boolean;

    // sebha
    // sebhaBg: string;
    sebhaAutoNext: boolean;

    // control
    sound: boolean;
    volume: number;
    vibration: boolean;
    hardKeys: boolean;
    touch: boolean;
    keyboard: boolean; // desctop-only

    // azkar
    enabled: boolean;
    morning: string;
    night: string;
    notifyCount: number;
    autoHide: boolean; // desctop-only
}

export enum UserTheme {
    Base = 'base',
    DevColored = 'dev-colored',
    Dev = 'dev',
    SlideColored = 'slide-colored',
    Slide = 'slide',
}

export const UserEntity = new EntitySchema<User>({
    name: 'user',
    tableName: 'user_settings',
    columns: {
        ...BaseColumnSchema,
        // user
        azkarCount: {
            type: Number,
            unsigned: true,
            default: 0,
        },

        // app
        lang: {
            type: String,
            default: 'ar',
        },
        fontSize: {
            type: Number,
            unsigned: true,
            default: 1,
        },
        fontType: {
            type: String,
            default: Fonts.Base,
        },
        azkarFont: {
            type: String,
            default: Fonts.Amiri,
        },
        theme: {
            type: String,
            length: 10,
            default: ThemeColors[0], // primary
        },
        dark: {
            type: Boolean,
            default: false,
        },

        // sebha
        sebhaAutoNext: {
            type: Boolean,
            default: true,
        },

        // control
        sound: {
            type: Boolean,
            default: false,
        },
        volume: {
            type: Number,
            default: 0.5,
            unsigned: true,
        },
        vibration: {
            type: Boolean,
            default: true,
        },
        hardKeys: {
            type: Boolean,
            default: false,
        },
        touch: {
            type: Boolean,
            default: true,
        },
        keyboard: {
            type: Boolean,
            default: true,
        },

        // azkar - notify
        enabled: {
            type: Boolean,
            default: true,
        },
        morning: {
            type: String,
            nullable: true,
            default: '2021-02-22T06:30:46.789',
        },
        night: {
            type: String,
            nullable: true,
            default: '2021-02-22T17:30:46.789',
        },
        notifyCount: {
            type: String,
            nullable: true,
            default: 5,
        },
        autoHide: {
            type: Boolean,
            default: true,
        },
    },
});
