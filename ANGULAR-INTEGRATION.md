# Hegazy Metal — Featured Images

The client and project images from the supplied Hegazy Metal company profile are
stored in `src/assets/clients-partners/` and `src/assets/projects-featured/`.
The Angular app displays all 11 partner logos and 13 project images in
`src/app/components/featured/featured.component.ts`.

The component references the files from the Angular assets root, for example:

```html
<img src="assets/clients-partners/concord.png" alt="Concord" />
<img src="assets/projects-featured/egyptian-parliament.png" alt="Egyptian Parliament" />
```

Update the corresponding `partners` or `projects` list in the component when
adding or renaming an image. Project listings do not by themselves specify
Hegazy Metal's exact scope of work on a project.

## TypeScript data

Add these arrays to the component that displays the two sections:

```ts
clientsAndPartners = [
  { name: 'Concord', image: 'concord.png' },
  { name: 'Redcon Construction', image: 'redcon-construction.png' },
  { name: 'Hassan Allam Properties', image: 'hassan-allam-properties.png' },
  { name: 'Rowad Modern Engineering', image: 'rowad-modern-engineering.png' },
  { name: 'Orascom Construction', image: 'orascom-construction.png' },
  { name: 'SIAC', image: 'siac.png' },
  { name: 'HAZ Misr', image: 'haz-misr.png' },
  { name: 'El Hazek Construction', image: 'el-hazek-construction.png' },
  { name: 'Power Control', image: 'power-control.png' },
  { name: 'IVEC Contracting', image: 'ivec-contracting.png' },
  { name: 'TMG', image: 'tmg.png' }
];

featuredProjects = [
  { name: 'Egyptian Parliament', image: 'egyptian-parliament.png' },
  { name: 'Al-Fattah Al-Aleem Mosque, New Administrative Capital', image: 'al-fattah-al-aleem-mosque-new-capital.png' },
  { name: 'New Administrative Capital Opera House', image: 'new-administrative-capital-opera-house.png' },
  { name: 'Wadi El Nile Hospital', image: 'wadi-el-nile-hospital.png' },
  { name: 'Galala University', image: 'galala-university.png' },
  { name: 'New Giza Hospital', image: 'new-giza-hospital.png' },
  { name: 'Al Massa Hotel, New Administrative Capital', image: 'al-massa-hotel-new-administrative-capital.png' },
  { name: 'Al Massa Hotel, El Alamein', image: 'al-massa-hotel-el-alamein.png' },
  { name: 'Smart Village, Assiut', image: 'smart-village-assiut.png' },
  { name: 'Masr Mosque', image: 'masr-mosque.png' },
  { name: 'Grand Egyptian Museum', image: 'grand-egyptian-museum.png' },
  { name: 'Four Seasons Hotel, Madinaty', image: 'four-seasons-hotel-madinaty.png' },
  { name: 'October Gardens Central Train Station', image: 'october-gardens-central-train-station.png' }
];
```

## Angular template

```html
<section class="featured-section">
  <h2>Clients &amp; Partners</h2>
  <div class="clients-grid">
    <div class="client-logo" *ngFor="let client of clientsAndPartners">
      <img
        [src]="'assets/clients-partners/' + client.image"
        [alt]="client.name"
        loading="lazy"
      />
    </div>
  </div>
</section>

<section class="featured-section">
  <h2>Projects Featured in Our Profile</h2>
  <div class="projects-grid">
    <article class="project-card" *ngFor="let project of featuredProjects">
      <img
        [src]="'assets/projects-featured/' + project.image"
        [alt]="project.name"
        loading="lazy"
      />
      <h3>{{ project.name }}</h3>
    </article>
  </div>
</section>
```

## Starter styles (adapt to the project's existing design)

```scss
.featured-section {
  margin: 3rem 0;

  h2 {
    margin-bottom: 1.5rem;
  }
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  align-items: center;
}

.client-logo {
  min-height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #fff;

  img {
    display: block;
    max-width: 100%;
    max-height: 85px;
    object-fit: contain;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.project-card {
  margin: 0;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  h3 {
    margin: 0.75rem 0 0;
    font-size: 1rem;
  }
}
```

## Notes
- 11 client/partner logo images and 13 unique project images are included.
- The New Giza Hospital image appears again on PDF page 10; it is included only once.
- Project names are transcribed from the supplied profile. The profile states that inclusion of a project name does not by itself specify Hegazy Metal's exact scope of work on that project.
- The extracted images retain their source image dimensions and are not artificially upscaled.
