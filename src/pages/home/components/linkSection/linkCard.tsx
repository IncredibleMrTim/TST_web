import { useNavigate } from "react-router-dom";

interface LinkCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export const LinkCard = ({ ...props }: LinkCardProps) => {
  const navigate = useNavigate();
  const { title, description, link, image } = props;

  return (
    <div className="w-full">
      <h2>{title}</h2>
      <div className="max-h-min mb-4">
        <img
          src={image}
          onClick={() => navigate(link)}
          className="cursor-pointer object-cover"
        />
      </div>
      <p>{description}</p>
    </div>
  );
};
