import { useForm } from "react-hook-form";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSSE } from "use-sse";
import {
  FormContainer,
  Form,
  FormField,
  FormFieldSelect,
  FormItem,
  FormButton,
} from "./JoinTeamForm.styled";

const JoinTeamForm = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    stack: Yup.string().required("Stack is required"),
    photoUrl: Yup.string(),
    isAllowed: Yup.bool(),
    portfolio: Yup.array(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const [newTeamMember, setNewTeamMember] = useState({});
  const url = new URL("http://localhost:3000/api/team");

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <FormItem>
            <label>First Name*</label>
            <FormField
              // name="firstName"
              type="text"
              {...register("firstName")}
            />
          </FormItem>
          <FormItem>
            <label>Last Name*</label>
            <FormField
              // name="lastName"
              type="text"
              {...register("lastName")}
            />
          </FormItem>
          <FormItem>
            <label>Email*</label>
            <FormField
              // name="lastName"
              type="text"
              {...register("email")}
            />
          </FormItem>
          <FormItem>
            <label>Stack*</label>
            <FormFieldSelect
              // name="stack"
              {...register("stack")}
            >
              <option value=""></option>
              <option value="Fullstack">Fullstack</option>
              <option value="UX/UI designer">UX/UI designer</option>
              <option value="Project manager">Project manager</option>
              <option value="QA">QA</option>
            </FormFieldSelect>
          </FormItem>
          <FormItem>
            <label>Photo</label>
            <FormField name="photo" type="text" />
          </FormItem>
        </ul>
        <FormButton type="submit">Join team</FormButton>
      </Form>
    </FormContainer>
  );
};

export default JoinTeamForm;
