import { useForm, SubmitHandler} from 'react-hook-form';
import Input from '../components/Input';
import { Form } from '../styles/pages/signin';

interface ISignInData {
    email: string,
    password: string,
}

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<ISignInData>()
    const onSubmit: SubmitHandler<ISignInData> = data => console.log(data)

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Seja bem vindo!</h1>
            <Input type='email' placeholder='Email' {...register("email", {required: true})} />
            {errors.password && <span>This field is required</span>}
            <Input type='password' placeholder='senha' {...register("password", {required: true})}/>
            {errors.password && <span>This field is required</span>}
            <Input type='submit' />
        </Form>
    )
}
