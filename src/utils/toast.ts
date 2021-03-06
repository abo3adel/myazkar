import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

export default function toast(
    text: string,
    duration: 'short' | 'long' = 'short',
    position: 'center' | 'bottom' | 'top' = 'bottom'
) {
    Toast.show({text, duration, position});
}
