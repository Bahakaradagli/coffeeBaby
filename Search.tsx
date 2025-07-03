// Search.tsx
import { useSearchParams } from 'react-router-dom';
import cafes from '../public/cafes.json';

function Search() {
  const [params] = useSearchParams();
  const query = params.get('q')?.toLowerCase() ?? '';

  const results = cafes.cafes
    .flatMap(cafe => cafe.locations)
    .filter(loc => loc.name.toLowerCase().includes(query));

  return (
    <div>
      {results.map(loc => (
        <CafeCard key={loc.id} location={loc} />
      ))}
    </div>
  );
}
