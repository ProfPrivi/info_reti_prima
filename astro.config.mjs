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
                    label: '1.⚙️ Architettura & OS',
                    autogenerate: { directory: 'Lezioni/architettura-os' },                     
                    collapsed: true,                        
                    
                }, // <-- Virgola importantissima che separa le categorie!
                // --- SECONDA CATEGORIA ---
                {
                    label: '2.🧩 Algoritmi & Coding',   
                    autogenerate: { directory: 'Lezioni/algoritmi-coding' },                  
                    collapsed: true,                        
                    /*Qui vengono generate automaticamente le voci di menu per le lezioni di algoritmi e coding, basate sulla struttura delle cartelle e dei file presenti nella directory specificata.*/
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