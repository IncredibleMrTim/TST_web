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
    <div className="w-1/3">
      <h3>{title}</h3>
      <div className="max-h-max mb-4">
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
