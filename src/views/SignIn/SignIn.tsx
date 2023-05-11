import { Layout } from 'components/Layout';
import { Button } from 'components/Button';
import { Field } from 'components/Field';
import { Box } from 'components/Box';

export const SignIn: FC = () => {
  return (
    <Layout>
      <Box tw='flex flex-col gap-5 p-8 w-[50%] min-w-[270px] max-w-xl rounded demo-shadow'>
        <Box tw='text-2xl'>Sign In</Box>
        <Box tw='flex flex-col gap-4'>
          <Field.Input label='Username' />
          <Field.Input label='Password' type='password' />
        </Box>
        <Box tw='flex justify-end'>
          <Button tw='w-full'>Login</Button>
        </Box>
      </Box>
    </Layout>
  );
};
