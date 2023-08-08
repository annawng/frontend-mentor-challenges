interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <article>
      <img src={icon} alt='' />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Card;
