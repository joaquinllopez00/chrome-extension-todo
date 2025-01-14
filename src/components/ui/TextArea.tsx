type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasLabel?: boolean;
  label?: string;
  description?: string;
};

export default function TextArea({
  hasLabel = false,
  label,
  description,
  ...props
}: TextAreaProps) {
  return (
    <div className='w-full max-w-sm min-w-[200px]'>
      <div className='flex flex-col gap-1'>
        {hasLabel && (
          <label htmlFor={props.id} className='text-sm font-bold text-gray-300'>
            {label}
          </label>
        )}
        <textarea
          className='text-white w-full px-2 py-1 bg-transparent placeholder:text-slate-400 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
          {...props}
        />
        <p className='flex items-start mt-2 text-xs text-slate-400'>
          {description}
        </p>
      </div>
    </div>
  );
}
