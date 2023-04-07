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
  CheckboxField,
  FormItem,
  FormButton,
  CheckboxGroup,
} from "./JoinTeamForm.styled";

const JoinTeamForm = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    role: Yup.array().required("Role is required"),
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
            <p>Role*</p>
            <CheckboxGroup>
              <label>
                <CheckboxField
                  name="role"
                  type="checkbox"
                  {...register("role")}
                  value="Fullstack"
                />
                Fullstack
              </label>
              <label>
                <CheckboxField
                  name="role"
                  type="checkbox"
                  {...register("role")}
                  value="Frontend"
                />
                Frontend
              </label>
              <label>
                <CheckboxField
                  name="role"
                  type="checkbox"
                  {...register("role")}
                  value="Backend"
                />
                Backend
              </label>
              <label>
                <CheckboxField
                  name="role"
                  type="checkbox"
                  {...register("role")}
                  value="UX/UI designer"
                />
                UX/UI designer
              </label>
              <label>
                <CheckboxField
                  name="role"
                  type="checkbox"
                  {...register("role")}
                  value="QA"
                />
                QA
              </label>
              <label>
                <CheckboxField
                  name="role"
                  type="checkbox"
                  {...register("role")}
                  value="Project manager"
                />
                Project manager
              </label>
            </CheckboxGroup>
          </FormItem>
          {/* <FormItem>
            <label>Role*</label>
            <FormFieldSelect
              // name="role"
              {...register("role")}
            >
              <option value=""></option>
              <option value="Fullstack">Fullstack</option>
              <option value="UX/UI designer">UX/UI designer</option>
              <option value="Project manager">Project manager</option>
              <option value="QA">QA</option>
            </FormFieldSelect>
          </FormItem> */}
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
