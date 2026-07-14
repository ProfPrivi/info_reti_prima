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
                    label: '1. Architettura & OS',                     
                    collapsed: true,                        
                    items: [
                        { label: "1 Overview", link: '/overview1/' },
                        { label: "1.1 Radici e Turing", link: '/lezione11/' },
                        { label: '1.2 Comunicazione e Linguaggi', link: '/lezione12/' },
                        { label: "1.3 Binario ed Evoluzione dell'Hardware", link: '/lezione13/' },
                        { label: "1.4 Rappresentazione dell'Informazione e Conversioni", link: '/lezione14/' },
                        { label: "1.5 Logica Booleana, Porte e Reti Logiche", link: '/lezione15/' },
                        { label: "1.6 Sistemi Operativi e File System", link: '/lezione16/' },
                        { label: "1 Attività Laboratoriale", link: '/lab1/' },
                        { label: "1 Esercizi Modulo 1", link: '/esmodulo1/' },
                    ]
                }, // <-- Virgola importantissima che separa le categorie!
                // --- SECONDA CATEGORIA ---
                {
                    label: '2. Algoritmi & Coding',                     
                    collapsed: true,                        
                    items: [
                        { label: "2.1 Dal Problema all'Algoritmo ", link: '/lezione21/' },
                    ]
                },
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