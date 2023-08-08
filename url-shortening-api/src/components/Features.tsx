import Card from '../components/Card';

const cardContent = [
  {
    icon: 'src/assets/icon-brand-recognition.svg',
    title: 'Brand Recognition',
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
  },
  {
    icon: 'src/assets/icon-detailed-records.svg',
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    icon: 'src/assets/icon-fully-customizable.svg',
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

const Features = () => {
  return (
    <section>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      {cardContent.map((card) => (
        <Card {...card} />
      ))}
    </section>
  );
};

export default Features;
