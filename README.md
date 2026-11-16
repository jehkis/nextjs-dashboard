# Acme Dashboard – Next.js App Router

Laurean kurssin TO00CD51-3001 projektitehtävä (React ja Next.js). Sovellus on rakennettu
[Next.js Learn -kurssin](https://nextjs.org/learn/dashboard-app) pohjalta: yksinkertaistettu
taloushallinnon kojelauta, jossa voi hallita laskuja.

**Julkaistu sovellus:** https://nextjs-dashboard-rose-zeta-80.vercel.app

Testitunnukset: `user@nextmail.com` / `123456`

## Ominaisuudet

- Julkinen etusivu ja kirjautumissivu
- Kirjautumisella suojattu kojelauta (NextAuth.js, Credentials + bcrypt, middleware)
- Kojelaudan yhteenvetokortit, tulokaavio ja viimeisimmät laskut, striimattuna Suspensella
- Laskujen haku, sivutus, luonti, muokkaus ja poisto (Server Actions)
- Asiakaslista haulla
- Palvelinpuolen validointi (Zod) ja saavutettavat virheilmoitukset (`aria-describedby`, `aria-live`)
- Virheenkäsittely (`error.tsx`, `not-found.tsx`) ja metatiedot

## Tekniikat

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, PostgreSQL (Neon), NextAuth.js v5,
Zod, Vercel.

## Oppaan ulkopuoliset muutokset

- Kojelauta renderöidään dynaamisesti (`force-dynamic`), jotta data ei jää build-hetken tilaan.
- Summat pyöristetään sentteihin (`Math.round`), koska esim. 19.99 × 100 ei ole kokonaisluku.
- Tulokaavion kuukaudet järjestetään kalenterijärjestykseen SQL:ssä.
- Muokkaussivu palauttaa 404:n myös virheelliselle (ei-UUID) tunnisteelle.
- Kirjautumislomakkeen `callbackUrl` luetaan palvelimella, joten lomake toimii ilman JavaScriptiä.
- `/seed`-reitti on suljettu tuotannossa, ja taulut täytetään peräkkäin.
- Asiakassivu toteutettu valmiilla taulukkokomponentilla.
- Riippuvuudet lukittu ja päivitetty (mm. next-auth ja bcrypt tunnettujen haavoittuvuuksien takia).

## Paikallinen kehitys

```bash
npm install
npx vercel env pull .env   # tietokannan muuttujat Vercelistä
echo 'AUTH_SECRET="'"$(openssl rand -base64 32)"'"' >> .env
npm run dev
```

Tyhjän tietokannan voi täyttää kehityspalvelimessa avaamalla `http://localhost:3000/seed`.
