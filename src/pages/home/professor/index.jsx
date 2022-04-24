import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Line from '../../../components/Line/Line';
import SelectButton from '../../../components/SelectButton';

export default function Professor({ handlePath, path }) {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  function onSubmit(data) { console.log(data); }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('dataSearch')} placeholder="Pesquise por instrutor" />
        {errors.email && <span>{errors.email.message}</span>}
      </form>
      <Line visibleLabel={false} />
      <DisciplineMain>
        <SelectButton handlePath={handlePath} path={path} />
      </DisciplineMain>
    </div>
  );
}

const DisciplineMain = styled.div`
  width: 80%;

  margin: 0 auto;
`;
