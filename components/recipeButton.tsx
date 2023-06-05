

interface ButtonProps {
  onToggle: () => void;
}

export default function RecipeButton = ({ onToggle }: ButtonProps) => {
  const handleClick = () => {
    onToggle();
  };

  return <button onClick={handleClick}>Toggle Details</button>;
};

