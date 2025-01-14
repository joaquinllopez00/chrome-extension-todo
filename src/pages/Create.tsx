import { FaPlus } from 'react-icons/fa6';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';
import { createItem } from '../services/db/items';

function Create() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className='space-y-2'>
      <div className='bg-gray-700 rounded-md p-2 shadow'>
        <h1 className='text-lg font-bold text-white'>Create Item</h1>
        <div className='flex flex-col mt-2 gap-1'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-1 items-end'>
            <Input
              hasLabel
              label='Name'
              name='name'
              placeholder='title'
              id='name'
            />
            <TextArea
              hasLabel
              label='Description'
              name='description'
              placeholder='description'
              id='description'
            />
            <button
              type='submit'
              className='text-gray-800 w-15 bg-gray-200 border border-1 border-gray-600 rounded-md p-1 pr-2 flex items-center gap-1 hover:bg-gray-300'>
              Create
              <FaPlus size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
