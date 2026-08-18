export default {
  name: 'announcement',
  title: 'Pranešimas (pvz. atostogos)',
  type: 'document',
  fields: [
    {
      name: 'active',
      title: 'Rodyti pranešimą dabar?',
      type: 'boolean',
      initialValue: false,
      description: 'Įjunk, kai nori, kad pranešimas būtų matomas pagrindiniame puslapyje. Išjunk, kai jo nebereikia.',
    },
    {
      name: 'message',
      title: 'Pranešimo tekstas',
      type: 'text',
      rows: 4,
      description: 'Kiekviena nauja eilutė bus rodoma kaip atskira eilutė puslapyje. Pvz.: "Dėmesio!" naujoje eilutėje "Nuo gruodžio 20d. iki sausio 5d. parduotuvė nedirbs."',
    },
  ],
}
