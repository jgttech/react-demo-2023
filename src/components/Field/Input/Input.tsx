import { useId } from 'react';
import { Box } from 'components/Box';
import { Input } from 'components/Input';

type FieldInputProps = InferProps<typeof Input> & {
  label: string;
};

export const FieldInput: FC<FieldInputProps> = ({ label, ...props }) => {
  const id = useId();

  return (
    <Box tw='flex flex-col gap-1'>
      <label htmlFor={id} className='text-xs'>
        {label}
      </label>
      <Input {...props} id={id} />
    </Box>
  );
};
