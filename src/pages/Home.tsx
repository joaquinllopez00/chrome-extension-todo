import ItemList from '../components/ItemList';
import { getItems } from '../services/db/items';
import { useAsyncFetch } from '../lib/useAsyncFetch.hook';

function Home() {
  const { data, loading, error } = useAsyncFetch(getItems);

  return (
    <div className='space-y-2'>
      <div className='bg-gray-700 rounded-lg p-2 shadow'>
        {loading ? (
          <span className='progress progress-primary w-full' />
        ) : data ? (
          <ItemList items={data} />
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
