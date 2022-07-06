import { useForm, SubmitHandler} from 'react-hook-form';
import Input from '../components/Input';
import { Container, Form, FormWrapper } from '../styles/pages/signin';
import { } from "react-icons/fi";

interface ISignInData {
    email: string,
    password: string,
}

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<ISignInData>()
    const onSubmit: SubmitHandler<ISignInData> = data => console.log(data)

    return(
        <Container>
            <FormWrapper>
                <h1>Seja bem vindo!</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input id="email" type='email' {...register("email", {required: true})} />
                    </div>

                    <div>
                        <label htmlFor="password">Senha</label>
                        <Input id="password" type='password' {...register("password", {required: true})}/>
                    </div>

                    <Input type='submit' id="submit" />
                </Form>
            </FormWrapper>
        </Container>
    )
}
