
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ProductCard = ({ title, description, icon, link }: ProductCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="bg-wm4-background border border-wm4-text/20 rounded-xl p-6 card-hover">
        <div className="text-wm4-orange mb-4 flex justify-center">{icon}</div>
        <h3 className="text-wm4-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-wm4-text">{description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
