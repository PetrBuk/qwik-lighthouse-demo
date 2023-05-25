import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CheckList from '~/components/ui/CheckList';

import Features from '~/components/ui/Features';
import LandingHeader from '~/components/ui/LandingHeader';

const features = [
  {
    title: 'First contentful paint',
    description: 'Čas po spuštění, kdy uživatel vidí první obsah stránky.',
    icon: 'output',
  },
  {
    title: 'Largest contentful paint',
    description:
      'Čas od spuštění, kdy byl pravděpodobně načten hlavní obsah stránky.',
    icon: 'view_timeline',
  },
  {
    title: 'Time to interact',
    description:
      'Čas od spuštění kdy stránka bude reagovat na vstup uživatele.',
    icon: 'swipe_left',
  },
  {
    title: 'Performance',
    description: 'Celkové hodnocení výkonnosti v analytickém nástroji.',
    icon: 'rocket_launch',
  },
]

const nextCheckList = [
  {
    title: 'Nested Routing',
    description:
      'Vnořené routování pro snadná a přehledné file-based routování.',
  },
  {
    title: 'Full-stack React aplikace jednoduše',
    description:
      'Next.js má všechny nástroje potřebné pro tvorbu rychlého webu.',
  },
  {
    title: 'Client a Server Rendering',
    description:
      'Flexibilní možnosti renderování a cachování, včetně Incremental Static Regeneration (ISR).',
  },
]

const astroCheckList = [
  {
    title: 'Zaměřeno na obsah',
    description:
      'Astro bylo navrženo pro váš obsah. Získejte data z kteréhokoliv CMS a pracujte s Markdown a MDX API.',
  },
  {
    title: 'Component Islands',
    description:
      'Nová webová architektura pro vytváření rychlejších webových stran.',
  },
  {
    title: 'Žádný JavaScript',
    description:
      'Astro se snaží minimalizovat stahování JS souborů, dokud to není nezbytně nutné.',
  },
]

const qwikCheckList = [
  {
    title: 'Univerzální použití',
    description:
      'Qwik může být použit pro vytvoření jakéhokoliv typu webu či webové aplikace. ',
  },
  {
    title: 'Okamžité načtení',
    description:
      'Narozdíl od ostatních frameworků, Qwik je přerušitelné, což znamená, že že Qwik aplikace nevyžadují žádnou hydrataci.',
  },
  {
    title: 'Optimalizováno pro rychlost',
    description:
      'Qwik má bezprecedentní výkonnost. Nabízí načtení pod vteřinu i na mobilních zařízeních. Toho dosahuje načítáním čístých HTML souborů.',
  },
]

export default component$(() => {
  return (
    <div class="flex flex-col items-center justify-center py-2">
      <LandingHeader />
      <Features
        header={{
          title: 'Srovnávaná kritéria',
          subtitle:
            'Kritéria slouži ke srovnání rychlosti vykreslování stránky v prohlížeči',
        }}
        items={features}
      />
      <CheckList
        header={{
          title: 'Srovnávané frameworky',
          subtitle: 'V této práci srovnáme frameworky Next.js, Astro a Qwik',
        }}
        overview="Prvním srovnávaným frameworkem je Next.js, který používají některé z největších světových společností, vám umožňuje vytvářet kompletní webové aplikace s nejnověšími funkcemi Reactu."
        items={nextCheckList}
        image={{ src: '/images/camera-front.jpg', alt: 'Fotoaparát' }}
      />
      <CheckList
        overview="Dalším srovnávaným frameworkem je Astro, all-in-one framework navržený pro rychlost. Nahrávejte jakýkoliv obsah s podporou najoblíbenějších UI komponent a knihoven."
        items={astroCheckList}
        isReversed
        image={{ src: '/images/camera-back.jpg', alt: 'Fotoaparát zezadu' }}
      />
      <CheckList
        overview="Posledním srovnávaným frameworkem je Qwik, nový druh webového frameworku, který dokáže zajistit okamžité načítání webových aplikací jakékoli velikosti nebo složitosti."
        items={qwikCheckList}
        image={{ src: '/images/gas.jpg', alt: 'Stanice' }}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Srovnání Next.js, Astro a Qwik',
};
