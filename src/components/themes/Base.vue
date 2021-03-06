<template>
    <ion-item-sliding v-if="z.count > 0" class="my-2">
        <ion-item-options side="start">
            <ion-item-option
                color="primary"
                @click="$emit('share', { body: z.body })"
            >
                <ion-icon slot="start" :icon="shareSocialOutline"></ion-icon>
                <ion-label class="hidden sm:inline-block">
                    {{ $t('show.item.share') }}
                </ion-label>
            </ion-item-option>
            <ion-item-option
                color="tertiary"
                @click="$emit('addToSebha', { zikr: z })"
            >
                <ion-icon slot="start" :icon="sendOutline"></ion-icon>
                <ion-label class="hidden sm:inline-block">
                    {{ $t('show.item.addSebha') }}
                </ion-label>
            </ion-item-option>
        </ion-item-options>
        <ion-item
            @click="
                z.count--;
                $emit('decree', z.count, z.id);
            "
            style="font-family: inherit"
            class="select-none hover:cursor-pointer ion-activatable ripple-parent"
            :color="zinx % 2 == 0 ? 'light' : ''"
            dir="rtl"
        >
            <ion-label
                style="white-space: break-spaces;overflow-wrap: break-word;text-align: justify"
            >
                <p
                    class="text-sm text-primary-600"
                    :style="`color: var(--ion-color-${color})`"
                >
                    {{ z.meta }}
                </p>
                <span
                    style="font-family: var(--ion-azkar-font);font-size: var(--azkar-font-size)"
                    v-html="highlite(z.body)"
                ></span>
            </ion-label>
            <ion-ripple-effect></ion-ripple-effect>
            <ion-note
                slot="end"
                :color="color"
                class="px-2 m-0 text-lg font-bold"
            >
                {{ z.count }}
            </ion-note>
            <slot name="order"></slot>
        </ion-item>
        <ion-item-options side="end">
            <ion-item-option
                color="secondary"
                @click="$emit('edit', { zikr: z })"
            >
                <ion-icon slot="start" :icon="createOutline"></ion-icon>
                <ion-label class="hidden sm:inline-block">
                    {{ $t('show.item.edit') }}
                </ion-label>
            </ion-item-option>
            <ion-item-option
                color="danger"
                @click="$emit('remove', { id: z.id })"
            >
                <ion-icon slot="start" :icon="trashBinOutline"></ion-icon>
                <ion-label class="hidden sm:inline-block">
                    {{ $t('show.item.del') }}
                </ion-label>
            </ion-item-option>
        </ion-item-options>
    </ion-item-sliding>
</template>
<script lang="ts">
    import { Vue, Options, prop } from 'vue-class-component';
    import {
        IonLabel,
        IonRippleEffect,
        IonItemSliding,
        IonItemOptions,
        IonItemOption,
        IonNote,
        IonIcon,
        IonItem,
    } from '@ionic/vue';
    import {
        shareSocialOutline,
        trashBinOutline,
        createOutline,
        sendOutline,
    } from 'ionicons/icons';
    import { EmitsList, Props as Abstract, highliteText } from './Abstract';

    class Props extends Abstract {
        zinx = prop<number>({ required: true });
    }

    @Options({
        components: {
            IonItemSliding,
            IonItemOptions,
            IonItemOption,
            IonLabel,
            IonIcon,
            IonNote,
            IonRippleEffect,
            IonItem,
        },
        emits: EmitsList,
    })
    export default class BaseTheme extends Vue.with(Props) {
        shareSocialOutline = shareSocialOutline;
        trashBinOutline = trashBinOutline;
        createOutline = createOutline;
        sendOutline = sendOutline;

        highlite(txt: string) {
            return highliteText(txt, '', this.color);
        }
    }
</script>
