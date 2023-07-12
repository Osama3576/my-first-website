/* eslint-disable no-unused-vars */
import { useMutation } from '@tanstack/react-query';
import { login } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: usr => {
      navigate('/');
    },
    onError: err => {
      console.log('error', err);
      toast.error('Email or password is incorrect');
    },
  });

  return { mutate, isLoading };
}
// { mutate, isLoading, isSuccess }
