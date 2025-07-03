// CafeDetail.tsx
import { useParams } from 'react-router-dom';
import cafes from './cafes.json';

export default function CafeDetail() {
  const { cafeId, branchId, drinkId } = useParams();

  const cafe = cafes.cafes.find(c => c.id === cafeId);
  const branch = cafe?.locations.find(b => b.id === branchId);
  const drink = branch?.drinks.find(d => d.id === drinkId);

  if (!drink) return <p>Ürün bulunamadı</p>;

  return (
    <div>
      <h2>{drink.name}</h2>
      <img src={drink.image} alt={drink.name} />
      <p>{drink.description}</p>
      <p>❤️ {drink.likes} beğeni</p>
    </div>
  );
}
