// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://ProfPrivi.github.io',
    base: '/info_reti_prima', // (ricorda lo slash iniziale!)
    integrations: [
        starlight({
            title: 'Appunti di Informatica e reti per la Prima',
            logo: {
                src: './src/assets/greppi_net.png',
            },
            customCss: [
                './src/styles/custom.css',
            ],
            sidebar: [
                // --- PRIMA CATEGORIA ---
                {
                    label: 'Prima',                     
                    collapsed: true,                        
                    items: [
                        { label: 'Introduzione', link: '/Intro/' },
                        // { label: 'Le VLAN e il Tagging', link: '/vlan/' },
                        // { label: 'Il routing', link: '/routing/' },
                    ]
                }, // <-- Virgola importantissima che separa le categorie!

                {
                    label: 'Educazione Civica',
                    collapsed: true,
                    items: [
                        // { label: 'Confini reali e confini virtuali', link: '/civica/' }
                    ]
                } // <-- Niente virgola qui, perché è l'ultima categoria
            ],
        }),
    ],
});