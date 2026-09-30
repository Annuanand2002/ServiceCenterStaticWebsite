import PageHero from '../components/PageHero';

const photos = [
  { src: 'https://wetech.co.in/assets/images/g1.png', alt: 'Wetech appliance service visit', shape: 'gallery-tall', caption: 'The care behind the repair' },
  { src: 'https://wetech.co.in/assets/images/g2.png', alt: 'Wetech technician at work', shape: '', caption: 'Careful work, close to home' },
  { src: 'https://wetech.co.in/assets/images/g3.png', alt: 'Home appliance service in progress', shape: 'gallery-wide', caption: 'A little help for the everyday' },
  { src: 'https://wetech.co.in/assets/images/g4.png', alt: 'Appliance repair service detail', shape: '', caption: 'The details matter' },
  { src: 'https://wetech.co.in/assets/images/g5.png', alt: 'Wetech service and repair', shape: 'gallery-tall', caption: 'Getting home back in rhythm' },
  { src: 'https://wetech.co.in/assets/images/g6.png', alt: 'Wetech home appliance care', shape: '', caption: 'Good work, good people' },
];
export default function GalleryPage() {
  return <><PageHero eyebrow="A CLOSER LOOK" title="A little glimpse" accent="of our work." intro="Real moments from the work of keeping everyday homes running smoothly." number="03" />
    <section className="gallery-section page-section"><div className="gallery-intro" data-reveal><p className="eyebrow"><span /> WORKING WITH CARE</p><p>Every home is different. Every repair starts with listening, looking closely, and treating the details with care.</p></div><div className="gallery-grid">{photos.map((photo, i) => <figure className={`gallery-item ${photo.shape}`} key={photo.src} data-reveal><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption><span>0{i + 1} / WETECH</span><strong>{photo.caption}</strong></figcaption></figure>)}</div></section>
  </>;
}
