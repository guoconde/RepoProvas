import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { FooterDiv, FormContainer, PasswordDiv } from '../../components/Form/styled';

export default function LoginForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(true);

  function handlePassword() {
    if (showPassword) setShowPassword(false);
    else setShowPassword(true);
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <input
      // type="email"
        {...register('email')}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}
      <PasswordDiv>
        <input
          type={showPassword ? 'password' : 'text'}
          {...register('password')}
          placeholder="Senha"
        />
        <MdVisibility className="icon" type="submit" onClick={() => handlePassword()} />
      </PasswordDiv>
      {errors.password && <span>{errors.password.message}</span>}
      <FooterDiv>
        <Link to="/register">Não possuo cadastro</Link>
        <button type="submit">entrar</button>
      </FooterDiv>
    </FormContainer>
  );
}
