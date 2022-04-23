import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { FooterDiv, FormContainer, PasswordDiv } from '../../components/Form/styled';

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
        <MdVisibility className="icon" type="submit" onClick={() => handlePassword('password')} />
      </PasswordDiv>
      {errors.password && <span>{errors.password.message}</span>}
      <PasswordDiv>
        <input
          type={showConfirmPassword ? 'password' : 'text'}
          {...register('passwordConfirm')}
          placeholder="Confirme sua senha"
        />
        <MdVisibility className="icon" type="submit" onClick={() => handlePassword('confirmPassword')} />
      </PasswordDiv>
      {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
      <FooterDiv>
        <Link to="/">Já possuo cadastro</Link>
        <button type="submit">cadastrar</button>
      </FooterDiv>
    </FormContainer>
  );
}
