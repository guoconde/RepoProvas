import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  // const navigate = useNavigate();

  function handlePassword(value) {
    if (value === 'password') {
      if (showPassword) setShowPassword(false);
      else setShowPassword(true);
    } else if (value === 'confirmPassword') {
      if (showConfirmPassword) setShowConfirmPassword(false);
      else setShowConfirmPassword(true);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
      // type="email"
        {...register('email')}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}
      <input
        type={showPassword ? 'password' : 'text'}
        {...register('password')}
        placeholder="Senha"
      />
      {errors.password && <span>{errors.password.message}</span>}
      <button type="submit" onClick={() => handlePassword('password')}>AAAA</button>
      <input
        type={showConfirmPassword ? 'password' : 'text'}
        {...register('passwordConfirm')}
        placeholder="Confirme sua senha"
      />
      <button type="submit" onClick={() => handlePassword('confirmPassword')}>AAAA</button>
      {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
      <div>
        <Link to="/">Já possui cadastro?</Link>
        <input type="submit" value="Cadastrar" />
      </div>
    </form>
  );
}
