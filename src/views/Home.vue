<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary" class="haveBg">
                <ion-title>{{ $t('name') }}</ion-title>
                <ion-label slot="end" class="mx-1">
                    {{ hijir }}
                </ion-label>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-header collapse="condense">
                <ion-title>{{ $t('name') }}</ion-title>
            </ion-header>
            <ion-toolbar :color="bg">
                <ion-buttons slot="start">
                    <ion-button
                        class="text-white"
                        @click.prevent="$router.replace('/about')"
                    >
                        <ion-icon
                            :icon="informationCircleOutline"
                            slot="start"
                        />
                        <ion-label class="hidden sm:inline-block">{{
                            $t('home.btn.about')
                        }}</ion-label>
                    </ion-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button
                        class="text-white"
                        @click.prevent="$router.replace('/settings')"
                    >
                        <ion-icon :icon="cogOutline" slot="start" />
                        <ion-label class="hidden sm:inline-block">
                            {{ $t('home.btn.settings') }}
                        </ion-label>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
            <div
                class="pb-8"
                :style="`background-color: var(--ion-color-${bg})`"
            >
                <h1
                    style="font-family: 'ArefRuqaa-Regular';"
                    class="text-6xl text-center text-white"
                >
                    أذكارى
                </h1>
                <p
                    class="pt-2 text-center text-gray-200"
                    style="font-family: 'ArefRuqaa-Regular';"
                >
                    عطر فمك بذكر اللّه
                </p>
            </div>
            <quran :azkar-font="azkarFont" />

            <!-- <hadith :azkar-font="azkarFont" /> -->

            <du3a :azkar-font="azkarFont" />
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonInput,
        IonButtons,
        IonLabel,
        IonIcon,
        // isPlatform,
    } from '@ionic/vue';
    import { Options, Vue } from 'vue-class-component';
    import { cogOutline, informationCircleOutline } from 'ionicons/icons';
    import getHijirDate from '@/common/getHijirDate';
    import TxtCard from '@/components/TxtCard.vue';
    import Quran from '@/components/home/Quran.vue';
    // import Hadith from '@/components/home/Hadith.vue';
    import Du3a from '@/components/home/Du3a.vue';

    import { Fonts, UserEntity } from '@/schema/UserEntity';
    import db from '@/utils/db';

    @Options({
        components: {
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
            IonButton,
            IonInput,
            IonButtons,
            IonLabel,
            IonIcon,
            TxtCard,
            Quran,
            // Hadith,
            Du3a,
        },
        inject: ['lang'],
    })
    export default class Home extends Vue {
        hijir = '';
        bg = 'gold';
        azkarFont: string = Fonts.Amiri;

        cogOutline = cogOutline;
        informationCircleOutline = informationCircleOutline;

        async mounted() {
            this.azkarFont =
                (
                    await (await db())
                        .createQueryBuilder(UserEntity, 'user_ent')
                        .select(['azkarFont'])
                        .execute()
                )[0]?.azkarFont ?? this.azkarFont;

            // @ts-ignore
            this.hijir = getHijirDate(this.lang);

            const hour = new Date().getHours();

            if (hour >= 7 && hour < 12) {
                this.bg = 'warning';
            } else if (hour >= 12 && hour <= 17) {
                this.bg = 'gold';
            } else if (hour >= 18) {
                this.bg = 'tertiary';
            } else {
                this.bg = 'purple';
            }
        }
    }
</script>
<style></style>
