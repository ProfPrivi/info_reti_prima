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
            // 2. Inietta entrambi i componenti personalizzati
            components: {
                ThemeSelect: './src/components/MenuToggle.astro',
                SiteTitle: './src/components/ScrollProgress.astro',
            },
            sidebar: [
                // --- PRIMA CATEGORIA ---
                {
                    label: '⚙️ Architettura & OS',
                    autogenerate: { directory: 'Lezioni/architettura-os' },                     
                    collapsed: true,                        
                    
                }, // <-- Virgola importantissima che separa le categorie!
                // --- SECONDA CATEGORIA ---
                {
                    label: '🧩 Algoritmi & Coding',   
                    autogenerate: { directory: 'Lezioni/algoritmi-coding' },                  
                    collapsed: true,                        
                    /*Qui vengono generate automaticamente le voci di menu per le lezioni di algoritmi e coding, basate sulla struttura delle cartelle e dei file presenti nella directory specificata.*/
                },
                {
                    label: '🐍 Programmazione in Python',   
                    autogenerate: { directory: 'Lezioni/python' },                  
                    collapsed: true,                        
                    /*Qui vengono generate automaticamente le voci di menu per le lezioni di python, basate sulla struttura delle cartelle e dei file presenti nella directory specificata.*/
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